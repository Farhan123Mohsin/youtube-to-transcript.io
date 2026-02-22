import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

const SCRIPT_STRUCTURE = [
  { part: 'HOOK', desc: 'First 15–30 seconds. State the biggest benefit or ask a question that makes the viewer want to keep watching. No long intros. No "welcome back to my channel".' },
  { part: 'PROMISE', desc: 'Tell the viewer exactly what they will learn or get from this video. Be specific. "By the end of this video, you will know how to..."' },
  { part: 'BODY', desc: 'The main content broken into 3–5 clear sections. Each section should cover one key point. Use transitions between sections to keep momentum.' },
  { part: 'PATTERN BREAKS', desc: 'Every 2–3 minutes, change something — show a clip, cut to a different angle, use text on screen, or ask the viewer a question. This resets attention.' },
  { part: 'CTA', desc: 'End with one clear call to action — subscribe, watch the next video, leave a comment, or visit your website. Do not ask for multiple things at once.' },
]

const MISTAKES = [
  { icon: '🐢', title: 'Slow openings', text: 'Starting with long intros, greetings, or background context before getting to the point. Viewers click away fast.' },
  { icon: '🌀', title: 'Rambling', text: 'Going off on tangents or repeating the same point multiple times. Every sentence should move the video forward.' },
  { icon: '📚', title: 'Too much information', text: 'Trying to cover everything in one video. Pick one focused topic and cover it well rather than touching on ten things briefly.' },
  { icon: '😐', title: 'No personality', text: 'Writing that sounds like a Wikipedia article. Add your opinion, your experience, and your voice — that is what keeps viewers coming back.' },
  { icon: '🔚', title: 'Weak endings', text: 'Ending with "anyway, that\'s it for today" or trailing off without a clear conclusion or call to action.' },
  { icon: '🎯', title: 'No clear purpose', text: 'Starting to script without knowing exactly what you want the viewer to think, feel, or do after watching.' },
]

function HowToWriteBetterYouTubeScripts() {
  useEffect(() => {
    document.title = 'How to Write Better YouTube Scripts (That Keep Viewers Watching) | YouTubeToTranscript.io'
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
            Content Creation
          </span>
          <h1 className="text-[2.1rem] font-extrabold text-[#0f172a] leading-tight mb-3.5">
            How to Write Better YouTube Scripts (That Keep Viewers Watching)
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">8 min read &nbsp;·&nbsp; YouTubers &amp; Content Creators &nbsp;·&nbsp; Scripting Tips</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            A great YouTube video starts with a great script. The difference between a video that holds attention all the way through and one that people click away from in the first 30 seconds almost always comes down to how well it was written before the camera was ever turned on.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn how to <strong className="text-[#0f172a]">write better YouTube scripts</strong> — from structuring your ideas to keeping viewers engaged — plus a smart trick that most YouTubers overlook: using transcripts from your own past videos to improve future ones.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Why Scripting Your YouTube Videos Matters</h2>
          <p className="text-[#475569] mb-4 text-base">
            Many creators avoid scripting because they think it will make their delivery feel stiff or unnatural. But a good script does the opposite — it gives you confidence, reduces rambling, and ensures every word serves a purpose. Here is what a well-written script does for your channel:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">Improves watch time</strong> — A structured script keeps the video moving so viewers stay engaged longer</li>
            <li><strong className="text-[#0f172a]">Reduces editing time</strong> — Fewer mistakes and tangents mean less time cutting in post-production</li>
            <li><strong className="text-[#0f172a]">Makes your message clearer</strong> — Writing forces you to organize your thoughts before you speak</li>
            <li><strong className="text-[#0f172a]">Helps with SEO</strong> — A scripted video is more likely to use your target keywords naturally</li>
            <li><strong className="text-[#0f172a]">Builds confidence on camera</strong> — Knowing exactly what to say next removes hesitation and filler words</li>
          </ul>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">The Anatomy of a High-Retention YouTube Script</h2>
          <p className="text-[#475569] mb-4 text-base">
            Every high-performing YouTube video follows a similar structure. Here is a template you can use for almost any video:
          </p>
          <div className="bg-[#1e1e2e] rounded-xl py-7 px-8 my-6">
            <div className="text-[#a78bfa] text-[0.85rem] font-bold uppercase tracking-wider mb-4">📋 YouTube Script Structure</div>
            {SCRIPT_STRUCTURE.map((row) => (
              <div key={row.part} className="flex gap-4 items-start mb-3.5">
                <span className="text-[#a78bfa] font-bold text-[0.88rem] shrink-0 w-[120px] font-mono">{row.part}</span>
                <span className="text-[#e2e8f0] text-[0.9rem] leading-relaxed">{row.desc}</span>
              </div>
            ))}
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Write a Hook That Stops the Scroll</h2>
          <p className="text-[#475569] mb-4 text-base">
            The hook is the most important part of your script. If you lose the viewer in the first 30 seconds, nothing else matters. A strong hook does one of the following:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">Makes a bold statement</strong> — Something surprising or counterintuitive that makes the viewer think &quot;wait, really?&quot;</li>
            <li><strong className="text-[#0f172a]">Asks a question</strong> — A question the viewer is already asking themselves creates immediate relevance</li>
            <li><strong className="text-[#0f172a]">Shows the end result</strong> — Open the video with the most impressive outcome and then explain how to get there</li>
            <li><strong className="text-[#0f172a]">Creates a problem</strong> — Describe a pain point the viewer feels, then promise the solution is coming</li>
          </ul>
          <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-[10px] py-4 px-5 my-5 text-[#92400e] text-[0.95rem]">
            <strong className="text-[#92400e]">⚠️ Avoid this:</strong> Starting your video with &quot;Hey guys, welcome back to my channel, today we are going to be talking about...&quot; is one of the fastest ways to lose viewers. Get to the point immediately.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Writing Tips for Natural, Engaging Delivery</h2>
          <p className="text-[#475569] mb-4 text-base">
            A script should sound like you are talking, not reading. Here are some practical tips to make your script feel natural on camera:
          </p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Write the way you speak</h3>
          <p className="text-[#475569] mb-4 text-base">
            Use short sentences. Use contractions — &quot;you&apos;re&quot; instead of &quot;you are&quot;, &quot;don&apos;t&quot; instead of &quot;do not&quot;. Read your script out loud as you write it. If it sounds awkward when you say it, rewrite it.
          </p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Keep sentences short</h3>
          <p className="text-[#475569] mb-4 text-base">
            Long sentences are hard to deliver on camera and hard for viewers to follow. Aim for sentences of 15 words or fewer. If a sentence has more than two commas, break it into two sentences.
          </p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Use the word &quot;you&quot; often</h3>
          <p className="text-[#475569] mb-4 text-base">
            Talking directly to the viewer creates a personal connection. Replace &quot;people often struggle with...&quot; with &quot;you might have noticed that...&quot;. The more personal your language, the more engaged the viewer feels.
          </p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Add pauses to your script</h3>
          <p className="text-[#475569] mb-4 text-base">
            Mark pauses in your script where you want to slow down for emphasis. A single word or short sentence on its own line signals a beat. Pauses make your delivery feel more natural and give viewers time to absorb what you said.
          </p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Avoid jargon unless your audience expects it</h3>
          <p className="text-[#475569] mb-4 text-base">
            Use simple, clear language whenever possible. If you need to use technical terms, define them immediately after introducing them.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Common YouTube Scripting Mistakes to Avoid</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            {MISTAKES.map((item) => (
              <div key={item.title} className="bg-white border border-[#e2e8f0] rounded-[10px] p-5">
                <div className="text-[1.3rem] mb-2">{item.icon}</div>
                <h3 className="text-[#dc2626] text-[0.93rem] font-bold mb-1.5">{item.title}</h3>
                <p className="text-[0.87rem] text-[#64748b] m-0">{item.text}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">A Smarter Way to Improve Your Scripts — Use Your Own Transcripts</h2>
          <p className="text-[#475569] mb-4 text-base">
            One of the most underused tools for improving your YouTube scripts is your own past videos. Here is how to use transcripts to get better over time:
          </p>
          <div className="bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe] border border-[#c4b5fd] rounded-xl py-6 px-7 my-7">
            <h3 className="text-[1.05rem] font-bold text-[#5b21b6] mb-2.5">🔍 The Transcript Review Method</h3>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5">Generate the transcript of one of your recent videos and read it as if you are reading someone else&apos;s writing. Look for these things:</p>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5">— Where did you repeat yourself? — Where did you use filler phrases like &quot;basically&quot;, &quot;you know&quot;, &quot;kind of&quot;? — Where did the script lose its momentum or become unclear? — Which parts felt the most natural and engaging?</p>
            <p className="text-[#4c1d95] text-[0.95rem] m-0">The patterns you spot in your transcripts are the exact things to fix in your next script. This is the fastest feedback loop available to any YouTuber.</p>
          </div>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-4 px-5 my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wide mb-1.5">How to do it</div>
            <p className="m-0 text-[#334155]">Go to <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link>, paste the URL of one of your own YouTube videos, and generate the transcript. Download it as a DOCX file and review it like an editor reviewing a draft. The weaknesses in your script will be immediately obvious when you read them in text form.</p>
          </div>
          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> The best YouTubers study transcripts of top-performing videos in their niche — not just their own. Generate transcripts of videos that have high view counts and strong retention in your topic area, and study how those scripts are structured. Pay attention to their hooks, transitions, and pacing.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How Long Should a YouTube Script Be?</h2>
          <p className="text-[#475569] mb-4 text-base">
            Script length depends on your target video length. As a rough guide, the average person speaks at about 130 to 150 words per minute on camera. Use this to estimate:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">5-minute video</strong> — approximately 650 to 750 words</li>
            <li><strong className="text-[#0f172a]">8-minute video</strong> — approximately 1,050 to 1,200 words</li>
            <li><strong className="text-[#0f172a]">10-minute video</strong> — approximately 1,300 to 1,500 words</li>
            <li><strong className="text-[#0f172a]">15-minute video</strong> — approximately 1,950 to 2,250 words</li>
          </ul>
          <p className="text-[#475569] mb-4 text-base">
            These are guides, not rules. Some creators speak faster, some slower. Record yourself for one minute and count the words to find your own speaking pace.
          </p>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Review Your YouTube Scripts Using Transcripts</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Generate the transcript of any YouTube video — including your own — to spot weaknesses, improve your writing, and script better videos. Free, instant, no signup.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Generate Transcript Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Should I script every YouTube video word for word?</h3>
          <p className="text-[#475569] mb-4 text-base">It depends on your style. Some creators script every word for accuracy and efficiency. Others prefer a detailed outline with bullet points. Try both and see which produces better delivery for you. The key is having a clear structure before you record — even if you do not script every sentence.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How do I make my scripted delivery sound natural?</h3>
          <p className="text-[#475569] mb-4 text-base">Read your script out loud multiple times before recording. Record a rough take and watch it back. The more familiar you are with the script, the more natural it will sound. Over time, scripted delivery becomes second nature.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How can I use transcripts to improve my YouTube scripts?</h3>
          <p className="text-[#475569] mb-4 text-base">Generate the transcript of your existing videos and read them as written text. You will immediately spot filler words, repetition, weak hooks, and unclear sections that are hard to notice when you are watching the video. Fix these in your next script.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">What is the best structure for a YouTube script?</h3>
          <p className="text-[#475569] mb-4 text-base">Hook → Promise → Body (3 to 5 sections) → Pattern breaks every 2 to 3 minutes → Clear call to action at the end. This structure works for tutorials, vlogs, opinion videos, and most other formats.</p>
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

export default HowToWriteBetterYouTubeScripts
