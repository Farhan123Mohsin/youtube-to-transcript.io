import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

const STRATEGIES = [
  {
    title: 'Turn Transcripts into Blog Posts',
    text: 'The most direct SEO use of a transcript is converting it into a blog post. Clean up the raw transcript, add headings and structure, rewrite it in readable prose, and publish it on your website. This creates a keyword-rich piece of written content that Google can rank — often for the same keywords your video targets on YouTube. One video becomes two pieces of rankable content.',
  },
  {
    title: "Add the Transcript to Your Video's Page",
    text: 'If your video is embedded on a page of your website, add the full transcript as text below the video. This gives Google hundreds or thousands of words of keyword-rich content to index on that page — dramatically improving its chances of ranking. Many SEO professionals use this technique specifically because it requires almost no extra writing.',
  },
  {
    title: 'Extract Keywords from Your Own Transcripts',
    text: 'Your video transcripts reveal exactly which keywords and phrases you naturally use when talking about your topic. Generate the transcript of your best-performing videos and read through them — the terms that appear repeatedly are your natural keyword set. Use these to optimize your page titles, meta descriptions, headers, and internal links across your entire site.',
  },
  {
    title: 'Research Competitor Keywords Using Their Transcripts',
    text: 'Generate transcripts of top-ranking competitor videos in your niche and read them as text. Identify the keywords and phrases they use most frequently — these are the terms the algorithm has already validated as relevant to your topic. Use them to inform your own content strategy, blog posts, and on-page SEO.',
  },
  {
    title: 'Create Supporting Content from a Single Transcript',
    text: 'A single video transcript can produce multiple pieces of SEO content — a long-form blog post, several shorter posts each covering one section of the video, a FAQ page built from questions raised in the video, and social media posts with keyword-rich captions. This content cluster approach is one of the most effective SEO strategies for building topical authority in a niche.',
  },
  {
    title: 'Use Transcripts to Build Internal Links',
    text: 'When you convert a transcript into a blog post, you create a new page that can link to and receive links from other pages on your site. Internal linking is one of the most powerful on-page SEO signals. A content strategy built around transcripts naturally creates a web of interlinked pages that reinforces your site\'s topical authority in Google\'s eyes.',
  },
]

const SEO_STEPS = [
  { label: 'Step 1', text: <>Generate the transcript — Go to <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link>, paste your YouTube video URL, and download the transcript as a DOCX file.</> },
  { label: 'Step 2', text: 'Identify the target keyword — Read through the transcript and identify the main topic and the keyword phrase a reader would search to find this information. This becomes your target keyword for the blog post.' },
  { label: 'Step 3', text: 'Rewrite — do not copy paste — Rewrite the transcript as a structured blog post with an H1 title, H2 subheadings, short paragraphs, and clean prose. Google rewards original, well-structured written content — not raw transcript dumps.' },
  { label: 'Step 4', text: 'Optimize on-page SEO — Include your target keyword in the H1 title, the first paragraph, at least one H2, and the meta description. Add internal links to related pages on your site.' },
  { label: 'Step 5', text: 'Embed the video — Embed the original YouTube video in the blog post. This keeps visitors on your page longer, which is a positive engagement signal for Google. It also sends viewers to your YouTube channel, creating a traffic loop between your site and your channel.' },
]

const SEO_CARDS = [
  { icon: '🔍', title: 'Keyword Discovery', desc: 'Your natural speaking vocabulary reveals the keywords your audience uses — no paid tools needed.' },
  { icon: '📝', title: 'Content at Scale', desc: 'Turn each video into a blog post without starting from scratch — multiply your content output with less effort.' },
  { icon: '🔗', title: 'Internal Linking', desc: 'More pages mean more internal linking opportunities — which builds topical authority across your site.' },
  { icon: '📈', title: 'Double Rankings', desc: 'Rank the same topic on both YouTube and Google — capturing traffic from both search engines simultaneously.' },
  { icon: '🏆', title: 'Topical Authority', desc: 'A cluster of transcript-based articles signals to Google that your site covers a topic comprehensively.' },
  { icon: '⚡', title: 'Faster Production', desc: 'A transcript gives you a ready-made first draft — cutting article writing time by 50% or more.' },
]

function HowToUseYouTubeTranscriptsForSeo() {
  useEffect(() => {
    document.title = 'How to Use YouTube Transcripts for SEO — Rank Higher with Less Effort | YouTubeToTranscript.io'
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
            SEO Strategy
          </span>
          <h1 className="text-[2.1rem] font-extrabold text-[#0f172a] leading-tight mb-3.5">
            How to Use YouTube Transcripts for SEO — Rank Higher with Less Effort
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">7 min read &nbsp;·&nbsp; SEO Professionals &amp; Content Creators &nbsp;·&nbsp; Organic Traffic Strategy</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            Most content creators treat YouTube videos and SEO as two completely separate things. But the smartest creators know that <strong className="text-[#0f172a]">YouTube transcripts are one of the most underused SEO tools available</strong> — and they use them to rank on Google, drive organic traffic, and multiply the value of every video they make.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn exactly how to use YouTube transcripts for SEO — from turning transcripts into blog posts to extracting keywords, building backlinks, and making your video content visible to search engines.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Why YouTube Videos Alone Are Not Enough for SEO</h2>
          <p className="text-[#475569] mb-4 text-base">
            YouTube is the second-largest search engine in the world — but Google still dominates web search. The problem is that Google cannot fully read or index the spoken content inside a video. What Google can index is text. This means:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li>A YouTube video with no accompanying text content is largely invisible to Google search</li>
            <li>The keywords spoken in your video are not helping your Google rankings unless they also appear in written form</li>
            <li>Competitors who turn their videos into written content are capturing both YouTube and Google traffic — while video-only creators capture only one</li>
          </ul>
          <p className="text-[#475569] mb-4 text-base">
            The solution is simple: turn your video transcripts into written content that Google can find, read, and rank.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">6 Ways to Use YouTube Transcripts for SEO</h2>
          {STRATEGIES.map((item, i) => (
            <div key={item.title} className="bg-white border border-[#e2e8f0] rounded-xl p-6 my-5">
              <span className="inline-block bg-indigo-500 text-white text-[0.8rem] font-bold py-0.5 px-2.5 rounded-full mb-2.5">Strategy {i + 1}</span>
              <h3 className="text-[1.05rem] font-bold text-[#0f172a] mb-2.5">{item.title}</h3>
              <p className="text-[0.95rem] text-[#475569] m-0">{item.text}</p>
            </div>
          ))}

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Get the Most SEO Value from a Transcript</h2>
          <p className="text-[#475569] mb-4 text-base">
            Not all transcript-based content ranks equally. Here is how to maximize the SEO value of every transcript you turn into written content:
          </p>
          {SEO_STEPS.map((step) => (
            <div key={step.label} className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-[18px] px-[22px] my-5">
              <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wider mb-1.5">{step.label}</div>
              <p className="text-[#334155] text-base m-0">{step.text}</p>
            </div>
          ))}
          <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-[10px] py-4 px-5 my-5 text-[#92400e] text-[0.95rem]">
            <strong>⚠️ Important:</strong> Never publish a raw transcript copy-pasted directly from the tool as a blog post. Google identifies thin, unstructured content and will not rank it. Always rewrite the transcript into a proper, well-structured article before publishing.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">SEO Benefits of YouTube Transcripts at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            {SEO_CARDS.map((card) => (
              <div key={card.title} className="bg-white border border-[#e2e8f0] rounded-[10px] p-5">
                <div className="text-[1.4rem] mb-2">{card.icon}</div>
                <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">{card.title}</h3>
                <p className="text-[0.87rem] text-[#64748b] m-0">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> Go back to your most popular YouTube videos — the ones that already have proven audience interest — and turn those transcripts into blog posts first. You already know people want that content. Now let Google send you even more of them.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How Transcripts Help YouTube SEO Too</h2>
          <p className="text-[#475569] mb-4 text-base">
            Transcripts do not just help your website SEO — they also improve how your videos perform on YouTube itself:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">YouTube indexes captions</strong> — YouTube reads the captions of your videos as part of its search algorithm. Videos with accurate captions rank better in YouTube search for relevant keywords.</li>
            <li><strong className="text-[#0f172a]">Better accessibility</strong> — Captioned videos are accessible to deaf and hard-of-hearing viewers, expanding your potential audience.</li>
            <li><strong className="text-[#0f172a]">Longer watch time</strong> — Viewers watching in a noisy environment or a language that is not their first often use captions — and viewers using captions tend to watch longer.</li>
            <li><strong className="text-[#0f172a]">SRT uploads</strong> — Downloading your transcript as an SRT file and uploading it to YouTube ensures your captions are accurate, which is better than relying solely on YouTube&apos;s auto-generated captions.</li>
          </ul>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Turn Your YouTube Videos into SEO Content — Free</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Generate the transcript of any YouTube video instantly. Download as DOCX, TXT, PDF, SRT, VTT, or CSV. No signup required.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Generate Transcript Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can YouTube transcripts really help with Google SEO?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes — when transcripts are rewritten as proper blog posts or added as text content to video pages, they give Google keyword-rich written content to index and rank. Google cannot fully read video content, but it can rank the written text derived from a transcript very effectively.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Should I publish the raw transcript as a blog post?</h3>
          <p className="text-[#475569] mb-4 text-base">No. A raw transcript is conversational, unstructured, and full of filler words — Google considers this thin content and will not rank it. Always rewrite the transcript into a well-structured, readable article before publishing.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How do I find keywords from a YouTube transcript?</h3>
          <p className="text-[#475569] mb-4 text-base">Generate the transcript and read through it carefully. The words and phrases that appear repeatedly — especially topic-specific terms — are your natural keyword set. These are the same terms your audience uses, making them valuable SEO targets.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Does adding a transcript to my YouTube video help its ranking?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. YouTube indexes the captions of videos as part of its search algorithm. Uploading an accurate SRT transcript as captions helps your video rank better in YouTube search for relevant keywords compared to relying on auto-generated captions alone.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How many blog posts can I create from one YouTube transcript?</h3>
          <p className="text-[#475569] mb-4 text-base">A single transcript can produce one long-form article, several shorter posts on subtopics, a FAQ post, and social media content. The more comprehensive the original video, the more written content you can derive from its transcript.</p>
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

export default HowToUseYouTubeTranscriptsForSeo
