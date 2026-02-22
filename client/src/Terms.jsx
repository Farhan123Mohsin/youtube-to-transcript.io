import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from './components/BookmarkBar'
import './App.css'

function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service | YouTubeToTranscript.io'
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
          <h1 className="text-2xl font-bold text-[#0f172a] mb-2">Terms of Service</h1>
          <span className="inline-block bg-[#f1f5f9] text-[#64748b] text-[0.85rem] py-1 px-3 rounded-full mt-1.5">
            Last Updated: February 2026
          </span>
        </div>

        <div className="p-8 pt-8">
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            Please read these Terms of Service carefully before using <strong>YouTubeToTranscript.io</strong>. By accessing or using this website, you agree to be bound by these terms.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">1. Acceptance of Terms</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            By using YouTubeToTranscript.io, you confirm that you are at least 13 years of age and agree to comply with these Terms of Service. If you do not agree, please discontinue use of this website.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">2. Description of Service</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            YouTubeToTranscript.io is a free online tool that generates text transcripts from YouTube video URLs. The service also provides:
          </p>
          <ul className="text-[#475569] pl-5 mb-3.5 text-[0.97rem] list-disc space-y-2">
            <li>Transcript downloads in multiple formats (TXT, PDF, DOCX, CSV, VTT, SRT)</li>
            <li>Timestamps within transcripts</li>
            <li>YouTube video thumbnail downloads in multiple sizes</li>
            <li>Support for 50+ languages</li>
            <li>One-click transcript copying</li>
          </ul>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">This service is provided free of charge and is subject to change without notice.</p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">3. Acceptable Use</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">You agree to use this tool only for lawful purposes. You must not use YouTubeToTranscript.io to:</p>
          <ul className="text-[#475569] pl-5 mb-3.5 text-[0.97rem] list-disc space-y-2">
            <li>Violate any applicable local, national, or international laws</li>
            <li>Infringe on the intellectual property rights of YouTube content creators</li>
            <li>Generate transcripts of videos you do not have the right to access</li>
            <li>Attempt to overload, disrupt, or interfere with the website&apos;s servers</li>
            <li>Use automated bots or scrapers to access the service in bulk</li>
          </ul>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">4. Intellectual Property</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            The transcripts generated by this tool are derived from YouTube videos. The copyright of the original video content belongs to the respective YouTube content creators. YouTubeToTranscript.io does not claim ownership of any transcript content generated through the tool.
          </p>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            The design, code, and branding of YouTubeToTranscript.io are the intellectual property of its owners and may not be copied or reproduced without permission.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">5. Disclaimer of Warranties</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            YouTubeToTranscript.io is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, express or implied, regarding the accuracy, reliability, or availability of the service. Transcript accuracy depends on the quality of the original YouTube video&apos;s captions or audio.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">6. Limitation of Liability</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            To the fullest extent permitted by law, YouTubeToTranscript.io shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this service, including but not limited to loss of data or reliance on inaccurate transcripts.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">7. Third-Party Services</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            This website may display third-party advertisements via Google AdSense and may use third-party analytics tools such as Google Analytics. These services have their own terms and privacy policies, and we are not responsible for their practices.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">8. Modifications to the Service</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice or liability. We may also update these Terms of Service at any time. Continued use of the site after any changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">9. Governing Law</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from the use of this website shall be resolved in good faith.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">10. Contact Us</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">If you have any questions about these Terms of Service, please reach out to us:</p>
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

export default Terms
