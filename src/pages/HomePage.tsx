import { Link } from 'react-router-dom'
import { capabilities, operatingPrinciples, projects } from '../data/siteContent'

function HomePage() {
  return (
    <>
      <section className="hero hero-landing section">
        <div className="hero-landing-inner">
          <p className="hero-eyebrow">
            <svg className="hero-eyebrow-icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="currentColor"
                d="M12 2l1.09 3.26L16 4l-2.18 2.18L16 8l-2.91-1.09L12 10l-1.09-2.91L8 8l2.18-2.18L8 4l2.91 1.26L12 2zm0 12l1.09 3.26L16 14l-2.18 2.18L16 18l-2.91-1.09L12 20l-1.09-2.91L8 18l2.18-2.18L8 14l2.91 1.26L12 14z"
              />
            </svg>
            Qualis Labs — Research Lab
          </p>
          <h1 className="hero-title">
            <span className="hero-title-line">Private. Small.</span>
            <span className="hero-title-line hero-title-accent">Frugal. Sustainable.</span>
          </h1>
          <p className="hero-subtitle home-hero-intro">
            AI systems built for real devices, local teams, and constrained environments where latency,
            reliability, and compliance matter at the same time.
          </p>
          <div className="button-row hero-landing-ctas">
            <a
              className="button button-primary"
              href="mailto:hello@qualislabs.com?subject=Demo%20request"
            >
              Get a Demo
              <span className="button-icon" aria-hidden>
                →
              </span>
            </a>
            <Link className="home-text-link" to="/insights">
              Read the Research
            </Link>
          </div>
        </div>
      </section>

      <section className="section clean-content-section home-section">
        <div className="home-section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Infrastructure for real operating conditions.</h2>
        </div>
        <div className="home-card-grid home-card-grid-3">
          {capabilities.slice(0, 3).map((capability) => (
            <article className="content-card" key={capability.title}>
              <p className="micro-label">Capability</p>
              <h3>{capability.title}</h3>
              <p className="section-copy">{capability.details[0]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section clean-content-section home-section">
        <div className="home-section-heading">
          <p className="eyebrow">Why we are different</p>
          <h2>Built from first principles, not retrofits.</h2>
        </div>
        <div className="home-card-grid home-card-grid-3">
          {operatingPrinciples.map((item) => (
            <article className="content-card" key={item.label}>
              <p className="micro-label">{item.label}</p>
              <p className="section-copy">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section clean-content-section home-section">
        <div className="home-section-heading home-section-heading-row">
          <div>
            <p className="eyebrow">Proof</p>
            <h2>Selected systems in production.</h2>
          </div>
          <Link className="home-text-link" to="/projects">
            View all projects
          </Link>
        </div>
        <div className="home-card-grid home-card-grid-2">
          {projects.slice(0, 2).map((project) => (
            <article className="content-card" key={project.name}>
              <p className="eyebrow">{project.tag}</p>
              <h3>{project.headline}</h3>
              <p className="section-copy">{project.impact}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
