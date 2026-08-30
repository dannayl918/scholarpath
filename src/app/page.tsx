"use client";

import { useState } from "react";

const features = [
  {
    number: "01",
    icon: "⌕",
    title: "Find Universities",
    description:
      "Explore universities by destination, major, budget, financial aid and application goals.",
  },
  {
    number: "02",
    icon: "✦",
    title: "Discover Scholarships",
    description:
      "Build your student profile and find opportunities matched to your academic goals.",
  },
  {
    number: "03",
    icon: "AI",
    title: "Get AI Guidance",
    description:
      "Plan your university journey with structured guidance designed around your goals.",
  },
  {
    number: "04",
    icon: "✓",
    title: "Track Applications",
    description:
      "Keep applications, documents, deadlines and progress organized in one place.",
  },
];

const universities = [
  {
    logo: "N",
    name: "Northbridge University",
    location: "Massachusetts, USA",
    programs: "Computer Science · Engineering · Business",
  },
  {
    logo: "W",
    name: "Westlake Institute",
    location: "California, USA",
    programs: "Computer Science · Data Science · Economics",
  },
  {
    logo: "S",
    name: "Summit University",
    location: "New York, USA",
    programs: "Engineering · Business · Medicine",
  },
];

const scholarships = [
  {
    logo: "FL",
    name: "Future Leaders Scholarship",
    organization: "Demo Organization",
    match: "94%",
  },
  {
    logo: "ST",
    name: "Global STEM Award",
    organization: "Demo Organization",
    match: "89%",
  },
  {
    logo: "IE",
    name: "International Excellence Grant",
    organization: "Demo Organization",
    match: "86%",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site">
      {/* NAVIGATION */}

      <header className="navbar">
        <a href="/" className="brand">
          <span className="brand-mark">S</span>
          <span>ScholarPath</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <a href="#universities" onClick={() => setMenuOpen(false)}>
            Universities
          </a>

          <a href="#scholarships" onClick={() => setMenuOpen(false)}>
            Scholarships
          </a>

          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </a>

          <a href="#resources" onClick={() => setMenuOpen(false)}>
            Resources
          </a>
        </nav>

        <div className="nav-actions">
          <a href="/login" className="login-button">
            Log in
          </a>

          <a href="/signup" className="signup-button">
            Get started
          </a>

          <button
            className="menu-button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            Built for ambitious international students
          </div>

          <h1>
            Your Future Starts With
            <span>The Right Opportunity.</span>
          </h1>

          <p>
            Discover universities, scholarships, financial aid and application
            opportunities matched to your goals.
          </p>

          <div className="hero-buttons">
            <a href="/scholarships" className="primary-button">
              Find My Scholarships →
            </a>

            <a href="/universities" className="secondary-button">
              Explore Universities
            </a>
          </div>

          <div className="trust-row">
            <span>✓ University discovery</span>
            <span>✓ Scholarship matching</span>
            <span>✓ Application planning</span>
          </div>
        </div>

        {/* WORLD VISUAL */}

        <div className="globe-area" aria-label="Global student network">
          <div className="globe">
            <div className="globe-grid" />

            <div className="orbit" />
            <div className="orbit orbit-two" />

            <div className="connection connection-one" />
            <div className="connection connection-two" />
            <div className="connection connection-three" />

            <span className="location-pin pin-one">USA</span>
            <span className="location-pin pin-two">EU</span>
            <span className="location-pin pin-three">ASIA</span>

            <div className="globe-center">SP</div>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="stats" aria-label="ScholarPath platform">
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

      {/* JOURNEY */}

      <section className="section" id="how-it-works">
        <div className="section-heading">
          <div>
            <span className="section-label">THE SCHOLARPATH EXPERIENCE</span>

            <h2>Your journey, simplified.</h2>
          </div>

          <p>
            Everything you need to move from discovering opportunities to
            confidently preparing your applications.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-top">
                <div className="feature-icon">{feature.icon}</div>

                <span>{feature.number}</span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <span className="feature-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* UNIVERSITIES */}

      <section className="section" id="universities">
        <div className="section-heading">
          <div>
            <span className="section-label">UNIVERSITY EXPLORER</span>

            <h2>Find a university that fits.</h2>
          </div>

          <a href="/universities" className="secondary-button">
            View all universities →
          </a>
        </div>

        <p className="section-description">
          Explore universities by destination, programs, affordability and
          financial aid. The universities shown here are demo records until
          verified data sources are connected.
        </p>

        <div className="university-grid">
          {universities.map((university) => (
            <article className="university-card" key={university.name}>
              <div className="card-top">
                <div className="university-logo">{university.logo}</div>

                <button
                  className="save-button"
                  aria-label={`Save ${university.name}`}
                >
                  ♡
                </button>
              </div>

              <h3>{university.name}</h3>

              <div className="location">
                {university.location}
              </div>

              <div className="programs">{university.programs}</div>

              <div className="aid">
                ✓ Financial aid information available
              </div>

              <div className="card-actions">
                <button type="button">Compare</button>

                <a
                  href="/universities"
                  className="small-primary"
                >
                  View University
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SCHOLARSHIPS */}

      <section className="section" id="scholarships">
        <div className="scholarship-panel">
          <div className="scholarship-copy">
            <span className="section-label">
              SCHOLARSHIP MATCHING
            </span>

            <h2>Find Scholarships Built Around You.</h2>

            <p>
              Tell ScholarPath about your education, intended major,
              destination and budget. Our matching engine is designed to
              connect your profile with relevant opportunities.
            </p>

            <a href="/scholarships" className="primary-button">
              Find Opportunities →
            </a>
          </div>

          <div className="match-preview">
            <div className="preview-header">
              <span>Recommended opportunities</span>
              <span className="demo-badge">DEMO DATA</span>
            </div>

            {scholarships.map((scholarship) => (
              <article className="match-card" key={scholarship.name}>
                <div className="match-icon">
                  {scholarship.logo}
                </div>

                <div className="match-info">
                  <strong>{scholarship.name}</strong>
                  <span>{scholarship.organization}</span>
                  <small>Eligibility to be verified</small>
                </div>

                <div className="match-score">
                  <strong>{scholarship.match}</strong>
                  <span>match</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI */}

      <section className="section" id="resources">
        <div className="ai-banner">
          <div>
            <span className="section-label">SCHOLARPATH AI</span>

            <h2>Your personal university and scholarship guide.</h2>

            <p>
              Get structured help planning your applications, comparing
              opportunities and understanding your next steps.
            </p>
          </div>

          <a href="/ai-assistant" className="primary-button">
            Explore ScholarPath AI →
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="section centered">
        <span className="section-label">HOW SCHOLARPATH WORKS</span>

        <h2>From ambition to application.</h2>

        <p className="section-description">
          A focused workflow designed to keep your international application
          journey organized.
        </p>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <div className="step-line" />
            <strong>Create your profile</strong>
          </div>

          <div className="step">
            <span>02</span>
            <div className="step-line" />
            <strong>Discover opportunities</strong>
          </div>

          <div className="step">
            <span>03</span>
            <div className="step-line" />
            <strong>Build your application plan</strong>
          </div>

          <div className="step">
            <span>04</span>
            <div className="step-line" />
            <strong>Track your progress</strong>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="final-cta">
        <div>
          <span className="section-label">START YOUR JOURNEY</span>

          <h2>The right opportunity is out there.</h2>

          <p>
            Start exploring universities, scholarships and application
            resources with ScholarPath.
          </p>
        </div>

        <a href="/signup" className="primary-button">
          Start for free →
        </a>
      </section>

      {/* FOOTER */}

      <footer>
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">S</span>
            <span>ScholarPath</span>
          </div>

          <p>
            Your Future Starts With the Right Opportunity.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <strong>Explore</strong>
            <a href="/universities">Universities</a>
            <a href="/scholarships">Scholarships</a>
            <a href="/resources">Resources</a>
          </div>

          <div>
            <strong>Platform</strong>
            <a href="/ai-assistant">ScholarPath AI</a>
            <a href="/applications">Applications</a>
            <a href="/dashboard">Dashboard</a>
          </div>

          <div>
            <strong>Account</strong>
            <a href="/login">Log in</a>
            <a href="/signup">Create account</a>
            <a href="/profile">Profile</a>
          </div>
        </div>

        <div className="copyright">
          © 2026 ScholarPath. Demo opportunity data must be independently
          verified before making application decisions.
        </div>
      </footer>
    </main>
  );
}
