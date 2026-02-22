import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Terms from './Terms.jsx'
import Privacy from './Privacy.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Disclaimer from './Disclaimer.jsx'
import Blog from './Blog.jsx'
import HowToGetYouTubeTranscript from './blog/HowToGetYouTubeTranscript.jsx'
import HowToDownloadYouTubeSubtitles from './blog/HowToDownloadYouTubeSubtitles.jsx'
import HowToConvertYouTubeVideoToText from './blog/HowToConvertYouTubeVideoToText.jsx'
import YouTubeTranscriptWithTimestamps from './blog/YouTubeTranscriptWithTimestamps.jsx'
import HowToRepurposeYouTubeVideosIntoBlogPosts from './blog/HowToRepurposeYouTubeVideosIntoBlogPosts.jsx'
import HowToTakeNotesFromYouTubeVideos from './blog/HowToTakeNotesFromYouTubeVideos.jsx'
import HowToWriteBetterYouTubeScripts from './blog/HowToWriteBetterYouTubeScripts.jsx'
import HowToUseStorytellingInYouTubeVideos from './blog/HowToUseStorytellingInYouTubeVideos.jsx'
import HowToDoResearchForYouTubeVideos from './blog/HowToDoResearchForYouTubeVideos.jsx'
import HowToWriteYouTubeHook from './blog/HowToWriteYouTubeHook.jsx'
import HowToUseYouTubeTranscriptsForSeo from './blog/HowToUseYouTubeTranscriptsForSeo.jsx'
import HowToWriteExplainerVideoScript from './blog/HowToWriteExplainerVideoScript.jsx'
import HowToAddSubtitlesToYouTubeVideosFree from './blog/HowToAddSubtitlesToYouTubeVideosFree.jsx'
import HowToFindYouTubeVideoIdeas from './blog/HowToFindYouTubeVideoIdeas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/how-to-get-youtube-transcript" element={<HowToGetYouTubeTranscript />} />
        <Route path="/blog/how-to-download-youtube-subtitles" element={<HowToDownloadYouTubeSubtitles />} />
        <Route path="/blog/how-to-convert-youtube-video-to-text" element={<HowToConvertYouTubeVideoToText />} />
        <Route path="/blog/youtube-transcript-with-timestamps" element={<YouTubeTranscriptWithTimestamps />} />
        <Route path="/blog/how-to-repurpose-youtube-videos-into-blog-posts" element={<HowToRepurposeYouTubeVideosIntoBlogPosts />} />
        <Route path="/blog/how-to-take-notes-from-youtube-videos" element={<HowToTakeNotesFromYouTubeVideos />} />
        <Route path="/blog/how-to-write-better-youtube-scripts" element={<HowToWriteBetterYouTubeScripts />} />
        <Route path="/blog/how-to-use-storytelling-in-youtube-videos" element={<HowToUseStorytellingInYouTubeVideos />} />
        <Route path="/blog/how-to-do-research-for-youtube-videos" element={<HowToDoResearchForYouTubeVideos />} />
        <Route path="/blog/how-to-write-youtube-hook" element={<HowToWriteYouTubeHook />} />
        <Route path="/blog/how-to-use-youtube-transcripts-for-seo" element={<HowToUseYouTubeTranscriptsForSeo />} />
        <Route path="/blog/how-to-write-explainer-video-script" element={<HowToWriteExplainerVideoScript />} />
        <Route path="/blog/how-to-add-subtitles-to-youtube-videos-free" element={<HowToAddSubtitlesToYouTubeVideosFree />} />
        <Route path="/blog/how-to-find-youtube-video-ideas" element={<HowToFindYouTubeVideoIdeas />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
