import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

const BENEFITS = [
  { icon: '🎯', title: 'Jump to Any Point', text: 'Use timestamps to navigate directly to a specific part of the video without rewatching from the beginning.' },
  { icon: '✂️', title: 'Video Editing', text: 'Editors use timestamped transcripts to find and cut specific clips quickly and accurately.' },
  { icon: '🎬', title: 'Subtitle Sync', text: 'SRT and VTT subtitle files use timestamps to sync text with the video — perfect for adding captions.' },
  { icon: '📖', title: 'Research and Citation', text: 'Cite a specific moment in a video precisely using the timestamp as a reference point.' },
  { icon: '📝', title: 'Better Note Taking', text: 'Note down timestamps alongside key points so you can return to the source material easily.' },
  { icon: '⚡', title: 'Faster Content Review', text: 'Skim a long transcript and use timestamps to jump only to the sections you actually need.' },
]

const TIMESTAMP_LINES = [
  { time: '[00:00:03]', text: "Welcome to today's video on productivity tips for content creators." },
  { time: '[00:00:09]', text: 'In this video, we are going to cover five strategies that will save you hours every week.' },
  { time: '[00:00:17]', text: "Let's start with the first and most important one — batching your content." },
  { time: '[00:00:24]', text: 'Batching means creating multiple pieces of content in a single session instead of spreading it out.' },
]

function YouTubeTranscriptWithTimestamps() {
  useEffect(() => {
    document.title = 'How to Get a YouTube Transcript with Timestamps | YouTubeToTranscript.io'
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
            How to Get a YouTube Transcript with Timestamps
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">5 min read &nbsp;·&nbsp; Free Tool &nbsp;·&nbsp; All Formats Supported</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            Looking for a <strong className="text-[#0f172a]">YouTube transcript with timestamps</strong>? Timestamps in a transcript tell you exactly when each line of text was spoken in the video — making it far more useful than plain text alone.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn how to get a timestamped YouTube transcript for free, what the timestamps look like, and how to use them effectively.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">What Does a YouTube Transcript with Timestamps Look Like?</h2>
          <p className="text-[#475569] mb-4 text-base">
            A timestamped transcript pairs each line of spoken text with the exact time in the video when it was said. Here is an example of what a typical timestamped transcript looks like:
          </p>
          <div className="bg-[#1e1e2e] rounded-[10px] py-6 px-7 my-6 font-mono text-[0.9rem]">
            {TIMESTAMP_LINES.map((line, i) => (
              <div key={i} className="flex gap-4 mb-2.5 items-start">
                <span className="text-[#a78bfa] font-semibold shrink-0">{line.time}</span>
                <span className="text-[#e2e8f0]">{line.text}</span>
              </div>
            ))}
          </div>
          <p className="text-[#475569] mb-4 text-base">
            Each timestamp shows the hours, minutes, and seconds so you can jump to that exact point in the video at any time.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Why Are Timestamps Useful in a YouTube Transcript?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            {BENEFITS.map((item) => (
              <div key={item.title} className="bg-white border border-[#e2e8f0] rounded-[10px] p-5">
                <div className="text-[1.4rem] mb-2">{item.icon}</div>
                <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">{item.title}</h3>
                <p className="text-[0.87rem] text-[#64748b] m-0">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Get a YouTube Transcript with Timestamps — Step by Step</h2>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 1</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Copy the YouTube video URL</strong> — Go to the YouTube video and copy its URL from the address bar.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 2</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Paste it into the tool</strong> — Open <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link> and paste the URL into the input field on the homepage.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 3</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Generate the transcript</strong> — Click Generate. The full transcript will appear in seconds — with timestamps included automatically.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 4</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Copy or download</strong> — Copy the timestamped transcript to your clipboard, or download it in your preferred format. All 6 download formats — TXT, PDF, DOCX, CSV, VTT, and SRT — include timestamps.</p>
          </div>

          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> For video editing purposes, download the transcript as an <strong className="text-[#14532d]">SRT file</strong> — it is a subtitle format where each timestamp is already formatted correctly for use in video editors like Premiere Pro, DaVinci Resolve, and Final Cut Pro.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Which Download Format Keeps the Timestamps?</h2>
          <p className="text-[#475569] mb-4 text-base">
            All 6 download formats available on this tool include timestamps. Here is how timestamps appear in each format:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">TXT</strong> — Timestamps appear as plain text labels before each line, e.g. [00:00:03]</li>
            <li><strong className="text-[#0f172a]">PDF</strong> — Timestamps are included in the printed document alongside each line of text</li>
            <li><strong className="text-[#0f172a]">DOCX</strong> — Timestamps appear in the Word document and can be edited or removed as needed</li>
            <li><strong className="text-[#0f172a]">CSV</strong> — Timestamps appear as a separate column, making it easy to sort or filter in a spreadsheet</li>
            <li><strong className="text-[#0f172a]">SRT</strong> — Timestamps are formatted in the standard SRT subtitle format (00:00:03,000 --&gt; 00:00:09,000)</li>
            <li><strong className="text-[#0f172a]">VTT</strong> — Timestamps are formatted in the WebVTT format used by web-based video players</li>
          </ul>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Use a Timestamped Transcript for Video Editing</h2>
          <p className="text-[#475569] mb-4 text-base">
            If you are a video editor, a timestamped transcript is one of the most useful tools you can have. Here is how to use it:
          </p>
          <ol className="text-[#475569] pl-[22px] mb-4 text-base list-decimal space-y-2">
            <li>Generate the transcript and download it as an <strong className="text-[#0f172a]">SRT file</strong></li>
            <li>Import the SRT file into your video editing software</li>
            <li>The subtitles will automatically sync with the video based on the timestamps</li>
            <li>Edit, adjust, or restyle the subtitles as needed inside your editor</li>
          </ol>
          <p className="text-[#475569] mb-4 text-base">
            This saves hours compared to manually typing and syncing subtitles by hand.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Can You Get Timestamps for YouTube Videos in Any Language?</h2>
          <p className="text-[#475569] mb-4 text-base">
            Yes. Timestamped transcripts are available for YouTube videos in all 50+ supported languages. The timestamps work the same way regardless of the language — each line of text is paired with the exact moment it was spoken in the video.
          </p>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Get Your Timestamped YouTube Transcript — Free</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Paste any YouTube URL and get a full transcript with timestamps in seconds. Download as TXT, PDF, DOCX, CSV, VTT, or SRT.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Generate Transcript Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Do all YouTube transcripts include timestamps?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. Every transcript generated by this tool automatically includes timestamps — you do not need to enable or select any special option.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I remove the timestamps from the transcript?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. If you download the transcript as a DOCX or TXT file, you can easily delete the timestamp labels manually. Alternatively, just use the plain copy option and paste the text into your preferred editor to clean it up.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">What timestamp format is used in the SRT file?</h3>
          <p className="text-[#475569] mb-4 text-base">SRT files use the standard subtitle timestamp format: hours:minutes:seconds,milliseconds — for example, 00:00:03,000 --&gt; 00:00:09,000. This is universally compatible with all major video editing software and media players.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Is there a limit on video length for timestamped transcripts?</h3>
          <p className="text-[#475569] mb-4 text-base">No. The tool works for YouTube videos of any length — short clips, full lectures, documentaries, and everything in between.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I use the timestamped transcript to add subtitles to my own video?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. Download the transcript as an SRT or VTT file and import it into your video editor or upload it directly to YouTube, Vimeo, or any other video platform as a subtitle file.</p>
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

export default YouTubeTranscriptWithTimestamps
