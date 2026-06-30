# DocSafe HSE - Chrome Extension

## Overview
DocSafe HSE is a real-time HSE Document Compliance Analyzer. It reviews Risk Assessments (RA) and identifies missing required information down to the specific cell and row.

## Features
- Real-time document analysis.
- Detailed findings with cell coordinates (Row/Column).
- Compliance scoring.
- Suggestion engine for corrective actions.

## Structure
- `backend/`: Node.js Express server with the analysis engine.
- `extension/`: React + TypeScript Chrome Extension frontend.

## Getting Started
### Backend
1. `cd backend`
2. `npm install`
3. `npm run dev` (or `npx ts-node src/server.ts`)

### Extension
1. `cd extension`
2. `npm install`
3. `npm run build`
4. Load the `dist` folder in Chrome as an unpacked extension.
