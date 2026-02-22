import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

function HowToDownloadYouTubeSubtitles() {
  useEffect(() => {
    document.title = 'How to Download YouTube Subtitles as SRT, VTT or TXT File | YouTubeToTranscript.io'
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

      <article className="max-w-[780px] mx-auto my-[60px] px-6 pb-20">
        <div className="mb-9">
          <span className="inline-block bg-[#ede9fe] text-[#6d28d9] text-[0.8rem] font-semibold py-1 px-3 rounded-full mb-3.5 uppercase tracking-wide">
            Guide
          </span>
          <h1 className="text-[2.1rem] font-extrabold text-[#0f172a] leading-tight mb-3.5">
            How to Download YouTube Subtitles as SRT, VTT or TXT File
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">6 min read &nbsp;·&nbsp; Free Tool &nbsp;·&nbsp; 6 Download Formats Supported</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            Want to <strong className="text-[#0f172a]">download YouTube subtitles</strong> as an SRT, VTT, TXT, or any other file format? Whether you need subtitle files for video editing, accessibility, or archiving — this guide covers everything you need to know.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            The good news is that you do not need any software or browser extensions. You can download YouTube subtitles for free directly from your browser in just a few steps.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Why Download YouTube Subtitles?</h2>
          <p className="text-[#475569] mb-4 text-base">
            There are many reasons why people need to download YouTube subtitle files:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">Video editors</strong> who need SRT or VTT files to add subtitles to their own videos</li>
            <li><strong className="text-[#0f172a]">Content creators</strong> who want to repurpose video content into written articles or social posts</li>
            <li><strong className="text-[#0f172a]">Researchers and students</strong> who want to save a transcript for notes or reference</li>
            <li><strong className="text-[#0f172a]">Translators</strong> who need the subtitle file to translate video content into another language</li>
            <li><strong className="text-[#0f172a]">Accessibility</strong> — making video content available in text form for people who are deaf or hard of hearing</li>
          </ul>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">What Subtitle File Formats Are Available?</h2>
          <p className="text-[#475569] mb-4 text-base">
            Different use cases require different file formats. Here is a quick breakdown of each format and when to use it:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-6">
            <div className="bg-white border border-[#e2e8f0] rounded-[10px] py-4 px-4 text-center">
              <div className="text-[1.1rem] font-extrabold text-indigo-500 mb-1.5">SRT</div>
              <p className="text-[0.83rem] text-[#64748b] m-0">SubRip Subtitle — most widely used format for video editors and media players</p>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-[10px] py-4 px-4 text-center">
              <div className="text-[1.1rem] font-extrabold text-indigo-500 mb-1.5">VTT</div>
              <p className="text-[0.83rem] text-[#64748b] m-0">Web Video Text Tracks — used for web-based video players and HTML5 video</p>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-[10px] py-4 px-4 text-center">
              <div className="text-[1.1rem] font-extrabold text-indigo-500 mb-1.5">TXT</div>
              <p className="text-[0.83rem] text-[#64748b] m-0">Plain text — clean transcript without formatting, great for notes and writing</p>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-[10px] py-4 px-4 text-center">
              <div className="text-[1.1rem] font-extrabold text-indigo-500 mb-1.5">PDF</div>
              <p className="text-[0.83rem] text-[#64748b] m-0">Portable Document Format — best for sharing, printing, or archiving</p>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-[10px] py-4 px-4 text-center">
              <div className="text-[1.1rem] font-extrabold text-indigo-500 mb-1.5">DOCX</div>
              <p className="text-[0.83rem] text-[#64748b] m-0">Microsoft Word — ideal for editing, annotating, or formatting the transcript</p>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-[10px] py-4 px-4 text-center">
              <div className="text-[1.1rem] font-extrabold text-indigo-500 mb-1.5">CSV</div>
              <p className="text-[0.83rem] text-[#64748b] m-0">Comma-separated values — useful for data analysis or importing into spreadsheets</p>
            </div>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Download YouTube Subtitles — Step by Step</h2>
          <p className="text-[#475569] mb-4 text-base">
            Follow these steps to download YouTube subtitles in any format for free:
          </p>

          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 1</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Find the YouTube video</strong> you want to download subtitles from and copy its URL from the browser address bar.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 2</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Go to <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link></strong> and paste the URL into the input field on the homepage.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 3</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Click Generate</strong> — the tool will process the video and display the full transcript with timestamps within seconds.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 4</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Choose your download format</strong> — select SRT, VTT, TXT, PDF, DOCX, or CSV and click the download button. Your subtitle file will be saved to your device instantly.</p>
          </div>

          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> If you need the subtitles for a video editor like Premiere Pro, DaVinci Resolve, or Final Cut Pro — download the <strong className="text-[#14532d]">SRT format</strong>. It is the most universally supported subtitle format across all major video editing software.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">SRT vs VTT — Which One Should You Download?</h2>
          <p className="text-[#475569] mb-4 text-base">
            Both SRT and VTT are subtitle formats that include timestamps, but they are used in different contexts:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li>Download <strong className="text-[#0f172a]">SRT</strong> if you are working with video editing software, media players like VLC, or uploading subtitles to YouTube, Vimeo, or other video platforms.</li>
            <li>Download <strong className="text-[#0f172a]">VTT</strong> if you are working with web-based video players or HTML5 video on a website.</li>
          </ul>
          <p className="text-[#475569] mb-4 text-base">
            If you are unsure which one to use, SRT is the safer choice — it is supported by almost everything.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Can You Download Subtitles for Any YouTube Video?</h2>
          <p className="text-[#475569] mb-4 text-base">
            You can download subtitles for any YouTube video that has captions available — either auto-generated by YouTube or manually added by the creator. The majority of YouTube videos have auto-generated captions, so this works for most videos you will come across.
          </p>
          <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-[10px] py-4 px-5 my-5 text-[#92400e] text-[0.95rem]">
            <strong className="text-[#92400e]">⚠️ Note:</strong> Videos with no speech, music-only videos, or very short clips may not have captions available and therefore cannot produce a subtitle file.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Can You Download Subtitles in Other Languages?</h2>
          <p className="text-[#475569] mb-4 text-base">
            Yes. If the YouTube video has captions available in multiple languages, you can generate and download the transcript in any of those languages. This tool supports <strong className="text-[#0f172a]">50+ languages</strong>, making it useful for multilingual content creators and translators.
          </p>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Download YouTube Subtitles — Free</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Paste any YouTube URL and download subtitles as SRT, VTT, TXT, PDF, DOCX, or CSV. No signup required.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Download Subtitles Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Is it free to download YouTube subtitles?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes — downloading YouTube subtitles using this tool is completely free. No account or subscription is needed.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I download subtitles as an SRT file?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. SRT is one of the 6 supported download formats. Simply generate the transcript and select SRT from the download options.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Do the subtitle files include timestamps?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. All downloaded subtitle files include timestamps so each line of text is synced with the correct point in the video.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I download YouTube subtitles on mobile?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes — the tool works in any mobile browser. Simply open YouTubeToTranscript.io on your phone, paste the YouTube URL, and download your subtitle file.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Does this work for non-English YouTube videos?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. The tool supports subtitle downloads in 50+ languages, so it works for videos in any language that has captions available on YouTube.</p>
        </div>
      </article>

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

export default HowToDownloadYouTubeSubtitles
