import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Explore the <span className="gradient-text">World</span>
          </h1>

          <p className="hero-subtitle">
            Discover countries around the globe. Learn about their flags,
            capitals, populations, currencies, and languages — all powered by
            real-time data from the REST Countries API.
          </p>

          <div className="hero-cta">
            <Link href="/countries" className="btn-primary">
              Start Exploring
              <svg
                className="btn-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.16666 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/search" className="btn-secondary">
              <svg
                className="btn-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 17.5L13.875 13.875"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Search Countries
            </Link>
          </div>

          {/* Stats Section */}
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number">250+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Continents</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <div className="stat-number">Real-time</div>
              <div className="stat-label">REST API Data</div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="hero-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">What You Can Do</h2>
          <p className="section-description">
            Everything you need to explore the world in one place
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper"></div>
            <h3>Browse Countries</h3>
            <p>
              Explore detailed information about every country including flags,
              capitals, and regions.
            </p>
            <Link href="/countries" className="feature-link">
              Browse All →
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"></div>
            <h3>Detailed Statistics</h3>
            <p>
              Access comprehensive data: languages, currencies, time zones, and
              Google Maps integration.
            </p>
            <Link href="/countries" className="feature-link">
              View Details →
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper"></div>
            <h3>Smart Search</h3>
            <p>
              Find any country instantly with our powerful search functionality.
            </p>
            <Link href="/search" className="feature-link">
              Search Now →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
