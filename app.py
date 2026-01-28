import sys
import os

# Add server folder to Python path for DigitalOcean
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'server'))

# Import your backend app
from server.app import app

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port, debug=False)
