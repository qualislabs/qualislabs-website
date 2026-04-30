import { Link } from 'react-router-dom'
import TopologyGraph from '../components/TopologyGraph'
import { operatingPrinciples, partnerCategories } from '../data/siteContent'

function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">Production infrastructure for constrained environments</p>
          <h1>Production-Ready AI & Systems Infrastructure.</h1>
          <p className="hero-subtitle">No data leaks. No latency. No compromises.</p>
          <p className="section-copy hero-body">
            Qualis Labs designs and deploys secure, high-throughput systems for organizations operating in complex environments. From confidential AI inference to core banking integrations and edge-native IoT networks, we build infrastructure that works under real-world constraints—not ideal conditions.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="mailto:hello@qualislabs.com?subject=Technical%20Discovery%20Session">
              Book a Technical Discovery Session
            </a>
            <Link className="button button-secondary" to="/projects">
              Review deployed systems
            </Link>
          </div>
        </div>
        <TopologyGraph />
      </section>

      <section className="section section-grid">
        <div>
          <p className="eyebrow">The Reality</p>
          <h2>Global Models. Local Constraints.</h2>
        </div>
        <div className="stack-lg">
          <p className="section-copy">
            Most AI systems are designed for stable cloud environments with clean data pipelines. That assumption breaks quickly.
          </p>
          <p className="section-copy">In regulated markets, systems must operate across:</p>
          <ul className="signal-list">
            <li>fragmented financial infrastructure</li>
            <li>intermittent connectivity</li>
            <li>strict data sovereignty requirements</li>
          </ul>
          <p className="section-copy emphasis">What works in a sandbox fails in production.</p>
        </div>
      </section>

      <section className="section section-grid engineering-standard">
        <div>
          <p className="eyebrow">Engineering Standard</p>
          <h2>Built From First Principles.</h2>
        </div>
        <div className="stack-lg">
          <p className="section-copy">We do not retrofit performance or security. We design for it.</p>
          <div className="principles-grid">
            {operatingPrinciples.map((item) => (
              <article className="line-panel" key={item.label}>
                <p className="micro-label">{item.label}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="section-copy">
            From backend infrastructure to interface layers, every component is intentional.
          </p>
        </div>
      </section>

      <section className="section section-grid">
        <div>
          <p className="eyebrow">Credibility</p>
          <h2>Trusted in high-stakes environments.</h2>
        </div>
        <div className="credibility-grid">
          {partnerCategories.slice(0, 3).map((category) => (
            <article className="line-panel" key={category.title}>
              <p className="micro-label">{category.title}</p>
              <p>{category.description}</p>
            </article>
          ))}
          <Link className="button button-secondary inline-button" to="/clients-partners">
            View clients & partners
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
