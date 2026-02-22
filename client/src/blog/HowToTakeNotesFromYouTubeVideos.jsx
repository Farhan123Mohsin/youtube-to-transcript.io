import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

const AUDIENCE = [
  { icon: '🎓', title: 'Students', text: 'Taking notes from recorded lectures, online courses, and educational YouTube channels for studying and revision.' },
  { icon: '🔬', title: 'Researchers', text: 'Extracting information from interviews, talks, and conference presentations for academic or professional research.' },
  { icon: '✍️', title: 'Writers and Journalists', text: 'Pulling accurate quotes and facts from video content for articles, reports, or investigations.' },
  { icon: '💼', title: 'Professionals', text: 'Taking notes from webinars, training videos, and industry talks for professional development.' },
]

const METHODS = [
  { title: 'The Highlight Method', text: 'Open the transcript in Google Docs or Word. Watch the video and highlight the most important lines in the transcript as you go. After watching, copy all highlighted lines into a new document — these become your notes. Fast, simple, and effective.' },
  { title: 'The Cornell Method', text: 'Divide your note page into three sections — a narrow left column for keywords, a wide right column for notes, and a bottom section for summary. Use the transcript to fill in the notes column, then add keywords and a summary after watching. Great for studying and revision.' },
  { title: 'The Summary Method', text: 'Read through the full transcript without watching the video first. Write a one-paragraph summary of each main section in your own words. Then watch the video to fill in any gaps or add extra context. Best for long videos or lectures.' },
  { title: 'The Question Method', text: 'As you read the transcript, write down questions that each section answers — for example "What is the main cause of X?" or "How does Y work?". Use these questions as a study guide. When you can answer each question from memory, you have understood the material.' },
]

function HowToTakeNotesFromYouTubeVideos() {
  useEffect(() => {
    document.title = 'How to Take Notes from YouTube Videos Faster | YouTubeToTranscript.io'
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
            Productivity
          </span>
          <h1 className="text-[2.1rem] font-extrabold text-[#0f172a] leading-tight mb-3.5">
            How to Take Notes from YouTube Videos Faster
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">6 min read &nbsp;·&nbsp; Students &amp; Researchers &nbsp;·&nbsp; Productivity Tips</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            Taking notes from YouTube videos the traditional way — pausing, rewinding, typing — is slow and frustrating. There is a much faster way to do it, and it starts with getting the <strong className="text-[#0f172a]">video transcript</strong> before you even press play.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn the most effective methods for taking notes from YouTube videos, how to use transcripts to study smarter, and how to organize your notes so they are actually useful later.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">The Problem with Traditional YouTube Note-Taking</h2>
          <p className="text-[#475569] mb-4 text-base">
            Most people take notes from YouTube videos by watching and pausing repeatedly. This approach has several problems:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li>It is slow — pausing and rewinding adds up to a lot of wasted time</li>
            <li>You miss things — it is easy to miss an important point while you are typing</li>
            <li>It breaks your concentration — constantly stopping the video disrupts your flow of understanding</li>
            <li>Your notes are incomplete — you only write down what you catch in the moment</li>
          </ul>
          <p className="text-[#475569] mb-4 text-base">
            There is a smarter approach: get the full transcript first, then use it as the basis for your notes.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Who Benefits Most from Taking Notes from YouTube Videos?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            {AUDIENCE.map((item) => (
              <div key={item.title} className="bg-white border border-[#e2e8f0] rounded-[10px] p-5">
                <div className="text-[1.4rem] mb-2">{item.icon}</div>
                <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">{item.title}</h3>
                <p className="text-[0.87rem] text-[#64748b] m-0">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">The Fastest Method: Use a YouTube Transcript</h2>
          <p className="text-[#475569] mb-4 text-base">
            The fastest way to take notes from any YouTube video is to generate the transcript first and use it as your raw material. Here is how:
          </p>

          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 1</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Get the transcript</strong> — Go to <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link>, paste the YouTube video URL, and generate the full transcript in seconds.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 2</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Download as DOCX or TXT</strong> — Download the transcript as a Word document or plain text file so you can open it alongside the video or in your note-taking app.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 3</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Skim the transcript first</strong> — Before watching the video, skim through the transcript to get a quick overview of what is covered. This helps you know what to pay attention to when you watch.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 4</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Watch and highlight</strong> — Watch the video with the transcript open. Highlight or mark the most important lines directly in the transcript instead of stopping and typing from scratch.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">Step 5</div>
            <p className="m-0 text-[#334155]"><strong className="text-[#0f172a]">Condense into notes</strong> — After watching, go through your highlighted lines and rewrite them in your own words as concise notes. Add your own thoughts, questions, and connections.</p>
          </div>

          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> Use the <strong className="text-[#14532d]">timestamps</strong> in the transcript to note exactly where in the video a key point was made. This way you can jump back to that exact moment if you need to review it later.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">4 Effective Note-Taking Methods for YouTube Videos</h2>
          <p className="text-[#475569] mb-4 text-base">
            Once you have the transcript, you can apply any of these proven note-taking methods:
          </p>

          {METHODS.map((method, i) => (
            <div key={method.title} className="bg-white border border-[#e2e8f0] rounded-xl p-6 my-5">
              <span className="inline-block bg-indigo-500 text-white text-[0.8rem] font-bold py-0.5 px-2.5 rounded-full mb-2.5">Method {i + 1}</span>
              <h3 className="text-[1.05rem] font-bold text-[#0f172a] mb-2.5">{method.title}</h3>
              <p className="text-[0.95rem] text-[#475569] m-0">{method.text}</p>
            </div>
          ))}

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Organize Your YouTube Video Notes</h2>
          <p className="text-[#475569] mb-4 text-base">
            Taking notes is only useful if you can find and use them later. Here are some simple ways to keep your notes organized:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">Use a consistent naming system</strong> — Name each note file with the video title and date, for example &quot;Video Title — Notes — Jan 2026&quot;</li>
            <li><strong className="text-[#0f172a]">Add tags or labels</strong> — In apps like Notion or Obsidian, tag notes by topic so you can find related notes quickly</li>
            <li><strong className="text-[#0f172a]">Include the video link</strong> — Always paste the YouTube video URL at the top of your notes so you can find the source easily</li>
            <li><strong className="text-[#0f172a]">Add timestamps for key points</strong> — Note the timestamp next to important quotes so you can jump back to that moment in the video</li>
            <li><strong className="text-[#0f172a]">Review within 24 hours</strong> — Research shows that reviewing notes within 24 hours significantly improves retention</li>
          </ul>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Best Apps for Taking Notes from YouTube Videos</h2>
          <p className="text-[#475569] mb-4 text-base">
            The transcript works in any app. Here are some popular tools that work well for YouTube video notes:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">Notion</strong> — Great for organizing notes by topic, project, or course. Paste the transcript and add your highlights and comments alongside it.</li>
            <li><strong className="text-[#0f172a]">Google Docs</strong> — Simple and accessible. Download the transcript as DOCX and open it directly in Google Docs for editing and highlighting.</li>
            <li><strong className="text-[#0f172a]">Obsidian</strong> — Ideal for researchers and writers who want to connect ideas across multiple notes and videos.</li>
            <li><strong className="text-[#0f172a]">Microsoft Word</strong> — Download the transcript as a DOCX file and annotate it directly with highlights, comments, and edits.</li>
            <li><strong className="text-[#0f172a]">Evernote</strong> — Clip the transcript text and organize it into notebooks by subject or project.</li>
          </ul>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Take Better Notes from Any YouTube Video</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Get the full transcript in seconds — with timestamps. Download as DOCX, TXT, PDF, and more. Completely free.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Generate Transcript Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">What is the fastest way to take notes from a YouTube video?</h3>
          <p className="text-[#475569] mb-4 text-base">The fastest method is to generate the video transcript first using a tool like YouTubeToTranscript.io, then highlight the key points directly in the transcript instead of typing notes from scratch while watching.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I take notes from YouTube videos without watching the whole video?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. If you generate the transcript, you can skim it to find the most relevant sections and take notes from those parts only — without watching the entire video from start to finish.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Does the transcript include timestamps for note-taking?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. Every transcript generated includes timestamps, so you can note exactly where in the video each key point appears and jump back to it whenever you need to.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I use the transcript for academic notes?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes, but always rewrite key points in your own words rather than copying the transcript directly. This helps with understanding and retention, and avoids any issues with academic integrity policies.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Does this work for non-English YouTube videos?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. The tool supports transcript generation in 50+ languages, so you can take notes from YouTube videos in any supported language.</p>
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

export default HowToTakeNotesFromYouTubeVideos
