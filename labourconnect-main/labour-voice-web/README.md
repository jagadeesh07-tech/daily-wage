# Labour Voice Web

A React + Vite web app for the LabourConnect voice interface.

## Overview

This project is the frontend for labour voice interaction. It uses Vite, React 19, Tailwind CSS, and voice input/output utilities.

## Features

- React-based UI powered by Vite
- Voice-to-text and text-to-speech support
- Tailwind CSS styling and utility classes
- ESLint configuration for code quality

## Prerequisites

- Node.js 20 or newer
- npm (installed with Node.js)
- Windows PowerShell may block `npm` scripts by default; use PowerShell or Command Prompt with the correct policy.

## Setup

1. Open a terminal in this folder:
   - `labourconnect-main/labour-voice-web`

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at the local URL shown in the terminal, typically:
   - `http://localhost:5173`

### PowerShell note

If PowerShell blocks npm, run:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
```

Or run `npm` directly using the npm command file:

```powershell
& "C:\Program Files\nodejs\npm.cmd" install
```

## Scripts

- `npm run dev` - start the local development server
- `npm run build` - build the production app
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint across the project

## Project structure

- `src/` - main React application source files
- `src/components/` - reusable UI components
- `src/voice/` - voice input/output helpers
- `public/` - static assets served by Vite
- `package.json` - scripts and dependencies
- `vite.config.js` - Vite configuration

## Notes

- This app is configured as a private project (`private: true`).
- If you change dependencies, re-run `npm install`.

## Contributing

If you want to improve this project:

1. Create a new branch
2. Add or update components in `src/`
3. Run `npm run lint`
4. Test the app with `npm run dev`

## License

Use this project as needed for your own development.
