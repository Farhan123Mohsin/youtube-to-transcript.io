import { Link } from 'react-router-dom'
import './App.css'

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                YouTubeToTranscript.io
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/terms" className="hover:text-blue-600 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          YouTubeToTranscript.io is designed with privacy in mind. We do not require you to create an account, and we
          do not store the transcripts you generate. The YouTube URLs you provide are used only to request transcript
          data from YouTube&apos;s systems.
        </p>
        <p className="text-gray-600 mb-4">
          Basic technical information such as request logs or error logs may be collected to keep the service running
          reliably and to prevent abuse. We do not sell your data to third parties.
        </p>
        <p className="text-gray-600 mb-4">
          If you embed this tool in other workflows or share transcripts externally, please ensure you do so in line
          with your local privacy regulations and the policies of the platforms you use.
        </p>
        <p className="text-gray-600">
          This policy may be updated over time as the product evolves. Your continued use of the service after changes
          are published constitutes acceptance of the updated policy.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} YouTubeToTranscript.io. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Back to Home
            </Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Privacy

