// Shared data for blog interlinking (SEO: related articles + in-content links)

export const BLOG_ARTICLES = [
  { slug: 'how-to-get-youtube-transcript', title: 'How to Get a YouTube Transcript (Step-by-Step Guide)' },
  { slug: 'how-to-download-youtube-subtitles', title: 'How to Download YouTube Subtitles as SRT, VTT or TXT File' },
  { slug: 'how-to-convert-youtube-video-to-text', title: 'How to Convert YouTube Video to Text Free' },
  { slug: 'youtube-transcript-with-timestamps', title: 'How to Get a YouTube Transcript with Timestamps' },
  { slug: 'how-to-repurpose-youtube-videos-into-blog-posts', title: 'How to Repurpose YouTube Videos into Blog Posts' },
  { slug: 'how-to-take-notes-from-youtube-videos', title: 'How to Take Notes from YouTube Videos Faster' },
  { slug: 'how-to-write-better-youtube-scripts', title: 'How to Write Better YouTube Scripts (That Keep Viewers Watching)' },
  { slug: 'how-to-use-storytelling-in-youtube-videos', title: 'How to Use Storytelling in YouTube Videos to Get More Views' },
  { slug: 'how-to-do-research-for-youtube-videos', title: 'How to Do Research for YouTube Videos (The Right Way)' },
  { slug: 'how-to-write-youtube-hook', title: 'How to Write a YouTube Hook That Stops Viewers from Clicking Away' },
  { slug: 'how-to-use-youtube-transcripts-for-seo', title: 'How to Use YouTube Transcripts for SEO — Rank Higher with Less Effort' },
  { slug: 'how-to-write-explainer-video-script', title: 'How to Write an Explainer Video Script (Step by Step)' },
  { slug: 'how-to-add-subtitles-to-youtube-videos-free', title: 'How to Add Subtitles to YouTube Videos Free' },
  { slug: 'how-to-find-youtube-video-ideas', title: 'How to Find the Best YouTube Video Ideas for Your Niche' },
]

export const RELATED_BY_SLUG = {
  'how-to-get-youtube-transcript': ['how-to-download-youtube-subtitles', 'youtube-transcript-with-timestamps', 'how-to-convert-youtube-video-to-text', 'how-to-add-subtitles-to-youtube-videos-free'],
  'how-to-download-youtube-subtitles': ['how-to-get-youtube-transcript', 'youtube-transcript-with-timestamps', 'how-to-add-subtitles-to-youtube-videos-free', 'how-to-convert-youtube-video-to-text'],
  'how-to-convert-youtube-video-to-text': ['how-to-get-youtube-transcript', 'youtube-transcript-with-timestamps', 'how-to-take-notes-from-youtube-videos', 'how-to-repurpose-youtube-videos-into-blog-posts'],
  'youtube-transcript-with-timestamps': ['how-to-get-youtube-transcript', 'how-to-download-youtube-subtitles', 'how-to-add-subtitles-to-youtube-videos-free', 'how-to-convert-youtube-video-to-text'],
  'how-to-repurpose-youtube-videos-into-blog-posts': ['how-to-use-youtube-transcripts-for-seo', 'how-to-get-youtube-transcript', 'how-to-convert-youtube-video-to-text', 'how-to-write-better-youtube-scripts'],
  'how-to-take-notes-from-youtube-videos': ['how-to-get-youtube-transcript', 'how-to-convert-youtube-video-to-text', 'how-to-do-research-for-youtube-videos', 'how-to-find-youtube-video-ideas'],
  'how-to-write-better-youtube-scripts': ['how-to-write-youtube-hook', 'how-to-use-storytelling-in-youtube-videos', 'how-to-write-explainer-video-script', 'how-to-get-youtube-transcript'],
  'how-to-use-storytelling-in-youtube-videos': ['how-to-write-youtube-hook', 'how-to-write-better-youtube-scripts', 'how-to-find-youtube-video-ideas', 'how-to-do-research-for-youtube-videos'],
  'how-to-do-research-for-youtube-videos': ['how-to-find-youtube-video-ideas', 'how-to-write-better-youtube-scripts', 'how-to-get-youtube-transcript', 'how-to-repurpose-youtube-videos-into-blog-posts'],
  'how-to-write-youtube-hook': ['how-to-write-better-youtube-scripts', 'how-to-use-storytelling-in-youtube-videos', 'how-to-find-youtube-video-ideas', 'how-to-write-explainer-video-script'],
  'how-to-use-youtube-transcripts-for-seo': ['how-to-repurpose-youtube-videos-into-blog-posts', 'how-to-get-youtube-transcript', 'how-to-download-youtube-subtitles', 'how-to-add-subtitles-to-youtube-videos-free'],
  'how-to-write-explainer-video-script': ['how-to-write-better-youtube-scripts', 'how-to-write-youtube-hook', 'how-to-use-storytelling-in-youtube-videos', 'how-to-get-youtube-transcript'],
  'how-to-add-subtitles-to-youtube-videos-free': ['how-to-download-youtube-subtitles', 'how-to-get-youtube-transcript', 'youtube-transcript-with-timestamps', 'how-to-use-youtube-transcripts-for-seo'],
  'how-to-find-youtube-video-ideas': ['how-to-do-research-for-youtube-videos', 'how-to-write-youtube-hook', 'how-to-repurpose-youtube-videos-into-blog-posts', 'how-to-take-notes-from-youtube-videos'],
}
