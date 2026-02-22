import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

const USE_CASES = [
  { icon: '✍️', title: 'Content Repurposing', text: 'Turn any YouTube video into a blog post, newsletter, or social media content in minutes.' },
  { icon: '📚', title: 'Study and Research', text: 'Convert lectures, talks, and interviews into text you can read, highlight, and reference later.' },
  { icon: '🔍', title: 'SEO and Keywords', text: 'Extract topics and keywords from video content to improve your own SEO strategy.' },
  { icon: '♿', title: 'Accessibility', text: 'Make video content accessible to people who are deaf, hard of hearing, or prefer reading.' },
  { icon: '🌍', title: 'Translation', text: 'Convert a video to text first, then use a translation tool to get it in any language.' },
  { icon: '⚖️', title: 'Quotes and Citations', text: 'Accurately quote a speaker from a video without having to rewatch and pause repeatedly.' },
]

function HowToConvertYouTubeVideoToText() {
  useEffect(() => {
    document.title = 'How to Convert YouTube Video to Text Free | YouTubeToTranscript.io'
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
            How to Convert YouTube Video to Text Free
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">6 min read &nbsp;·&nbsp; No Software Needed &nbsp;·&nbsp; Works on Any Device</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            Need to <strong className="text-[#0f172a]">convert a YouTube video to text</strong>? Whether you want to extract quotes, create notes, or repurpose video content — you can do it for free in seconds without installing any software.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn the fastest way to convert any YouTube video to text, what formats you can save it in, and exactly what you can do with the text once you have it.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Why Convert a YouTube Video to Text?</h2>
          <p className="text-[#475569] mb-4 text-base">
            Converting a YouTube video to text opens up a lot of possibilities that are simply not available when content is locked inside a video file:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            {USE_CASES.map((item) => (
              <div key={item.title} className="bg-white border border-[#e2e8f0] rounded-[10px] p-5">
                <div className="text-[1.4rem] mb-2">{item.icon}</div>
                <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">{item.title}</h3>
                <p className="text-[0.87rem] text-[#64748b] m-0">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Convert a YouTube Video to Text — Step by Step</h2>
          <p className="text-[#475569] mb-4 text-base">
            Here is the fastest way to convert any YouTube video to text for free:
          </p>

          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 1</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Copy the YouTube video URL</strong> — Open the YouTube video you want to convert and copy its URL from the browser address bar.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 2</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Open the tool</strong> — Go to <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link> and paste the URL into the input field.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 3</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Generate the transcript</strong> — Click Generate and the full text transcript will appear within seconds, complete with timestamps.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 4</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Copy or download</strong> — Copy the text directly to your clipboard, or download it as TXT, PDF, DOCX, CSV, VTT, or SRT depending on what you need.</p>
          </div>

          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> If you want to turn the transcript into a blog post, download it as a <strong className="text-[#14532d]">DOCX file</strong> — you can open it directly in Microsoft Word or Google Docs and start editing right away.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">YouTube Video to Text — Tool Comparison</h2>
          <p className="text-[#475569] mb-4 text-base">
            There are a few ways to convert a YouTube video to text. Here is how they compare:
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-[0.93rem]">
              <thead>
                <tr>
                  <th className="bg-[#f1f5f9] text-[#0f172a] font-bold py-3 px-4 text-left border border-[#e2e8f0]">Method</th>
                  <th className="bg-[#f1f5f9] text-[#0f172a] font-bold py-3 px-4 text-left border border-[#e2e8f0]">Free</th>
                  <th className="bg-[#f1f5f9] text-[#0f172a] font-bold py-3 px-4 text-left border border-[#e2e8f0]">Download Formats</th>
                  <th className="bg-[#f1f5f9] text-[#0f172a] font-bold py-3 px-4 text-left border border-[#e2e8f0]">Timestamps</th>
                  <th className="bg-[#f1f5f9] text-[#0f172a] font-bold py-3 px-4 text-left border border-[#e2e8f0]">50+ Languages</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#475569]"><strong className="text-[#0f172a]">YouTubeToTranscript.io</strong></td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#16a34a] font-bold">✔ Yes</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#475569]">TXT, PDF, DOCX, CSV, VTT, SRT</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#16a34a] font-bold">✔ Yes</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#16a34a] font-bold">✔ Yes</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#475569] bg-[#f8fafc]">YouTube Built-in Transcript</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#16a34a] font-bold bg-[#f8fafc]">✔ Yes</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#475569] bg-[#f8fafc]">None (browser only)</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#16a34a] font-bold bg-[#f8fafc]">✔ Yes</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#16a34a] font-bold bg-[#f8fafc]">✔ Yes</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#475569]">Manual Transcription</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#16a34a] font-bold">✔ Yes</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#475569]">Any</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#dc2626] font-bold">✘ Manual</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#dc2626] font-bold">✘ Manual</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#475569] bg-[#f8fafc]">Paid Transcription Tools</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#dc2626] font-bold bg-[#f8fafc]">✘ No</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#475569] bg-[#f8fafc]">Limited</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#16a34a] font-bold bg-[#f8fafc]">✔ Yes</td>
                  <td className="py-2.5 px-4 border border-[#e2e8f0] text-[#475569] bg-[#f8fafc]">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">What to Do With Your YouTube Video Text</h2>
          <p className="text-[#475569] mb-4 text-base">
            Once you have converted your YouTube video to text, here are some of the most popular things people do with it:
          </p>

          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Turn It Into a Blog Post</h3>
          <p className="text-[#475569] mb-4 text-base">
            A YouTube transcript is essentially a rough draft of a blog post. You can clean it up, add headings, and publish it as written content. This is one of the fastest ways to repurpose video content for SEO.
          </p>

          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Create Social Media Posts</h3>
          <p className="text-[#475569] mb-4 text-base">
            Pull out key quotes, statistics, or insights from the transcript and use them as Twitter threads, LinkedIn posts, or Instagram captions.
          </p>

          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Build a Study Guide</h3>
          <p className="text-[#475569] mb-4 text-base">
            If you are converting a lecture or educational video, the transcript becomes a ready-made study guide. Highlight key points, add notes, and save it for revision.
          </p>

          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Generate Subtitles</h3>
          <p className="text-[#475569] mb-4 text-base">
            Download the transcript as an SRT or VTT file and use it as a subtitle file for the video — whether you are uploading to YouTube, a website, or a video editing tool.
          </p>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Convert Any YouTube Video to Text — Free</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Paste a YouTube URL and get the full transcript in seconds. Download as TXT, PDF, DOCX, CSV, VTT, or SRT.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Convert Video to Text Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Is it free to convert a YouTube video to text?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes — converting YouTube videos to text using this tool is 100% free. No account, no subscription, and no limits.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How accurate is the YouTube video to text conversion?</h3>
          <p className="text-[#475569] mb-4 text-base">Accuracy depends on the quality of the captions available for the video. Most YouTube videos have auto-generated captions that are reasonably accurate, especially for clear speech in English and other major languages.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I convert a YouTube video to text on my phone?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. The tool works in any mobile browser — just open YouTubeToTranscript.io, paste the video URL, and download or copy the transcript.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Does it work for long YouTube videos?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. The tool works for YouTube videos of any length — from short clips to full-length documentaries or lectures.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I convert a YouTube video to text in languages other than English?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. The tool supports 50+ languages, so you can convert YouTube videos to text in any language that has captions available on the video.</p>
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

export default HowToConvertYouTubeVideoToText
