// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";

export const metadata = {
  title: {
    default: "World Explorer",
    template: "%s | World Explorer",
  },
  description: "A Next.js country explorer project for Week 13 and Week 14",

  icons: {
    icon: "/icon.png",
  },

  keywords: [
    "countries",
    "next.js",
    "world explorer",
    "rest countries api",
    "geography",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "World Explorer",
    description: "Explore countries around the world with real-time data",
    type: "website",
    siteName: "World Explorer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#f0f4ff" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <div className="app-container">
            <Navbar />
            <main className="main-content">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
