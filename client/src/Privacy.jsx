import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from './components/BookmarkBar'
import './App.css'

function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | YouTubeToTranscript.io'
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
          <h1 className="text-2xl font-bold text-[#0f172a] mb-2">Privacy Policy</h1>
          <span className="inline-block bg-[#f1f5f9] text-[#64748b] text-[0.85rem] py-1 px-3 rounded-full mt-1.5">
            Last Updated: February 2026
          </span>
        </div>

        <div className="p-8 pt-8">
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            Welcome to <strong>YouTubeToTranscript.io</strong>. This Privacy Policy explains how we collect, use, and protect information when you use our website. By using this site, you agree to the terms described below.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">1. Information We Collect</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            We do not require you to create an account or provide personal information to use our tool. However, the following information may be collected automatically:
          </p>
          <ul className="text-[#475569] pl-5 mb-3.5 text-[0.97rem] list-disc space-y-2">
            <li><strong>Usage Data</strong> — Pages visited, time spent on site, browser type, and device information collected via analytics tools.</li>
            <li><strong>YouTube Video URLs</strong> — The URLs you enter are processed solely to generate transcripts. We do not store or log these URLs.</li>
            <li><strong>Cookies</strong> — We use cookies to improve user experience and to serve relevant advertisements. See the Cookies section below for more details.</li>
          </ul>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">2. How We Use Your Information</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">Any data collected is used for the following purposes:</p>
          <ul className="text-[#475569] pl-5 mb-3.5 text-[0.97rem] list-disc space-y-2">
            <li>To provide and improve our transcript generation service</li>
            <li>To analyze site traffic and usage patterns</li>
            <li>To serve relevant advertisements through third-party ad networks</li>
            <li>To ensure the security and proper functioning of the website</li>
          </ul>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">3. Third-Party Advertising (Google AdSense)</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            We use <strong>Google AdSense</strong> to display advertisements on this website. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to this and other websites. These cookies allow Google and its partners to serve ads based on your interests.
          </p>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-500 no-underline hover:underline">Google Ads Settings</a> or by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-indigo-500 no-underline hover:underline">aboutads.info</a>.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">4. Cookies</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">Cookies are small text files stored on your device when you visit a website. We use cookies to:</p>
          <ul className="text-[#475569] pl-5 mb-3.5 text-[0.97rem] list-disc space-y-2">
            <li>Remember your preferences</li>
            <li>Analyze site traffic via Google Analytics</li>
            <li>Serve personalized ads via Google AdSense</li>
          </ul>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">You can control or disable cookies through your browser settings. Note that disabling cookies may affect some features of the site.</p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">5. Google Analytics</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">
            We use Google Analytics to understand how visitors interact with our website. Google Analytics collects data such as your IP address, browser type, pages visited, and time spent on the site. This data is anonymized and used only for improving our service. For more information, visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-500 no-underline hover:underline">Google&apos;s Privacy Policy</a>.
          </p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">6. Data Sharing</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data with analytics or advertising partners as described above.</p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">7. Children&apos;s Privacy</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">YouTubeToTranscript.io is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.</p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">8. Your Rights (GDPR)</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">If you are located in the European Economic Area (EEA), you have the following rights regarding your personal data:</p>
          <ul className="text-[#475569] pl-5 mb-3.5 text-[0.97rem] list-disc space-y-2">
            <li>The right to access, update, or delete your data</li>
            <li>The right to object to data processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent at any time</li>
          </ul>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">To exercise any of these rights, please contact us at <a href="mailto:contact@youtubetotranscript.io" className="text-indigo-500 no-underline hover:underline">contact@youtubetotranscript.io</a>.</p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">9. Data Security</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">We take reasonable technical measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">10. Changes to This Privacy Policy</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.</p>

          <h2 className="text-[1.2rem] font-bold text-[#0f172a] mt-8 mb-3">11. Contact Us</h2>
          <p className="text-[#475569] mb-3.5 text-[0.97rem]">If you have any questions about this Privacy Policy, please contact us at:</p>
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

export default Privacy
