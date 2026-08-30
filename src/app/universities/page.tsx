"use client";

import { useMemo, useState } from "react";
import { universities } from "@/lib/data/universities";

export default function UniversitiesPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");
  const [major, setMajor] = useState("All");
  const [financialAid, setFinancialAid] = useState("All");
  const [saved, setSaved] = useState<string[]>([]);
  const [compared, setCompared] = useState<string[]>([]);

  const allMajors = Array.from(
    new Set(universities.flatMap((university) => university.programs))
  );

  const filteredUniversities = useMemo(() => {
    return universities.filter((university) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        university.name.toLowerCase().includes(searchText) ||
        university.location.toLowerCase().includes(searchText) ||
        university.programs.some((program) =>
          program.toLowerCase().includes(searchText)
        );

      const matchesCountry =
        country === "All" || university.country === country;

      const matchesMajor =
        major === "All" || university.programs.includes(major);

      const matchesAid =
        financialAid === "All" ||
        (financialAid === "Available" && university.financialAid) ||
        (financialAid === "Not Available" && !university.financialAid);

      return (
        matchesSearch &&
        matchesCountry &&
        matchesMajor &&
        matchesAid
      );
    });
  }, [search, country, major, financialAid]);

  function toggleSaved(id: string) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function toggleCompared(id: string) {
    setCompared((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      if (current.length >= 3) {
        alert("You can compare up to 3 universities.");
        return current;
      }

      return [...current, id];
    });
  }

  return (
    <main className="explorer-page">
      <header className="explorer-header">
        <div>
          <span className="section-label">UNIVERSITY EXPLORER</span>

          <h1>Find the right university for you.</h1>

          <p>
            Search and compare universities based on your academic goals,
            destination and financial preferences.
          </p>
        </div>

        <div className="demo-notice">
          <span>DEMO DATA</span>
          <p>
            University information is currently local development data.
            Verify information with official university sources before
            applying.
          </p>
        </div>
      </header>

      <section className="explorer-layout">
        <aside className="filters">
          <div className="filter-heading">
            <h2>Filters</h2>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCountry("All");
                setMajor("All");
                setFinancialAid("All");
              }}
            >
              Reset
            </button>
          </div>

          <label>
            Search
            <input
              type="search"
              placeholder="University, major..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <label>
            Country
            <select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
              <option value="All">All countries</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Europe">Europe</option>
            </select>
          </label>

          <label>
            Major
            <select
              value={major}
              onChange={(event) => setMajor(event.target.value)}
            >
              <option value="All">All majors</option>

              {allMajors.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Financial Aid
            <select
              value={financialAid}
              onChange={(event) =>
                setFinancialAid(event.target.value)
              }
            >
              <option value="All">Any</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not available</option>
            </select>
          </label>

          <div className="filter-info">
            <strong>{filteredUniversities.length}</strong>
            <span>universities found</span>
          </div>
        </aside>

        <section className="results">
          <div className="results-toolbar">
            <div>
              <strong>Universities</strong>
              <span>
                {filteredUniversities.length} results
              </span>
            </div>

            {compared.length > 0 && (
              <a
                href="/compare"
                className="compare-bar-button"
              >
                Compare {compared.length}
              </a>
            )}
          </div>

          {filteredUniversities.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">⌕</div>

              <h2>No universities found</h2>

              <p>
                Try changing your search or filters.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCountry("All");
                  setMajor("All");
                  setFinancialAid("All");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="university-results">
              {filteredUniversities.map((university) => {
                const isSaved = saved.includes(university.id);
                const isCompared = compared.includes(university.id);

                return (
                  <article
                    className="university-result-card"
                    key={university.id}
                  >
                    <div className="result-top">
                      <div className="result-logo">
                        {university.logo}
                      </div>

                      <button
                        type="button"
                        className={`heart-button ${
                          isSaved ? "active" : ""
                        }`}
                        onClick={() =>
                          toggleSaved(university.id)
                        }
                        aria-label={
                          isSaved
                            ? `Remove ${university.name} from saved`
                            : `Save ${university.name}`
                        }
                      >
                        {isSaved ? "♥" : "♡"}
                      </button>
                    </div>

                    <div className="result-content">
                      <div className="result-title-row">
                        <div>
                          <h2>{university.name}</h2>

                          <p>
                            {university.location},{" "}
                            {university.country}
                          </p>
                        </div>

                        {university.demoData && (
                          <span className="data-badge">
                            Demo
                          </span>
                        )}
                      </div>

                      <div className="program-list">
                        {university.programs.map((program) => (
                          <span key={program}>
                            {program}
                          </span>
                        ))}
                      </div>

                      <div className="result-details">
                        <div>
                          <small>Financial aid</small>
                          <strong>
                            {university.financialAid
                              ? "Available"
                              : "Not listed"}
                          </strong>
                        </div>

                        <div>
                          <small>Scholarships</small>
                          <strong>
                            {university.scholarshipAvailable
                              ? "Available"
                              : "Not listed"}
                          </strong>
                        </div>

                        <div>
                          <small>International</small>
                          <strong>
                            {university.internationalStudents
                              ? "Supported"
                              : "Not listed"}
                          </strong>
                        </div>
                      </div>

                      <div className="result-actions">
                        <button
                          type="button"
                          className={
                            isCompared
                              ? "compare-active"
                              : ""
                          }
                          onClick={() =>
                            toggleCompared(university.id)
                          }
                        >
                          {isCompared
                            ? "✓ Compared"
                            : "Compare"}
                        </button>

                        <a
                          href={`/universities/${university.slug}`}
                          className="view-button"
                        >
                          View University →
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
