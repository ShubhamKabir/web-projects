# PULSE — Web App + Client Onboarding + Automated Reporting

PULSE is a functional project-management web application designed around organizing projects, tasks, schedules, teams, clients, and activity in a single workspace.

The project also demonstrates real client operations automations connecting the PULSE client intake and analytics experiences with Make, Airtable, Notion, and Gmail.

## Overview

PULSE explores how a modern project-management application can structure complex information while keeping the interface clear and easy to navigate.

The application includes:

- Dashboard overview
- Project management
- Task management
- Calendar
- Team workspace
- Client intake
- Activity feed
- Settings
- Authentication screens
- Responsive application layouts
- Local front-end state and data
- Automated client onboarding workflow
- Automated weekly reporting workflow

## Client Onboarding Automation

The `/clients` page provides a client intake form for starting a new project.

```text
PULSE Client Intake
        ↓
Next.js API Route
        ↓
Make Custom Webhook
        ↓
Airtable — Clients
        ↓
Client Onboarding Automation
        ↓
6 Onboarding Tasks
        ↓
Notion Client Workspace
        ↓
Welcome Email via Gmail
        ↓
Airtable — Onboarding Status: In Progress
```

### Intake Data

The client intake collects:

- Client name
- Email
- Company
- Service
- Project start date
- Project deadline
- Notes

The PULSE API validates the required fields and sends the intake data to Make through a server-side webhook environment variable.

A generated Client ID is included with each submission.

### Automated Onboarding

The Make onboarding scenario watches the Airtable `Clients` table for newly created records.

For each new client it creates six onboarding tasks:

1. Send Welcome Email
2. Collect Project Requirements
3. Collect Brand / Project Assets
4. Create Project Workspace
5. Schedule Kickoff
6. Confirm Project Timeline

It then creates a client workspace/page in Notion, sends the welcome email through Gmail, and updates the Airtable client record to `In Progress`.

The automation is configured to process new records from the point at which the production trigger is started, rather than reprocessing existing clients.

## Weekly Reporting Automation

The `/analytics` page provides the reporting dashboard for PULSE operations. A scheduled Make scenario collects client and onboarding-task data from Airtable, calculates operational metrics, generates a weekly report, and delivers it to Gmail and Notion.

```text
Airtable — Clients
        ↓
Airtable — Onboarding Tasks
        ↓
Make — Scheduled Weekly Reporting
        ↓
Client + Task Metrics
        ↓
Weekly Operations Report
        ├── Gmail — Email Delivery
        └── Notion — Report Archive
```

The reporting workflow calculates:

- Total clients
- Total onboarding tasks
- Completed tasks
- Pending tasks
- Overdue tasks

The production scenario is scheduled for Monday at 9:00 AM Asia/Kolkata time.

## Features

### Project Management

- Login interface
- Dashboard
- Projects list
- Project detail pages
- Task management
- Calendar interface
- Team management
- Activity timeline
- Settings interface

### Client Operations

- Client intake form
- Client onboarding workflow
- Automated onboarding task creation
- Notion workspace creation
- Automated welcome email
- Airtable client status tracking
- Make workflow integration
- Weekly operations reporting
- Analytics and reporting dashboard
- Automated Gmail report delivery
- Automated Notion report archive

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
  ├── Clients
  │    └── Client Intake → Automated Onboarding
  ├── Activity
  ├── Analytics
  │    └── Weekly Operations Reporting
  └── Settings
```

The core PULSE application remains a front-end experience with local data and state. The client onboarding and reporting workflows are connected to external automation services through the Next.js API and Make.

## Pages

```text
/login
/dashboard
/projects
/projects/[id]
/tasks
/calendar
/team
/clients
/activity
/analytics
/settings
```

## API

```text
POST /api/clients
```

The endpoint validates the client intake payload and forwards it to the Make client-intake webhook.

The Make webhook URL is stored server-side using:

```text
MAKE_CLIENT_INTAKE_WEBHOOK_URL
```

The environment variable is not committed to the repository.

## Automation Stack

- Next.js API Route
- Make
- Airtable
- Notion
- Gmail

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS

## Project Structure

```text
pulse/
├── app/
│   ├── api/
│   │   └── clients/
│   ├── analytics/
│   │   └── page.tsx
│   └── clients/
├── components/
│   ├── clients-page.tsx
│   └── sidebar.tsx
├── lib/
├── public/
├── package.json
├── next.config.ts
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

The current deployed PULSE application includes the client intake and analytics experiences.

Updates pushed to the `master` branch can trigger a new Vercel deployment.

## Purpose

PULSE was originally built as a project-management application exploring product UI, information architecture, dashboard experiences, and interactive front-end workflows.

The project has now been extended with practical business automation layers to demonstrate how a web application can connect to external CRM, project workspace, communication, reporting, and workflow automation tools.

## Automation Status

The client onboarding workflow has been tested end-to-end:

```text
PULSE submission
      ✓
Make webhook
      ✓
Airtable client record
      ✓
6 onboarding tasks
      ✓
Notion workspace
      ✓
Welcome email
      ✓
Airtable status update
      ✓
```

The weekly reporting workflow has also been tested end-to-end:

```text
Airtable client data
      ✓
Airtable task data
      ✓
Weekly metric aggregation
      ✓
Weekly report generation
      ✓
Gmail delivery
      ✓
Notion report archive
      ✓
```
