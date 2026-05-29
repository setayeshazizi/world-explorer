// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              World<span className="logo-accent">Explorer</span>
            </Link>
            <p className="footer-tagline">
              Discover the world, one country at a time.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4 className="footer-heading">Explore</h4>
              <Link href="/countries" className="footer-link">
                All Countries
              </Link>
              <Link href="/search" className="footer-link">
                Search
              </Link>
              <Link href="/about" className="footer-link">
                About
              </Link>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-heading">Resources</h4>
              <a
                href="https://restcountries.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                REST Countries API
              </a>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Next.js
              </a>
              <a
                href="https://github.com/setayeshazizi"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} World Explorer. All rights reserved.
          </p>
          <p className="footer-credit">
            Built with hard work using Next.js &amp; REST Countries API
          </p>
        </div>
      </div>
    </footer>
  );
}
