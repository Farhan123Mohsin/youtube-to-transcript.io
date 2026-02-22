import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookmarkBar from '../components/BookmarkBar'
import '../App.css'

const TEMPLATE_ROWS = [
  { part: 'HOOK', desc: 'Open with the problem your audience is experiencing. Make them feel seen and understood in the first 5 to 10 seconds. No company names, no logos — lead with the pain point.' },
  { part: 'PROBLEM', desc: 'Expand on the problem. Show you understand the frustration, the wasted time, or the cost of not having a solution. The more specifically you describe the problem, the more the viewer feels this is made for them.' },
  { part: 'SOLUTION', desc: 'Introduce your product, service, or concept as the solution. Keep it simple — one clear sentence that explains what it is and what it does. Avoid jargon.' },
  { part: 'HOW IT WORKS', desc: "Explain how the solution works in 2 to 3 simple steps. This is the core of the explainer — keep it visual, keep it simple, and keep it focused on the viewer's benefit rather than your features." },
  { part: 'BENEFITS', desc: 'Show what life looks like after using the solution. What does the viewer gain? What problem disappears? Focus on outcomes, not features.' },
  { part: 'CALL TO ACTION', desc: 'End with one clear action — visit the website, sign up, download, subscribe. One CTA only. Multiple calls to action dilute each other.' },
]

const SCRIPT_STEPS = [
  { label: 'Step 1', text: 'Define your one goal — Before writing a single word, answer this: what is the one thing you want the viewer to do or believe after watching? Every sentence in your script should serve this one goal. If it does not, cut it.' },
  { label: 'Step 2', text: 'Know your audience precisely — Write for one specific person, not a general audience. What is their biggest frustration? What words do they use to describe their problem? The more specific your audience definition, the more your script will resonate.' },
  { label: 'Step 3', text: 'Write the problem first — Start with the problem, not the solution. Most scripts make the mistake of leading with "Introducing [Product Name]..." — this immediately puts the viewer in sales mode. Lead with a problem they recognize and they will stay to hear the solution.' },
  { label: 'Step 4', text: 'Introduce the solution simply — One clear sentence. "[Product/Tool Name] is a [what it is] that [what it does] so you can [benefit]." Keep it simple. The viewer should understand exactly what you offer within 3 seconds of you introducing it.' },
  { label: 'Step 5', text: 'Explain how it works in 3 steps — Break the process down into exactly 3 steps. Three is the magic number for explainer videos — it is enough to be credible and simple enough to be remembered. Number them clearly.' },
  { label: 'Step 6', text: 'Paint the outcome — Describe what the viewer\'s life or work looks like after using your solution. Use specific, vivid language. This is the emotional payoff that makes the viewer want to take action.' },
  { label: 'Step 7', text: 'End with one clear CTA — Tell the viewer exactly what to do next. Be direct: "Visit [website] today", "Sign up free at [url]", "Click the link below to get started." One action. No alternatives.' },
]

const MISTAKES = [
  { icon: '🏢', title: 'Leading with the company', desc: 'Starting with your brand name or "We are [Company]..." before establishing the problem loses viewers immediately.' },
  { icon: '📚', title: 'Too many features', desc: 'Listing every feature of your product confuses the viewer. Pick the one or two most important benefits and focus entirely on those.' },
  { icon: '🐌', title: 'Too long', desc: 'Scripts over 2 minutes lose most viewers before the CTA. If your script is too long, cut — do not try to speed up the voiceover.' },
  { icon: '🎯', title: 'Multiple CTAs', desc: 'Ending with "visit our website, follow us on social, and download our free guide" gives the viewer too many choices — and they choose none.' },
  { icon: '🤖', title: 'Robotic language', desc: 'Corporate speak like "leveraging synergies" or "best-in-class solutions" makes viewers disengage. Write the way real people talk.' },
  { icon: '❓', title: 'Unclear solution', desc: 'If a viewer cannot explain what your product does after watching your explainer, your script has failed its most basic job.' },
]

function HowToWriteExplainerVideoScript() {
  useEffect(() => {
    document.title = 'How to Write an Explainer Video Script (Step by Step) | YouTubeToTranscript.io'
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
            Script Writing
          </span>
          <h1 className="text-[2.1rem] font-extrabold text-[#0f172a] leading-tight mb-3.5">
            How to Write an Explainer Video Script (Step by Step)
          </h1>
          <p className="text-[#94a3b8] text-[0.88rem]">8 min read &nbsp;·&nbsp; Content Creators &amp; Marketers &nbsp;·&nbsp; Script Writing Guide</p>
        </div>

        <div className="article-body">
          <p className="text-[#475569] mb-4 text-base">
            An explainer video is only as good as its script. You can have the best animation, the most professional voiceover, and the most polished visuals — but if the script is unclear, too long, or fails to connect with the viewer, none of it matters.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            In this guide, you will learn exactly <strong className="text-[#0f172a]">how to write an explainer video script</strong> — from understanding your audience to delivering a clear, compelling message that educates and moves viewers to action.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">What Is an Explainer Video?</h2>
          <p className="text-[#475569] mb-4 text-base">
            An explainer video is a short video — typically 60 to 120 seconds — that explains a product, service, concept, or process in a simple and engaging way. They are used on landing pages, YouTube channels, social media, and in marketing campaigns to communicate complex ideas quickly and clearly.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            The script is the foundation of every explainer video. Everything else — the visuals, animation, voiceover, and music — is built on top of what the script says and how it says it.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">The Proven Explainer Video Script Structure</h2>
          <p className="text-[#475569] mb-4 text-base">
            Almost every effective explainer video script follows the same core structure. Learn this structure and you have the foundation for writing scripts that work every time:
          </p>
          <div className="bg-[#1e1e2e] rounded-xl py-7 px-8 my-6">
            <div className="text-[#a78bfa] text-[0.85rem] font-bold uppercase tracking-wider mb-4">📋 Explainer Video Script Template</div>
            {TEMPLATE_ROWS.map((row) => (
              <div key={row.part} className="flex gap-4 items-start mb-4">
                <span className="text-[#a78bfa] font-bold text-[0.88rem] shrink-0 w-[140px] font-mono">{row.part}</span>
                <span className="text-[#e2e8f0] text-[0.9rem] leading-relaxed">{row.desc}</span>
              </div>
            ))}
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Step-by-Step: How to Write Your Explainer Video Script</h2>
          {SCRIPT_STEPS.map((step) => (
            <div key={step.label} className="bg-[#f8fafc] border-l-4 border-indigo-500 rounded-r-[10px] py-[18px] px-[22px] my-5">
              <div className="text-[0.8rem] font-bold text-indigo-500 uppercase tracking-wider mb-1.5">{step.label}</div>
              <p className="text-[#334155] text-base m-0">{step.text}</p>
            </div>
          ))}

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Explainer Video Script Example</h2>
          <p className="text-[#475569] mb-4 text-base">
            Here is a short example of how this structure looks in practice for a fictional productivity tool:
          </p>
          <div className="bg-[#f5f3ff] border border-[#c4b5fd] rounded-lg py-3.5 px-[18px] my-4">
            <div className="text-[0.78rem] font-bold text-[#7c3aed] uppercase tracking-wide mb-1.5">Script Example</div>
            <p className="text-[#4c1d95] text-[0.92rem] m-0 italic">&quot;You spend hours every week in meetings that could have been emails. Important decisions get buried in chat threads. And by Friday, you still have no idea what your team actually accomplished. TaskFlow is the simple team management tool that turns chaos into clarity. First, create your project in seconds. Then assign tasks to your team with one click. Finally, track progress in real time — no check-in meetings required. With TaskFlow, every team member knows exactly what to do, and every manager knows exactly what is getting done. Try TaskFlow free at taskflow.com.&quot;</p>
          </div>
          <p className="text-[#475569] mb-4 text-base">
            Notice how the script opens with the problem, introduces the solution simply, explains how it works in three steps, describes the outcome, and ends with a single clear CTA — all in under 90 seconds of spoken delivery.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How Long Should an Explainer Video Script Be?</h2>
          <p className="text-[#475569] mb-4 text-base">
            The ideal explainer video is between 60 and 90 seconds long. At an average speaking pace of 130 words per minute, this means your script should be:
          </p>
          <ul className="text-[#475569] pl-[22px] mb-4 text-base list-disc space-y-2">
            <li><strong className="text-[#0f172a]">60-second video</strong> — approximately 130 to 150 words</li>
            <li><strong className="text-[#0f172a]">90-second video</strong> — approximately 195 to 225 words</li>
            <li><strong className="text-[#0f172a]">2-minute video</strong> — approximately 260 to 300 words</li>
          </ul>
          <p className="text-[#475569] mb-4 text-base">
            Shorter is almost always better for explainer videos. If you cannot explain your concept clearly in 90 seconds, the problem is usually with the concept — not the script length.
          </p>
          <div className="bg-[#f0fdf4] border border-[#86efac] rounded-[10px] py-4 px-5 my-5 text-[#166534] text-[0.95rem]">
            <strong className="text-[#14532d]">💡 Pro Tip:</strong> After writing your script, read it aloud and time yourself. If it runs over 90 seconds, cut ruthlessly. Every sentence that does not directly serve your one goal should be removed. The discipline of brevity forces clarity.
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Writing Tips for Explainer Video Scripts</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Write in plain language</h3>
          <p className="text-[#475569] mb-4 text-base">
            Explainer videos exist to simplify complexity. If your script uses industry jargon, technical terms, or corporate language, you have already failed at explaining. Write at a level that a 12-year-old could understand — this is not condescending, it is clarity.
          </p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Use &quot;you&quot; not &quot;we&quot;</h3>
          <p className="text-[#475569] mb-4 text-base">
            Scripts that talk about &quot;our product&quot; and &quot;our features&quot; feel like advertisements. Scripts that talk about &quot;your problem&quot; and &quot;your results&quot; feel like conversations. Lead with the viewer&apos;s perspective at every stage.
          </p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Focus on benefits, not features</h3>
          <p className="text-[#475569] mb-4 text-base">
            Features are what your product does. Benefits are what the viewer gets. &quot;Our tool uses AI-powered transcription&quot; is a feature. &quot;You get an accurate transcript in seconds&quot; is a benefit. Always translate features into viewer benefits.
          </p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Read it aloud as you write</h3>
          <p className="text-[#475569] mb-4 text-base">
            Explainer scripts are meant to be spoken, not read. Read every sentence aloud as you write it. If it sounds awkward, rewrite it. The test of a good script is that it flows naturally when spoken at a comfortable pace.
          </p>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Common Explainer Video Script Mistakes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
            {MISTAKES.map((m) => (
              <div key={m.title} className="bg-white border border-[#e2e8f0] rounded-[10px] p-5">
                <div className="text-[1.3rem] mb-2">{m.icon}</div>
                <h3 className="text-[0.93rem] font-bold text-red-600 mb-1.5">{m.title}</h3>
                <p className="text-[0.87rem] text-[#64748b] m-0">{m.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">How to Use Transcripts to Improve Your Explainer Scripts</h2>
          <p className="text-[#475569] mb-4 text-base">
            One of the most effective ways to improve your explainer video scripts is to study successful explainer videos in your niche. Generate the transcripts of the best explainer videos you can find and read them as text. Notice how they structure the problem, how quickly they introduce the solution, and how they phrase the call to action.
          </p>
          <p className="text-[#475569] mb-4 text-base">
            You can also generate the transcript of your own explainer videos after filming. Reading your script as text makes it immediately obvious where the language is too complex, where the pacing drags, or where the message becomes unclear. Use <Link to="/" className="text-indigo-500 no-underline hover:underline">YouTubeToTranscript.io</Link> to get any YouTube video transcript instantly and free.
          </p>

          <div className="bg-gradient-to-br from-indigo-500 to-violet-500 rounded-[14px] py-8 px-9 my-10 text-center text-white">
            <h3 className="text-[1.3rem] font-bold mb-2.5 text-white">Study Any Explainer Video Script for Free</h3>
            <p className="text-white/90 mb-5 text-[0.97rem]">Generate the transcript of any YouTube explainer video instantly. Read, analyze, and learn from the best scripts in your industry. No signup required.</p>
            <Link to="/" className="inline-block bg-white text-indigo-500 font-bold py-3 px-7 rounded-lg no-underline text-[0.97rem] hover:opacity-90 transition-opacity">
              Generate Transcript Now →
            </Link>
          </div>

          <h2 className="text-[1.35rem] font-bold text-[#0f172a] mt-9 mb-3.5">Frequently Asked Questions</h2>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How long should an explainer video script be?</h3>
          <p className="text-[#475569] mb-4 text-base">For a 60-second video, aim for 130 to 150 words. For a 90-second video, 195 to 225 words. Always err on the shorter side — brevity forces clarity and keeps viewers watching to the end.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">What is the best structure for an explainer video script?</h3>
          <p className="text-[#475569] mb-4 text-base">Hook with the problem → Expand the problem → Introduce the solution → Explain how it works in 3 steps → Show the outcome → End with one clear call to action. This structure works for product explainers, educational videos, and service explainers alike.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How do I make my explainer video script sound natural?</h3>
          <p className="text-[#475569] mb-4 text-base">Write in plain, conversational language and read the script aloud as you write it. Avoid jargon, long sentences, and corporate speak. If it sounds awkward when you say it, rewrite it until it flows naturally.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">Should I write the script before or after creating visuals?</h3>
          <p className="text-[#475569] mb-4 text-base">Always write the script first. The script is the blueprint — visuals, animation, and voiceover are all built around what the script says. Writing script and visuals simultaneously leads to unfocused, inconsistent results.</p>
          <h3 className="text-[1.1rem] font-semibold text-[#1e293b] mt-6 mb-2.5">How can I use transcripts to write better explainer scripts?</h3>
          <p className="text-[#475569] mb-4 text-base">Generate transcripts of top-performing explainer videos in your niche at YouTubeToTranscript.io and read them as text. Study their structure, language, and pacing. The patterns you find in successful scripts are the same patterns to apply to your own writing.</p>
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

export default HowToWriteExplainerVideoScript
