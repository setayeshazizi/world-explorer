# 🌍 World Explorer

A Next.js application to explore countries around the world — flags, capitals, populations, currencies, languages, and more. Powered by the REST Countries API.

##  Live Demo

[Live Demo](https://world-explorer-omega-seven.vercel.app/)

##  Video Demo

[Watch Demo](https://youtube.com/your-video-link)

## 📸 Screenshots

| Home | Countries | Details | Search |
|:---:|:---:|:---:|:---:|
| ![Home](screenshots/home.png) | ![Countries](screenshots/countries.png) | ![Details](screenshots/details.png) | ![Search](screenshots/search.png) |

##  Features

- Browse 250+ countries with flags, capitals, regions, and populations
- Dynamic country details page with languages, currencies, time zones, and Google Maps link
- Real-time search with region filtering and population sorting
- Dark / light mode toggle
- Fully responsive design
- Loading skeletons and custom 404 page
- Glassmorphism UI with smooth animations

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

## Tech Stack

- Next.js 16
- React 19
- REST Countries API
- CSS3 (custom properties, glassmorphism)

## Project Structure
## 📁 Project Structure

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


## 🚀 Run Locally
npm install
npm run dev

Open http://localhost:3000.

Author
Setayesh Azizi

📄 License

MIT

`
