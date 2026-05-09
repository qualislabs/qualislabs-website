import PageHero from '../components/PageHero'
import { capabilities } from '../data/siteContent'

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Deploying intelligent systems into uncompromising environments."
        intro="We work where security, latency, compliance, and operating reality all matter at once. Each capability is designed as infrastructure, not presentation."
        layout="stacked"
      />

      <section className="section clean-content-section">
        <div className="capability-clean-grid">
        {capabilities.map((capability, index) => (
          <article className="content-card capability-clean-card" key={capability.title}>
            <p className="micro-label">0{index + 1} Capability</p>
            <h2>{capability.title}</h2>
            <p className="section-copy">{capability.description}</p>
            <div className="stack-md">
              <p className="micro-label">Key outcomes</p>
              <ul className="detail-list">
                {capability.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        </div>
      </section>
    </>
  )
}

export default CapabilitiesPage
