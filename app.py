from flask import Flask, send_from_directory, request, jsonify
import os
import yt_dlp  # Your transcript library

app = Flask(__name__, static_folder='client', static_url_path='')

# Serve frontend
@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def serve_frontend(path):
    return send_from_directory('client', path)

# Backend transcript API (replace with your actual code)
@app.route('/api/transcript', methods=['POST'])
def get_transcript():
    data = request.json
    url = data.get('url')
    
    ydl_opts = {'writesubtitles': True, 'writeautomaticsub': True}
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=False)
        transcript = info.get('subtitles', {}).get('en', [])
    
    return jsonify({'transcript': transcript})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=False)
