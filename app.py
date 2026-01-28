import sys
import os
from flask import Flask, send_from_directory

# Simple version - NO blueprint complications
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'server'))
from server.app import app as backend_app

# Create Flask app
flask_app = Flask(__name__, static_folder='client', static_url_path='')

# Serve frontend files
@flask_app.route('/', defaults={'path': 'index.html'})
@flask_app.route('/<path:path>')
def serve_frontend(path):
    return send_from_directory('client', path)

# Your backend API routes at /api/*
flask_app.register_blueprint(backend_app, url_prefix='/api')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    flask_app.run(host='0.0.0.0', port=port, debug=False)
