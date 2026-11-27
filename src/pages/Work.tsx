import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import { ease, Reveal, RevealGroup, RevealItem } from '../components/Motion'
import { CaseStudyCard, ProjectCard } from '../components/ProjectCard'
import { caseStudies } from '../data/caseStudies'
import { landingPages, projects } from '../data/projects'

type Kind = 'all' | 'landing' | 'case'

const copy: Record<Kind, { eyebrow: string; title: string; accent: string; text: string }> = {
  all: {
    eyebrow: 'Portfolio',
    title: 'Work that ships and moves the',
    accent: 'needle.',
    text: 'A curated selection of products I’ve designed across AI, fintech, healthtech, edtech and logistics: websites, mobile apps, customer portals and admin dashboards.',
  },
  landing: {
    eyebrow: 'Landing pages',
    title: 'Landing pages built to',
    accent: 'convert.',
    text: 'Marketing sites and landing pages that tell a clear story, earn trust fast and turn visitors into customers.',
  },
  case: {
    eyebrow: 'Case studies',
    title: 'The thinking behind the',
    accent: 'pixels.',
    text: 'Deep dives into real products, from the problem and research to AI-assisted exploration, design decisions and outcomes.',
  },
}

const covers = [
  { title: 'The problem', text: 'The context, the users and the business goal behind the work.' },
  { title: 'Research & insight', text: 'What we learned from users and data, and how it shaped direction.' },
  { title: 'Design & iteration', text: 'Explorations, AI-assisted prototyping, testing and key decisions.' },
  { title: 'Outcome & impact', text: 'What shipped, what changed and what I’d do next.' },
]

function Tabs() {
  const tabs = [
    { to: '/projects', label: 'All work', count: projects.length },
    { to: '/landing-pages', label: 'Landing pages', count: landingPages.length },
    { to: '/case-studies', label: 'Case studies', count: caseStudies.length },
  ]
  return (
    <nav className="tabs" aria-label="Work categories">
      {tabs.map((t) => (
        <NavLink key={t.to} to={t.to} end className={({ isActive }) => `tab ${isActive ? 'is-active' : ''}`}>
          {({ isActive }) => (
            <>
              {isActive && <motion.span layoutId="tab-bg" className="tab__bg" transition={{ duration: 0.45, ease }} />}
              {t.label}
              <span className="tab__count">{t.count}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

function MoreCard() {
  return (
    <div className="card more-card" style={{ height: '100%' }}>
      <span className="sparkle" aria-hidden="true">✦</span>
      <h3 className="h2" style={{ fontSize: 'clamp(28px, 3vw, 36px)' }}>Want to see more?</h3>
      <p className="body">Get in touch for a walkthrough of my process, including work under NDA that isn’t shown here.</p>
      <a className="btn btn--ghost" href="#contact" style={{ justifySelf: 'start' }}>Let’s talk <ArrowRight /></a>
    </div>
  )
}

export default function Work({ kind }: { kind: Kind }) {
  const c = copy[kind]
  return (
    <>
      <header className="page-head">
        <div className="glow glow--a" />
        <div className="container">
          <div className="page-head__copy">
            <motion.span className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>{c.eyebrow}</motion.span>
            <motion.h1 className="h1" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.08 }}>
              {c.title} <span className="accent">{c.accent}</span>
            </motion.h1>
            <motion.p className="lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.18 }}>{c.text}</motion.p>
          </div>
          <Tabs />
        </div>
      </header>

      {kind === 'case' && (
        <section className="section--tight">
          <div className="container">
            <Reveal><h2 className="h4" style={{ marginBottom: 24 }}>What each case study covers</h2></Reveal>
            <RevealGroup className="grid-4">
              {covers.map((x, i) => (
                <RevealItem key={x.title} className="card card--pad info-card">
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h4">{x.title}</h3>
                  <p className="small">{x.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <section className="section--tight" style={{ paddingTop: kind === 'case' ? 0 : undefined }}>
        <div className="container">
          <RevealGroup className="grid-2" gap={0.06} key={kind}>
            {kind === 'case'
              ? caseStudies.map((cs) => (
                  <RevealItem key={cs.slug}><CaseStudyCard slug={cs.slug} content={cs.card} /></RevealItem>
                ))
              : (kind === 'all' ? projects : landingPages).map((p) => (
                  <RevealItem key={p.slug}><ProjectCard project={p} /></RevealItem>
                ))}
            {kind !== 'case' && (
              <RevealItem><MoreCard /></RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>
    </>
  )
}
