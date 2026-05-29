// app/countries/loading.jsx
export default function Loading() {
  return (
    <div className="loading-container">
      {/* Spinner */}
      <div className="loading-spinner-wrapper">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
      </div>

      {/* Loading Text */}
      <p className="loading-text">Loading amazing countries...</p>
      <p className="loading-subtext">Fetching data from REST Countries API</p>

      {/* Progress Bar */}
      <div className="loading-progress">
        <div className="loading-progress-bar"></div>
      </div>

      {/* Skeleton Cards Grid */}
      <div className="countries-grid loading-grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="country-card skeleton-card">
            {/* Flag Skeleton */}
            <div className="skeleton-flag"></div>

            {/* Content Skeleton */}
            <div className="card-content">
              <div className="skeleton-line skeleton-title"></div>
              <div className="skeleton-line skeleton-text"></div>
              <div className="skeleton-line skeleton-text"></div>
              <div className="skeleton-line skeleton-text short"></div>
              <div className="skeleton-line skeleton-button"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
