# Daily Wage / LabourConnect

Daily Wage is a workspace for the LabourConnect project, including a voice-enabled web frontend built with React and Vite.

## What this project uses

- **React 19** for the frontend UI
- **Vite** for fast development and bundling
- **Tailwind CSS** for utility-first styling
- **Node.js** and **npm** for dependency management
- **Voice utilities** in `src/voice/` for speech-to-text and text-to-speech support
- **ESLint** for code quality and linting

## Project structure

- `labourconnect-main/` - root repository folder
- `labourconnect-main/labour-voice-web/` - React web app and Vite project
- `labourconnect-main/labour-voice-web/src/` - main application source files
- `labourconnect-main/labour-voice-web/src/components/` - reusable UI components
- `labourconnect-main/labour-voice-web/src/voice/` - voice helper utilities
- `labourconnect-main/labour-voice-web/public/` - static assets served by Vite

## How to clone the repository

If you want to clone this repository locally, use:

```bash
git clone <repo-url>
cd daily-wage
```

If you already have it, update it with:

```bash
git pull origin main
```

## Installation

### 1. Install Node.js dependencies

Open a terminal in the `labourconnect-main/labour-voice-web` folder and run:

```bash
cd labourconnect-main/labour-voice-web
npm install
```

## How to run the project

### Option 1: Run the Vite development server

```bash
npm run dev
```

Then open the URL shown in the terminal, usually:

- `http://localhost:5173`

### Option 2: Preview the production build

```bash
npm run build
npm run preview
```

## Features

- Voice-enabled React UI
- Speech-to-text and text-to-speech helper utilities
- Responsive component-based layout
- Tailwind CSS styling with `tailwind-merge`
- ESLint for linting and code consistency

## Notes

- This project is currently configured in `labourconnect-main/labour-voice-web`.
- If PowerShell blocks npm execution, run:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
```

Or run npm directly:

```powershell
& "C:\Program Files\nodejs\npm.cmd" install
```

- Re-run `npm install` if dependencies change.

## Contributing

1. Create a new branch
2. Modify files under `labourconnect-main/labour-voice-web/src/`
3. Run `npm run lint`
4. Test with `npm run dev`

## License

Use this repository for your own development and experimentation.
