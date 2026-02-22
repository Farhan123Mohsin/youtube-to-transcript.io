import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="faq-section" id="faq">
      <h2>YouTube Transcript Generator — FAQs</h2>
      <p className="faq-subheading">
        Everything you need to know about converting YouTube videos to text — free, fast, and easy.
      </p>

      <div className={`faq-item ${openIndex === 0 ? 'open' : ''}`}>
        <h3 onClick={() => handleToggle(0)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleToggle(0)}>
          What is YouTubeToTranscript.io?
          <span className="faq-icon">+</span>
        </h3>
        <div className="faq-answer">
          <p>This is a free <strong>YouTube transcript generator</strong> that instantly converts any YouTube video URL into a full, readable text transcript — complete with <strong>timestamps</strong>. No signup, no installation, and no cost — just paste the video link and get your transcript in seconds.</p>
        </div>
      </div>

      <div className={`faq-item ${openIndex === 1 ? 'open' : ''}`}>
        <h3 onClick={() => handleToggle(1)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleToggle(1)}>
          How do I generate a transcript from a YouTube video?
          <span className="faq-icon">+</span>
        </h3>
        <div className="faq-answer">
          <p>Generating a <strong>YouTube transcript</strong> is simple. Copy your YouTube video URL, paste it into the input field, and click Generate. Your full transcript will appear within seconds. You can then copy the text directly or download it in your preferred format.</p>
        </div>
      </div>

      <div className={`faq-item ${openIndex === 2 ? 'open' : ''}`}>
        <h3 onClick={() => handleToggle(2)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleToggle(2)}>
          What file formats can I download the YouTube transcript in?
          <span className="faq-icon">+</span>
        </h3>
        <div className="faq-answer">
          <p>This tool supports <strong>6 download formats</strong>:</p>
          <br />
          <p>
            <strong>TXT</strong> (plain text) &nbsp;·&nbsp;
            <strong>PDF</strong> &nbsp;·&nbsp;
            <strong>DOCX</strong> (Microsoft Word) &nbsp;·&nbsp;
            <strong>CSV</strong> &nbsp;·&nbsp;
            <strong>VTT</strong> (Web Video Text Tracks) &nbsp;·&nbsp;
            <strong>SRT</strong> (SubRip Subtitle)
          </p>
          <br />
          <p>All formats support <strong>timestamps</strong>, so you always know exactly where in the video each line of text appears.</p>
        </div>
      </div>

      <div className={`faq-item ${openIndex === 3 ? 'open' : ''}`}>
        <h3 onClick={() => handleToggle(3)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleToggle(3)}>
          Is YouTubeToTranscript.io completely free?
          <span className="faq-icon">+</span>
        </h3>
        <div className="faq-answer">
          <p>Yes — <strong>100% free</strong>. There are no hidden charges, no subscription plans, and no account creation required. You can generate and download as many <strong>YouTube transcripts</strong> as you need without spending a single penny.</p>
        </div>
      </div>

      <div className={`faq-item ${openIndex === 4 ? 'open' : ''}`}>
        <h3 onClick={() => handleToggle(4)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleToggle(4)}>
          Can I copy the YouTube transcript without downloading a file?
          <span className="faq-icon">+</span>
        </h3>
        <div className="faq-answer">
          <p>Absolutely. This tool includes a <strong>one-click Copy button</strong> that instantly copies the full transcript to your clipboard — no download needed. Perfect for quick note-taking, content repurposing, or pasting directly into any app or document.</p>
        </div>
      </div>

      <div className={`faq-item ${openIndex === 5 ? 'open' : ''}`}>
        <h3 onClick={() => handleToggle(5)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleToggle(5)}>
          Can I download YouTube video thumbnails using this tool?
          <span className="faq-icon">+</span>
        </h3>
        <div className="faq-answer">
          <p>Yes! Along with the transcript, you can also <strong>download the YouTube video thumbnail</strong> in multiple sizes. This is especially useful for content creators, bloggers, and social media managers who need high-quality thumbnail images for their projects.</p>
        </div>
      </div>

      <div className={`faq-item ${openIndex === 6 ? 'open' : ''}`}>
        <h3 onClick={() => handleToggle(6)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleToggle(6)}>
          Who should use a YouTube transcript generator?
          <span className="faq-icon">+</span>
        </h3>
        <div className="faq-answer">
          <p>This tool is built for anyone who needs to <strong>convert YouTube videos to text</strong>, including:</p>
          <br />
          <p>
            ✅ <strong>Content creators</strong> repurposing videos into blogs or social posts<br />
            ✅ <strong>Students &amp; researchers</strong> taking notes from lectures or talks<br />
            ✅ <strong>Journalists</strong> quoting video interviews accurately<br />
            ✅ <strong>SEO professionals</strong> extracting keywords from video content<br />
            ✅ <strong>Educators</strong> creating accessible, text-based learning materials
          </p>
        </div>
      </div>

      <div className={`faq-item ${openIndex === 7 ? 'open' : ''}`}>
        <h3 onClick={() => handleToggle(7)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleToggle(7)}>
          Does this YouTube transcript generator support multiple languages?
          <span className="faq-icon">+</span>
        </h3>
        <div className="faq-answer">
          <p>Yes! This tool supports <strong>transcript generation in 50+ languages</strong>. Whether the YouTube video is in English, Arabic, Spanish, Hindi, French, or any other major language, you can generate an accurate transcript instantly — completely free.</p>
        </div>
      </div>

      <div className={`faq-item ${openIndex === 8 ? 'open' : ''}`}>
        <h3 onClick={() => handleToggle(8)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleToggle(8)}>
          What makes YouTubeToTranscript.io better than other YouTube to transcript tools?
          <span className="faq-icon">+</span>
        </h3>
        <div className="faq-answer">
          <p>Most <strong>YouTube transcript tools</strong> only offer plain text output. It goes further by offering:</p>
          <br />
          <p>
            📄 <strong>6 download formats</strong> — TXT, PDF, DOCX, CSV, VTT, SRT<br />
            🌍 <strong>50+ languages</strong> supported<br />
            ⏱️ <strong>Timestamps</strong> included in transcripts<br />
            📋 <strong>One-click copy</strong> to clipboard<br />
            🖼️ <strong>YouTube thumbnail downloader</strong> in multiple sizes<br />
            🔓 <strong>Completely free</strong> — no account, no limits
          </p>
          <br />
          <p>Everything you need to go from <strong>YouTube video to transcript</strong> — in one place.</p>
        </div>
      </div>
    </section>
  )
}
