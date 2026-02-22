import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

const METHODS = [
  {
    title: 'Study Competitor Videos Using Transcripts',
    text: 'Generate the transcripts of the top 3 to 5 videos already ranking for your topic. Read them as text — this is far faster than watching each video in full. Identify what they covered well, what they missed, what was confusing, and where you can add more value or a different perspective. This is the fastest competitive research method available to any YouTuber.',
  },
  {
    title: 'Read Articles, Studies, and Primary Sources',
    text: 'Do not limit your research to YouTube. Read blog posts, academic papers, news articles, and primary sources related to your topic. The more deeply you understand a subject, the more confident and authoritative your delivery will be on camera — and viewers can feel the difference.',
  },
  {
    title: 'Use Reddit and Forums for Real Questions',
    text: 'Search your topic on Reddit, Quora, and niche forums. These platforms are full of real people asking real questions in their own words. The exact phrasing people use when asking questions online is often the same language they type into YouTube search — making these platforms invaluable for both research and keyword ideas.',
  },
  {
    title: 'Interview or Survey Your Audience',
    text: 'If you already have subscribers or a community, ask them directly what they want to learn. Post a question in your community tab, send a poll, or read through your existing comments. First-hand audience feedback is more valuable than any keyword tool.',
  },
]

const TOOLS = [
  { icon: '📝', title: 'YouTubeToTranscript.io', desc: 'Generate transcripts of competitor videos instantly. Read what they covered in minutes instead of watching hours of content.' },
  { icon: '🔍', title: 'YouTube Search Autocomplete', desc: 'Free and built-in. Shows exactly what people are searching for right now in your niche.' },
  { icon: '💬', title: 'Reddit and Quora', desc: 'Find real questions your audience is asking in their own words. Invaluable for understanding what people actually want to know.' },
  { icon: '📊', title: 'Google Trends', desc: 'Check if interest in your topic is growing, declining, or seasonal before investing time in a video.' },
  { icon: '🗣️', title: 'YouTube Comments', desc: 'The best source of audience intelligence available. Read comments on top videos in your niche to find gaps and questions.' },
  { icon: '📰', title: 'Google News and Blogs', desc: 'Stay current with your niche by reading industry blogs and news. Timely topics get a natural traffic boost.' },
]

function HowToDoResearchForYouTubeVideos() {
  useEffect(() => {
    document.title = 'How to Do Research for YouTube Videos (The Right Way) | YouTubeToTranscript.io'
    return () => { document.title = 'YouTubeToTranscript.io' }
  }, [])

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#1a1a2e] leading-[1.8] font-sans">
      <BookmarkBar />
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
            How to Do Research for YouTube Videos (The Right Way)
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">7 min read &nbsp;·&nbsp; YouTubers &amp; Content Creators &nbsp;·&nbsp; Research Strategy</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            The biggest difference between a YouTube video that gets 500 views and one that gets 500,000 is rarely the camera quality or the editing. Most of the time it comes down to one thing — <strong className="text-[#0f172a]">research done before a single word is scripted or a single frame is filmed</strong>.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn exactly how to research YouTube videos properly — from understanding your audience to studying competitor content — so every video you make starts from a position of strength.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Why Research Matters Before You Script or Film</h2>
          <p className="text-[#475569] mb-4 text-base">
            Skipping research is the most common reason YouTube videos underperform. Without research you risk:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li>Making a video nobody is searching for</li>
            <li>Covering a topic that has already been done better by someone else</li>
            <li>Missing the specific questions your audience actually wants answered</li>
            <li>Wasting hours filming and editing content that gets no traction</li>
          </ul>
          <p className="text-[#475569] mb-4 text-base">
            Research does not have to take long — but it does have to happen. Even 30 minutes of focused research before scripting can completely change the outcome of a video.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Step 1 — Understand What Your Audience Is Actually Asking</h2>
          <p className="text-[#475569] mb-4 text-base">
            Before you research the topic itself, research the people who will watch your video. You need to understand what questions they are asking, what they already know, and what they are struggling with.
          </p>
          <div className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-[18px] px-[22px] my-5">
            <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wider mb-1.5">How to do it</div>
            <p className="text-[#334155] text-base m-0">Go to YouTube and search your topic. Scroll through the comments on the top 3 to 5 videos. The comments section is a goldmine — viewers ask follow-up questions, share what confused them, and tell you exactly what they wished the video had covered. These are the gaps your video can fill.</p>
          </div>
          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> Use the transcript of top-performing competitor videos to quickly skim what they covered — and more importantly, what they missed. Generate the transcript at <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link> and read it in minutes instead of watching the full video.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Step 2 — Research the Topic Deeply</h2>
          <p className="text-[#475569] mb-4 text-base">
            Once you know what your audience wants, research the topic itself so you can deliver genuinely valuable, accurate content. Here is how:
          </p>
          {METHODS.map((item, i) => (
            <div key={item.title} className="bg-white border border-[#e2e8f0] rounded-xl p-6 my-5">
              <span className="inline-block bg-indigo-500 text-white text-[0.8rem] font-bold py-0.5 px-2.5 rounded-full mb-2.5">Method {i + 1}</span>
              <h3 className="text-[1.05rem] font-bold text-[#0f172a] mb-2.5">{item.title}</h3>
              <p className="text-[0.95rem] text-[#475569] m-0">{item.text}</p>
            </div>
          ))}

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Step 3 — Find Your Unique Angle</h2>
          <p className="text-[#475569] mb-4 text-base">
            After researching the topic and the competition, the most important research question to answer is: <strong className="text-[#0f172a]">what is my unique angle?</strong>
          </p>
          <p className="text-[#475569] mb-4 text-base">
            If your video covers the exact same ground in the exact same way as videos that already exist, there is no reason for the algorithm to surface your video over theirs. You need a differentiator. This could be:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li>A personal story or experience that no one else has</li>
            <li>A contrarian viewpoint or a common misconception you can debunk</li>
            <li>A more up-to-date or comprehensive version of an existing video</li>
            <li>A beginner-friendly or advanced version of content that only exists at one level</li>
            <li>A specific niche or audience that existing videos have not addressed</li>
          </ul>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Step 4 — Research Keywords and Search Demand</h2>
          <p className="text-[#475569] mb-4 text-base">
            Even the best video will get limited views if nobody is searching for it. Research keyword demand before committing to a topic:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">YouTube search bar</strong> — Type your topic into YouTube search and look at the autocomplete suggestions. These are real searches people are making right now.</li>
            <li><strong className="text-[#0f172a]">Google search</strong> — Search your topic on Google and look at the &quot;People also ask&quot; section. These questions are high-demand search queries that translate directly to YouTube.</li>
            <li><strong className="text-[#0f172a]">YouTube comments</strong> — The questions viewers ask in comments on related videos are often direct keyword opportunities for new videos.</li>
          </ul>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Best Tools for YouTube Video Research</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            {TOOLS.map((tool) => (
              <div key={tool.title} className="bg-white border border-[#e2e8f0] rounded-[10px] p-5">
                <div className="text-[1.4rem] mb-2">{tool.icon}</div>
                <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">{tool.title}</h3>
                <p className="text-[0.87rem] text-[#64748b] m-0">{tool.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Use Competitor Transcripts for Research</h2>
          <p className="text-[#475569] mb-4 text-base">
            One of the most powerful and underused research techniques for YouTubers is reading competitor video transcripts. Here is a step-by-step process:
          </p>
          <div className="bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe] border border-[#c4b5fd] rounded-xl py-6 px-7 my-7">
            <h3 className="text-[1.05rem] font-bold text-[#5b21b6] mb-2.5">🔍 The Competitor Transcript Research Method</h3>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5"><strong>Step 1:</strong> Search your topic on YouTube and identify the top 3 to 5 videos that are already ranking well.</p>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5"><strong>Step 2:</strong> Copy each video URL and paste it into <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link> to generate the transcript.</p>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5"><strong>Step 3:</strong> Read each transcript and take notes on — what topics they covered, what they skipped, where they were vague, and what questions the comments section reveals they did not answer well.</p>
            <p className="text-[#4c1d95] text-[0.95rem] m-0"><strong>Step 4:</strong> Use your notes to build a video outline that covers everything they covered — but fills in the gaps, adds your unique angle, and answers the questions they left unanswered.</p>
          </div>
          <p className="text-[#475569] mb-4 text-base">
            This method turns competitor research from a hours-long process into something you can do in under 30 minutes — and the result is a video that is objectively more comprehensive and useful than what already exists.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How Much Time Should You Spend on Research?</h2>
          <p className="text-[#475569] mb-4 text-base">
            Research time should be proportional to the ambition of the video:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">Short, simple tutorials</strong> — 20 to 30 minutes of research is usually enough</li>
            <li><strong className="text-[#0f172a]">Educational or opinion videos</strong> — 1 to 2 hours to read sources, study transcripts, and find your angle</li>
            <li><strong className="text-[#0f172a]">Documentary or deep-dive videos</strong> — Several days or weeks of ongoing research as you develop the concept</li>
          </ul>
          <p className="text-[#475569] mb-4 text-base">
            The key is to always research before you script — not after. Research shapes the script. Scripting without research means you are guessing at what your audience wants instead of knowing.
          </p>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Research Competitor Videos in Minutes</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Generate transcripts of any YouTube video instantly. Read competitor content in minutes instead of watching hours of video. Free, no signup required.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Generate Transcript Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How do I research a YouTube video topic if I am a beginner?</h3>
          <p className="text-[#475569] mb-4 text-base">Start with YouTube search autocomplete — type your topic and see what suggestions appear. Then watch the top 3 videos on that topic and read their comments carefully. The comments will tell you everything you need to know about what the audience wants that existing videos have not delivered.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How can I use transcripts to research competitor YouTube videos?</h3>
          <p className="text-[#475569] mb-4 text-base">Generate the transcript of any competitor video at YouTubeToTranscript.io and read it as text. You can skim a 20-minute video in 5 minutes this way. Look for what they covered, what they skipped, and what questions the comments show they did not answer well.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How do I find a unique angle for my YouTube video?</h3>
          <p className="text-[#475569] mb-4 text-base">After researching existing videos on your topic, ask yourself: what did they all miss? What question did nobody answer properly? What perspective or experience do I have that nobody else has shared? Your unique angle comes from the gap between what exists and what your audience actually needs.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Should I research keywords before or after choosing a topic?</h3>
          <p className="text-[#475569] mb-4 text-base">Both. Start with an audience-driven topic — something you know your viewers want. Then research keywords to find the best way to title and frame the video so it can be discovered through search. Topic first, keywords second.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How do I know if a topic has enough search demand on YouTube?</h3>
          <p className="text-[#475569] mb-4 text-base">Type the topic into YouTube search and check how many videos already exist and how many views the top videos have. If similar videos are getting consistent views, there is demand. Also check YouTube autocomplete — if your topic appears as a suggestion, people are actively searching for it.</p>
        </div>
      </article>

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

export default HowToDoResearchForYouTubeVideos
