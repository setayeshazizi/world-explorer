# 🌍 World Explorer

A modern, high-performance Next.js application that lets you explore every country on Earth — flags, capitals, populations, currencies, languages, time zones, and more. Powered by real-time data from the REST Countries API.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![REST API](https://img.shields.io/badge/API-REST%20Countries-green)
![CSS](https://img.shields.io/badge/Style-CSS3-purple?logo=css3)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📑 Table of Contents

- [Live Demo](#-live-demo)
- [Video Demo](#-video-demo)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Bonus Features](#-bonus-features)
- [Tech Stack](#-tech-stack)
- [Next.js Concepts Practiced](#-nextjs-concepts-practiced)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Getting Started](#-getting-started)
- [Performance](#-performance)
- [Accessibility](#-accessibility)
- [Author](#-author)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🔗 Live Demo

🚀 Try it online: [World Explorer Live Demo](https://world-explorer-demo.vercel.app)

> *Deployed on Vercel with automatic CI/CD from GitHub.*

---

## 🎥 Video Demo

📺 Watch the walkthrough: [Project Demo Video](https://youtube.com/your-video-link)

> *Full feature demonstration including all pages, dark mode, search, filtering, and responsive design.*

---

## 📸 Screenshots

| | | |
|:---:|:---:|:---:|
| Home Page | Countries Page | Country Details |
| ![Home](screenshots/home.png) | ![Countries](screenshots/countries.png) | ![Details](screenshots/details.png) |
| Search Page | Dark Mode | Mobile View |
| ![Search](screenshots/search.png) | ![Dark Mode](screenshots/darkmode.png) | ![Mobile](screenshots/mobile.png) |

---

## ✨ Features

### Core Requirements
- 🏠 Home Page — Hero section, call-to-action buttons, statistics overview, feature highlights
- 🌐 Countries Page — Browse all 250+ countries with flags, capitals, regions, and populations
- 🔍 Country Details Page — Dynamic routes for each country showing full details + Google Maps link
- 🔎 Search Page — Real-time search with debounced input, region filtering, and population sorting
- 📄 About Page — Project purpose, API info, tech stack, and Next.js concepts breakdown

### User Experience
- 🎨 Glassmorphism UI — Modern frosted glass design with neon glow accents
- 🌙 Dark / Light Mode — Full theme toggle with persistent user preference (localStorage)
- 📱 Fully Responsive — Mobile-first design, hamburger menu, optimized for all screen sizes
- ⚡ Lightning Fast — Static generation with ISR, lazy-loaded images, optimized fonts
- 🎭 Smooth Animations — CSS transitions, hover effects, and micro-interactions
- ♿ Accessible — ARIA labels, semantic HTML, keyboard navigation, screen reader friendly

---

## ⭐ Bonus Features

| Feature | Description |
|:---|:---|
| 🌍 Region Filter | Filter countries by Asia, Europe, Africa, Americas, Oceania |
| 📊 Population Sort | Sort countries by highest or lowest population |
| 💀 Loading Skeleton | Custom loading.js with animated skeleton placeholders |
| 🚫 Custom 404 Page | Styled not-found.jsx for non-existent routes |
| 🌙 Dark Mode | Full theme system with CSS custom properties and context API |
| 🏷️ Dynamic Metadata | generateMetadata() for SEO-optimized country detail pages |
| 🔄 Debounced Search | 300ms debounce on search input for optimal performance |
| 🛡️ Error Handling | Graceful fallbacks for API failures and empty states |
| 📈 Stats Bar | Live statistics: total countries, regions count, global population |
| 🎨 Glassmorphism | Frosted glass cards, neon glow effects, gradient text |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|:---|:---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [REST Countries API](https://restcountries.com/) | Real-time country data || CSS3 Custom Properties | Styling, theming, glassmorphism effects |
| Vercel | Deployment & hosting |

---

## 📚 Next.js Concepts Practiced

This project demonstrates mastery of the following Next.js concepts:

| Concept | Implementation |
|:---|:---|
| App Router | /app directory structure |
| File-based Routing | /about, /countries, /search |
| Shared Layout | layout.js with Navbar + Footer |
| Dynamic Routes | /countries/[code] |
| Server Components | CountriesPage, CountryDetailsPage, SearchPage |
| Client Components | CountrySearch, Navbar, ThemeProvider |
| Data Fetching (async/await) | All data fetched server-side |
| Static Rendering | Countries page with cache: "force-cache" |
| Dynamic Rendering | Country details with cache: "no-store" |
| ISR (Incremental Static Regeneration) | Search page with revalidate: 86400 |
| Metadata API | generateMetadata() for dynamic SEO |
| Loading UI | loading.jsx with skeleton placeholders |
| Error Handling | Custom 404 page, API error states |
| Dynamic Imports | Optimized component loading |

---

## 📁 Project Structure
---

## 📡 API Reference

### REST Countries API

| Endpoint | Method | Description | Caching |
|:---|:---|:---|:---|
| /v3.1/all | GET | Fetch all countries | force-cache (static) |
| /v3.1/alpha/{code} | GET | Fetch single country by code | no-store (dynamic) |

Example Response Fields:
```json
{
  "name": { "common": "Afghanistan", "official": "Islamic Republic of Afghanistan" },
  "cca3": "AFG",
  "capital": ["Kabul"],
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 40218234,
  "flags": { "png": "...", "svg": "...", "alt": "..." },
  "languages": { "prs": "Dari", "pus": "Pashto" },
  "currencies": { "AFN": { "name": "Afghan afghani", "symbol": "؋" } },
  "timezones": ["UTC+04:30"],
  "maps": { "googleMaps": "https://..." }
}
