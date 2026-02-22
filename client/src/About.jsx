import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from './components/BookmarkBar'
import './App.css'

function About() {
  useEffect(() => {
    document.title = 'About Us | YouTubeToTranscript.io'
    return () => { document.title = 'YouTubeToTranscript.io' }
  }, [])

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#1a1a2e] leading-[1.8] font-sans">
      <BookmarkBar />
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
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
              <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
              <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
              <Link to="/disclaimer" className="hover:text-blue-600 transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[800px] mx-auto my-[60px] px-6 pb-20 bg-white rounded-2xl border border-[#e2e8f0]">
        <div className="py-10 px-10 pb-5 border-b border-[#f1f5f9]">
          <h1 className="text-2xl font-bold text-[#0f172a] mb-2">About Us</h1>
          <p className="text-[#64748b] text-base">The story behind YouTubeToTranscript.io</p>
        </div>

        <div className="p-8 pt-8 md:px-10">
          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">Who We Are</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            YouTubeToTranscript.io is a free online tool built for anyone who needs to convert YouTube videos into text quickly and easily. Whether you are a content creator, a student, a researcher, or a journalist — we built this tool with you in mind.
          </p>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            We believe that valuable information locked inside YouTube videos should be accessible in text form — without complicated software, without subscriptions, and without barriers.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">Why We Built This</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            We noticed that most YouTube transcript tools were either too slow, too limited, or hidden behind paywalls. We wanted to build something different — a tool that is fast, supports multiple formats, works in many languages, and is completely free for everyone.
          </p>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            So we built YouTubeToTranscript.io — a simple, powerful tool that does exactly what it says.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">What We Offer</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-5">
              <div className="text-2xl mb-2">📝</div>
              <h3 className="text-[0.95rem] font-semibold text-[#0f172a] mb-1">Instant Transcripts</h3>
              <p className="text-[0.88rem] text-[#64748b] m-0">Paste any YouTube URL and get a full text transcript with timestamps in seconds.</p>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-5">
              <div className="text-2xl mb-2">📄</div>
              <h3 className="text-[0.95rem] font-semibold text-[#0f172a] mb-1">6 Download Formats</h3>
              <p className="text-[0.88rem] text-[#64748b] m-0">Download as TXT, PDF, DOCX, CSV, VTT, or SRT — whatever fits your workflow.</p>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-5">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="text-[0.95rem] font-semibold text-[#0f172a] mb-1">50+ Languages</h3>
              <p className="text-[0.88rem] text-[#64748b] m-0">Generate transcripts from YouTube videos in over 50 languages worldwide.</p>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-5">
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="text-[0.95rem] font-semibold text-[#0f172a] mb-1">Timestamps Included</h3>
              <p className="text-[0.88rem] text-[#64748b] m-0">Every transcript includes timestamps so you can navigate the video with ease.</p>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-5">
              <div className="text-2xl mb-2">📋</div>
              <h3 className="text-[0.95rem] font-semibold text-[#0f172a] mb-1">One-Click Copy</h3>
              <p className="text-[0.88rem] text-[#64748b] m-0">Copy the full transcript to your clipboard instantly — no download needed.</p>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-5">
              <div className="text-2xl mb-2">🖼️</div>
              <h3 className="text-[0.95rem] font-semibold text-[#0f172a] mb-1">Thumbnail Downloader</h3>
              <p className="text-[0.88rem] text-[#64748b] m-0">Download YouTube video thumbnails in multiple sizes alongside your transcript.</p>
            </div>
          </div>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">Our Mission</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            Our mission is simple — make YouTube content accessible to everyone in text form. We are constantly working to improve the tool, add new features, and support more languages.
          </p>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            We are committed to keeping this tool free for as long as possible, because we believe useful tools should not come with a price tag.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">Get in Touch</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">Have a question, suggestion, or feedback? We would love to hear from you.</p>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]"><strong>Email:</strong> <a href="mailto:contact@youtubetotranscript.io" className="text-indigo-500 no-underline hover:underline">contact@youtubetotranscript.io</a></p>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]"><strong>Website:</strong> <a href="https://youtubetotranscript.io" className="text-indigo-500 no-underline hover:underline">youtubetotranscript.io</a></p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} <Link to="/" className="hover:text-blue-600 transition-colors">YouTubeToTranscript.io</Link>. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 md:mt-0">
            <Link to="/" className="hover:text-blue-600 transition-colors">Back to Home</Link>
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms &amp; Conditions</Link>
            <Link to="/disclaimer" className="hover:text-blue-600 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
