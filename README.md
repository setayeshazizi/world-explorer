# 🌍 World Explorer

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Custom_Properties-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Completed-success)

A modern, high-performance Country Explorer web application built with Next.js 16 (App Router) and the REST Countries API. Explore every country in the world with real-time data, stunning glassmorphism UI, and neon glow effects.

---

## 📸 Screenshots

| Home | Countries | Details | Search |
|:---:|:---:|:---:|:---:|
| ![Home](screenshots/home.png) | ![Countries](screenshots/countries.png) | ![Details](screenshots/details.png) | ![Search](screenshots/search.png) |

---

## 🚀 Live Demo

| Type | Link |
|:---|---|
| Online Demo | [world-explorer.vercel.app](https://your-project.vercel.app) |
| Video Walkthrough | [Watch on YouTube / Loom](https://your-video-link.com) |

---

## 🎯 Project Overview

World Explorer is an ultra-premium Next.js application that provides a seamless, lightning-fast interface to discover and explore countries across the globe. It leverages real-time data from the REST Countries API to present accurate information about flags, capitals, populations, regions, currencies, languages, time zones, and more — all wrapped in a visually stunning glassmorphism UI with smooth animations and neon glow effects.

---

## ✨ Features

### Core Features (Assignment Requirements)
- ⚡ Next.js App Router — Modern file-based routing architecture
- 📁 File-based Routing — Clean, intuitive project structure
- 📐 Shared Layouts — Persistent Navbar and Footer across all pages
- 🔗 Dynamic Routes — Individual country detail pages (`/countries/AFG`)
- 🖥️ Server Components — Optimized data fetching on the server
- 💻 Client Components — Interactive UI elements (Search, Theme Toggle)
- 📡 Real API Data Fetching — Live data from REST Countries API
- 🗄️ Static Rendering & Caching — Countries list cached for performance
- ⚡ Dynamic Rendering — Fresh data every time on detail pages
- 🔍 Search Functionality — Search countries by name with debounced input

### Bonus Features
- 🌍 Region Filter — Filter countries by Asia, Europe, Africa, Americas, Oceania
- 📊 Population Sort — Sort countries highest to lowest or vice versa
- 🌙 Dark / Light Mode — Full theme toggle with CSS custom properties
- 🏗️ Loading Skeleton — Beautiful loading states (`loading.jsx`)
- 🚫 Custom 404 Page — Styled not-found page (`not-found.jsx`)
- 📝 Dynamic Metadata — SEO-optimized metadata per country (`generateMetadata()`)
- 🪄 Glassmorphism UI — Modern frosted-glass design language
- ✨ Neon Glow Effects — Eye-catching visual accents
- 🎭 Smooth Animations — Polished transitions and micro-interactions
- 📱 Responsive Design — Mobile-friendly hamburger menu
- ⌨️ Keyboard Navigation — ESC key closes mobile menu

---

## 🗺️ Pages & Routes

| Route | Page | Type | Description |
|:---|:---|:---|:---|
| / | Home | Server | Hero section, features overview, CTA buttons |
| /countries | Countries | Server (cached) | Grid of all 250+ countries |
| /countries/[code] | Detail | Server (dynamic) | Full country info, Google Maps link |
| /search | Search | Server + Client | Search, filter, sort countries |
| /about | About | Server | Project info, tech stack, API used |

---

## 🧠 Next.js Concepts Practiced

| Concept | Implementation |
|:---|:---|
| App Router | app/ directory structure |
| File-based Routing | Pages as page.jsx files in folders |
| Shared Layouts | layout.js with Navbar + Footer |
| Dynamic Routes | [code] dynamic segment for country codes |
| Server Components | Countries list, detail page, about page |
| Client Components | CountrySearch, Navbar, ThemeProvider |
| Static Rendering | cache: "force-cache" on countries list || Dynamic Rendering | cache: "no-store" on country details |
| Metadata API | Static + dynamic generateMetadata() |
| Loading UI | loading.jsx for suspense boundaries |
| Error Handling | Custom not-found.jsx page |

---

## 🛠️ Tech Stack

| Technology | Usage |
|:---|:---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI component library |
| JavaScript (ES6+) | Programming language |
| CSS3 | Custom properties, glassmorphism, neon effects |
| [REST Countries API](https://restcountries.com/) | Real-time country data source |
| [Vercel](https://vercel.com/) | Deployment platform |

---

## 📦 Project Structure
