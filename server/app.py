from flask import Flask, request, jsonify, send_from_directory
from youtube_transcript_api import YouTubeTranscriptApi, NoTranscriptFound, VideoUnavailable
from flask_cors import CORS
from dotenv import load_dotenv
import re
import requests
import json
import os
import traceback
from youtube_transcript_api.proxies import GenericProxyConfig

# Load environment variables from .env file
load_dotenv()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Built frontend (Vite) output path: ../client/dist
FRONTEND_DIST_DIR = os.path.join(BASE_DIR, '..', 'client', 'dist')
# Static assets (JS/CSS/images) output path: ../client/dist/assets
FRONTEND_ASSETS_DIR = os.path.join(FRONTEND_DIST_DIR, 'assets')

# Configure Flask to serve built frontend
app = Flask(
    __name__,
    static_folder=FRONTEND_ASSETS_DIR,   # 1) static files from ../client/dist/assets
    static_url_path='/assets',           # served under /assets/...
    template_folder=FRONTEND_DIST_DIR,   # 2) templates from ../client/dist
)
CORS(app, origins=['https://youtubetotranscript.io', 'http://localhost:5173', 'http://127.0.0.1:5173'])

def extract_video_id(url):
    """Extract video ID from various YouTube URL formats"""
    # Regular expressions for different YouTube URL formats
    patterns = [
        r'(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})',
        r'youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})',
        r'youtube\.com\/embed\/([a-zA-Z0-9_-]{11})',
        r'youtube\.com\/v\/([a-zA-Z0-9_-]{11})',
        r'youtu\.be\/([a-zA-Z0-9_-]{11})',
        r'youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})'
    ]
    
    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    
    # If no pattern matches, try the old method as fallback
    if 'v=' in url:
        return url.split('v=')[-1].split('&')[0]
    
    raise ValueError('Invalid YouTube URL format')

def format_timestamp(seconds):
    """Convert seconds to MM:SS or HH:MM:SS format"""
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    seconds = int(seconds % 60)
    
    if hours > 0:
        return f"{hours:02d}:{minutes:02d}:{seconds:02d}"
    else:
        return f"{minutes:02d}:{seconds:02d}"

def get_video_metadata(video_id):
    """Fetch video metadata from YouTube"""
    try:
        # Use YouTube's oEmbed API to get basic video info
        oembed_url = f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={video_id}&format=json"
        response = requests.get(oembed_url, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            return {
                'title': data.get('title', 'Unknown Title'),
                'author_name': data.get('author_name', 'Unknown Channel'),
                'thumbnail_url': data.get('thumbnail_url', ''),
                'provider_name': data.get('provider_name', 'YouTube'),
                'html': data.get('html', '')
            }
        else:
            return {
                'title': 'Video Title Unavailable',
                'author_name': 'Unknown Channel',
                'thumbnail_url': '',
                'provider_name': 'YouTube',
                'html': ''
            }
    except Exception as e:
        print(f"Error fetching video metadata: {str(e)}")
        return {
            'title': 'Video Title Unavailable',
            'author_name': 'Unknown Channel',
            'thumbnail_url': '',
            'provider_name': 'YouTube',
            'html': ''
        }

def verify_turnstile_token(token, remote_ip=None):
    """
    Verify Cloudflare Turnstile token server-side.
    If TURNSTILE_SECRET_KEY is not configured, verification is skipped (development only).
    """
    secret_key = os.environ.get("TURNSTILE_SECRET_KEY")
    if not secret_key:
        # In production you should require this to be set.
        print("WARNING: TURNSTILE_SECRET_KEY is not set; skipping Turnstile verification.")
        return True

    if not token:
        return False

    try:
        payload = {
            "secret": secret_key,
            "response": token,
        }
        if remote_ip:
            payload["remoteip"] = remote_ip

        resp = requests.post(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            data=payload,
            timeout=5,
        )
        data = resp.json()
        return bool(data.get("success"))
    except Exception as e:
        print(f"Error verifying Turnstile token: {str(e)}")
        # Fail open in case of verification error to avoid blocking legit users if CF is down.
        return True


@app.route("/api/transcript", methods=["POST"])
def get_transcript():
    try:
        data = request.get_json()
        
        if not data or 'youtubeUrl' not in data:
            return jsonify({'error': 'YouTube URL is required'}), 400

        # Verify Cloudflare Turnstile token
        token = data.get('turnstileToken')
        remote_ip = request.headers.get('CF-Connecting-IP', request.remote_addr)
        if not verify_turnstile_token(token, remote_ip):
            return jsonify({'error': 'Human verification failed. Please refresh and try again.'}), 400
        
        youtube_url = data['youtubeUrl']
        
        # Extract video ID from YouTube URL (supports multiple formats)
        try:
            video_id = extract_video_id(youtube_url)
        except ValueError as e:
            return jsonify({'error': str(e)}), 400
        
        # Get video metadata
        video_metadata = get_video_metadata(video_id)
        
        # Get transcript using youtube-transcript-api with Webshare Rotating Residential Proxy
        try:
            # Webshare Rotating Residential Proxy configuration
            proxy_username = os.environ.get("PROXY_USERNAME", "usxjjram-rotate")
            proxy_password = os.environ.get("PROXY_PASSWORD", "r75q7501wla6")
            proxy_host = os.environ.get("PROXY_HOST", "p.webshare.io")
            proxy_port = os.environ.get("PROXY_PORT", "80")

            # Webshare rotating proxy URL
            webshare_proxy = f"http://{proxy_username}:{proxy_password}@{proxy_host}:{proxy_port}/"

            ytt_api = YouTubeTranscriptApi(
                proxy_config=GenericProxyConfig(
                    http_url=webshare_proxy,
                    https_url=webshare_proxy,
                )
            )
            
            # First try to get transcript in the video's original language
            transcript = ytt_api.fetch(video_id)
        except NoTranscriptFound:
            # If no transcript found, try common languages
            try:
                transcript = ytt_api.fetch(video_id, languages=[
                    'en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh',  # Original languages
                    'hi', 'ar', 'bn', 'ur', 'ta', 'te', 'ml', 'kn', 'gu', 'pa',  # Indian languages
                    'th', 'vi', 'id', 'ms', 'tl', 'nl', 'sv', 'no', 'da', 'fi',  # Southeast Asian & Nordic
                    'pl', 'cs', 'hu', 'ro', 'bg', 'hr', 'sk', 'sl', 'et', 'lv',  # Eastern European
                    'tr', 'fa', 'he', 'uk', 'be', 'ka', 'hy', 'az', 'kk', 'uz'   # Middle Eastern & Central Asian
                ])
            except NoTranscriptFound:
                # If still no transcript, try any available language
                transcript = ytt_api.fetch(video_id, languages=['en'])
        
        # Convert transcript to plain text
        transcript_text = " ".join([snippet.text for snippet in transcript])
        
        # Always generate timestamped transcript for real-time toggling
        timestamped_lines = []
        segments = []
        for snippet in transcript:
            timestamp = format_timestamp(snippet.start)
            timestamped_lines.append(f"[{timestamp}] {snippet.text}")
            segments.append({
                'start': float(snippet.start),
                'duration': float(snippet.duration),
                'text': snippet.text,
            })
        timestamped_transcript = "\n".join(timestamped_lines)
        
        return jsonify({
            'success': True,
            'transcript': transcript_text,
            'timestamped_transcript': timestamped_transcript,
            'video_id': video_id,
            'language': transcript.language,
            'language_code': transcript.language_code,
            'is_generated': transcript.is_generated,
            'video_metadata': video_metadata,
            'segments': segments
        })
        
    except NoTranscriptFound:
        return jsonify({'error': 'No transcript available for this video'}), 404
    except VideoUnavailable:
        return jsonify({'error': 'Video is unavailable or private'}), 404
    except Exception as e:
        print("=" * 50)
        print("FULL ERROR TRACEBACK:")
        print(traceback.format_exc())
        print("=" * 50)
        return jsonify({'error': f'Failed to fetch transcript: {str(e)}'}), 500

@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'YouTube Transcript API is running'})


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    """
    Serve the built React frontend from client/dist.
    Any path that doesn't start with 'api/' will be handled here.
    """
    # Don't let this catch API routes
    if path.startswith('api/'):
        return jsonify({'error': 'Not found'}), 404

    # If the requested file exists (e.g. /assets/...), serve it directly
    if path and os.path.exists(os.path.join(FRONTEND_DIST_DIR, path)):
        return send_from_directory(FRONTEND_DIST_DIR, path)

    # Otherwise, serve index.html (SPA fallback)
    return send_from_directory(FRONTEND_DIST_DIR, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
