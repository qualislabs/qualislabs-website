import PageHero from '../components/PageHero'
import { insights } from '../data/siteContent'

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Engineering perspectives from the field."
        intro="Technical insights and thought leadership drawn from client engagements, product development, and applied research across AI, hardware, and modern platforms."
        layout="stacked"
      />

      <section className="section clean-content-section">
        <div className="insights-clean-grid">
        {insights.map((article) => (
          <article className="content-card insights-clean-card" key={article.title}>
            <p className="insight-type">{article.type}</p>
            <h2>{article.title}</h2>
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
      </section>
    </>
  )
}

export default InsightsPage
