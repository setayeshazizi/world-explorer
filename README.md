# 🌍 World Explorer

A Next.js application to explore countries around the world — flags, capitals, populations, currencies, languages, and more. Powered by the REST Countries API.

---

## Live Demo

🌐 https://product-store-app-tau.vercel.app/

---

## Demo Video

📽️ *https://youtu.be/ago4MJG99HM?feature=shared*

---

## 📸 Screenshots

###  Home Page
![Home](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/screencapture-world-explorer-omega-seven-vercel-app-2026-05-30-02_58_24.png)
![home withe light theme](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/screencapture-world-explorer-omega-seven-vercel-app-2026-05-30-02_58_55.png)

### Countries
![](https://github.com/setayeshazizi/world-explorer/blob/main/public/screenshots/photo_2026-05-30_03-11-05.jpg))

### Details
![Details](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-product-4-2026-04-24-20_41_10.png)
![Details light theme](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-product-3-2026-04-24-19_53_30.png)

### Checkout Flow
![Checkout1](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-checkout-2026-04-24-19_54_56.png)
![Checkout2](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-checkout-2026-04-24-19_55_45.png)
![Checkout3](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-checkout-2026-04-24-19_56_10.png)
![Checkout4](https://github.com/setayeshazizi/product-store-app/blob/main/screenshots/screencapture-localhost-5173-checkout-2026-04-24-21_35_39%20(1).png)

---

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
