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
        title="Mechatronics expertise. Disciplined engineering culture."
        intro="We are a specialist engineering consultancy with deep expertise across software, electronics, and intelligent product development — delivering with the rigour of seasoned professionals."
        layout="stacked"
      />

      <section className="section clean-content-section">
        <div className="dna-principles-grid">
        <article className="content-card">
          <p className="eyebrow">SWAT Model</p>
          <h2>High-density execution.</h2>
          <p className="section-copy">
            We operate as a focused, high-impact engineering practice. No layers. No overhead. No dilution.
          </p>
        </article>
        <article className="content-card">
          <p className="eyebrow">Full-Spectrum Thinking</p>
          <h2>Across every layer.</h2>
          <p className="section-copy">Hardware to interface, designed as one system.</p>
          <div className="chip-row">
            {layers.map((layer) => (
              <span key={layer} className="chip">
                {layer}
              </span>
            ))}
          </div>
        </article>
        <article className="content-card">
          <p className="eyebrow">DevOps Discipline</p>
          <h2>Deployment is part of the system.</h2>
          <p className="section-copy">Delivery workflows are engineered as core infrastructure.</p>
          <div className="stack-md">
            {ops.map((item) => (
              <div className="dna-op-row" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </article>
        </div>
      </section>
    </>
  )
}

export default DnaPage
