import PageHero from '../components/PageHero'
import { projects } from '../data/siteContent'

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Products and platforms we've built and operate."
        intro="A portfolio of our applied engineering work across energy, mobility, and intelligent platform design — each delivered to production."
        layout="stacked"
      />

      <section className="section clean-content-section">
        <div className="project-clean-grid">
        {projects.map((project) => (
          <article className="content-card project-clean-card" key={project.name}>
            <div className="project-clean-top">
              <div>
                <p className="eyebrow">{project.tag}</p>
                <h2>{project.headline}</h2>
              </div>
              <p className="project-name">{project.name}</p>
            </div>
            <div className="stack-md">
              <p className="section-copy">{project.description}</p>
              <div className="stack-md">
                <div>
                  <p className="micro-label">What makes it real</p>
                  <ul className="detail-list">
                    {project.markers.map((marker) => (
                      <li key={marker}>{marker}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="micro-label">Impact</p>
                  <p className="impact-copy">{project.impact}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
        </div>
      </section>
    </>
  )
}

export default ProjectsPage
