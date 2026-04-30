import PageHero from '../components/PageHero'

const layers = ['hardware', 'network', 'backend', 'interface']
const ops = [
  'Kubernetes-native systems',
  'Automated CI/CD pipelines',
  'Observability-first design',
]

function DnaPage() {
  return (
    <>
      <PageHero
        eyebrow="Our DNA"
        title="Small team. High consequence work."
        intro="We operate with the density of a systems lab: small surface area, high accountability, and engineering decisions that hold up under production pressure."
      />

      <section className="section dna-grid">
        <article className="line-panel">
          <p className="eyebrow">SWAT Model</p>
          <h2>High-density execution.</h2>
          <p>We operate as a high-density engineering unit. No layers. No overhead. No dilution.</p>
        </article>
        <article className="line-panel">
          <p className="eyebrow">Full-Spectrum Thinking</p>
          <h2>Across every layer.</h2>
          <p>Most teams specialize. We integrate across layers:</p>
          <div className="chip-row">
            {layers.map((layer) => (
              <span key={layer} className="chip">
                {layer}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="section section-grid">
        <div>
          <p className="eyebrow">DevOps Discipline</p>
          <h2>Deployment is part of the system.</h2>
        </div>
        <div className="stack-md">
          {ops.map((item) => (
            <div className="line-panel ecosystem-row" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default DnaPage
