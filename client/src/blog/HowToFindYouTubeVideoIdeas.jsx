import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

const IDEA_TYPES = [
  { icon: '🔍', title: 'Search-Based Ideas', desc: 'Videos built around what people are actively searching for on YouTube and Google. These grow steadily over time as they accumulate search traffic. Best for long-term channel growth.' },
  { icon: '📣', title: 'Trend-Based Ideas', desc: 'Videos built around trending topics, recent events, or viral moments. These can spike quickly but often fade. Best for short-term traffic boosts and topical relevance.' },
  { icon: '🎯', title: 'Audience-Based Ideas', desc: 'Videos directly requested by your existing audience through comments, polls, and messages. These have the highest engagement rate because you know the demand before filming.' },
  { icon: '💡', title: 'Evergreen Ideas', desc: 'Videos on topics that stay relevant for years — tutorials, how-to guides, and foundational content. These are the backbone of a sustainable YouTube channel.' },
]

const METHODS = [
  { title: 'YouTube Search Autocomplete', text: 'Type your niche topic into the YouTube search bar and stop before pressing enter. The autocomplete suggestions are real searches people are making right now. Every suggestion is a potential video idea with proven search demand. Try different starting phrases — "how to", "best", "why", "what is" — to uncover dozens of ideas in minutes.' },
  { title: 'Mine YouTube Comments for Ideas', text: 'Open the top 5 videos in your niche and read through the comments. Look for questions viewers are asking, things they wished the video had covered, and follow-up topics they want to know more about. Every unanswered question in a comment section is a video idea your audience is explicitly requesting.' },
  { title: 'Analyze Competitor Transcripts for Topic Gaps', text: 'Generate the transcripts of top-performing videos in your niche and read them carefully. Identify topics they touched on briefly but never fully explained — these are your gap opportunities. A video that goes deeper on a subtopic that competitors only mentioned is one of the most reliable ways to find ideas with built-in demand and lower competition.' },
  { title: 'Google\'s "People Also Ask" Section', text: 'Search your topic on Google and scroll to the "People Also Ask" section. Every question in that box is a high-demand search query — and most of them have never been properly answered in a YouTube video. These questions translate directly into video titles and represent exactly what your audience wants to know.' },
  { title: 'Reddit and Niche Forums', text: 'Find the subreddits and forums where your target audience hangs out. Search for the most upvoted questions and discussions in your niche. The exact wording people use to describe their problems on Reddit is often the same language they type into YouTube search — making these platforms a goldmine for both ideas and natural keyword language.' },
  { title: 'Your Own Analytics', text: 'If you already have videos published, your YouTube Analytics is one of your best idea sources. Look at which videos get the most comments and questions. Check what search terms people used to find your channel. Look at your audience retention graphs — where do viewers drop off? The point of drop-off often indicates a topic that needed more explanation — and that is a new video idea.' },
  { title: 'Google Trends', text: 'Search your niche topic on Google Trends to see whether interest is growing, declining, or seasonal. This helps you prioritize which ideas to film first — topics with rising interest are worth filming now, while declining topics are worth deprioritizing. You can also find related topics that are trending upward in your niche before they become saturated.' },
  { title: 'Turn One Video into Many Ideas', text: 'Every video you make contains multiple sub-topics — each of which can become its own dedicated video. After filming a broad overview video, go back and create individual videos for each point you covered. This approach builds topical authority on your channel and gives you an endless supply of related ideas that form a natural content cluster.' },
]

const CONTENT_BANK_STEPS = [
  { label: 'Weekly habit', text: 'Spend 20 minutes every week on YouTube search autocomplete, competitor comments, and Reddit in your niche. Add every potential idea to your content bank. At this pace, you will add 10 to 20 new ideas every week — far more than you can film.' },
  { label: 'Monthly review', text: 'Once a month, review your content bank and prioritize the top 4 to 6 ideas using the validation checklist above. These become your filming schedule for the next month. Delete ideas that no longer feel relevant or strong.' },
  { label: 'After every video', text: <>After publishing each video, generate its transcript at <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link> and read through it. Every subtopic you mentioned briefly is a new video idea. Every question a viewer might have after watching is another. One video consistently generates 5 to 10 new ideas when you approach it this way.</> },
]

function HowToFindYouTubeVideoIdeas() {
  useEffect(() => {
    document.title = 'How to Find the Best YouTube Video Ideas for Your Niche | YouTubeToTranscript.io'
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
            Content Strategy
          </span>
          <h1 className="text-[2.1rem] font-extrabold text-[#0f172a] leading-tight mb-3.5">
            How to Find the Best YouTube Video Ideas for Your Niche
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">7 min read &nbsp;·&nbsp; YouTubers &amp; Content Creators &nbsp;·&nbsp; Video Ideas &amp; Strategy</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            Running out of <strong className="text-[#0f172a]">YouTube video ideas</strong> is one of the most common reasons creators slow down or quit entirely. The good news is that with the right research process, you will never run out of ideas again — and the ideas you find will be ones your audience is already searching for.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn 8 proven methods to find high-demand YouTube video ideas for any niche, how to validate ideas before filming, and how to build a content bank that keeps you ahead of schedule.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Why Most Creators Struggle to Find Video Ideas</h2>
          <p className="text-[#475569] mb-4 text-base">
            The problem is not a lack of ideas — it is a lack of a system. Most creators come up with ideas by guessing what might work, copying what they see other creators doing, or waiting for inspiration to strike. None of these approaches consistently produces ideas that perform well.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            The creators who never run out of ideas use a repeatable research process that finds what their audience is already searching for — before they film a single second of content.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">The Two Types of YouTube Video Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            {IDEA_TYPES.map((item) => (
              <div key={item.title} className="bg-white border border-[#e2e8f0] rounded-[10px] p-5">
                <div className="text-[1.4rem] mb-2">{item.icon}</div>
                <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">{item.title}</h3>
                <p className="text-[0.87rem] text-[#64748b] m-0">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#475569] mb-4 text-base">
            The strongest content strategies combine all four types. Most of your videos should be search-based or evergreen, with occasional trend-based videos to stay current and audience-based videos to reward your community.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">8 Proven Methods to Find YouTube Video Ideas</h2>
          {METHODS.map((item, i) => (
            <div key={item.title} className="bg-white border border-[#e2e8f0] rounded-xl p-6 my-5">
              <span className="inline-block bg-indigo-500 text-white text-[0.8rem] font-bold py-0.5 px-2.5 rounded-full mb-2.5">Method {i + 1}</span>
              <h3 className="text-[1.05rem] font-bold text-[#0f172a] mb-2.5">{item.title}</h3>
              <p className="text-[0.95rem] text-[#475569] m-0">{item.text}</p>
            </div>
          ))}

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Use Competitor Transcripts to Find Video Ideas</h2>
          <p className="text-[#475569] mb-4 text-base">
            One of the most powerful and underused methods for finding YouTube video ideas is studying what successful creators in your niche have already covered — and finding what they missed. Here is exactly how to do it:
          </p>
          <div className="bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe] border border-[#c4b5fd] rounded-xl py-6 px-7 my-7">
            <h3 className="text-[1.05rem] font-bold text-[#5b21b6] mb-2.5">🔍 The Transcript Gap Method</h3>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5"><strong>Step 1:</strong> Find the 5 most-viewed videos in your niche on YouTube.</p>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5"><strong>Step 2:</strong> Generate the transcript of each video at <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link> and read them as text.</p>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5"><strong>Step 3:</strong> As you read, note every topic, question, or concept that was mentioned briefly but never fully explained. These are your gap opportunities.</p>
            <p className="text-[#4c1d95] text-[0.95rem] mb-2.5"><strong>Step 4:</strong> Check the comments on these videos for questions that the video did not answer. Every unanswered question is a video idea with proven demand.</p>
            <p className="text-[#4c1d95] text-[0.95rem] m-0"><strong>Step 5:</strong> Build your video around filling the gap — go deeper on the subtopic that competitors only touched on. Your video will be more useful, and it targets an audience that the existing videos have already proven exists.</p>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Validate a YouTube Video Idea Before Filming</h2>
          <p className="text-[#475569] mb-4 text-base">
            Not every idea is worth filming. Before investing hours in production, validate the idea with these quick checks:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">Search demand check</strong> — Type the idea as a search query into YouTube. Do relevant videos appear? Do they have decent view counts? If yes, demand exists.</li>
            <li><strong className="text-[#0f172a]">Competition check</strong> — Are the existing videos old, low quality, or missing key information? If yes, there is room for a better video.</li>
            <li><strong className="text-[#0f172a]">Audience fit check</strong> — Does this topic directly serve the specific audience you are building your channel for? Off-topic videos may get views but rarely build subscribers.</li>
            <li><strong className="text-[#0f172a]">Evergreen vs trending check</strong> — Is this a topic that will still be relevant in 2 years? Evergreen ideas are almost always worth making. Trend-based ideas need to be filmed and published quickly or the window closes.</li>
          </ul>
          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> Keep a running list of video ideas in a simple document or notes app. Every time you find a potential idea using any of the methods above, add it to the list immediately. Review and prioritize the list once a week. Over time, this becomes a content bank that keeps you filming consistently without ever scrambling for ideas last minute.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Build a Content Bank That Never Runs Empty</h2>
          <p className="text-[#475569] mb-4 text-base">
            The goal is not to find one good idea — it is to build a system that generates ideas continuously. Here is how:
          </p>
          {CONTENT_BANK_STEPS.map((step) => (
            <div key={step.label} className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-[18px] px-[22px] my-5">
              <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wider mb-1.5">{step.label}</div>
              <p className="text-[#334155] text-base m-0">{step.text}</p>
            </div>
          ))}
          <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-[10px] py-4 px-5 my-5 text-[#92400e] text-[0.95rem]">
            <strong>⚠️ Avoid this trap:</strong> Do not copy competitor video ideas directly. Use competitor research to understand what topics have demand — then find your unique angle on that topic. A direct copy of a successful video rarely performs as well as the original. Your unique perspective, experience, or approach is what makes your version worth watching.
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Research Competitor Videos and Find Idea Gaps — Free</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Generate transcripts of any YouTube video instantly. Read competitor content in minutes, find topic gaps, and never run out of video ideas again. No signup required.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Generate Transcript Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How do I find YouTube video ideas when I am just starting out?</h3>
          <p className="text-[#475569] mb-4 text-base">Start with YouTube search autocomplete — type your niche topic and study the suggestions. Then watch the top 10 videos in your niche and read their comments. The questions viewers ask in those comments are your first 10 video ideas. You do not need any tools or experience — just a willingness to research what your audience is already asking.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How do I find YouTube video ideas that will actually get views?</h3>
          <p className="text-[#475569] mb-4 text-base">Focus on search-based ideas — topics people are actively searching for on YouTube. Validate each idea by checking whether similar videos already exist and whether they are getting consistent views. If the topic has search demand and existing videos are old or low quality, your video has a strong chance of ranking.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How often should I research new YouTube video ideas?</h3>
          <p className="text-[#475569] mb-4 text-base">Build a 20-minute weekly research habit using the methods in this guide. This generates more ideas than most creators can film, keeping your content calendar full without last-minute scrambling.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I use competitor videos to find ideas without copying them?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes — and this is one of the best research methods available. Generate transcripts of top competitor videos, read them to find topic gaps and unanswered questions, then create a video that goes deeper on those specific gaps. You are not copying the video — you are filling the holes it left behind.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How do I know if a YouTube video idea is worth making?</h3>
          <p className="text-[#475569] mb-4 text-base">Run it through four quick checks: search demand exists, competition is beatable, the topic fits your target audience, and the topic is evergreen or timely enough to act on now. An idea that passes all four checks is almost always worth making.</p>
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

export default HowToFindYouTubeVideoIdeas
