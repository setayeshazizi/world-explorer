# 🌍 World Explorer

A Next.js application to explore countries around the world — flags, capitals, populations, currencies, languages, and more. Powered by the REST Countries API.

---

## Demo Video

 https://youtu.be/ql6S7L3ufTk?feature=shared

---

## Screenshots

###  Home Page
![Home](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/screencapture-world-explorer-omega-seven-vercel-app-2026-05-30-02_58_24.png)
![home withe light theme](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/screencapture-world-explorer-omega-seven-vercel-app-2026-05-30-02_58_55.png)

### Countries
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/photo_2026-05-30_03-11-05.jpg)

### Details
![Details](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/screencapture-world-explorer-omega-seven-vercel-app-countries-ALB-2026-05-30-03_01_54.png)
![Details light theme](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/screencapture-world-explorer-omega-seven-vercel-app-countries-CZE-2026-05-30-03_03_23.png)

### Search
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/photo_2026-05-30_03-11-14.jpg)
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/photo_2026-05-30_03-11-23.jpg)
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/ice.jpg)

## About
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/screencapture-world-explorer-omega-seven-vercel-app-about-2026-05-30-02_59_27.png)

## Not Found
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/screencapture-localhost-3000-countries-ALA-2026-05-30-03_01_08.png)

## Mobile view screenshots
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/photo_2026-05-30_19-20-00.jpg)
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/photo_2026-05-30_19-19-55.jpg)
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/photo_2026-05-30_19-19-45.jpg)
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/photo_2026-05-30_19-19-32.jpg)
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/photo_2026-05-30_19-19-22.jpg)

---

##  Features

- Browse 250+ countries with flags, capitals, regions, and populations
- Dynamic country details page with languages, currencies, time zones, and Google Maps link
- Real-time search with region filtering and population sorting
- Dark / light mode toggle
- Fully responsive design
- Loading skeletons and custom 404 page
- Glassmorphism UI with smooth animations

  ---

## Next.js Concepts Practiced

- App Router & file-based routing
- Shared layouts (Navbar + Footer)
- Dynamic routes (`/countries/[code]`)
- Server & client components
- Static rendering (`force-cache`)
- Dynamic rendering (`no-store`)
- ISR (`revalidate`)
- generateMetadata() for dynamic SEO
- loading.js & not-found.jsx
- Context API for theme management

  ---

## Tech Stack

- Next.js 16
- React 19
- REST Countries API
- CSS3 (custom properties, glassmorphism)

  ---

## Project Structure
```
app/
├── layout.js
├── page.jsx
├── not-found.jsx
├── about/page.jsx
├── countries/
│   ├── loading.jsx
│   ├── page.jsx
│   └── [code]/page.jsx
└── search/page.jsx

components/
├── Navbar.jsx
├── Footer.jsx
├── CountryCard.jsx
├── CountrySearch.jsx
└── ThemeProvider.jsx

styles/
└── globals.css
```
---
##  API Used

[REST Countries API](https://restcountries.com/)

| Endpoint | Usage |
|---|---|
| GET /v3.1/all | Fetch all countries (cached) |
| GET /v3.1/alpha/{code} | Fetch single country (dynamic) |

---

##  Run Locally
```
npm install

npm run dev

Open http://localhost:3000.
```
