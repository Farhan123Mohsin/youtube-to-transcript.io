const BOOKMARK_MESSAGES = [
  'Your future self will thank you! Bookmark for direct YouTube transcripts.',
  "Don't lose us in your history! Bookmark for instant YouTube transcripts.",
  'Stop searching! Bookmark us for one-click YouTube transcripts.',
]

// 3 days in ms — message stays same for 3 days, then changes
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000

function getBookmarkMessageIndex() {
  const dayWindow = Math.floor(Date.now() / THREE_DAYS_MS)
  return dayWindow % BOOKMARK_MESSAGES.length
}

export default function BookmarkBar() {
  const messageIndex = getBookmarkMessageIndex()
  return (
    <div
      className="w-full py-2 flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 border-b border-indigo-200/60"
      aria-label="Bookmark reminder"
    >
      <span className="text-sm font-medium text-indigo-700 select-none flex items-center justify-center gap-2 flex-wrap">
        🔖 {BOOKMARK_MESSAGES[messageIndex]}
        <kbd className="inline-flex items-center px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-xs shadow-sm border border-indigo-700 select-none ml-1">
          Ctrl+D
        </kbd>
      </span>
    </div>
  )
}
