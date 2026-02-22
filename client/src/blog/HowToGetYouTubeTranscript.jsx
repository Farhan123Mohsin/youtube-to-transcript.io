import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

function HowToGetYouTubeTranscript() {
  useEffect(() => {
    document.title = 'How to Get a YouTube Transcript (Step-by-Step Guide) | YouTubeToTranscript.io'
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
            How to Get a YouTube Transcript (Step-by-Step Guide)
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">5 min read &nbsp;·&nbsp; Free Tool &nbsp;·&nbsp; Works for All YouTube Videos</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            Need to get a <strong className="text-[#0f172a]">YouTube transcript</strong> quickly? Whether you want to copy a quote, take notes from a lecture, or repurpose video content — getting a transcript from a YouTube video is easier than most people think.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn exactly how to get a YouTube transcript in seconds, what tools to use, and how to download it in the format you need.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">What Is a YouTube Transcript?</h2>
          <p className="text-[#475569] mb-4 text-base">
            A YouTube transcript is a text version of everything spoken in a YouTube video — word by word, with optional timestamps showing exactly when each line was said. Transcripts are useful for:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li>Taking notes from educational videos or lectures</li>
            <li>Quoting a video accurately without rewatching it</li>
            <li>Repurposing video content into blog posts or social media</li>
            <li>Making video content accessible to people who are deaf or hard of hearing</li>
            <li>Translating video content into another language</li>
            <li>SEO — extracting keywords and topics from video content</li>
          </ul>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Method 1: Get a YouTube Transcript Using YouTubeToTranscript.io (Recommended)</h2>
          <p className="text-[#475569] mb-4 text-base">
            The fastest and most flexible way to get a YouTube transcript is by using a dedicated tool. Here is how to do it step by step:
          </p>

          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 1</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Copy the YouTube video URL</strong> — Go to the YouTube video you want a transcript for and copy the URL from your browser&apos;s address bar.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 2</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Paste the URL</strong> — Go to <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link> and paste the URL into the input field.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 3</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Click Generate</strong> — Hit the Generate button and your full transcript will appear within seconds — complete with timestamps.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 4</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Copy or Download</strong> — Copy the transcript to your clipboard with one click, or download it in your preferred format: TXT, PDF, DOCX, CSV, VTT, or SRT.</p>
          </div>

          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> If you need the transcript for video editing or subtitles, download it as an SRT or VTT file — these formats include timestamps and are compatible with most video editors.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Method 2: Get a YouTube Transcript Directly from YouTube</h2>
          <p className="text-[#475569] mb-4 text-base">
            YouTube also has a built-in transcript feature, but it is more limited. Here is how to access it:
          </p>
          <ol className="text-[#475569] pl-[22px] mb-4 text-base list-decimal space-y-2">
            <li>Open the YouTube video in your browser</li>
            <li>Click the <strong className="text-[#0f172a]">three dots (…)</strong> below the video title</li>
            <li>Select <strong className="text-[#0f172a]">&quot;Show transcript&quot;</strong> from the menu</li>
            <li>The transcript will appear in a panel on the right side of the screen</li>
          </ol>
          <p className="text-[#475569] mb-4 text-base">
            The built-in YouTube transcript only shows plain text in your browser — you cannot download it directly or export it to different formats. This is why a dedicated tool is much more useful for most people.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Which Method Should You Use?</h2>
          <p className="text-[#475569] mb-4 text-base">
            If you just need a quick read of the transcript while watching the video, YouTube&apos;s built-in option works fine. But if you need to:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li>Download the transcript as a file</li>
            <li>Get it in PDF, DOCX, SRT, or VTT format</li>
            <li>Get transcripts in 50+ different languages</li>
            <li>Copy the transcript with one click</li>
          </ul>
          <p className="text-[#475569] mb-4 text-base">
            — then using a dedicated <strong className="text-[#0f172a]">YouTube transcript generator</strong> is the better option.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Can You Get a Transcript for Any YouTube Video?</h2>
          <p className="text-[#475569] mb-4 text-base">
            You can get a transcript for any YouTube video that has captions enabled — either auto-generated by YouTube or manually added by the creator. Most videos on YouTube have auto-generated captions available, so transcripts work for the vast majority of videos.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            Videos without any captions — such as very short clips, music videos, or videos with no speech — may not produce a transcript.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">What Can You Do With a YouTube Transcript?</h2>
          <p className="text-[#475569] mb-4 text-base">
            Once you have the transcript, the possibilities are wide:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">Blog posts</strong> — Turn a YouTube video into a written article</li>
            <li><strong className="text-[#0f172a]">Social media content</strong> — Pull out quotes and key points for Twitter, LinkedIn, or Instagram</li>
            <li><strong className="text-[#0f172a]">Study notes</strong> — Quickly review lecture content without rewatching</li>
            <li><strong className="text-[#0f172a]">Subtitles</strong> — Use the SRT or VTT file as subtitles for the video</li>
            <li><strong className="text-[#0f172a]">Translation</strong> — Paste the transcript into a translation tool to get it in another language</li>
          </ul>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Get Your YouTube Transcript — Free</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Paste any YouTube URL and get a full transcript with timestamps in seconds. No signup required.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Generate Transcript Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Is it free to get a YouTube transcript?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes — using YouTubeToTranscript.io is completely free. No account, no subscription, no hidden charges.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I get a YouTube transcript with timestamps?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. All transcripts generated include timestamps so you can see exactly when each line was spoken in the video.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">What formats can I download the transcript in?</h3>
          <p className="text-[#475569] mb-4 text-base">You can download in TXT, PDF, DOCX, CSV, VTT, and SRT formats.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Does it work for non-English videos?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes — the tool supports transcript generation in 50+ languages.</p>
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

export default HowToGetYouTubeTranscript
