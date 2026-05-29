// app/search/page.jsx
import CountrySearch from "../../components/CountrySearch";

export const metadata = {
  title: "Search | World Explorer",
  description:
    "Search countries by name, filter by region, and sort by population.",
  openGraph: {
    title: "Search Countries - World Explorer",
    description:
      "Find any country instantly with our powerful search, filter, and sort tools.",
  },
};

async function getCountries() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=cca3,name,capital,region,population,flags",
      { next: { revalidate: 86400 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch countries (Status: ${response.status})`);
    }

    return response.json();
  } catch (error) {
    console.error("Search page fetch error:", error);
    return [];
  }
}

export default async function SearchPage() {
  const allCountries = await getCountries();

  return (
    <section>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-top">
          <h1 className="page-title">Search Countries</h1>
          {allCountries.length > 0 && (
            <span className="page-badge">{allCountries.length} available</span>
          )}
        </div>
        <p className="page-description">
          Search by name, filter by region, or sort by population to find
          exactly what you&apos;re looking for.
        </p>
      </div>

      {/* Search Component */}
      {allCountries.length > 0 ? (
        <CountrySearch allCountries={allCountries} />
      ) : (
        <div className="no-results">
          <div className="no-results-icon">⚠️</div>
          <h3>Failed to load countries</h3>
          <p>Unable to fetch data from the API. Please try again later.</p>
        </div>
      )}
    </section>
  );
}
