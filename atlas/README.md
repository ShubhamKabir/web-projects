# ATLAS — E-commerce

ATLAS is a premium lifestyle e-commerce web experience combining product discovery, editorial storytelling, and a refined fashion-inspired visual system.

The project is designed to feel like a complete digital storefront rather than a simple product landing page.

## Overview

ATLAS explores how e-commerce can combine functional shopping flows with strong brand presentation and editorial content.

The interface includes:

- Product-focused layouts
- Editorial photography
- Warm ivory backgrounds
- Charcoal typography
- Olive and stone accents
- Spacious compositions
- Brand storytelling
- Structured shopping flows

## Features

- E-commerce homepage
- Shop page
- New arrivals category
- Apparel category
- Accessories category
- Product detail pages
- Product selection and quantity controls
- Shopping cart
- Checkout interface
- About page
- Journal
- Responsive navigation
- Responsive layouts
- Local cart state

## Shopping Experience

The project includes a complete front-end shopping flow:

```text
Browse
  ↓
Category
  ↓
Product
  ↓
Add to Cart
  ↓
Cart
  ↓
Checkout
```

Cart data is handled locally on the client side. The checkout experience is a front-end demonstration and does not process real payments or orders.

## Design Direction

The visual identity combines premium lifestyle branding with editorial fashion presentation.

### Visual System

- Warm ivory backgrounds
- Charcoal typography
- Olive and stone tones
- Large lifestyle imagery
- Minimal interface elements
- Generous whitespace
- Refined typography

### Editorial Commerce

- Magazine-inspired layouts
- Large photographic compositions
- Product storytelling
- Curated collections
- Journal-style content
- Minimal product presentation

The design balances the visual character of a premium lifestyle brand with the functionality expected from an e-commerce experience.

## Pages

```text
/
├── Shop
├── New Arrivals
├── Apparel
├── Accessories
├── Product Details
├── About
├── Journal
├── Cart
└── Checkout
```

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS

## Project Structure

```text
atlas/
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

The project is deployed through Vercel and uses the `atlas` folder as its Root Directory within the `web-projects` repository.

Updates pushed to the `master` branch can trigger a new Vercel deployment.

## Purpose

ATLAS was built as part of a collection of independent web projects exploring different industries, visual systems, and interaction patterns.

The project focuses specifically on premium e-commerce, product discovery, editorial commerce, brand storytelling, and complete front-end shopping flows.
