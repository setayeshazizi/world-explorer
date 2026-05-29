// app/countries/page.jsx
import CountryCard from "../../components/CountryCard";

export default async function CountriesPage() {
  // This page can be statically rendered and cached.
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,population,flags",
    {
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    return (
      <section>
        <div className="page-header">
          <h1 className="page-title">Explore Countries</h1>
          <p className="page-description">
            Discover countries around the world.
          </p>
        </div>
        <div className="no-results">
          <div className="no-results-icon">⚠️</div>
          <h3>Failed to load countries</h3>
          <p>Unable to fetch data from the API. Status: {res.status}</p>
          <p className="error-hint">
            Please try again later or check your connection.
          </p>
        </div>
      </section>
    );
  }

  const data = await res.json();
  const countries = Array.isArray(data) ? data : [];

  const sortedCountries = [...countries].sort((a, b) =>
    (a.name?.common || "").localeCompare(b.name?.common || "")
  );

  return (
    <section>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-top">
          <h1 className="page-title">Explore Countries</h1>
          <span className="page-badge">{sortedCountries.length} countries</span>
        </div>
        <p className="page-description">
          Browse through <strong>{sortedCountries.length}</strong> countries
          from around the world. Click on any country to view detailed
          information including languages, currencies, and time zones.
        </p>
      </div>

      {/* Empty State */}
      {sortedCountries.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">🌍</div>
          <h3>No countries loaded</h3>
          <p>Please try again later or refresh the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-secondary"
            style={{ marginTop: "1rem" }}
          >
            🔄 Refresh Page
          </button>
        </div>
      ) : (
        <>
          {/* Stats Bar */}
          <div className="countries-stats-bar">
            <div className="stat-item">
              <span>{sortedCountries.length} Countries</span>
            </div>
            <div className="stat-item">
              <span>
                {
                  [
                    ...new Set(
                      sortedCountries.map((c) => c.region).filter(Boolean)
                    ),
                  ].length
                }{" "}
                Regions
              </span>
            </div>
            <div className="stat-item">
              <span>
                {(
                  sortedCountries.reduce(
                    (sum, c) => sum + (c.population || 0),
                    0
                  ) / 1_000_000_000
                ).toFixed(1)}
                B Total Pop.
              </span>
            </div>
          </div>

          {/* Countries Grid */}
          <div className="countries-grid">
            {sortedCountries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export const dynamic = "force-static";
