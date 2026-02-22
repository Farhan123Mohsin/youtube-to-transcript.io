# Error Messages Audit — Site-Wide

**Total: 10 distinct error cases** (one friendly message per case)

---

## 1. Client-side (App.jsx) — shown to user

| # | Location | Trigger | Current message | Proposed friendly message (English) |
|---|----------|--------|-----------------|-------------------------------------|
| 1 | Turnstile `error-callback` | Widget verification fail | `Verification failed. Please refresh the page.` | **Oops! 😅 Verification got stuck. Refresh the page and try again — we're right here!** |
| 2 | `handleSubmit` (before fetch) | User didn't complete verification | `Please complete the verification` | **Almost there! 👆 Complete the little challenge below, then hit "Generate Transcript".** |
| 3 | API response `data.error` | Server sent error string | `data.error` | *Mapped below per server error.* |
| 4 | `!response.ok` + catch | 4xx/5xx or invalid JSON | `Failed to fetch transcript: ${err.message}` | *Catch block maps to friendly message.* |
| 5 | `copyToClipboard` catch | Clipboard API fail | `Failed to copy to clipboard` | **Copy didn't work! 😅 Your browser said no. You can select the transcript below and copy it manually.** |

---

## 2. Server (app.py) — these strings come to frontend as `data.error`

| # | When | Server returns (exact) | Proposed friendly message (English) |
|---|------|-------------------------|-------------------------------------|
| 6 | URL missing | `YouTube URL is required` | **Oh no! 😅 We need the video URL first — no link, no transcript!** |
| 7 | Turnstile verify fail | `Verification failed. Please complete the challenge again and submit.` | **We're doing a quick check — please complete the verification step again and hit submit. 💪** |
| 8 | Invalid URL (ValueError) | `Invalid YouTube URL format` | **That link looks a bit off! 🤔 Paste a proper YouTube video link (youtube.com/watch?v=... or youtu.be/...)** |
| 9 | No transcript | `No transcript available for this video` | **No transcript for this video. 😕 No worries — some videos have it turned off. Try another one!** |
| 10 | Video private/unavailable | `Video is unavailable or private` | **We can't reach this video (looks private or restricted). 🔒 Try a public video?** |
| (500) | Server exception | `Failed to fetch transcript: <str(e)>` | **Oops, our side glitched! 😅 Give it a moment and try again. If it keeps happening, [contact us](/contact).** (link in UI) |

---

## 3. Network / parse errors (fetch fail, response.json fail)

- **Fetch reject** (no internet, CORS, etc.): `err.message` often `"Failed to fetch"`.
  - **Proposed:** **Connection's a bit shaky! 📶 Check your internet and try again — we'll be here.**
- **response.json() fail** or other catch: generic.
  - **Proposed:** **Something went wrong! 🔧 Try again; if it keeps failing, let us know.**

---

## Summary count

| Source | Count |
|--------|--------|
| Client-only (Turnstile, verification, copy) | 3 |
| Server `data.error` (map in frontend) | 5 exact + 1 generic (500) |
| Network / generic catch | 2 |
| **Total distinct messages to show** | **10** |

---

## Implementation plan (when you say "add kr do")

1. **App.jsx**  
   - Add a helper: `getFriendlyErrorMessage(serverMessage, err)`  
   - Replace every `setError(...)` with `setError(getFriendlyErrorMessage(...))`  
   - Optionally change error UI heading from "Error" to "Oops!"  
2. **Server**  
   - No change needed; frontend maps server strings to these friendly messages.

---

*When you say "add kr do" we'll add all these messages into the code.*
