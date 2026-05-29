// app/about/page.jsx

export const metadata = {
  title: "About | World Explorer",
  description:
    "Learn more about the World Explorer project, the technologies used, and the Next.js concepts practiced.",
  openGraph: {
    title: "About World Explorer",
    description:
      "Discover how World Explorer was built using Next.js 16 and REST Countries API",
  },
};

export default function AboutPage() {
  const coreTopics = [
    { label: "App Router" },
    { label: "File-based Routing" },
    { label: "Shared Layouts" },
    { label: "Dynamic Routes" },
    { label: "Server Components" },
    { label: "Client Components" },
    { label: "Static Caching" },
    { label: "Dynamic Rendering" },
    { label: "Metadata Generation" },
    { label: "Loading UI" },
    { label: "Custom 404 Page" },
    { label: "Responsive Design" },
  ];

  const bonusFeatures = [
    { label: "Region Filter", highlight: true },
    { label: "Population Sort", highlight: true },
    { label: "Loading Skeleton", highlight: false },
    { label: "Glassmorphism UI", highlight: true },
    { label: "Neon Glow Effects", highlight: true },
    { label: "Smooth Animations", highlight: false },
    { label: "Debounced Search", highlight: true },
    { label: "Dynamic Metadata", highlight: false },
  ];

  return (
    <div className="about-container">
      {/* Header */}
      <div className="page-header about-header">
        <h1 className="page-title">About This Project</h1>
        <p className="page-description">
          The architecture, technology stack, and design philosophy behind World
          Explorer.
        </p>
      </div>

      {/* Project Purpose */}
      <div className="about-card about-card-featured">
        <div className="about-card-content">
          <h2>Project Purpose</h2>
          <p>
            <strong>World Explorer</strong> is an ultra-premium Next.js
            application designed to provide users with a seamless,
            lightning-fast interface to discover and explore countries around
            the globe.
          </p>
          <p>
            It leverages <span className="highlight-text">real-time data</span>{" "}
            from REST Countries API to present accurate information about flags,
            capitals, populations, regions, currencies, and languages — all
            wrapped in a stunning glassmorphism UI with neon glow effects.
          </p>
        </div>
      </div>

      {/* Data Source */}
      <div className="about-card">
        <div className="about-card-content">
          <h2>Data Source (API)</h2>
          <p>
            This application dynamically consumes data from the public and
            open-source{" "}
            <a
              href="https://restcountries.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              REST Countries API
            </a>
            .
          </p>
          <div className="about-api-info">
            <div className="api-endpoint">
              <code>GET /v3.1/all</code>
              <span>Fetch all countries (cached)</span>
            </div>
            <div className="api-endpoint">
              <code>GET /v3.1/alpha/{"{code}"}</code>
              <span>Fetch single country (dynamic)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Topics */}
      <div className="about-card">
        <div className="about-card-content">
          <h2>Next.js Core Topics Practiced</h2>
          <p>
            This project demonstrates mastery of the following Next.js concepts:
          </p>

          <div className="tech-grid">
            {coreTopics.map((topic) => (
              <div key={topic.label} className="tech-tag">
                <span className="tech-tag-icon">{topic.icon}</span>
                {topic.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bonus Features */}
      <div className="about-card ">
        <div className="about-card-content">
          <h2>Bonus Features Implemented</h2>
          <p>
            Extra features that elevate this project beyond the basic
            requirements:
          </p>

          <div className="tech-grid">
            {bonusFeatures.map((feature) => (
              <div key={feature.label} className="tech-tag tech-tag-highlight">
                <span className="tech-tag-icon">{feature.icon}</span>
                {feature.label}
                <span className="tech-tag-star">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="about-card">
        <div className="about-card-content">
          <h2>Technology Stack</h2>
          <div className="tech-stack-grid">
            <div className="stack-item">
              <div className="stack-name">Next.js 16</div>
              <div className="stack-version">App Router</div>
            </div>
            <div className="stack-item">
              <div className="stack-name">CSS3</div>
              <div className="stack-version">Custom Properties</div>
            </div>
            <div className="stack-item">
              <div className="stack-name">REST API</div>
              <div className="stack-version">Countries Data</div>
            </div>
            <div className="stack-item">
              <div className="stack-name">Glassmorphism</div>
              <div className="stack-version">Modern UI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
