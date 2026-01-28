import sys
import os
from flask import Flask, send_from_directory

# Add server folder to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'server'))
from server.app import app as backend_app

# Create main app that serves frontend + backend APIs
app = Flask(__name__, static_folder='client', static_url_path='')

# Serve frontend files
@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def serve_frontend(path):
    return send_from_directory('client', path)

# Backend API routes (keep existing)
app.register_blueprint(backend_app, url_prefix='/api')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=False)
