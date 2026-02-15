import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import jsPDF from 'jspdf'
import './App.css'

const PDF_UNSAFE_LANGUAGE_CODES = [
  // Indic scripts
  'hi', 'mr', 'bn', 'ta', 'te', 'kn', 'ml', 'gu', 'pa', 'or',
  // RTL scripts
  'ar', 'fa', 'ur', 'he',
  // Other complex scripts
  'th', 'km', 'my', 'lo', 'si'
]

// Same behaviour local vs online: relative /api by default; set VITE_API_BASE_URL when frontend and backend are on different origins
const getApiBase = () => (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE_URL) ? import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '') : ''

function App() {
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [transcript, setTranscript] = useState('')
  const [segments, setSegments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [videoInfo, setVideoInfo] = useState(null)
  const [videoMetadata, setVideoMetadata] = useState(null)
  const [copySuccess, setCopySuccess] = useState(false)
  const [includeTimestamps, setIncludeTimestamps] = useState(false)
  const [timestampedTranscript, setTimestampedTranscript] = useState('')
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)
  const [isThumbnailDropdownOpen, setIsThumbnailDropdownOpen] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileSiteKey, setTurnstileSiteKey] = useState(null) // from /api/config so online works without build-time env

  const transcriptRef = useRef(null)
  const thumbnailDropdownRef = useRef(null)
  const downloadDropdownRef = useRef(null)
  const turnstileWidgetId = useRef(null)
  const turnstileContainerRef = useRef(null)

  // Turnstile only on production (not on localhost); site key from build env OR from backend /api/config
  const isLocalhost = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || turnstileSiteKey
  const turnstileEnabled = !isLocalhost && !!siteKey

  // Fetch Turnstile site key from backend when online (so DO doesn't need VITE_ env at build time)
  useEffect(() => {
    if (isLocalhost) return
    if (import.meta.env.VITE_TURNSTILE_SITE_KEY) return
    fetch(`${getApiBase()}/api/config`)
      .then((r) => r.ok ? r.json() : {})
      .then((d) => { if (d && d.turnstileSiteKey) setTurnstileSiteKey(d.turnstileSiteKey) })
      .catch(() => {})
  }, [isLocalhost])

  useEffect(() => {
    if (!turnstileEnabled || !siteKey) return

    const loadTurnstile = () => {
      if (window.turnstile && turnstileContainerRef.current) {
        try {
          turnstileWidgetId.current = window.turnstile.render(turnstileContainerRef.current, {
            sitekey: siteKey,
            callback: (token) => {
              setTurnstileToken(token)
            },
            'error-callback': () => {
              setError('Verification failed. Please refresh the page.')
            },
          })
        } catch (err) {
          console.error('Turnstile error:', err)
        }
      }
    }

    if (window.turnstile) {
      loadTurnstile()
    } else {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
      script.async = true
      script.defer = true
      script.onload = loadTurnstile
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [turnstileEnabled, siteKey])

  useEffect(() => {
    if (!isThumbnailDropdownOpen) return
    const close = (e) => {
      if (thumbnailDropdownRef.current && !thumbnailDropdownRef.current.contains(e.target)) {
        setIsThumbnailDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [isThumbnailDropdownOpen])

  useEffect(() => {
    if (!isDownloadOpen) return
    const close = (e) => {
      if (downloadDropdownRef.current && !downloadDropdownRef.current.contains(e.target)) {
        setIsDownloadOpen(false)
      }
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [isDownloadOpen])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Only require Turnstile when enabled (production with site key; not on localhost)
    if (turnstileEnabled && !turnstileToken) {
      setError('Please complete the verification')
      return
    }

    setIsLoading(true)
    setError('')
    setTranscript('')
    setSegments([])
    setVideoInfo(null)
    setVideoMetadata(null)

    try {
      const response = await fetch(`${getApiBase()}/api/transcript`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          youtubeUrl,
          ...(turnstileToken && { turnstileToken }),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch transcript')
      }

      if (data.error) {
        setError(data.error);
        return;
      }

      setTranscript(data.transcript);
      setTimestampedTranscript(data.timestamped_transcript || '');
      setSegments(data.segments || []);
      setVideoInfo({
        videoId: data.video_id,
        language: data.language,
        languageCode: data.language_code,
        isGenerated: data.is_generated
      });
      setVideoMetadata(data.video_metadata || null);
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current)
      }
      
    } catch (err) {
      console.error('Error details:', err);
      setError(`Failed to fetch transcript: ${err.message}`)
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current)
        setTurnstileToken('')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      const textToCopy = includeTimestamps ? timestampedTranscript : transcript
      await navigator.clipboard.writeText(textToCopy)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      setError('Failed to copy to clipboard')
    }
  }

  const getCurrentTranscriptText = () => {
    return includeTimestamps ? timestampedTranscript : transcript
  }

  const getBaseFileName = (suffix = '') => {
    const videoId = videoInfo?.videoId || 'transcript'
    return `youtube-transcript-${videoId}${suffix ? `-${suffix}` : ''}`
  }

  const downloadAsText = () => {
    const text = getCurrentTranscriptText()
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${getBaseFileName()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const downloadAsPdf = () => {
    const doc = new jsPDF()
    const text = getCurrentTranscriptText()
    const lines = doc.splitTextToSize(text, 180)
    
    doc.text(lines, 15, 15)
    doc.save(`${getBaseFileName()}.pdf`)
  }

  const downloadAsDocx = () => {
    const text = getCurrentTranscriptText()
    const header = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
      '<w:body>'
    
    const paragraphs = text.split('\n').map(line => 
      `<w:p><w:r><w:t>${line}</w:t></w:r></w:p>`
    ).join('')
    
    const footer = '</w:body></w:document>'
    const content = header + paragraphs + footer
    
    const blob = new Blob([content], { 
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${getBaseFileName()}.docx`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const buildCsvContent = () => {
    if (!segments || segments.length === 0) {
      return 'Start,End,Duration,Text\n'
    }

    const rows = segments.map(seg => {
      const start = seg.start || 0
      const duration = seg.duration || 0
      const end = start + duration
      const text = (seg.text || '').replace(/"/g, '""')
      
      return `${start.toFixed(2)},${end.toFixed(2)},${duration.toFixed(2)},"${text}"`
    })

    return 'Start,End,Duration,Text\n' + rows.join('\n')
  }

  const formatTimeForSubtitles = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)
    const ms = Math.floor((seconds % 1) * 1000)
    
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(ms).padStart(3, '0')}`
  }

  const buildSrtContent = () => {
    if (!segments || segments.length === 0) {
      return ''
    }

    return segments.map((seg, index) => {
      const start = seg.start || 0
      const duration = seg.duration || 0
      const end = start + duration
      const text = seg.text || ''
      
      return `${index + 1}\n${formatTimeForSubtitles(start)} --> ${formatTimeForSubtitles(end)}\n${text}\n`
    }).join('\n')
  }

  const downloadAsSrt = () => {
    const content = buildSrtContent()
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${getBaseFileName()}.srt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const buildVttContent = () => {
    if (!segments || segments.length === 0) {
      return 'WEBVTT\n\n'
    }

    const vttTime = (seconds) => {
      const hrs = Math.floor(seconds / 3600)
      const mins = Math.floor((seconds % 3600) / 60)
      const secs = Math.floor(seconds % 60)
      const ms = Math.floor((seconds % 1) * 1000)
      
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(ms).padStart(3, '0')}`
    }

    const cues = segments.map((seg, index) => {
      const start = seg.start || 0
      const duration = seg.duration || 0
      const end = start + duration
      const text = seg.text || ''
      
      return `${index + 1}\n${vttTime(start)} --> ${vttTime(end)}\n${text}\n`
    }).join('\n')

    return 'WEBVTT\n\n' + cues
  }

  const downloadAsVtt = () => {
    const content = buildVttContent()
    const blob = new Blob([content], { type: 'text/vtt;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${getBaseFileName()}.vtt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const downloadAsCsv = () => {
    const content = buildCsvContent()
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${getBaseFileName()}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // YouTube thumbnail qualities: https://i.ytimg.com/vi/VIDEO_ID/QUALITY.jpg
  const THUMBNAIL_QUALITIES = [
    { id: 'maxresdefault', label: 'Max (1280×720)' },
    { id: 'sddefault', label: 'High (640×480)' },
    { id: 'hqdefault', label: 'Medium (480×360)' },
    { id: 'mqdefault', label: 'Low (320×180)' },
    { id: 'default', label: 'Smallest (120×90)' },
  ]

  const getThumbnailUrl = (quality) => {
    const id = videoInfo?.videoId
    if (!id) return videoMetadata?.thumbnail_url || ''
    return `https://i.ytimg.com/vi/${id}/${quality}.jpg`
  }

  const downloadThumbnail = async (quality = 'hqdefault') => {
    const url = getThumbnailUrl(quality)
    if (!url) return
    const fileName = `${videoInfo?.videoId || 'thumbnail'}-${quality}.jpg`
    try {
      const res = await fetch(url, { mode: 'cors' })
      if (!res.ok) throw new Error('Failed to fetch')
      const blob = await res.blob()
      const objectUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = objectUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(objectUrl)
    } catch {
      window.open(url, '_blank', 'noopener')
    }
  }

  const isPdfSafe = () => {
    const langCode = videoInfo?.languageCode || videoInfo?.language || ''
    return !PDF_UNSAFE_LANGUAGE_CODES.includes(langCode.toLowerCase())
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 cursor-pointer hover:opacity-90 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YouTubeToTranscript.io
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-4">
        {/* Hero Section with SEO-rich content */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Generate YouTube Transcripts for FREE! 🚀
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Access all transcript languages, translate to 125+ languages, easy copy and edit! 
            Perfect for content creators, researchers, and note-takers.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              ✅ One-click Copy
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              🌍 Supports Translation
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
              🗣️ Multiple Languages
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              🤖 AI-Powered
            </span>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* URL Input Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="youtube-url" className="block text-sm font-medium text-gray-700 mb-2">
                  YouTube Video URL
                </label>
                <input
                  type="url"
                  id="youtube-url"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 backdrop-blur-sm text-gray-900 placeholder-gray-500"
                  disabled={isLoading}
                />
              </div>
              {turnstileEnabled && (
                <div className="mt-2">
                  <div ref={turnstileContainerRef}></div>
                </div>
              )}
              <button
                type="submit"
                disabled={isLoading || !youtubeUrl}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="animate-pulse">Generating Transcript...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Generate Transcript
                  </>
                )}
              </button>
            </form>
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-red-800 font-medium">Error</h3>
                    <p className="text-red-600 mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ─── Results: Thumbnail (top) then Transcript (below, easy access) ─── */}
          {videoMetadata && (
            <div className="mb-6 animate-fade-in">
              {/* Section 1: Thumbnail & video info — compact, professional */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-visible">
                <div className="p-5">
                  <div className="flex flex-col sm:flex-row gap-5">
                    {videoMetadata.thumbnail_url && videoInfo?.videoId && (
                      <div className="flex-shrink-0">
                        <div className="relative group rounded-xl overflow-hidden border border-gray-200 shadow-sm w-full sm:w-52 aspect-video bg-gray-100">
                          <img
                            src={videoMetadata.thumbnail_url}
                            alt={videoMetadata.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                      </div>
                    )}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-snug">
                        {videoMetadata.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 flex items-center gap-1.5">
                        <span>{videoMetadata.author_name}</span>
                        {videoInfo?.videoId && (
                          <>
                            <span aria-hidden>·</span>
                            <span className="font-mono text-xs">{videoInfo.videoId}</span>
                          </>
                        )}
                      </p>
                      {videoMetadata.thumbnail_url && videoInfo?.videoId && (
                        <div className="mt-4 relative inline-flex" ref={thumbnailDropdownRef}>
                          <button
                            type="button"
                            onClick={() => setIsThumbnailDropdownOpen((o) => !o)}
                            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                          >
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            Download thumbnail
                            <svg className={`w-4 h-4 transition-transform ${isThumbnailDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {isThumbnailDropdownOpen && (
                            <div className="absolute left-0 bottom-full z-30 mb-1 w-56 rounded-lg border border-gray-200 bg-white py-1 shadow-xl">
                              {THUMBNAIL_QUALITIES.map(({ id, label }) => (
                                <button
                                  key={id}
                                  type="button"
                                  onClick={() => {
                                    downloadThumbnail(id)
                                    setIsThumbnailDropdownOpen(false)
                                  }}
                                  className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                                >
                                  <span className="text-gray-400">{label}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Transcript — prominent, easy access */}
          {transcript && (
            <div className="animate-fade-in">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200/80 overflow-hidden">
                <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Transcript</h2>
                      <p className="text-sm text-gray-500 mt-0.5">Copy or download in your preferred format</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => setIncludeTimestamps(!includeTimestamps)}
                        className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                          includeTimestamps
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                            : 'bg-gray-100 text-gray-700 border border-transparent hover:bg-gray-200'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {includeTimestamps ? 'Hide timestamps' : 'Show timestamps'}
                      </button>
                      <button
                        onClick={copyToClipboard}
                        className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium border transition-colors ${
                          copySuccess
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200'
                        }`}
                      >
                        {copySuccess ? (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Copied
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy
                          </>
                        )}
                      </button>
                      <div className="relative inline-flex" ref={downloadDropdownRef}>
                        <button
                          onClick={downloadAsText}
                          disabled={!transcript}
                          className="inline-flex items-center gap-2 rounded-l-lg border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                          </svg>
                          TXT
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsDownloadOpen((o) => !o)}
                          disabled={!transcript && !segments.length}
                          className="rounded-r-lg border border-l-0 border-gray-300 bg-white px-2 py-2 text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isDownloadOpen && (transcript || segments.length) && (
                          <div className="absolute right-0 top-full z-20 mt-1 w-52 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                            <button onClick={() => { downloadAsText(); setIsDownloadOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled={!transcript}>TXT</button>
                            <button onClick={() => { downloadAsDocx(); setIsDownloadOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled={!transcript}>DOCX</button>
                            {isPdfSafe() && <button onClick={() => { downloadAsPdf(); setIsDownloadOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled={!transcript}>PDF</button>}
                            <div className="border-t my-1" />
                            <button onClick={() => { downloadAsSrt(); setIsDownloadOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled={!segments.length}>SRT</button>
                            <button onClick={() => { downloadAsVtt(); setIsDownloadOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled={!segments.length}>VTT</button>
                            <button onClick={() => { downloadAsCsv(); setIsDownloadOpen(false) }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" disabled={!segments.length}>CSV</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="rounded-xl bg-gray-50/80 border border-gray-200/80 p-5 max-h-[32rem] overflow-y-auto">
                    <pre
                      ref={transcriptRef}
                      className={`whitespace-pre-wrap text-gray-800 leading-relaxed font-sans text-sm ${includeTimestamps && timestampedTranscript ? 'timestamped-transcript' : ''}`}
                    >
                      {includeTimestamps && timestampedTranscript ? timestampedTranscript : transcript}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

          {/* How It Works Section */}
          <section id="how-it-works" className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How to Generate a YouTube Transcript 🎥</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Paste YouTube URL</h3>
                <p className="text-gray-600">Simply paste your YouTube video link and click "Get Transcript"</p>
              </div>
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customize & Translate</h3>
                <p className="text-gray-600">Select your preferred language and translate to 125+ languages</p>
              </div>
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Copy & Use</h3>
                <p className="text-gray-600">Copy with one click and use with AI tools for summaries, notes, and more</p>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why You Need YouTube Transcripts? 🤔</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">📝</span>
                  For Note Takers
                </h3>
                <p className="text-gray-600 mb-4">
                  It can be challenging to follow along with a video while taking notes. With the transcript, you can easily copy and paste the text into your notes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Paste the YouTube transcript into ChatGPT for quick note generation</li>
                  <li>• Get podcast transcripts uploaded on YouTube</li>
                  <li>• Translate transcripts to your native language</li>
                  <li>• Click on any line to jump to that part in the video</li>
                </ul>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-3xl mr-3">🎬</span>
                  For Content Creators
                </h3>
                <p className="text-gray-600 mb-4">
                  Content creators can use this tool to research and create content effortlessly. Simply add your YouTube video URL and get the transcript.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Create quizzes, memes, and infographics from transcripts</li>
                  <li>• Summarize transcripts for better SEO rankings</li>
                  <li>• Extract key points for social media posts</li>
                  <li>• Use as foundation for blog posts and articles</li>
                </ul>
              </div>
            </div>
          </section>

          {/* AI Integration Section */}
          <section className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pair YouTube Transcripts with AI Tools 🤖</h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
              <p className="text-lg text-gray-600 mb-6 text-center">
                Using AI to learn, create content, and take notes is the future. You can use the transcript with other AI tools to generate summaries, notes, or even generate new content.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Some Ideas to use with AI tools:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Generate notes and summaries</li>
                    <li>• Extract key points and quotes</li>
                    <li>• Create quizzes and trivia</li>
                    <li>• Generate questions and answers</li>
                    <li>• Create memes and infographics</li>
                    <li>• Find more information about topics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect for:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Students and researchers</li>
                    <li>• Content creators and marketers</li>
                    <li>• Podcasters and YouTubers</li>
                    <li>• Language learners</li>
                    <li>• Accessibility needs</li>
                    <li>• Social media managers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose YouTubeToTranscript.io?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The most advanced YouTube transcript generator with enterprise-grade features
              </p>
            </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h4>
              <p className="text-gray-600">Get transcripts in seconds, not minutes. Optimized for speed and performance.</p>
            </div>
            
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Highly Accurate</h4>
              <p className="text-gray-600">Powered by YouTube's own transcript data with 50+ language support.</p>
            </div>
            
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Secure & Private</h4>
              <p className="text-gray-600">Your data is safe and never stored. Privacy-first approach.</p>
            </div>
          </div>
          </section>
      </div>
    </div>
  )
}

export default App