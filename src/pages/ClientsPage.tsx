import PageHero from '../components/PageHero'
import { partnerCategories } from '../data/siteContent'

const ecosystem = [
  'Cloud and hosting platforms',
  'Hardware and IoT toolchains',
  'Open-source engineering ecosystems',
]

function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Partners"
        title="Teams we build with and sectors we support."
        intro="We work with founders, businesses, and institutions that need dependable engineering partners for both client-facing products and internal systems."
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
          <h2>Technology stack and collaboration network.</h2>
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
