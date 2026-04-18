# The Dubai Mall: Global Sales Platform V4.0

This repository contains the interactive sales deck for **The Dubai Mall**, envisioned as a high-fidelity, standalone pitch platform for prospective retail tenants, sponsors, and event partners. 

Built as part of an interview assessment, this project replaces fragmented, manual pitch processes (static PDFs, independent videos, spreadsheets) with a unified, cinematic, and interactive "Digideck" experience.

## ✨ Live Demo
*(Insert your Vercel/Netlify Live URL here prior to submission)*

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS V4 (Utility-first, heavily customized for luxury bespoke styling)
- **Animation**: Framer Motion (Orchestrating layout transitions, scroll reveals, and micro-interactions)
- **Typography**: Google Fonts (Geist/Outfit) optimized via `next/font`
- **Media**: Native HTML5 Video & YouTube iFrame API (Optimized for Theater Mode storytelling)

## 🛠️ Setup & Installation

To run this platform locally:

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <repo-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the platform**: open `http://localhost:3000` in your browser.

## 📐 Design Decisions & Architecture

Unlike a traditional static website, this tool is structured specifically as a **Pitch Presentation**.
- **Theater Mode First**: Video is treated as the primary storytelling anchor, not a background decoration. The intro sequence provides immediate emotional buy-in through a 16:9 cinematic frame with "Director's Metadata" to emulate an internal executive briefing.
- **Strict Viewport Containment**: Core strategic modules utilize strict `100vh` boundaries (`scene-container`), forcing the user to focus on one narrative beat at a time—just like a slide in a deck, but infinitely more interactive.
- **Narrative Over Navigation**: Instead of traditional web routing, the interface uses fluid scroll-snapping and an integrated Navbar to allow users to non-linearly jump between strategic pillars (Scale, Retail, Luxury, Events, Sponsorship).

## 🛠️ Tools & Stack Additions
- **AI Utility**: LLM tools were utilized sparingly for initial boilerplate scaffolding and placeholder copy generation.

## 📂 Repository Structure

- `/src/app`: Core Next.js routing, global CSS, and main layout container.
- `/src/components`: Contains the high-level reusable UI components (Navigation, CinematicIntro).
- `/src/components/sections`: The primary narrative "Slides" (Stats, Ecosystem, Luxury).
- `/src/components/modules`: Expandable interactive deep-dives (Leasing, Sponsorship, Brand Simulator).

---
*Developed as a technical and product strategy assessment.*
