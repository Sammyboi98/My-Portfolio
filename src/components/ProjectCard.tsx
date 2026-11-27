import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ArrowUpRight, Expand, ArrowRight } from './Icons'
import { usePreview } from './Preview'

type CardContent = { title: string; category: string; description?: string; image: string }

function Inner({ c, badge, icon, showDesc }: { c: CardContent; badge?: React.ReactNode; icon: React.ReactNode; showDesc?: boolean }) {
  return (
    <>
      <div className="project-card__media">
        <img src={c.image} alt="" loading="lazy" decoding="async" width={1176} height={800} />
      </div>
      {badge}
      <div className="project-card__body">
        <span className="project-card__cat">{c.category}</span>
        <h3 className="project-card__title">{c.title}</h3>
        {showDesc && c.description && <p className="project-card__desc">{c.description}</p>}
        <span className="project-card__arrow" aria-hidden="true">{icon}</span>
      </div>
    </>
  )
}

/**
 * Project card. Opens the live website when there is one;
 * otherwise opens an overlay preview of the mockups.
 */
export function ProjectCard({ project, showDesc }: { project: Project; showDesc?: boolean }) {
  const preview = usePreview()

  if (project.liveUrl) {
    return (
      <a className="card card--hover project-card" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: visit live website (opens in a new tab)`}>
        <Inner c={project} showDesc={showDesc} icon={<ArrowUpRight />} badge={<span className="project-card__badge"><i />Live site</span>} />
      </a>
    )
  }

  if (project.stores) {
    const images = project.gallery?.length ? project.gallery : [{ src: project.image, caption: project.title }]
    return (
      <button
        type="button"
        className="card card--hover project-card"
        aria-haspopup="dialog"
        aria-label={`${project.title}: get the app on iOS or Android`}
        onClick={() => preview({ title: project.title, category: project.category, images, caseStudy: project.caseStudy, stores: project.stores })}
      >
        <Inner c={project} showDesc={showDesc} icon={<ArrowUpRight />} badge={<span className="project-card__badge"><i />iOS &amp; Android</span>} />
      </button>
    )
  }

  const images = project.gallery?.length ? project.gallery : [{ src: project.image, caption: project.title }]
  return (
    <button
      type="button"
      className="card card--hover project-card"
      aria-haspopup="dialog"
      aria-label={`${project.title}: open preview`}
      onClick={() => preview({ title: project.title, category: project.category, images, caseStudy: project.caseStudy })}
    >
      <Inner c={project} showDesc={showDesc} icon={<Expand />} badge={<span className="project-card__badge">Preview</span>} />
    </button>
  )
}

/** Case-study card: always links to the case study page. */
export function CaseStudyCard({ slug, content }: { slug: string; content: CardContent }) {
  return (
    <Link className="card card--hover project-card" to={`/case-studies/${slug}`} aria-label={`Read case study: ${content.title}`}>
      <Inner c={content} showDesc icon={<ArrowRight />} />
    </Link>
  )
}
