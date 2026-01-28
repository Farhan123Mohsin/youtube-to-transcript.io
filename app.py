import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'server'))
from server.app import app
from flask import send_from_directory

# ADD ROOT ROUTE
@app.route('/')
@app.route('/<path:path>')
def catch_all(path='index.html'):
    return send_from_directory('../client', 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=False)
