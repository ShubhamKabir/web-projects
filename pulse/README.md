# PULSE — Web App

PULSE is a functional project-management web application designed around organizing projects, tasks, schedules, teams, and activity in a single workspace.

The project focuses on practical application UI, navigation, information architecture, and interactive front-end state rather than a marketing-style website.

## Overview

PULSE explores how a modern project-management application can structure complex information while keeping the interface clear and easy to navigate.

The application includes:

- Dashboard overview
- Project management
- Task management
- Calendar
- Team workspace
- Activity feed
- Settings
- Authentication screens
- Responsive application layouts
- Local front-end state and data

## Features

- Login interface
- Dashboard
- Projects list
- Project detail pages
- Task management
- Calendar interface
- Team management
- Activity timeline
- Settings interface
- Application sidebar navigation
- Responsive layouts
- Interactive UI states
- Local data/state handling

## Application Structure

```text
Login
  ↓
Dashboard
  ├── Projects
  │    └── Project Details
  ├── Tasks
  ├── Calendar
  ├── Team
  ├── Activity
  └── Settings
```

The application is implemented as a front-end experience with local data and state. Authentication and backend services are not connected to a production database.

## Design Direction

The visual system is focused on clarity, structure, and usability.

### Visual System

- Neutral slate-based interface
- Teal and blue accents
- Clean typography
- Structured cards
- Subtle borders
- Compact interface controls
- Clear information hierarchy

### Application UI

- Persistent navigation
- Dashboard-style information layout
- Structured project and task views
- Status indicators
- Activity and scheduling interfaces
- Responsive application shell

The design prioritizes functional product UI over decorative or editorial presentation.

## Pages

```text
/login
/dashboard
/projects
/projects/[id]
/tasks
/calendar
/team
/activity
/settings
```

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS

## Project Structure

```text
pulse/
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

The project is deployed through Vercel and uses the `pulse` folder as its Root Directory within the `web-projects` repository.

Updates pushed to the `master` branch can trigger a new Vercel deployment.

## Purpose

PULSE was built as part of a collection of independent web projects exploring different industries, visual systems, and interaction patterns.

The project focuses specifically on functional web application design, product UI, information architecture, dashboard experiences, and interactive front-end workflows.
