"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";

export default function CountrySearch({ allCountries }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    if (
      allCountries &&
      Array.isArray(allCountries) &&
      allCountries.length > 0
    ) {
      setCountries(allCountries);
      setLoading(false);
    } else if (
      allCountries &&
      Array.isArray(allCountries) &&
      allCountries.length === 0
    ) {
      setLoading(false);
    }
  }, [allCountries]);

  const regions = useMemo(() => {
    const uniqueRegions = [];
    for (let i = 0; i < countries.length; i++) {
      const region = countries[i]?.region;
      if (region && !uniqueRegions.includes(region)) {
        uniqueRegions.push(region);
      }
    }
    uniqueRegions.sort();
    return uniqueRegions;
  }, [countries]);

  const filtered = useMemo(() => {
    const results = [];

    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      if (!country) continue;

      const matchesSearch =
        debouncedQuery === "" ||
        (country.name?.common &&
          country.name.common
            .toLowerCase()
            .includes(debouncedQuery.toLowerCase()));

      const matchesRegion =
        selectedRegion === "" || country.region === selectedRegion;

      if (matchesSearch && matchesRegion) {
        results.push(country);
      }
    }

    // Sort
    if (sortBy === "highest") {
      results.sort((a, b) => (b?.population || 0) - (a?.population || 0));
    } else if (sortBy === "lowest") {
      results.sort((a, b) => (a?.population || 0) - (b?.population || 0));
    }

    return results;
  }, [countries, debouncedQuery, selectedRegion, sortBy]);

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedRegion("");
    setSortBy("");
  }, []);

  const formatPopulation = (pop) => {
    if (!pop) return "0";
    if (pop >= 1_000_000_000) return `${(pop / 1_000_000_000).toFixed(1)}B`;
    if (pop >= 1_000_000) return `${(pop / 1_000_000).toFixed(1)}M`;
    if (pop >= 1_000) return `${(pop / 1_000).toFixed(1)}K`;
    return pop.toLocaleString();
  };

  const hasActiveFilters = searchQuery || selectedRegion || sortBy;

  // Loading State
  if (loading) {
    return (
      <div className="search-loading">
        <div className="loading-spinner" />
        <p className="loading-text">Loading countries...</p>
        <p className="loading-subtext">Fetching data from REST Countries API</p>
      </div>
    );
  }

  // Empty State
  if (countries.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">⚠️</div>
        <h3>No countries loaded</h3>
        <p>
          Unable to fetch data from the API. Please check your connection and
          try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="btn-secondary"
          style={{ marginTop: "1rem" }}
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div className="search-container">
      {/* Search Controls */}
      <div className="search-controls">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search for a country by name..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search countries"
          />
          {searchQuery && (
            <button
              className="search-clear-btn"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <select
          className="filter-select"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          aria-label="Filter by region"
        >
          <option value=""> All Regions</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region === "Asia"}
              {region === "Europe"}
              {region === "Africa"}
              {region === "Americas"}
              {region === "Oceania"}
              {region}
            </option>
          ))}
        </select>

        <select
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort by population"
        >
          <option value=""> Sort by Population</option>
          <option value="highest"> Highest to Lowest</option>
          <option value="lowest">Lowest to Highest</option>
        </select>

        {hasActiveFilters && (
          <button
            className="btn-clear-filters"
            onClick={clearFilters}
            aria-label="Clear all filters"
          >
            ✕ Clear
          </button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="active-filters">
          {debouncedQuery && (
            <span className="filter-tag">
              🔍 &ldquo;{debouncedQuery}&rdquo;
              <button onClick={() => setSearchQuery("")}>✕</button>
            </span>
          )}
          {selectedRegion && (
            <span className="filter-tag">
              {selectedRegion}
              <button onClick={() => setSelectedRegion("")}>✕</button>
            </span>
          )}
          {sortBy && (
            <span className="filter-tag">
              {sortBy === "highest" ? "Highest First" : "Lowest First"}
              <button onClick={() => setSortBy("")}>✕</button>
            </span>
          )}
        </div>
      )}

      {/* Results Count */}
      <p className="results-count">
        {filtered.length > 0 ? (
          <>
            {debouncedQuery && (
              <>
                {" "}
                for &ldquo;<strong>{debouncedQuery}</strong>&rdquo;
              </>
            )}
          </>
        ) : (
          "No results found"
        )}
      </p>

      {/* Results Grid */}
      {filtered.length > 0 ? (
        <div className="countries-grid">
          {filtered.map((country) => (
            <article key={country.cca3} className="country-card">
              <div className="card-flag-wrapper">
                <img
                  src={country.flags?.png || country.flags?.svg}
                  alt={`Flag of ${country.name?.common || "Unknown"}`}
                  className="card-flag"
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h2 className="card-title" title={country.name?.common}>
                  {country.name?.common || "Unknown"}
                </h2>
                <div className="card-info-list">
                  <p className="card-info-item">
                    <strong>Capital:</strong>{" "}
                    {country.capital?.[0] || "No Capital"}
                  </p>
                  <p className="card-info-item">
                    <strong>Region:</strong> {country.region || "N/A"}
                  </p>
                  <p className="card-info-item">
                    <strong>Population:</strong>{" "}
                    {formatPopulation(country.population)}
                  </p>
                </div>
                <Link
                  href={`/countries/${country.cca3}`}
                  className="card-button"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No countries found</h3>
          <p>Try adjusting your search term or filter criteria</p>
          <button
            onClick={clearFilters}
            className="btn-secondary"
            style={{ marginTop: "1rem" }}
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
