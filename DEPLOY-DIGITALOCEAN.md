# DigitalOcean App Platform – Turnstile Setup

App Platform pe deploy karte waqt Turnstile (Cloudflare challenge) ke liye ye steps follow karein.

## 1. Environment variables

### Frontend (Static Site / jo component `npm run build` chalaata hai)

- **`VITE_TURNSTILE_SITE_KEY`** – Cloudflare Turnstile ka **Site Key** (public).
  - **Zaroori:** Ye variable **build time** pe available hona chahiye taake production build me widget enable ho.
  - DO App Platform pe frontend component ke **Environment Variables** me add karein.
  - Agar ye set nahi hoga to production pe Turnstile widget nahi dikhega aur "Verification failed" aa sakta hai.

### Backend (Flask API)

- **`TURNSTILE_SECRET_KEY`** – Cloudflare Turnstile ka **Secret Key** (private).
  - Backend component ke **Environment Variables** me add karein (runtime pe use hota hai).

## 2. Cloudflare Turnstile dashboard

- [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) → apna widget choose karein.
- **Domains** me production domain add karein, jaise:
  - `youtubetotranscript.io`
  - Agar DO default URL use kar rahe ho to: `*.ondigitalocean.app` ya apna exact app URL.
- Domain add na ho to Cloudflare token reject karta hai aur "Verification failed" aata hai.

## 3. Summary

| Jaga              | Variable                    | Kab use hota hai |
|-------------------|-----------------------------|-------------------|
| Frontend (DO)     | `VITE_TURNSTILE_SITE_KEY`   | Build time        |
| Backend (DO)      | `TURNSTILE_SECRET_KEY`      | Runtime           |
| Cloudflare        | Widget domains              | Production domain add karna |

- **Localhost:** Turnstile code me hi band hai – local pe challenge nahi aata.
- **Production:** Sirf tab kaam karega jab dono keys DO pe set hon **aur** Cloudflare me production domain add ho.
