# DigitalOcean App Platform – Environment Variables

## Frontend (client) app

Add this in your **Frontend** component → **App-Level Environment Variables**:

| Name | Description |
|------|-------------|
| `VITE_TURNSTILE_SITE_KEY` | Cloudflare Turnstile **site key** (public). Get it from [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile). |

- **Secret key** mat dalna frontend pe – sirf **site key** use karo.
- Redeploy frontend after adding/updating env vars (Vite inlines these at build time).

## Backend (server) app

Add this in your **Backend** component → **App-Level Environment Variables**:

| Name | Description |
|------|-------------|
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile **secret key** (private). Same Cloudflare dashboard se. |

---

**Summary:** Frontend = site key only. Backend = secret key only. Dono keys Cloudflare Turnstile dashboard se same widget ke liye milti hain.
