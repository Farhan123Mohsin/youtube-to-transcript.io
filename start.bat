@echo off
echo Starting YouTube Transcript App...
echo.

echo Starting Backend Server (with virtual environment)...
start "Backend" cmd /k "cd server && venv\Scripts\activate && python app.py"

echo Starting Frontend Development Server...
start "Frontend" cmd /k "cd client && npm run dev"

echo.
echo Both servers are starting...
echo Backend will be available at: http://127.0.0.1:5000
echo Frontend will be available at: http://localhost:5173
echo Production domain: https://youtubetotranscript.io
echo.
pause
