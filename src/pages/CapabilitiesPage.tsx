import PageHero from '../components/PageHero'
import { capabilities } from '../data/siteContent'

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Deploying intelligent systems into uncompromising environments."
        intro="We work where security, latency, compliance, and operating reality all matter at once. Each capability is designed as infrastructure, not presentation."
      />

      <section className="section capability-list">
        {capabilities.map((capability, index) => (
          <article className="capability-row" key={capability.title}>
            <div>
              <p className="micro-label">0{index + 1}</p>
              <h2>{capability.title}</h2>
            </div>
            <div className="stack-md">
              <p className="section-copy">{capability.description}</p>
              <ul className="detail-list">
                {capability.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

export default CapabilitiesPage
