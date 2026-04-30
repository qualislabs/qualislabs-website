import type { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: string
  intro: string
  aside?: ReactNode
}

function PageHero({ eyebrow, title, intro, aside }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      <div className="hero-aside">
        <p className="section-copy">{intro}</p>
        {aside ? <div className="hero-aside-block">{aside}</div> : null}
      </div>
    </section>
  )
}

export default PageHero
