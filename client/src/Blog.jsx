import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from './components/BookmarkBar'
import './App.css'

const BLOG_ARTICLES = [
  {
    slug: 'how-to-get-youtube-transcript',
    title: 'How to Get a YouTube Transcript (Step-by-Step Guide)',
    description: 'Learn how to get a YouTube transcript in seconds. Step-by-step guide to generate, copy, and download YouTube transcripts for free — with timestamps and in multiple formats.',
    readTime: '5 min read',
    tag: 'Guide',
    date: 'February 2026',
  },
  {
    slug: 'how-to-download-youtube-subtitles',
    title: 'How to Download YouTube Subtitles as SRT, VTT or TXT File',
    description: 'Learn how to download YouTube subtitles as SRT, VTT, TXT, PDF, or DOCX files for free. Step-by-step guide to save YouTube captions in any format you need.',
    readTime: '6 min read',
    tag: 'Guide',
    date: 'February 2026',
  },
  {
    slug: 'how-to-convert-youtube-video-to-text',
    title: 'How to Convert YouTube Video to Text Free',
    description: 'Learn how to convert any YouTube video to text for free. Get a full transcript with timestamps in seconds — no software, no signup, and no cost.',
    readTime: '6 min read',
    tag: 'Guide',
    date: 'February 2026',
  },
  {
    slug: 'youtube-transcript-with-timestamps',
    title: 'How to Get a YouTube Transcript with Timestamps',
    description: 'Learn how to get a YouTube transcript with timestamps for free. Download timestamped transcripts as SRT, VTT, TXT, PDF, DOCX, or CSV in seconds.',
    readTime: '5 min read',
    tag: 'Guide',
    date: 'February 2026',
  },
  {
    slug: 'how-to-repurpose-youtube-videos-into-blog-posts',
    title: 'How to Repurpose YouTube Videos into Blog Posts',
    description: 'Learn how to repurpose YouTube videos into blog posts step by step. Turn any video transcript into SEO-friendly written content quickly and for free.',
    readTime: '7 min read',
    tag: 'Content Strategy',
    date: 'February 2026',
  },
  {
    slug: 'how-to-take-notes-from-youtube-videos',
    title: 'How to Take Notes from YouTube Videos Faster',
    description: 'Learn the fastest ways to take notes from YouTube videos. Use transcripts to study smarter, save time, and never miss an important point again.',
    readTime: '6 min read',
    tag: 'Productivity',
    date: 'February 2026',
  },
  {
    slug: 'how-to-write-better-youtube-scripts',
    title: 'How to Write Better YouTube Scripts (That Keep Viewers Watching)',
    description: 'Learn how to write better YouTube scripts that keep viewers engaged from start to finish. Practical tips, structure templates, and a smarter way to improve your scripts using transcripts.',
    readTime: '8 min read',
    tag: 'Content Creation',
    date: 'February 2026',
  },
  {
    slug: 'how-to-use-storytelling-in-youtube-videos',
    title: 'How to Use Storytelling in YouTube Videos to Get More Views',
    description: 'Learn how to use storytelling in YouTube videos to increase watch time, boost engagement, and get more views. Practical techniques with real examples.',
    readTime: '8 min read',
    tag: 'Content Creation',
    date: 'February 2026',
  },
  {
    slug: 'how-to-do-research-for-youtube-videos',
    title: 'How to Do Research for YouTube Videos (The Right Way)',
    description: 'Learn how to research YouTube videos properly before you script or film. Discover the best research methods, tools, and shortcuts used by top YouTube creators.',
    readTime: '7 min read',
    tag: 'Content Creation',
    date: 'February 2026',
  },
  {
    slug: 'how-to-write-youtube-hook',
    title: 'How to Write a YouTube Hook That Stops Viewers from Clicking Away',
    description: 'Learn how to write powerful YouTube hooks that keep viewers watching. 7 proven hook formulas with real examples to boost your watch time and retention instantly.',
    readTime: '7 min read',
    tag: 'Content Creation',
    date: 'February 2026',
  },
  {
    slug: 'how-to-use-youtube-transcripts-for-seo',
    title: 'How to Use YouTube Transcripts for SEO — Rank Higher with Less Effort',
    description: 'Learn how to use YouTube transcripts to boost your SEO. Turn video content into keyword-rich written content that ranks on Google and drives organic traffic.',
    readTime: '7 min read',
    tag: 'SEO Strategy',
    date: 'February 2026',
  },
  {
    slug: 'how-to-write-explainer-video-script',
    title: 'How to Write an Explainer Video Script (Step by Step)',
    description: 'Learn how to write a compelling explainer video script step by step. Structure, tips, examples, and a proven template for scripts that educate and convert.',
    readTime: '8 min read',
    tag: 'Script Writing',
    date: 'February 2026',
  },
  {
    slug: 'how-to-add-subtitles-to-youtube-videos-free',
    title: 'How to Add Subtitles to YouTube Videos Free',
    description: 'Learn how to add subtitles to YouTube videos for free step by step. Upload SRT files, use auto-captions, and make your videos accessible to a wider audience.',
    readTime: '6 min read',
    tag: 'Guide',
    date: 'February 2026',
  },
  {
    slug: 'how-to-find-youtube-video-ideas',
    title: 'How to Find the Best YouTube Video Ideas for Your Niche',
    description: 'Never run out of YouTube video ideas again. Learn 8 proven methods to find high-demand video ideas for any niche — using free tools and a smarter research process.',
    readTime: '7 min read',
    tag: 'Content Strategy',
    date: 'February 2026',
  },
]

function Blog() {
  useEffect(() => {
    document.title = 'Blog | YouTubeToTranscript.io'
    return () => { document.title = 'YouTubeToTranscript.io' }
  }, [])

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#1a1a2e] font-sans">
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

      <div className="max-w-[780px] mx-auto px-6 py-12 pb-20">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-[#0f172a] mb-2">Blog</h1>
          <p className="text-[#64748b] text-base">Guides and tips for getting the most out of YouTube transcripts.</p>
        </header>

        <div className="space-y-6">
          {BLOG_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="block bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-md hover:border-indigo-200 transition-all"
            >
              <span className="inline-block bg-[#ede9fe] text-[#6d28d9] text-xs font-semibold py-1 px-3 rounded-full mb-3 uppercase tracking-wide">
                {article.tag}
              </span>
              <h2 className="text-xl font-bold text-[#0f172a] mb-2 leading-snug">{article.title}</h2>
              <p className="text-[#475569] text-[0.95rem] mb-3 line-clamp-2">{article.description}</p>
              <p className="text-[#94a3b8] text-sm">{article.readTime} &nbsp;·&nbsp; {article.date}</p>
            </Link>
          ))}
        </div>

        {BLOG_ARTICLES.length === 0 && (
          <p className="text-[#64748b] text-center py-12">No articles yet. Check back soon.</p>
        )}
      </div>

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

export default Blog
