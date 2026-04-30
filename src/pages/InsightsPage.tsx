import PageHero from '../components/PageHero'
import { insights } from '../data/siteContent'

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Technical briefings and field notes."
        intro="Not blogs. These are operating memos for teams deploying intelligence where bandwidth, compliance, and system reliability shape every architectural decision."
      />

      <section className="section insights-grid">
        {insights.map((article) => (
          <article className="insight-card" key={article.title}>
            <p className="insight-type">{article.type}</p>
            <h2>{article.title}</h2>
            <p className="section-copy">{article.summary}</p>
            <span className="insight-link">Read briefing</span>
          </article>
        ))}
      </section>
    </>
  )
}

export default InsightsPage
