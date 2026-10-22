@echo off
setlocal
cd /d "%~dp0"

if not exist "dist\index.html" (
  echo The built site is missing: dist\index.html
  pause
  exit /b 1
)

where node >nul 2>&1
if not errorlevel 1 (
  start "" /B node serve.mjs
) else (
  where py >nul 2>&1
  if not errorlevel 1 (
    start "" /B py -3 -m http.server 8080 --directory dist
  ) else (
    where python >nul 2>&1
    if not errorlevel 1 (
      start "" /B python -m http.server 8080 --directory dist
    ) else (
      echo Install Node.js 20+ or Python 3 to launch the site locally.
      echo https://nodejs.org/ or https://www.python.org/
      pause
      exit /b 1
    )
  )
)

timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8080"
echo.
echo Project: SENSORITY is available at http://127.0.0.1:8080
 echo Close this window to stop using the local server.
pause >nul
