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
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [transcript, setTranscript] = useState('')
  const [segments, setSegments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [error, setError] = useState('')
  const [videoInfo, setVideoInfo] = useState(null)
  const [videoMetadata, setVideoMetadata] = useState(null)
  const [copySuccess, setCopySuccess] = useState(false)
  const [includeTimestamps, setIncludeTimestamps] = useState(true)
  const [timestampedTranscript, setTimestampedTranscript] = useState('')
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  
  const transcriptRef = useRef(null)
  const turnstileWidgetId = useRef(null)
  const turnstileContainerRef = useRef(null)

<<<<<<< HEAD
  // Turnstile initialization
=======
  // Progress bar animation for submit button
  useEffect(() => {
    let progressInterval;
    if (isLoading) {
      setLoadingProgress(0);
      progressInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) return 100;
          // Simulate progress, slow down as it approaches 100
          return prev + Math.max(1, Math.floor((100 - prev) / 10));
        });
      }, 120);
    } else {
      setLoadingProgress(0);
    }
    return () => clearInterval(progressInterval);
  }, [isLoading]);

>>>>>>> 8a301a0 (Add Google Analytics gtag.js to index.html)
  useEffect(() => {
    const loadTurnstile = () => {
      if (window.turnstile && turnstileContainerRef.current) {
        try {
          turnstileWidgetId.current = window.turnstile.render(turnstileContainerRef.current, {
            sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
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
  }, [])

  // Simulate loading progress
  useEffect(() => {
    let interval
    if (isLoading) {
      setLoadingProgress(0)
      setLoadingMessage('🔄 Connecting to YouTube...')
      
      interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval)
            return 90
          }
          
          // Update message based on progress
          if (prev < 30) {
            setLoadingMessage('🔍 Extracting video information...')
          } else if (prev < 60) {
            setLoadingMessage('📝 Fetching transcript data...')
          } else {
            setLoadingMessage('⚙️ Processing transcript...')
          }
          
          return prev + 10
        })
      }, 600) // Update every 600ms (total ~5.4 seconds to reach 90%)
    } else {
      setLoadingProgress(0)
      setLoadingMessage('')
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isLoading])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!turnstileToken) {
      setError('Please complete the verification challenge')
      return
    }

    setIsLoading(true)
    setError('')
    setTranscript('')
    setSegments([])
    setVideoInfo(null)
    setVideoMetadata(null)

    try {
      const response = await fetch('/api/transcript', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          youtubeUrl: youtubeUrl,
          turnstileToken: turnstileToken
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch transcript')
      }

      // Complete loading animation
      setLoadingProgress(100)
      setLoadingMessage('✅ Transcript ready!')
      
<<<<<<< HEAD
      setTimeout(() => {
        setTranscript(data.transcript)
        setTimestampedTranscript(data.timestamped_transcript)
        setSegments(data.segments || [])
        setVideoInfo({
          videoId: data.video_id,
          language: data.language,
          languageCode: data.language_code,
          isGenerated: data.is_generated
        })
        setVideoMetadata(data.video_metadata || null)
        setIsLoading(false)
      }, 500)

      // Reset Turnstile
      if (window.turnstile && turnstileWidgetId.current !== null) {
=======
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
>>>>>>> 8a301a0 (Add Google Analytics gtag.js to index.html)
        window.turnstile.reset(turnstileWidgetId.current)
      }
      
    } catch (err) {
<<<<<<< HEAD
      setError(err.message)
=======
      console.error('Error details:', err);
      setError(`Failed to fetch transcript: ${err.message}`)
      // Reset Turnstile widget on error
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.reset(turnstileWidgetId.current)
        setTurnstileToken('')
      }
    } finally {
>>>>>>> 8a301a0 (Add Google Analytics gtag.js to index.html)
      setIsLoading(false)
      
      // Reset Turnstile on error
      if (window.turnstile && turnstileWidgetId.current !== null) {
        window.turnstile.reset(turnstileWidgetId.current)
      }
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

  const isPdfSafe = () => {
    const langCode = videoInfo?.languageCode || videoInfo?.language || ''
    return !PDF_UNSAFE_LANGUAGE_CODES.includes(langCode.toLowerCase())
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>YouTube Transcript Extractor</h1>
          <p>Extract transcripts from any YouTube video instantly</p>
        </header>

<<<<<<< HEAD
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-group">
            <input
              type="text"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="Paste YouTube URL here..."
              className="url-input"
              disabled={isLoading}
              required
            />
            <button type="submit" className="submit-btn" disabled={isLoading || !turnstileToken}>
              {isLoading ? 'Processing...' : 'Get Transcript'}
            </button>
=======
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
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 relative overflow-hidden submit-btn"
                aria-busy={isLoading}
              >
                {/* Progress bar fill */}
                {isLoading && (
                  <span
                    className="absolute left-0 top-0 h-full bg-blue-500/60 z-0 progress-bar-fill"
                    style={{ width: `${loadingProgress}%`, transition: 'width 0.2s linear' }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 flex items-center">
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
                </span>
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
>>>>>>> 8a301a0 (Add Google Analytics gtag.js to index.html)
          </div>
          
          <div ref={turnstileContainerRef} className="turnstile-container"></div>
        </form>

        {error && (
          <div className="error-message">
            <span>⚠️</span> {error}
          </div>
        )}

        {/* Enhanced Loading Indicator */}
        {isLoading && (
  <div className="simple-loading">
    <div className="loading-bar">
      <div className="loading-text">
        <div className="loading-spinner"></div>
        Generating Transcript...
      </div>
    </div>
  </div>
)}

        {videoMetadata && (
          <div className="video-info">
            {videoMetadata.thumbnail_url && (
              <img src={videoMetadata.thumbnail_url} alt="Video thumbnail" className="video-thumbnail" />
            )}
            <div className="video-details">
              <h3>{videoMetadata.title}</h3>
              {videoMetadata.author_name && <p>by {videoMetadata.author_name}</p>}
              {videoInfo && (
                <p className="video-meta">
                  Video ID: {videoInfo.videoId} | Language: {videoInfo.language}
                  {videoInfo.isGenerated && ' (Auto-generated)'}
                </p>
              )}
            </div>
          </div>
        )}

        {transcript && (
          <div className="transcript-section">
            <div className="transcript-header">
              <h2>Transcript</h2>
              <div className="transcript-controls">
                <label className="timestamp-toggle">
                  <input
                    type="checkbox"
                    checked={includeTimestamps}
                    onChange={(e) => setIncludeTimestamps(e.target.checked)}
                  />
                  Show Timestamps
                </label>
                <button onClick={copyToClipboard} className="copy-btn">
                  {copySuccess ? '✓ Copied!' : '📋 Copy'}
                </button>
                <div className="download-dropdown">
                  <button 
                    onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                    className="download-btn"
                  >
                    ⬇️ Download
                  </button>
                  {isDownloadOpen && (
                    <div className="download-menu">
                      <button onClick={downloadAsText}>📄 Text (.txt)</button>
                      <button onClick={downloadAsDocx}>📝 Word (.docx)</button>
                      {isPdfSafe() && (
                        <button onClick={downloadAsPdf}>📕 PDF (.pdf)</button>
                      )}
                      <button onClick={downloadAsSrt}>🎬 SRT Subtitles (.srt)</button>
                      <button onClick={downloadAsVtt}>🎬 WebVTT (.vtt)</button>
                      <button onClick={downloadAsCsv}>📊 CSV (.csv)</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="transcript-content" ref={transcriptRef}>
              <pre>{getCurrentTranscriptText()}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App