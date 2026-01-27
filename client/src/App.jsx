import { useState, useRef, useEffect } from 'react'
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
  const [turnstileToken, setTurnstileToken] = useState('')
  const transcriptRef = useRef(null)
  const turnstileWidgetId = useRef(null)
  const turnstileContainerRef = useRef(null)

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY
    if (!siteKey) {
      console.warn('Turnstile site key not found in environment variables')
      return
    }
    
    // Initialize Turnstile widget when component mounts and script is loaded
    const initTurnstile = () => {
      if (window.turnstile && turnstileContainerRef.current && !turnstileWidgetId.current) {
        try {
          const widgetId = window.turnstile.render(turnstileContainerRef.current, {
            sitekey: siteKey,
            callback: (token) => {
              setTurnstileToken(token)
            },
            'error-callback': () => {
              setTurnstileToken('')
              console.error('Turnstile error occurred')
            },
            'expired-callback': () => {
              setTurnstileToken('')
            }
          })
          turnstileWidgetId.current = widgetId
        } catch (err) {
          console.error('Failed to render Turnstile widget:', err)
        }
      }
    }
    
    // Check if Turnstile script is already loaded
    if (window.turnstile) {
      // Small delay to ensure DOM is ready
      setTimeout(initTurnstile, 100)
    } else {
      // Wait for script to load
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkTurnstile)
          setTimeout(initTurnstile, 100)
        }
      }, 100)
      
      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkTurnstile), 10000)
    }
    
    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(turnstileWidgetId.current)
        } catch (err) {
          console.error('Failed to remove Turnstile widget:', err)
        }
        turnstileWidgetId.current = null
      }
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!youtubeUrl) {
      setError('Please enter a YouTube URL')
      return
    }

    if (!turnstileToken) {
      setError('Please complete the verification')
      return
    }

    setIsLoading(true)
    setError('')
    setTranscript('')
    setSegments([])
    setVideoInfo(null)
    setVideoMetadata(null)
    setCopySuccess(false)
    setIsDownloadOpen(false)

    try {
      const response = await fetch("http://127.0.0.1:5000/api/transcript", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          youtubeUrl,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
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
      
      // Reset Turnstile widget after successful submission
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current)
        setTurnstileToken('')
      }
    } catch (err) {
      console.error('Error details:', err);
      setError(`Failed to fetch transcript: ${err.message}`)
      
      // Reset Turnstile widget on error
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
      const textToCopy = includeTimestamps && timestampedTranscript ? timestampedTranscript : transcript
      await navigator.clipboard.writeText(textToCopy)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const getCurrentTranscriptText = () => {
    return includeTimestamps && timestampedTranscript ? timestampedTranscript : transcript
  }

  const getBaseFileName = (suffix) => {
    const videoId = videoInfo?.videoId || 'transcript'
    return `youtube-transcript-${videoId}-${suffix}`
  }

  const downloadAsText = () => {
    const textToDownload = getCurrentTranscriptText()
    if (!textToDownload) return

    const blob = new Blob([textToDownload], { type: 'text/plain;charset=utf-8' })
    const url = window.URL.createObjectURL(blob)
    const fileSuffix = includeTimestamps && timestampedTranscript ? 'with-timestamps' : 'plain'
    const fileName = `${getBaseFileName(fileSuffix)}.txt`

    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  }

  const downloadAsPdf = () => {
    if (!transcriptRef.current) return

    const fileSuffix = includeTimestamps && timestampedTranscript ? 'with-timestamps' : 'plain'
    const fileName = `${getBaseFileName(fileSuffix)}.pdf`

    const doc = new jsPDF({
      unit: 'pt',
      format: 'a4'
    })

    doc.html(transcriptRef.current, {
      margin: [40, 40, 40, 40],
      autoPaging: 'text',
      callback: (docInstance) => {
        docInstance.save(fileName)
      }
    })
  }

  const downloadAsDocx = () => {
    const textToDownload = getCurrentTranscriptText()
    if (!textToDownload) return

    // Simple .docx-compatible file (Word will open plain text with this MIME type)
    const blob = new Blob([textToDownload], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })
    const fileSuffix = includeTimestamps && timestampedTranscript ? 'with-timestamps' : 'plain'
    const fileName = `${getBaseFileName(fileSuffix)}.docx`

    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  }

  const formatTimeComponent = (value) => {
    return String(Math.floor(value)).padStart(2, '0')
  }

  const formatTimeForSubtitles = (seconds, useComma = false) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)
    const millis = Math.floor((seconds - Math.floor(seconds)) * 1000)

    const sep = useComma ? ',' : '.'
    return `${formatTimeComponent(hrs)}:${formatTimeComponent(mins)}:${formatTimeComponent(secs)}${sep}${String(millis).padStart(3, '0')}`
  }

  const buildCsvContent = () => {
    if (!segments.length) return ''
    const header = 'index,start_seconds,end_seconds,text'
    const rows = segments.map((seg, index) => {
      const start = seg.start
      const end = seg.start + seg.duration
      // Escape quotes by doubling them, wrap in quotes
      const safeText = String(seg.text).replace(/\"/g, '""')
      return `${index + 1},${start.toFixed(3)},${end.toFixed(3)},"${safeText}"`
    })
    return [header, ...rows].join('\n')
  }

  const downloadAsCsv = () => {
    const content = buildCsvContent()
    if (!content) return
    const fileName = `${getBaseFileName('segments')}.csv`
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  }

  const buildSrtContent = () => {
    if (!segments.length) return ''
    return segments
      .map((seg, index) => {
        const start = formatTimeForSubtitles(seg.start, true)
        const end = formatTimeForSubtitles(seg.start + seg.duration, true)
        return `${index + 1}\n${start} --> ${end}\n${seg.text}\n`
      })
      .join('\n')
  }

  const downloadAsSrt = () => {
    const content = buildSrtContent()
    if (!content) return
    const fileName = `${getBaseFileName('subtitles')}.srt`
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  }

  const buildVttContent = () => {
    if (!segments.length) return ''
    const header = 'WEBVTT\n'
    const body = segments
      .map((seg) => {
        const start = formatTimeForSubtitles(seg.start, false)
        const end = formatTimeForSubtitles(seg.start + seg.duration, false)
        return `${start} --> ${end}\n${seg.text}\n`
      })
      .join('\n')
    return `${header}\n${body}`
  }

  const downloadAsVtt = () => {
    const content = buildVttContent()
    if (!content) return
    const fileName = `${getBaseFileName('subtitles')}.vtt`
    const blob = new Blob([content], { type: 'text/vtt;charset=utf-8' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  }

  const isPdfSafe = () => {
    const code = videoInfo?.languageCode || videoInfo?.language || ''
    if (!code) return true
    // Normalize to lowercase, 2-letter when possible
    const norm = String(code).toLowerCase().slice(0, 2)
    return !PDF_UNSAFE_LANGUAGE_CODES.includes(norm)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YouTubeToTranscript.io
              </span>
            </div>
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
              {/* Turnstile widget */}
              {import.meta.env.VITE_TURNSTILE_SITE_KEY && (
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

            {/* Error Message */}
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

          {/* Video Metadata Display */}
          {videoMetadata && (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-8 animate-fade-in video-metadata">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Video Thumbnail */}
                {videoMetadata.thumbnail_url && (
                  <div className="flex-shrink-0">
                    <img 
                      src={videoMetadata.thumbnail_url} 
                      alt={videoMetadata.title}
                      className="w-full md:w-48 h-32 md:h-36 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                )}
                
                {/* Video Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {videoMetadata.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">{videoMetadata.author_name}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      YouTube Video
                    </div>
                    <div className="flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      ID: {videoInfo?.videoId}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}



          {/* Transcript Display */}
          {transcript && (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">Transcript</h2>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Timestamp Toggle Button */}
                  <button
                    onClick={() => setIncludeTimestamps(!includeTimestamps)}
                    className={`font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center ${
                      includeTimestamps 
                        ? 'bg-purple-100 text-purple-700 border border-purple-200' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {includeTimestamps ? 'Hide Timestamps' : 'Show Timestamps'}
                  </button>
                  
                  {/* Copy Button */}
                  <button
                    onClick={copyToClipboard}
                    className={`font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center ${
                      copySuccess 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {copySuccess ? (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </>
                    )}
                  </button>
                  {/* Download primary button + dropdown */}
                  <div className="relative inline-flex">
                    {/* Primary TXT download */}
                    <button
                      onClick={downloadAsText}
                      disabled={!transcript}
                      className={`font-medium py-2 px-4 rounded-l-lg border-r transition-all duration-200 flex items-center ${
                        transcript
                          ? 'bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-200'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                      }`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      Download TXT
                    </button>
                    {/* Dropdown toggle */}
                    <button
                      type="button"
                      onClick={() => setIsDownloadOpen((open) => !open)}
                      className={`font-medium py-2 px-2 rounded-r-lg border-l transition-all duration-200 flex items-center ${
                        transcript || segments.length
                          ? 'bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-200'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                      }`}
                      disabled={!transcript && !segments.length}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    {isDownloadOpen && (transcript || segments.length) && (
                      <div className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black/5 z-20">
                        <div className="py-1 text-sm text-gray-700">
                          <button
                            onClick={() => {
                              downloadAsText()
                              setIsDownloadOpen(false)
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                            disabled={!transcript}
                          >
                            <span className="mr-2">📄</span> TXT (Plain text)
                          </button>
                          <button
                            onClick={() => {
                              downloadAsDocx()
                              setIsDownloadOpen(false)
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                            disabled={!transcript}
                          >
                            <span className="mr-2">📝</span> DOCX (Document)
                          </button>
                          {isPdfSafe() && (
                            <button
                              onClick={() => {
                                downloadAsPdf()
                                setIsDownloadOpen(false)
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                              disabled={!transcript}
                            >
                              <span className="mr-2">📕</span> PDF (Safe languages)
                            </button>
                          )}
                          <div className="border-t my-1" />
                          <button
                            onClick={() => {
                              downloadAsSrt()
                              setIsDownloadOpen(false)
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                            disabled={!segments.length}
                          >
                            <span className="mr-2">🎬</span> SRT (Subtitles)
                          </button>
                          <button
                            onClick={() => {
                              downloadAsVtt()
                              setIsDownloadOpen(false)
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                            disabled={!segments.length}
                          >
                            <span className="mr-2">🖥️</span> VTT (WebVTT)
                          </button>
                          <button
                            onClick={() => {
                              downloadAsCsv()
                              setIsDownloadOpen(false)
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                            disabled={!segments.length}
                          >
                            <span className="mr-2">📊</span> CSV (Data)
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 max-h-96 overflow-y-auto border border-gray-200 transcript-scroll">
                <pre
                  ref={transcriptRef}
                  className={`whitespace-pre-wrap text-gray-800 leading-relaxed font-sans text-sm ${includeTimestamps && timestampedTranscript ? 'timestamped-transcript' : ''}`}
                >
                  {includeTimestamps && timestampedTranscript ? timestampedTranscript : transcript}
                </pre>
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

        {/* FAQ Section */}
        <section id="faq" className="mt-20 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is YouTubeToTranscript.io free to use?</h3>
              <p className="text-gray-600">Yes, YouTubeToTranscript.io is completely free to use. You can easily extract subtitles/transcripts generated by YouTube from YouTube videos without any cost or registration required.</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How many languages does YouTubeToTranscript.io support?</h3>
              <p className="text-gray-600">YouTubeToTranscript.io supports 50+ languages for transcript generation and can translate transcripts to over 125 languages, making it perfect for global content creators and researchers.</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does it take to generate a YouTube transcript?</h3>
              <p className="text-gray-600">The transcript is generated almost instantly after you paste the YouTube video link and click 'Generate Transcript.' You'll have your transcript ready within seconds!</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I use YouTube transcripts with AI tools?</h3>
              <p className="text-gray-600">Absolutely! YouTubeToTranscript.io is perfect for use with AI tools like ChatGPT. You can generate summaries, notes, quizzes, and creative content from your transcripts.</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a limit to the length of the video I can transcribe?</h3>
              <p className="text-gray-600">Currently, there are no limits on the length of the video you can transcribe. You can transcribe videos of any duration seamlessly.</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I download the transcript?</h3>
              <p className="text-gray-600">Currently, we do not offer a download option for the transcript directly from our platform. However, you can easily copy the transcript and paste it into your preferred document or application for further use.</p>
            </div>
          </div>
        </section>

      </div>

        {/* Footer */}
        <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    YouTubeToTranscript.io
                  </span>
                </div>
                <p className="text-gray-600 mb-4 max-w-md">
                  The most advanced YouTube transcript generator. Get instant, accurate transcripts in 50+ languages with enterprise-grade security.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
                  <li><a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a></li>
                  <li><a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/terms" className="hover:text-blue-600 transition-colors">Terms &amp; Conditions</a></li>
                  <li><a href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} YouTubeToTranscript.io. All rights reserved. Built with ❤️ for content creators worldwide.</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default App
