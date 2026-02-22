import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

const BENEFITS = [
  { icon: '📈', title: 'More Watch Time', desc: 'Studies show that videos with subtitles are watched 40% longer on average. Viewers in noisy environments or quiet spaces rely on captions to follow along.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Subtitles make your videos accessible to non-native speakers of your language — dramatically expanding your potential audience worldwide.' },
  { icon: '🔍', title: 'Better YouTube SEO', desc: 'YouTube reads your captions as part of its search algorithm. Accurate subtitles help your video rank for relevant keywords in YouTube search.' },
  { icon: '♿', title: 'Accessibility', desc: 'Subtitles make your content accessible to deaf and hard-of-hearing viewers — a significant audience that most creators completely ignore.' },
]

const METHODS = [
  { label: 'Method 1 — Recommended', title: 'Upload an SRT File (Most Accurate)', text: 'The most accurate and professional method is to generate a transcript of your video, download it as an SRT file, and upload it to YouTube Studio as your subtitle file. This gives you full control over the accuracy and timing of every subtitle line.' },
  { label: 'Method 2', title: "Use YouTube's Auto-Generated Captions", text: 'YouTube automatically generates captions for most videos using speech recognition. These are free and require no effort — but they are often inaccurate, especially for names, technical terms, and non-English content. Always review and edit auto-captions before relying on them.' },
  { label: 'Method 3', title: 'Type Subtitles Manually in YouTube Studio', text: 'YouTube Studio has a built-in subtitle editor where you can type subtitles manually and sync them to the video. This is the most time-consuming method but gives complete control. Best used for short videos or for editing and correcting auto-generated captions.' },
]

const SRT_STEPS = [
  { label: 'Step 1', text: <>Get your video transcript as an SRT file — Go to <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link>, paste your YouTube video URL into the input field, and click Generate. Once the transcript appears, select <strong>SRT</strong> from the download options and save the file to your device.</> },
  { label: 'Step 2', text: <>Open YouTube Studio — Go to <a href="https://studio.youtube.com" target="_blank" rel="noopener noreferrer" className="text-indigo-500 no-underline hover:underline">studio.youtube.com</a> and sign in to your YouTube account.</> },
  { label: 'Step 3', text: <><strong>Select your video</strong> — Click on <strong>Content</strong> in the left sidebar, then click on the video you want to add subtitles to.</> },
  { label: 'Step 4', text: <>Go to Subtitles — In the video details page, click <strong>Subtitles</strong> in the left menu.</> },
  { label: 'Step 5', text: <>Add subtitles — Click the <strong>Add Language</strong> button and select the language of your video. Then click <strong>Add</strong> next to Subtitles.</> },
  { label: 'Step 6', text: <>Upload your SRT file — Select <strong>Upload file</strong>, choose <strong>With timing</strong>, and upload the SRT file you downloaded in Step 1. YouTube will automatically sync the subtitle text to the correct timestamps in the video.</> },
  { label: 'Step 7', text: <>Review and publish — Watch through the subtitles in the preview to check accuracy. Make any corrections needed, then click <strong>Publish</strong>. Your subtitles are now live on your video.</> },
]

function HowToAddSubtitlesToYouTubeVideosFree() {
  useEffect(() => {
    document.title = 'How to Add Subtitles to YouTube Videos Free | YouTubeToTranscript.io'
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
            Guide
          </span>
          <h1 className="text-[2.1rem] font-extrabold text-[#0f172a] leading-tight mb-3.5">
            How to Add Subtitles to YouTube Videos Free
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">6 min read &nbsp;·&nbsp; YouTubers &amp; Content Creators &nbsp;·&nbsp; Accessibility &amp; SEO</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            Adding subtitles to your YouTube videos is one of the simplest things you can do to grow your channel — and most creators skip it entirely. <strong className="text-[#0f172a]">Subtitles increase watch time, improve accessibility, boost SEO, and help your videos reach viewers in every language</strong> — all for free.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn exactly how to add subtitles to YouTube videos using three different methods, which one is best for your situation, and how to get an accurate subtitle file in minutes without typing a single word manually.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Why Adding Subtitles to Your YouTube Videos Matters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white border border-[#e2e8f0] rounded-[10px] p-5">
                <div className="text-[1.4rem] mb-2">{b.icon}</div>
                <h3 className="text-[0.95rem] font-bold text-[#0f172a] mb-1.5">{b.title}</h3>
                <p className="text-[0.87rem] text-[#64748b] m-0">{b.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">3 Methods to Add Subtitles to YouTube Videos for Free</h2>
          {METHODS.map((m) => (
            <div key={m.title} className="bg-white border border-[#e2e8f0] rounded-xl p-6 my-5">
              <span className="inline-block bg-indigo-500 text-white text-[0.8rem] font-bold py-0.5 px-2.5 rounded-full mb-2.5">{m.label}</span>
              <h3 className="text-[1.05rem] font-bold text-[#0f172a] mb-2.5">{m.title}</h3>
              <p className="text-[0.95rem] text-[#475569] m-0">{m.text}</p>
            </div>
          ))}

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Method 1: How to Add Subtitles Using an SRT File (Step by Step)</h2>
          <p className="text-[#475569] mb-4 text-base">
            This is the fastest and most accurate method. Here is how to do it:
          </p>
          {SRT_STEPS.map((step) => (
            <div key={step.label} className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-[18px] px-[22px] my-5">
              <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wider mb-1.5">{step.label}</div>
              <p className="text-[#334155] text-base m-0">{step.text}</p>
            </div>
          ))}
          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> Always review your SRT file before uploading. Auto-generated transcripts are usually very accurate but may occasionally mishear a word — especially proper nouns, brand names, or technical terms. A quick review takes 2 to 3 minutes and ensures your subtitles are professional.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Method 2: How to Edit YouTube&apos;s Auto-Generated Captions</h2>
          <p className="text-[#475569] mb-4 text-base">
            If your video already has auto-generated captions, here is how to edit and improve them:
          </p>
          <ol className="text-[#475569] pl-[22px] mb-4 text-base list-decimal space-y-2">
            <li>Go to YouTube Studio and open the video</li>
            <li>Click <strong className="text-[#0f172a]">Subtitles</strong> in the left menu</li>
            <li>Click the pencil icon next to the auto-generated captions</li>
            <li>Review each line and correct any errors</li>
            <li>Click <strong className="text-[#0f172a]">Publish</strong> when done</li>
          </ol>
          <div className="bg-[#fffbeb] border border-[#fcd34d] rounded-[10px] py-4 px-5 my-5 text-[#92400e] text-[0.95rem]">
            <strong>⚠️ Important:</strong> Never leave auto-generated captions unreviewed on a professional or business channel. Errors in captions look unprofessional and can change the meaning of what you said — sometimes significantly.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">SRT vs VTT — Which File Format Should You Use for YouTube?</h2>
          <p className="text-[#475569] mb-4 text-base">
            YouTube supports both SRT and VTT subtitle file formats. For uploading to YouTube Studio, <strong className="text-[#0f172a]">SRT is the recommended format</strong> — it is the most widely supported and the simplest to work with. VTT is better suited for web-based video players outside of YouTube.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            Both formats are available when you download your transcript from YouTubeToTranscript.io — simply select the format you need from the download options.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How Subtitles Improve Your YouTube SEO</h2>
          <p className="text-[#475569] mb-4 text-base">
            YouTube&apos;s search algorithm reads the text in your video&apos;s captions when deciding how to rank your video. Here is what this means in practice:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li>Every keyword spoken in your video becomes searchable text when accurate captions are present</li>
            <li>Videos with captions rank better for long-tail keyword searches related to the spoken content</li>
            <li>Accurate manually-uploaded captions perform better than auto-generated ones for SEO purposes</li>
            <li>Adding captions in multiple languages can help your video rank in YouTube searches in those languages</li>
          </ul>
          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> If your channel targets an international audience, consider downloading your transcript, translating it into one or two additional languages, and uploading those as separate subtitle tracks. This can significantly expand your reach in non-English speaking markets.
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Get Your SRT Subtitle File — Free</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Paste any YouTube video URL and download the transcript as an SRT, VTT, TXT, PDF, DOCX, or CSV file instantly. No signup required.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Download SRT File Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How do I add subtitles to a YouTube video for free?</h3>
          <p className="text-[#475569] mb-4 text-base">Generate the transcript of your video at YouTubeToTranscript.io and download it as an SRT file. Then go to YouTube Studio, open your video, click Subtitles, and upload the SRT file. The entire process takes under 5 minutes and is completely free.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">What is the difference between subtitles and closed captions on YouTube?</h3>
          <p className="text-[#475569] mb-4 text-base">Subtitles translate spoken dialogue for viewers who understand the language but cannot hear the audio — or who speak a different language. Closed captions include all audio information including sound effects and speaker identification, and are designed for deaf and hard-of-hearing viewers. On YouTube, both are added through the same Subtitles section in YouTube Studio.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Do subtitles help YouTube SEO?</h3>
          <p className="text-[#475569] mb-4 text-base">Yes. YouTube reads the text in your captions as part of its search ranking algorithm. Accurate subtitles help your video rank for keywords spoken in the video. Manually uploaded subtitle files typically perform better for SEO than auto-generated captions.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Can I add subtitles to someone else&apos;s YouTube video?</h3>
          <p className="text-[#475569] mb-4 text-base">You can generate a transcript of any YouTube video using YouTubeToTranscript.io, but you can only upload subtitle files to videos on your own YouTube channel through YouTube Studio. You cannot add subtitles to videos you do not own.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How long does it take to add subtitles to a YouTube video?</h3>
          <p className="text-[#475569] mb-4 text-base">Using the SRT upload method, the entire process takes 3 to 5 minutes — generate the transcript, download the SRT file, upload it to YouTube Studio, review for accuracy, and publish. This is far faster than typing subtitles manually.</p>
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

export default HowToAddSubtitlesToYouTubeVideosFree
