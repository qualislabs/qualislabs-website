import { Link } from 'react-router-dom'
import {
  capabilities,
  insights,
  operatingPrinciples,
  projects,
  teamMembers,
  awards,
} from '../data/siteContent'

const capabilityIcons = ['◆', '◈', '◉', '◇']

const stats = [
  { value: '5+', label: 'Years of engineering experience' },
  { value: '3', label: 'Proprietary platforms' },
  { value: '10+', label: 'Client engagements delivered' },
  { value: '2021', label: 'IBM Call for Code Winner' },
]

const partnerSignals = [
  'Energy Pilots',
  'Mobility Marketplaces',
  'IoT & Robotics',
  'Cloud Platforms',
  'Embedded Systems',
  'Open Source',
]

const projectGradients = [
  'linear-gradient(135deg, #1e3a8a 0%, #4f7bff 60%, #93c5fd 100%)',
  'linear-gradient(135deg, #0e1530 0%, #1d4ed8 60%, #38bdf8 100%)',
]

function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero hero-landing hero-marketing">
        <div className="hero-landing-inner">
          <p className="hero-eyebrow">
            <svg className="hero-eyebrow-icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="currentColor"
                d="M12 2l1.09 3.26L16 4l-2.18 2.18L16 8l-2.91-1.09L12 10l-1.09-2.91L8 8l2.18-2.18L8 4l2.91 1.26L12 2zm0 12l1.09 3.26L16 14l-2.18 2.18L16 18l-2.91-1.09L12 20l-1.09-2.91L8 18l2.18-2.18L8 14l2.91 1.26L12 14z"
              />
            </svg>
            Qualis Labs — Engineering Consultancy
          </p>
          <h1 className="hero-title">
            <span className="hero-title-line">We Engineer Intelligent</span>
            <span className="hero-title-line hero-title-accent">Products & Platforms.</span>
          </h1>
          <p className="hero-landing-subtitle home-hero-intro">
            Qualis Labs is a specialist engineering consultancy delivering production-grade software,
            hardware, and intelligent systems — from strategy through deployment.
          </p>
          <div className="button-row hero-landing-ctas">
            <a
              className="button button-primary"
              href="mailto:hello@qualislabs.com?subject=Build%20with%20Qualis%20Labs"
            >
              Start a Project
              <span className="button-icon" aria-hidden>→</span>
            </a>
            <Link className="button button-secondary" to="/capabilities">
              Explore Capabilities
            </Link>
          </div>
        </div>
        <div className="hero-marketing-orbs" aria-hidden>
          <span className="hero-orb hero-orb-1" />
          <span className="hero-orb hero-orb-2" />
          <span className="hero-orb hero-orb-3" />
        </div>
      </section>

      {/* ============ PARTNER STRIP ============ */}
      <section className="section compact-section section-soft partner-strip-section">
        <div className="partner-strip">
          <p className="partner-strip-label">Domains we operate across</p>
          <div className="partner-strip-items">
            {partnerSignals.map((label) => (
              <span className="partner-strip-item" key={label}>{label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES CHARTER (light services grid) ============ */}
      <section className="section">
        <div className="home-section">
          <div className="home-section-heading home-section-heading-centered">
            <p className="eyebrow">Core expertise</p>
            <h2>Capabilities that drive measurable outcomes.</h2>
          </div>
          <div className="home-card-grid home-card-grid-4">
            {capabilities.map((capability, idx) => (
              <article className="content-card service-card" key={capability.title}>
                <span className="card-icon" aria-hidden>{capabilityIcons[idx % capabilityIcons.length]}</span>
                <h3>{capability.title}</h3>
                <p className="section-copy">{capability.details[0]}</p>
                <Link className="card-link" to="/capabilities">
                  Learn more <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT / TWO-COLUMN ============ */}
      <section className="section section-soft">
        <div className="home-section about-grid">
          <div className="about-visual" aria-hidden>
            <div className="about-image about-image-primary">
              <div className="about-image-grid">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} style={{ animationDelay: `${(i % 4) * 0.4}s` }} />
                ))}
              </div>
            </div>
            <div className="about-image about-image-secondary">
              <span className="about-image-tag">Hardware × Software</span>
            </div>
            <div className="about-badge">
              <span className="about-badge-value">5+</span>
              <span className="about-badge-label">Years<br/>Delivering</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">About Qualis Labs</p>
            <h2>Accelerating ambitious teams through engineered, end-to-end solutions.</h2>
            <p className="section-copy">
              We are a focused engineering consultancy with deep roots in mechatronics, operating across
              software, electronics, and intelligent product systems. We design, build, and ship — with
              the precision of specialists and the speed of a dedicated team.
            </p>
            <div className="about-feature-row">
              <div className="about-feature">
                <span className="card-icon" aria-hidden>◆</span>
                <div>
                  <p className="micro-label">Systems Thinking</p>
                  <p>Hardware, software, and operations engineered as one.</p>
                </div>
              </div>
              <div className="about-feature">
                <span className="card-icon" aria-hidden>◈</span>
                <div>
                  <p className="micro-label">Ship & Iterate</p>
                  <p>Working releases first, then improve through real usage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RECOGNITION ============ */}
      <section className="section section-soft awards-section">
        <div className="home-section">
          <div className="home-section-heading home-section-heading-centered">
            <p className="eyebrow">Recognition</p>
            <h2>Global validation of our engineering impact.</h2>
          </div>
          <div className="awards-grid">
            {awards.map((award) => (
              <div className="award-card" key={award.title}>
                <div className="award-content">
                  <div className="award-top">
                    <p className="micro-label">{award.organization} · {award.year}</p>
                    <h3>{award.title}</h3>
                  </div>
                  <p className="section-copy">{award.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CASE STUDIES (large image cards) ============ */}
      <section className="section">
        <div className="home-section">
          <div className="home-section-heading home-section-heading-row">
            <div>
              <p className="eyebrow">Case studies</p>
              <h2>Innovative solutions we're building and shipping.</h2>
            </div>
            <Link className="home-text-link" to="/projects">
              View all projects
            </Link>
          </div>
          <div className="home-card-grid home-card-grid-2">
            {projects.slice(0, 2).map((project, i) => {
              const isExternal = !!project.link;
              return isExternal ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="case-card" key={project.name}>
                  <div className="case-card-cover" style={{ background: projectGradients[i % 2] }}>
                    <span className="case-card-tag">{project.tag}</span>
                    <span className="case-card-name">{project.name}</span>
                  </div>
                  <div className="case-card-body">
                    <h3>{project.headline}</h3>
                    <p className="section-copy">{project.impact}</p>
                    <span className="insight-link">Visit platform <span aria-hidden>↗</span></span>
                  </div>
                </a>
              ) : (
                <Link to="/projects" className="case-card" key={project.name}>
                  <div className="case-card-cover" style={{ background: projectGradients[i % 2] }}>
                    <span className="case-card-tag">{project.tag}</span>
                    <span className="case-card-name">{project.name}</span>
                  </div>
                  <div className="case-card-body">
                    <h3>{project.headline}</h3>
                    <p className="section-copy">{project.impact}</p>
                    <span className="insight-link">Read case study</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ DARK SERVICES GRID ============ */}
      <section className="section section-dark">
        <div className="home-section">
          <div className="home-section-heading home-section-heading-centered">
            <p className="eyebrow">Service areas</p>
            <h2>Comprehensive engineering services, end to end.</h2>
          </div>
          <div className="services-tile-grid">
            {[...capabilities, ...operatingPrinciples].slice(0, 6).map((item, idx) => {
              const title = 'title' in item ? item.title : item.label
              const desc = 'description' in item ? item.description : item.text
              return (
                <article className="service-tile" key={title}>
                  <span className="card-icon" aria-hidden>{capabilityIcons[idx % capabilityIcons.length]}</span>
                  <h3>{title}</h3>
                  <p className="section-copy">{desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="section">
        <div className="home-section">
          <div className="home-section-heading home-section-heading-row">
            <div>
              <p className="eyebrow">The team</p>
              <h2>Senior engineers across every discipline.</h2>
            </div>
            <Link className="home-text-link" to="/our-dna">
              Meet the team
            </Link>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-portrait" style={{ background: member.gradient }} aria-hidden>
                  <span className="team-initials">{member.initials}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="section-copy team-focus">{member.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="section compact-section section-soft">
        <div className="stats-row">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ INSIGHTS / BLOG ============ */}
      <section className="section">
        <div className="home-section">
          <div className="home-section-heading home-section-heading-row">
            <div>
              <p className="eyebrow">Field notes</p>
              <h2>Latest engineering insights.</h2>
            </div>
            <Link className="home-text-link" to="/insights">
              View all
            </Link>
          </div>
          <div className="home-card-grid home-card-grid-3">
            {insights.slice(0, 3).map((article, i) => (
              <article className="content-card blog-card" key={article.title}>
                <div className="blog-card-cover" style={{ background: projectGradients[i % 2] }}>
                  <span className="blog-card-type">{article.type}</span>
                </div>
                <h3>{article.title}</h3>
                <p className="section-copy">{article.summary}</p>
                {article.link ? (
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="insight-link">
                    Read article <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <span className="insight-link">Read note</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA STRIP ============ */}
      <section className="section compact-section">
        <div className="cta-banner">
          <div className="cta-banner-text">
            <p className="eyebrow">Work with us</p>
            <h2>Ready to build something that matters? Let's talk.</h2>
            <p>
              From strategic advisory to full-scale delivery, we partner with organisations that
              demand engineering excellence and reliable execution.
            </p>
          </div>
          <a
            className="button button-primary"
            href="mailto:hello@qualislabs.com?subject=Book%20a%20Consultation"
          >
            Book a Consultation
            <span className="button-icon" aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default HomePage
