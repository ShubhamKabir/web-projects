# PROJECT HADAL — Deep-Sea Research Archive

PROJECT HADAL is an immersive deep-sea research archive experience built around cinematic exploration, scientific discovery, and underwater telemetry.

The project combines a persistent WebGL environment with interface-driven storytelling to create the feeling of descending into the deepest parts of the ocean.

## Overview

PROJECT HADAL presents a fictional deep-sea expedition through a continuous descent from the ocean surface into the hadal zone.

The experience combines:

- Cinematic underwater environments
- Scientific telemetry
- Sonar visualization
- Specimen discovery
- Research archive interfaces
- Expedition data
- Interactive specimen inspection
- Scroll-driven progression
- WebGL visuals
- Atmospheric transitions

## Experience

The experience progresses through a structured descent:

```text
ENTRY
  ↓
SURFACE
  ↓
DESCENT
  ↓
TWILIGHT
  ↓
DISCOVERY
  ↓
SPECIMEN INSPECTION
  ↓
MIDNIGHT
  ↓
SONAR
  ↓
HYDROTHERMAL VENT
  ↓
SPECIMEN LAB
  ↓
ABYSS
  ↓
HADAL DESCENT
  ↓
10,924 M
  ↓
FINAL DISCOVERY
  ↓
ARCHIVE
  ↓
RETURN TO SURFACE
```

## Features

- Immersive deep-sea environment
- Persistent WebGL canvas
- Scroll-driven expedition progression
- Scientific telemetry HUD
- Sonar sequence
- Hydrothermal vent sequence
- Specimen discovery and inspection
- Specimen laboratory interface
- Hadal-zone descent
- Deep-ocean research archive
- Cinematic transitions
- Responsive interface

## Design Direction

The visual system is inspired by scientific research equipment, deep-ocean exploration, and archival documentation.

### Visual System

- Near-black backgrounds
- Deep navy and ocean tones
- Cyan interface accents
- Amber telemetry indicators
- Green and violet specimen indicators
- Technical HUD elements
- Fine borders and data markers
- Atmospheric underwater environments

### Typography

The interface combines different type styles for different purposes:

- Syne for major display typography
- JetBrains Mono for telemetry and technical information
- Newsreader for archival and field-note content

The contrast between cinematic environments and precise scientific UI creates the project's core visual language.

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS
- Three.js
- React Three Fiber
- Drei
- GSAP
- Lenis
- Lucide React

## Project Structure

```text
project-hadal/
├── app/
├── components/
├── public/
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Local Development

From the project directory:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Deployment

The project is deployed through Vercel and uses the `project-hadal` folder as its Root Directory within the `web-projects` repository.

Updates pushed to the `master` branch can trigger a new Vercel deployment.

## Purpose

PROJECT HADAL was built as part of a collection of independent web projects exploring different industries, visual systems, and interaction patterns.

The project focuses specifically on immersive WebGL experiences, scientific storytelling, environmental interaction, cinematic scrolling, and experimental research interfaces.
