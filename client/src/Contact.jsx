import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from './components/BookmarkBar'
import './App.css'

function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | YouTubeToTranscript.io'
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

      <div className="max-w-[700px] mx-auto my-[60px] px-6 pb-20">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-[#0f172a] mb-2.5">Contact Us</h1>
          <p className="text-[#64748b] text-base">We&apos;re here to help. Reach out anytime — we read every message.</p>
        </div>

        <div className="bg-white border border-[#e2e8f0] rounded-2xl p-9 md:px-10 text-center mb-6">
          <div className="text-[2.5rem] mb-4">✉️</div>
          <h2 className="text-[1.15rem] font-bold text-[#0f172a] mb-2">Send Us an Email</h2>
          <p className="text-[#64748b] text-[0.95rem] mb-4">
            For questions, feedback, bug reports, or any other inquiries, email us directly and we&apos;ll get back to you as soon as possible.
          </p>
          <a
            href="mailto:contact@youtubetotranscript.io"
            className="inline-block bg-indigo-500 text-white py-3 px-7 rounded-lg font-semibold text-[0.95rem] no-underline hover:bg-indigo-600 transition-colors"
          >
            contact@youtubetotranscript.io
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
            <div className="text-2xl mb-2.5">🐛</div>
            <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">Bug Reports</h3>
            <p className="text-[0.88rem] text-[#64748b]">Found something not working correctly? Let us know and we&apos;ll fix it quickly.</p>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
            <div className="text-2xl mb-2.5">💡</div>
            <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">Feature Requests</h3>
            <p className="text-[0.88rem] text-[#64748b]">Have an idea for a new feature? We love hearing suggestions from our users.</p>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
            <div className="text-2xl mb-2.5">🤝</div>
            <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">Partnerships</h3>
            <p className="text-[0.88rem] text-[#64748b]">Interested in collaborating or partnering with us? Drop us a message.</p>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
            <div className="text-2xl mb-2.5">❓</div>
            <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">General Questions</h3>
            <p className="text-[0.88rem] text-[#64748b]">Any other questions about the tool or how it works? We&apos;re happy to help.</p>
          </div>
        </div>

        <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-[10px] py-4 px-5 text-[#0369a1] text-[0.9rem] text-center">
          ⏱️ We typically respond within <strong>24–48 hours</strong>. We appreciate your patience.
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

export default Contact
