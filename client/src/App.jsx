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

  // Turnstile initialization
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
        window.turnstile.reset(turnstileWidgetId.current)
      }
      
    } catch (err) {
      setError(err.message)
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