import PageHero from '../components/PageHero'
import { capabilities } from '../data/siteContent'

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What Qualis Labs can build with you."
        intro="We combine software engineering, embedded systems expertise, and product thinking to help clients move from concept to reliable deployment."
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
