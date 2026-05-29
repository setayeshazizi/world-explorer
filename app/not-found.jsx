// app/not-found.jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      {/* Globe Animation */}
      <div className="not-found-globe">
        <span className="globe-emoji">🌍</span>
        <div className="globe-rings">
          <div className="globe-ring"></div>
          <div className="globe-ring"></div>
          <div className="globe-ring"></div>
        </div>
      </div>

      {/* 404 Code */}
      <div className="not-found-code">404</div>

      {/* Title */}
      <h1 className="not-found-title">Page Not Found</h1>

      {/* Description */}
      <p className="not-found-text">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved to another dimension.
      </p>

      {/* Action Buttons */}
      <div className="not-found-actions">
        <Link href="/" className="btn-primary">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 8L10 2L17 8V17C17 17.5304 16.7893 18.0391 16.4142 18.4142C16.0391 18.7893 15.5304 19 15 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 19V11H12V19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>
        <Link href="/countries" className="btn-secondary">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.66667 10H18.3333"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 1.66667C11.876 4.01667 12.9167 6.93333 13.0556 10C13.0556 13.0667 12.015 15.9833 10 18.3333C7.985 15.9833 6.94445 13.0667 6.94445 10C6.94445 6.93333 7.985 4.01667 10 1.66667Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Explore Countries
        </Link>
      </div>

      {/* Fun Suggestion */}
      <p className="not-found-suggestion">
        Try searching for a country or go back to the homepage.
      </p>
    </div>
  );
}
