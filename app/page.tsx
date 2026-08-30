"use client";

import { useState } from "react";

const universities = [
  {
    name: "Northbridge University",
    location: "Massachusetts, USA",
    programs: "Computer Science · Engineering · Business",
    aid: "Financial aid available",
  },
  {
    name: "Westlake Institute",
    location: "California, USA",
    programs: "Computer Science · Data Science · Economics",
    aid: "Scholarships available",
  },
  {
    name: "Summit University",
    location: "New York, USA",
    programs: "Engineering · Business · Medicine",
    aid: "Need-based aid",
  },
];

const scholarships = [
  {
    name: "Future Leaders Scholarship",
    coverage: "Demo: Up to full tuition",
    deadline: "Demo deadline",
    match: "94%",
  },
  {
    name: "Global STEM Award",
    coverage: "Demo: Tuition support",
    deadline: "Demo deadline",
    match: "89%",
  },
  {
    name: "International Excellence Grant",
    coverage: "Demo: Merit funding",
    deadline: "Demo deadline",
    match: "86%",
  },
];

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main className={dark ? "site dark" : "site"}>
      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">S</div>
          <span>ScholarPath</span>
        </div>

        <div className="nav-links">
          <a href="#universities">Universities</a>
          <a href="#scholarships">Scholarships</a>
          <a href="#how">How it works</a>
          <a href="#resources">Resources</a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? "☀" : "☾"}
          </button>

          <a href="#login" className="login-button">
            Log in
          </a>

          <a href="#signup" className="signup-button">
            Get started
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            Built for ambitious students
          </div>

          <h1>
            Your Future Starts With
            <span> The Right Opportunity.</span>
          </h1>

          <p>
            Discover universities, scholarships, financial aid and application
            opportunities matched to your goals.
          </p>

          <div className="hero-buttons">
            <a href="#scholarships" className="primary-button">
              Find My Scholarships →
            </a>

            <a href="#universities" className="secondary-button">
              Explore Universities
            </a>
          </div>

          <div className="trust-row">
            <span>✓ Personalized discovery</span>
            <span>✓ International student focused</span>
            <span>✓ Demo data clearly labeled</span>
          </div>
        </div>

        <div className="globe-area" aria-label="Global opportunity visualization">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="globe">
            <div className="globe-grid" />
            <div className="globe-center">SP</div>

            <div className="connection connection-one" />
            <div className="connection connection-two" />
            <div className="connection connection-three" />

            <div className="location-pin pin-one">USA</div>
            <div className="location-pin pin-two">UK</div>
            <div className="location-pin pin-three">CA</div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>50K+</strong>
          <span>Students</span>
        </div>

        <div>
          <strong>1,200+</strong>
          <span>Universities</span>
        </div>

        <div>
          <strong>8,000+</strong>
          <span>Scholarships</span>
        </div>

        <div>
          <strong>25+</strong>
          <span>Countries</span>
        </div>
      </section>

      <section className="section" id="how">
        <div className="section-heading">
          <div>
            <span className="section-label">THE SCHOLARPATH EXPERIENCE</span>
            <h2>Your journey, simplified.</h2>
          </div>

          <p>
            Everything you need to move from searching for opportunities to
            confidently preparing your applications.
          </p>
        </div>

        <div className="feature-grid">
          <Feature
            number="01"
            icon="⌕"
            title="Find Universities"
            text="Explore universities based on your academic goals, interests, destination and budget."
          />

          <Feature
            number="02"
            icon="✦"
            title="Discover Scholarships"
            text="Build your profile and discover opportunities that fit your goals."
          />

          <Feature
            number="03"
            icon="AI"
            title="Get AI Guidance"
            text="Plan your applications, ask questions and get structured guidance."
          />

          <Feature
            number="04"
            icon="✓"
            title="Track Applications"
            text="Keep deadlines, documents, essays and application progress organized."
          />
        </div>
      </section>

      <section className="section discovery" id="universities">
        <div className="section-heading">
          <div>
            <span className="section-label">UNIVERSITY EXPLORER</span>
            <h2>Find a university that fits.</h2>
          </div>

          <a href="#universities" className="text-link">
            Explore all universities →
          </a>
        </div>

        <div className="university-grid">
          {universities.map((university) => (
            <article className="university-card" key={university.name}>
              <div className="card-top">
                <div className="university-logo">
                  {university.name.charAt(0)}
                </div>

                <button className="save-button" aria-label="Save university">
                  ♡
                </button>
              </div>

              <h3>{university.name}</h3>
              <p className="location">◉ {university.location}</p>

              <div className="programs">{university.programs}</div>

              <div className="aid">
                <span>✓</span>
                {university.aid}
              </div>

              <div className="card-actions">
                <button>Compare</button>
                <button className="small-primary">View University</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section scholarship-section" id="scholarships">
        <div className="scholarship-panel">
          <div className="scholarship-copy">
            <span className="section-label">SCHOLARSHIP MATCHING</span>

            <h2>Find Scholarships Built Around You.</h2>

            <p>
              Tell ScholarPath about your education, goals and preferences.
              Our demo matching engine scores opportunities against your
              profile.
            </p>

            <a href="#signup" className="primary-button">
              Build My Profile →
            </a>
          </div>

          <div className="match-preview">
            <div className="preview-header">
              <span>Your matches</span>
              <span className="demo-badge">DEMO DATA</span>
            </div>

            {scholarships.map((scholarship) => (
              <div className="match-card" key={scholarship.name}>
                <div className="match-icon">✦</div>

                <div className="match-info">
                  <strong>{scholarship.name}</strong>
                  <span>{scholarship.coverage}</span>
                  <small>{scholarship.deadline}</small>
                </div>

                <div className="match-score">
                  <strong>{scholarship.match}</strong>
                  <span>match</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="resources">
        <div className="ai-banner">
          <div>
            <span className="section-label">SCHOLARPATH AI</span>
            <h2>Your personal university & scholarship guide.</h2>
            <p>
              Get help planning applications, comparing options and organizing
              your next steps.
            </p>
          </div>

          <a href="#ai" className="secondary-button">
            Explore ScholarPath AI →
          </a>
        </div>
      </section>

      <section className="section">
        <div className="section-heading centered">
          <span className="section-label">HOW IT WORKS</span>
          <h2>From ambition to application.</h2>
          <p>
            A simple workflow designed around the real decisions students
            make.
          </p>
        </div>

        <div className="steps">
          <Step number="01" title="Create your profile" />
          <Step number="02" title="Explore opportunities" />
          <Step number="03" title="Build your application plan" />
          <Step number="04" title="Track your progress" />
        </div>
      </section>

      <section className="final-cta" id="signup">
        <div>
          <span className="section-label">START YOUR JOURNEY</span>
          <h2>The right opportunity is out there.</h2>
          <p>
            Start exploring universities, scholarships and resources with
            ScholarPath.
          </p>
        </div>

        <a href="#universities" className="primary-button">
          Explore ScholarPath →
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <div className="brand">
            <div className="brand-mark">S</div>
            <span>ScholarPath</span>
          </div>

          <p>
            Your Future Starts With the Right Opportunity.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <strong>Platform</strong>
            <a href="#universities">Universities</a>
            <a href="#scholarships">Scholarships</a>
            <a href="#ai">AI Assistant</a>
          </div>

          <div>
            <strong>Resources</strong>
            <a href="#resources">Guides</a>
            <a href="#resources">Tools</a>
            <a href="#resources">Application Help</a>
          </div>

          <div>
            <strong>Company</strong>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>

        <div className="copyright">
          © 2026 ScholarPath. Demo platform — opportunity data must be
          independently verified.
        </div>
      </footer>
    </main>
  );
}

function Feature({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <article className="feature-card">
      <div className="feature-top">
        <div className="feature-icon">{icon}</div>
        <span>{number}</span>
      </div>

      <h3>{title}</h3>
      <p>{text}</p>

      <div className="feature-arrow">↗</div>
    </article>
  );
}

function Step({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="step">
      <span>{number}</span>
      <div className="step-line" />
      <strong>{title}</strong>
    </div>
  );
}
