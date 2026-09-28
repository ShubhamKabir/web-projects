# FORM — Agency

FORM is a creative agency web experience focused on art direction, typography, visual identity, and editorial-style presentation.

The project uses an expressive layout system designed to feel like a contemporary creative studio rather than a conventional agency website.

## Overview

FORM explores how a creative agency can present its work and capabilities through strong typography, structured compositions, and unconventional layouts.

The interface uses:

- Oversized typography
- Editorial layouts
- Asymmetrical grids
- Strong visual hierarchy
- Thin borders and structured divisions
- High-contrast compositions
- Large project presentation areas
- Minimal decorative elements

The project also includes a functional lead capture and automation workflow. Website inquiries can be captured through the contact form and processed through a connected business automation system using Make, Airtable, Google Gemini, HubSpot CRM, and Gmail.

## Features

### Website

- Agency landing page
- Studio introduction
- Creative capabilities
- Selected work presentation
- Project-focused sections
- Large typography-led layouts
- Service and capability sections
- Structured contact form
- Responsive navigation
- Responsive layouts

### Lead Automation

The contact form is connected to an automated lead management workflow.

When a potential client submits the form:

1. The lead is submitted through the Next.js API route.
2. The API forwards the lead data to a Make custom webhook.
3. The lead is stored in Airtable.
4. Google Gemini processes the submitted lead information.
5. The AI response is parsed into structured fields.
6. The Airtable lead record is updated with the generated assessment.
7. The contact is created or updated in HubSpot CRM.
8. A personalized follow-up email is generated and sent through Gmail.

### Automation Workflow

```text
FORM Contact Form
        ↓
Next.js API Route
        ↓
Make Custom Webhook
        ↓
Airtable
        ↓
Google Gemini
        ↓
JSON Parser
        ↓
Airtable Update
        ↓
HubSpot CRM
        ↓
Gmail
```

### Lead Information

The contact form collects:

- Name
- Email
- Company
- Service
- Project details
- Budget range

The information is used throughout the automation workflow to create the lead record, update the CRM, and generate a personalized response.

### AI-Assisted Lead Processing

Google Gemini is used to process submitted lead information and generate structured output for the automation workflow.

The generated information includes:

- Lead quality
- Lead assessment
- Email subject
- Personalized email body

The AI-generated response is parsed as JSON before being passed to the following automation steps.

The generated email is designed to address the lead by first name, acknowledge the inquiry, reference the project information, and ask a relevant next-step question.

## Design Direction

The visual identity is intentionally bold, minimal, and editorial.

### Visual System

- Warm cream backgrounds
- Black typography and surfaces
- Orange-red accent color
- Strong contrast
- Thin structural borders
- Oversized typography
- Generous negative space

### Layout

- Asymmetrical compositions
- Editorial grid systems
- Oversized section numbers
- Large visual blocks
- Unexpected content positioning
- Clear structural divisions

The design avoids the typical polished corporate agency template and instead treats the website as an extension of the studio's creative direction.

## Technology

### Website

- Next.js
- React
- TypeScript
- Tailwind CSS

### Automation

- Make
- Airtable
- Google Gemini
- HubSpot CRM
- Gmail

### Deployment

- Vercel

## Project Structure

```text
form/
├── app/
│   └── api/
│       └── leads/
│           └── route.ts
├── components/
├── public/
├── package.json
├── package-lock.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

The `/api/leads` route receives contact form submissions and forwards the lead data to the configured Make webhook.

## Environment Variables

The application uses an environment variable for the Make webhook URL.

Create a `.env.local` file in the `form` directory:

```env
MAKE_WEBHOOK_URL=your_make_webhook_url
```

The actual webhook URL should not be committed to the repository.

For the production deployment, the same environment variable must be configured in Vercel.

```text
MAKE_WEBHOOK_URL
```

The value should be the Make custom webhook URL used by the FORM lead automation.

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

For the lead automation to work locally, make sure `MAKE_WEBHOOK_URL` is configured in `.env.local`.

## Deployment

The project is deployed through Vercel and uses the `form` folder as its Root Directory within the `web-projects` repository.

Updates pushed to the `master` branch can trigger a new Vercel deployment.

The production deployment requires `MAKE_WEBHOOK_URL` to be configured in the Vercel environment variables.

## Security

Sensitive configuration should not be stored directly in the source code.

Do not commit:

- `.env.local`
- Webhook URLs
- API keys
- OAuth credentials
- Passwords
- Other private configuration values

Environment variables should be used for private configuration in both local development and production deployment.

## Purpose

FORM was built as part of a collection of independent web projects exploring different industries, visual systems, and interaction patterns.

The project focuses specifically on creative agency presentation, art direction, typography, editorial composition, experimental layout design, lead generation, CRM integration, AI-assisted lead processing, and automated client communication.

FORM demonstrates how a creative website can extend beyond its visual presentation into a functional business workflow connecting website leads with data storage, AI processing, CRM management, and automated communication.
