// app/countries/[code]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";

//  Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const code = resolvedParams?.code;

  if (!code) return { title: "Country Not Found" };

  try {
    // This page fetches fresh data every time.
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, {
      cache: "no-store",
    });

    if (!res.ok) return { title: "Country Not Found" };

    const data = await res.json();
    const country = Array.isArray(data) ? data[0] : data;

    if (!country) return { title: "Country Not Found" };

    return {
      title: `${country.name?.common} | World Explorer`,
      description: `Learn about ${country.name?.common}: capital ${
        country.capital?.[0] || "N/A"
      }, region ${
        country.region
      }, population ${country.population?.toLocaleString()}.`,
      openGraph: {
        title: `${country.name?.common} - World Explorer`,
        description: `Explore details about ${country.name?.common}`,
        images: [country.flags?.png || country.flags?.svg],
      },
    };
  } catch {
    return { title: "Country Not Found" };
  }
}

export default async function CountryDetailsPage({ params }) {
  const resolvedParams = await params;
  const code = resolvedParams?.code;

  if (!code) {
    notFound();
  }

  try {
    // This page fetches fresh data every time.
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();
    const country = Array.isArray(data) ? data[0] : data;

    if (!country) {
      notFound();
    }

    const name = country.name?.common || "Unknown";
    const officialName = country.name?.official || "N/A";
    const flagUrl = country.flags?.png || country.flags?.svg;
    const flagAlt = country.flags?.alt || `Flag of ${name}`;
    const capital = country.capital?.[0] || "No Capital";
    const region = country.region || "N/A";
    const subregion = country.subregion || "N/A";
    const population = country.population?.toLocaleString() || "0";
    const languages = country.languages
      ? Object.values(country.languages).join(", ")
      : "N/A";
    const currencies = country.currencies
      ? Object.values(country.currencies)
          .map((c) => `${c.name} (${c.symbol || "N/A"})`)
          .join(", ")
      : "N/A";
    const timezones = country.timezones?.join(", ") || "N/A";
    const googleMapsUrl = country.maps?.googleMaps || "#";
    const googleMapsAvailable =
      country.maps?.googleMaps && country.maps.googleMaps !== "#";
    const continent = country.continents?.[0] || "N/A";
    const area = country.area?.toLocaleString() || "N/A";
    const independent = country.independent ? "Yes" : "No";
    const unMember = country.unMember ? "Yes" : "No";
    const tld = country.tld?.[0] || "N/A";
    const coatOfArms = country.coatOfArms?.png || country.coatOfArms?.svg;

    return (
      <main className="country-details-page">
        {/* Back Button */}
        <Link href="/countries" className="back-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15.8333 10H4.16666M4.16666 10L9.16666 5M4.16666 10L9.16666 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Countries
        </Link>

        {/* Main Details Container */}
        <div className="details-container">
          {/* Flag Section */}
          <div className="details-flag-section">
            <div className="details-flag-wrapper">
              {flagUrl ? (
                <img src={flagUrl} alt={flagAlt} className="details-flag" />
              ) : (
                <div className="details-flag-placeholder">🏳️</div>
              )}
            </div>

            {/* Coat of Arms */}
            {coatOfArms && (
              <div className="details-coat-of-arms">
                <img
                  src={coatOfArms}
                  alt={`Coat of Arms of ${name}`}
                  className="coat-of-arms-img"
                />
                <span className="coat-of-arms-label">Coat of Arms</span>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="details-content">
            <div className="details-header">
              <h1 className="details-name">{name}</h1>
              <p className="details-official-name">{officialName}</p>
              <span className="details-continent-badge">{continent}</span>
            </div>

            {/* Info Grid */}
            <div className="info-grid">
              <div className="info-group">
                <p>
                  <strong>Capital</strong>
                  <span>{capital}</span>
                </p>
                <p>
                  <strong>Region</strong>
                  <span>{region}</span>
                </p>
                <p>
                  <strong>Subregion</strong>
                  <span>{subregion}</span>
                </p>
                <p>
                  <strong>Population</strong>
                  <span>{population}</span>
                </p>
              </div>

              <div className="info-group">
                <p>
                  <strong> Languages</strong>
                  <span>{languages}</span>
                </p>
                <p>
                  <strong>Currencies</strong>
                  <span>{currencies}</span>
                </p>
                <p>
                  <strong>Time Zones</strong>
                  <span>{timezones}</span>
                </p>
                <p>
                  <strong>TLD</strong>
                  <span>{tld}</span>
                </p>
              </div>
            </div>

            {/* Extra Info */}
            <div className="details-extra">
              <div className="extra-item">
                <strong> Area</strong>
                <span>{area} km²</span>
              </div>
              <div className="extra-item">
                <strong> Independent</strong>
                <span>{independent}</span>
              </div>
              <div className="extra-item">
                <strong>🇺🇳 UN Member</strong>
                <span>{unMember}</span>
              </div>
            </div>

            {/* Google Maps Link */}
            {googleMapsAvailable ? (
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 1.66667C6.31812 1.66667 3.33334 4.65145 3.33334 8.33334C3.33334 11.6667 6.66668 15.8333 10 18.3333C13.3333 15.8333 16.6667 11.6667 16.6667 8.33334C16.6667 4.65145 13.6819 1.66667 10 1.66667Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33334C12.5 6.95263 11.3807 5.83334 10 5.83334C8.6193 5.83334 7.50001 6.95263 7.50001 8.33334C7.50001 9.71405 8.6193 10.8333 10 10.8333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                View on Google Maps
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 2H14V6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66667 9.33333L14 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ) : (
              <p className="no-maps">📍 Google Maps link not available</p>
            )}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching country:", error);
    notFound();
  }
}
