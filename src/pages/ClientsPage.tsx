import PageHero from '../components/PageHero'
import { partnerCategories } from '../data/siteContent'

const ecosystem = [
  'Cloud providers',
  'Hardware vendors',
  'Open-source ecosystems',
]

function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Partners"
        title="Trusted in high-stakes environments."
        intro="We collaborate with organizations operating where failure is not an option—financial institutions, infrastructure providers, and emerging technology platforms."
      />

      <section className="section partner-grid">
        {partnerCategories.map((category) => (
          <article key={category.title} className="line-panel partner-card">
            <p className="micro-label">{category.title}</p>
            <p>{category.description}</p>
            <ul className="detail-list compact-list">
              {category.references.map((reference) => (
                <li key={reference}>{reference}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section section-grid partner-ecosystem">
        <div>
          <p className="eyebrow">Partner Ecosystem</p>
          <h2>Built on a carefully selected stack.</h2>
        </div>
        <div className="stack-md">
          {ecosystem.map((item) => (
            <div className="line-panel ecosystem-row" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ClientsPage
