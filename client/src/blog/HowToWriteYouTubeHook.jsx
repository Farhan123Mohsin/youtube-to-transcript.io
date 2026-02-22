import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

const HOOKS = [
  {
    title: 'The Bold Claim Hook',
    text: 'Open with a statement that is surprising, counterintuitive, or challenges what the viewer believes. The more unexpected the claim, the more powerful the hook — as long as you deliver on it in the video.',
    example: '"Everything you have been told about growing on YouTube is wrong. And I can prove it in the next 10 minutes."',
  },
  {
    title: 'The Question Hook',
    text: 'Ask a question the viewer is already asking themselves. The key is specificity — a vague question creates no urgency. A specific question that hits exactly where the viewer is right now creates immediate connection.',
    example: '"Why do some YouTube channels explode to 100,000 subscribers in a year while others stay stuck at 500 forever — even when the content is just as good?"',
  },
  {
    title: 'The Result First Hook',
    text: 'Show or state the end result immediately, then promise to show how you got there. This works especially well for tutorials and transformation videos. The viewer sees what is possible and stays to learn how to achieve it.',
    example: '"In the last 90 days I went from 200 subscribers to 47,000. No paid ads, no viral moment. Just one small change I made to every video. Here is exactly what I did."',
  },
  {
    title: 'The Story Hook',
    text: 'Drop the viewer directly into the middle of a story moment — no setup, no introduction, no context. Start in the middle of something happening and let the story pull them forward. The brain is wired to want to know how a story ends.',
    example: '"I was sitting in my car at 11pm, about to delete my entire YouTube channel. I had posted 40 videos and none of them had broken 200 views. Then my phone buzzed."',
  },
  {
    title: 'The Mistake Hook',
    text: 'Open by calling out a common mistake your audience is making. This immediately creates relevance — the viewer thinks "wait, am I doing that?" — and keeps watching to find out if they need to change something.',
    example: '"If your YouTube videos are starting with \'Hey guys, welcome back to my channel\' — you are losing 40% of your viewers in the first 10 seconds. Here is what to do instead."',
  },
  {
    title: 'The Curiosity Gap Hook',
    text: 'Give just enough information to make the viewer curious — but withhold the most important detail. This creates a gap between what they know and what they want to know, and the only way to close that gap is to keep watching.',
    example: '"There is one thing the fastest-growing YouTube channels all do differently. It has nothing to do with thumbnails, titles, or posting frequency. I will show you exactly what it is — but first, let me show you why everything else stops working without it."',
  },
  {
    title: 'The Empathy Hook',
    text: 'Open by accurately describing a feeling, frustration, or situation your viewer is experiencing right now. When someone hears their exact thoughts reflected back at them, they feel immediately understood — and they trust that this video was made specifically for them.',
    example: '"You spend 10 hours making a video. You edit it perfectly. You hit publish. And then... 47 views. Most of them probably you. If that sounds familiar, this video is for you."',
  },
]

function HowToWriteYouTubeHook() {
  useEffect(() => {
    document.title = 'How to Write a YouTube Hook That Stops Viewers from Clicking Away | YouTubeToTranscript.io'
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
            How to Write a YouTube Hook That Stops Viewers from Clicking Away
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">7 min read &nbsp;·&nbsp; YouTubers &amp; Content Creators &nbsp;·&nbsp; Watch Time &amp; Retention</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            You have about 15 seconds. That is how long the average viewer takes to decide whether to keep watching your YouTube video or click away. Everything comes down to your <strong className="text-[#0f172a]">YouTube hook</strong> — the opening lines that grab attention and make the viewer feel like they absolutely cannot stop watching.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn 7 proven hook formulas with real examples, what makes hooks work psychologically, and how to test and improve your hooks over time.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">What Is a YouTube Hook and Why Does It Matter?</h2>
          <p className="text-[#475569] mb-4 text-base">
            A YouTube hook is the first 15 to 30 seconds of your video. Its only job is to answer one question in the viewer&apos;s mind: <em>why should I keep watching this?</em>
          </p>
          <p className="text-[#475569] mb-4 text-base">
            A strong hook directly impacts:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">Audience retention</strong> — Videos that hook viewers in the first 30 seconds have dramatically better overall watch time</li>
            <li><strong className="text-[#0f172a]">YouTube algorithm</strong> — The algorithm measures how many viewers stay past the first 30 seconds. Strong hooks signal quality to the algorithm and push your video to more people</li>
            <li><strong className="text-[#0f172a]">Click-through rate</strong> — Your thumbnail and title get the click. Your hook decides whether that click becomes a watch.</li>
            <li><strong className="text-[#0f172a]">Subscriber growth</strong> — Viewers who are hooked in the first 30 seconds are far more likely to watch to the end — and subscribers come from people who watch to the end</li>
          </ul>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">What Makes a Hook Work — The Psychology</h2>
          <p className="text-[#475569] mb-4 text-base">
            Every effective YouTube hook does at least one of these things to the viewer&apos;s brain:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">Creates curiosity</strong> — Introduces a question or gap in knowledge the viewer wants filled</li>
            <li><strong className="text-[#0f172a]">Establishes stakes</strong> — Makes clear why this topic matters and what the viewer stands to gain or lose</li>
            <li><strong className="text-[#0f172a]">Triggers emotion</strong> — Surprise, fear, excitement, or recognition — emotion stops the scroll</li>
            <li><strong className="text-[#0f172a]">Makes a promise</strong> — Tells the viewer exactly what they will get if they keep watching</li>
          </ul>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">7 Proven YouTube Hook Formulas</h2>
          {HOOKS.map((item, i) => (
            <div key={item.title} className="bg-white border border-[#e2e8f0] rounded-xl p-6 my-5">
              <span className="inline-block bg-indigo-500 text-white text-[0.8rem] font-bold py-0.5 px-2.5 rounded-full mb-2.5">Formula {i + 1}</span>
              <h3 className="text-[1.05rem] font-bold text-[#0f172a] mb-2.5">{item.title}</h3>
              <p className="text-[0.95rem] text-[#475569] mb-3">{item.text}</p>
              <div className="bg-[#f5f3ff] border border-[#c4b5fd] rounded-lg py-3.5 px-[18px] mt-3">
                <div className="text-[0.78rem] font-bold text-[#7c3aed] uppercase tracking-wide mb-1.5">Example</div>
                <p className="text-[#4c1d95] text-[0.92rem] m-0 italic">{item.example}</p>
              </div>
            </div>
          ))}

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">What to Avoid in Your YouTube Hook</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-5">
            <div className="bg-[#fef2f2] border border-[#fecaca] rounded-[10px] p-[18px]">
              <h3 className="text-red-600 text-[0.9rem] font-bold mb-2">❌ Weak Hook</h3>
              <p className="text-[#475569] text-[0.88rem] m-0 italic">&quot;Hey guys, welcome back to my channel! Today we are going to be talking about how to grow on YouTube, so make sure you subscribe and hit that notification bell...&quot;</p>
            </div>
            <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] p-[18px]">
              <h3 className="text-green-600 text-[0.9rem] font-bold mb-2">✅ Strong Hook</h3>
              <p className="text-[#475569] text-[0.88rem] m-0 italic">&quot;Most people quit YouTube right before their channel would have taken off. I almost did too. Here is what stopped me — and what it taught me about how YouTube actually works.&quot;</p>
            </div>
          </div>
          <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-[10px] py-4 px-5 my-5 text-[#92400e] text-[0.95rem]">
            <strong>⚠️ Never do this:</strong> Do not start with &quot;In this video I will be covering...&quot; — this is telling the viewer what they are about to see instead of making them feel something. Show, do not tell. Make them feel the hook before you explain it.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Test and Improve Your YouTube Hooks</h2>
          <p className="text-[#475569] mb-4 text-base">
            Writing great hooks is a skill that improves with deliberate practice and feedback. Here is how to get better faster:
          </p>
          <div className="bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe] border border-[#c4b5fd] rounded-xl py-6 px-7 my-7">
            <h3 className="text-[1.05rem] font-bold text-[#5b21b6] mb-2.5">🔍 The Hook Audit Method</h3>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5">Generate the transcripts of your last 5 to 10 YouTube videos at <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link> and read only the first 30 seconds of each one.</p>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5">Ask yourself honestly: if you were a stranger reading this cold, would you keep watching? Does it create curiosity? Does it make a promise? Does it create any emotion at all?</p>
            <p className="text-[#4c1d95] text-[0.95rem] m-0">Then check your YouTube Analytics — compare the audience retention graphs for videos with strong hooks versus weak ones. The difference will be immediately visible in the first 30 seconds of the retention curve.</p>
          </div>
          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> Study the hooks of top-performing videos in your niche by generating their transcripts and reading just the first 30 seconds. Notice which hook formula they used, how specific they were, and what emotion they triggered. This is the fastest way to learn what works in your specific niche.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How Long Should a YouTube Hook Be?</h2>
          <p className="text-[#475569] mb-4 text-base">
            A hook should be between 15 and 45 seconds for most YouTube videos. Shorter videos — under 5 minutes — should aim for 15 seconds or less. Longer videos — 10 minutes and above — can take up to 45 seconds for the hook, but only if every second is earning its place.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            The rule is simple: your hook ends the moment you have given the viewer a compelling reason to stay. Everything after that is the video itself.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Writing Multiple Hook Versions</h2>
          <p className="text-[#475569] mb-4 text-base">
            Professional YouTubers and video marketers rarely use the first hook they write. Write at least 3 versions of your hook before filming — one that leads with curiosity, one that leads with a result, and one that leads with emotion or empathy. Then choose the strongest one — or test them in A/B thumbnail and title tests over time.
          </p>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Audit Your YouTube Hooks with Transcripts</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Generate transcripts of your own videos or top-performing videos in your niche. Read the first 30 seconds and instantly see which hooks are strong and which are losing viewers. Free, no signup required.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Generate Transcript Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How long should a YouTube hook be?</h3>
          <p className="text-[#475569] mb-4 text-base">Between 15 and 45 seconds for most videos. The hook should end the moment you have given the viewer a strong reason to keep watching. Do not pad it — every second of a weak hook costs you viewers.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">What is the most effective YouTube hook formula?</h3>
          <p className="text-[#475569] mb-4 text-base">There is no single best formula — the most effective hook depends on your niche and audience. The Story Hook and Empathy Hook tend to perform best for personal or business content. The Result First Hook works best for tutorials. Test different formulas and check your audience retention analytics to see which resonates most with your specific viewers.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How can I find out if my hook is working?</h3>
          <p className="text-[#475569] mb-4 text-base">Check your YouTube Analytics — specifically the audience retention graph for each video. If you see a sharp drop in the first 30 seconds, your hook is losing people. If retention stays high through the first 30 seconds and drops gradually after, your hook is working. Generate the transcript of underperforming videos to review and rewrite the hook for future videos.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I use more than one hook formula in the same video?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes — in fact, the strongest hooks often combine two formulas. For example, a Story Hook that also creates a Curiosity Gap. Or an Empathy Hook that ends with a Bold Claim. Combining formulas creates layered tension that is very hard to click away from.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Should my hook be scripted or improvised?</h3>
          <p className="text-[#475569] mb-4 text-base">Always script your hook — even if the rest of your video is loosely structured. The hook is too important to leave to improvisation. Write it, refine it, practice it until it sounds natural, then deliver it on camera with confidence.</p>
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

export default HowToWriteYouTubeHook
