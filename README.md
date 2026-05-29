9”}
🌍 World Explorer
A modern Next.js application that allows users to explore countries around the world using real data from the REST Countries API.


⸻


📖 Overview
World Explorer is a web application built with Next.js that provides information about countries, including their flags, capitals, populations, regions, languages, currencies, and time zones.
The project demonstrates core concepts of Next.js such as routing, data fetching, and component-based architecture.


⸻


✨ Features
🌐 Browse a list of countries
🏳️ View country flags and basic information
📄 Open a detailed page for each country
🔍 Search countries by name
🔗 Access Google Maps location for each country
📱 Responsive design for different screen sizes


⸻


🧠 Concepts Used
This project is built to practice the following Next.js features:
App Router (/app directory)
File-based routing
Shared layout (Navbar & Footer)
Dynamic routes (/countries/[code])
Server Components
Client Components (useState)
Data fetching with async/await
Static rendering (cache: "force-cache")
Dynamic rendering (cache: "no-store")


⸻


🛠️ Tech Stack
Next.js
React
REST Countries API
CSS / Tailwind (depending on your implementation)


⸻


📡 API
Data is fetched from:
https://restcountries.com/v3.1/all
https://restcountries.com/v3.1/alpha/{code}


⸻


📁 Project Structure
app/
  layout.js
  page.js
  about/
    page.js
  countries/
    page.js
    [code]/
      page.js
  search/
    page.js

components/
  Navbar.jsx
  Footer.jsx
  CountryCard.jsx
  CountrySearch.jsx

styles/
  globals.css


⸻


▶️ Getting Started
1. Install dependencies
npm install
2. Run development server
npm run dev
3. Open in browser
http://localhost:3000


⸻


📸 Screenshots
Include screenshots of:
Home Page
Countries Page
Country Details Page
Search Page


⸻


👩‍💻 Author
Setayesh Azizi


⸻


📄 License
This project is created for educational p
