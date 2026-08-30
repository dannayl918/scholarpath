import Link from "next/link";
import { notFound } from "next/navigation";
import { getUniversityBySlug } from "@/lib/data/universities";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function UniversityProfile({
  params,
}: PageProps) {
  const { slug } = await params;

  const university = getUniversityBySlug(slug);

  if (!university) {
    notFound();
  }

  return (
    <main className="profile-page">
      <div className="profile-container">
        <Link href="/universities" className="back-link">
          ← Back to Universities
        </Link>

        <section className="profile-hero">
          <div className="profile-logo">
            {university.logo}
          </div>

          <div className="profile-title">
            <span className="data-badge">
              Demo Data
            </span>

            <h1>{university.name}</h1>

            <p>
              {university.location}, {university.country}
            </p>
          </div>

          <div className="profile-actions">
            <button type="button">
              ♡ Save
            </button>

            <Link href="/compare">
              Compare
            </Link>

            <button type="button" className="profile-apply">
              Apply
            </button>
          </div>
        </section>

        <div className="profile-layout">
          <div className="profile-main">
            <section className="profile-section">
              <span className="section-label">
                OVERVIEW
              </span>

              <h2>About this university</h2>

              <p>
                {university.description}
              </p>

              <div className="programs-large">
                {university.programs.map((program) => (
                  <span key={program}>
                    {program}
                  </span>
                ))}
              </div>
            </section>

            <section className="profile-section">
              <span className="section-label">
                PROGRAMS
              </span>

              <h2>Popular areas of study</h2>

              <div className="profile-list">
                {university.programs.map((program) => (
                  <div key={program}>
                    <strong>{program}</strong>
                    <span>
                      Program information to be verified
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="profile-section">
              <span className="section-label">
                FINANCIAL AID
              </span>

              <h2>Financial support</h2>

              <div className="info-grid">
                <div className="info-box">
                  <span>Financial Aid</span>
                  <strong>
                    {university.financialAid
                      ? "Available"
                      : "Not listed"}
                  </strong>
                </div>

                <div className="info-box">
                  <span>Scholarships</span>
                  <strong>
                    {university.scholarshipAvailable
                      ? "Available"
                      : "Not listed"}
                  </strong>
                </div>

                <div className="info-box">
                  <span>Tuition</span>
                  <strong>
                    {university.tuition.amount
                      ? `${university.tuition.currency} ${university.tuition.amount.toLocaleString()}`
                      : "Not verified"}
                  </strong>
                </div>
              </div>
            </section>

            <section className="profile-section">
              <span className="section-label">
                REQUIREMENTS
              </span>

              <h2>Application requirements</h2>

              <div className="requirement-list">
                <div>
                  <span>SAT</span>
                  <strong>
                    {university.testRequirements.sat
                      ? "Required / considered"
                      : "Not listed"}
                  </strong>
                </div>

                <div>
                  <span>English test</span>
                  <strong>
                    {university.testRequirements
                      .englishTest
                      ? "Required / considered"
                      : "Not listed"}
                  </strong>
                </div>

                <div>
                  <span>International students</span>
                  <strong>
                    {university.internationalStudents
                      ? "Supported"
                      : "Not listed"}
                  </strong>
                </div>
              </div>
            </section>

            <section className="profile-section">
              <span className="section-label">
                DEADLINES
              </span>

              <h2>Application timeline</h2>

              <div className="deadline-box">
                <span>Application deadline</span>

                <strong>
                  {university.applicationDeadline ??
                    "Not verified"}
                </strong>
              </div>
            </section>
          </div>

          <aside className="summary-card">
            <span className="section-label">
              UNIVERSITY SUMMARY
            </span>

            <h2>{university.name}</h2>

            <div className="summary-row">
              <span>Location</span>
              <strong>
                {university.location}, {university.country}
              </strong>
            </div>

            <div className="summary-row">
              <span>Tuition</span>
              <strong>
                {university.tuition.amount
                  ? `${university.tuition.currency} ${university.tuition.amount.toLocaleString()} / year`
                  : "Not verified"}
              </strong>
            </div>

            <div className="summary-row">
              <span>Financial aid</span>
              <strong>
                {university.financialAid
                  ? "Available"
                  : "Not listed"}
              </strong>
            </div>

            <div className="summary-row">
              <span>International students</span>
              <strong>
                {university.internationalStudents
                  ? "Supported"
                  : "Not listed"}
              </strong>
            </div>

            <div className="summary-row">
              <span>Deadline</span>
              <strong>
                {university.applicationDeadline ??
                  "Not verified"}
              </strong>
            </div>

            <div className="summary-warning">
              Demo information only. Verify all requirements,
              costs and deadlines with the official university
              before applying.
            </div>

            {university.sourceUrl && (
              <a
                href={university.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="source-link"
              >
                View official source →
              </a>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
