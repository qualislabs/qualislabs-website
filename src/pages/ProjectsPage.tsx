import PageHero from '../components/PageHero'
import { projects } from '../data/siteContent'

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Systems deployed in the real world."
        intro="We do not build demos. Every system is designed for operational deployment and shaped around the actual failure modes of the environment it enters."
      />

      <section className="section project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-heading">
              <div>
                <p className="eyebrow">{project.tag}</p>
                <h2>{project.headline}</h2>
              </div>
              <p className="project-name">{project.name}</p>
            </div>

            <div className="project-grid">
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
      </section>

      <section className="section philosophy-block">
        <p className="eyebrow">Projects Philosophy</p>
        <h2>We do not build demos.</h2>
        <p className="section-copy">Every system is designed for operational deployment.</p>
      </section>
    </>
  )
}

export default ProjectsPage
