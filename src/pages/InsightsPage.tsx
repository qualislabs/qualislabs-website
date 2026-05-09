import PageHero from '../components/PageHero'
import { insights } from '../data/siteContent'

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Engineering insights from our build journey."
        intro="Short practical notes from client delivery, product development, and experiments across AI, hardware, and modern web platforms."
        layout="stacked"
      />

      <section className="section clean-content-section">
        <div className="insights-clean-grid">
        {insights.map((article) => (
          <article className="content-card insights-clean-card" key={article.title}>
            <p className="insight-type">{article.type}</p>
            <h2>{article.title}</h2>
            <p className="section-copy">{article.summary}</p>
            <span className="insight-link">Read note</span>
          </article>
        ))}
        </div>
      </section>
    </>
  )
}

export default InsightsPage
