import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CaseStudyCard, ProjectCard } from '../components/ProjectCard'
import { ArrowRight } from '../components/Icons'
import { ease, Reveal, RevealGroup, RevealItem, WordReveal } from '../components/Motion'
import { getCaseStudy } from '../data/caseStudies'
import { designAI, industries, services, stats, teams, testimonials, toolGroups, whyMe } from '../data/home'
import { projects } from '../data/projects'

const find = (slug: string) => projects.find((p) => p.slug === slug)!
const num = (i: number) => String(i + 1).padStart(2, '0')

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="glow glow--a" />
      <div className="glow glow--b" />
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <motion.span className="pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.05 }}>
              AI-native Product Designer · Open to new projects
            </motion.span>
            <WordReveal text="Designing AI-powered experiences that drive impact." accent="AI-powered" className="display" />
            <motion.p className="lead" style={{ maxWidth: 560 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.55 }}>
              I’m Obadare Samson, a senior product designer working where design meets AI. I design intelligent, AI-powered products people trust, and use AI across my process to research, prototype and ship faster.
            </motion.p>
            <motion.div className="hero__ctas" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.7 }}>
              <Link className="btn btn--primary" to="/projects">Explore my work <ArrowRight /></Link>
              <a className="btn btn--ghost" href="#contact">Let’s talk <ArrowRight /></a>
            </motion.div>
          </div>
          <motion.div className="hero__photo" initial={{ opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.25 }}>
            <img src="/images/portrait.webp" alt="Obadare Samson" width={940} height={1160} fetchPriority="high" />
            <motion.div className="float-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.9 }}>
              <strong>Designing for AI &amp; with AI</strong>
              <span>20+ products shipped</span>
            </motion.div>
          </motion.div>
        </div>
        <RevealGroup className="stats" gap={0.1}>
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="stat__value">{s.value.replace('+', '')}<em>+</em></div>
              <div className="stat__label">{s.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

function Marquee() {
  const row = [...industries, ...industries]
  return (
    <div className="marquee" aria-label={`Industries: ${industries.join(', ')}`}>
      <div className="marquee__track" aria-hidden="true">
        {row.map((t, i) => <span className={`marquee__item ${i >= industries.length ? 'is-dup' : ''}`} key={i}>{t}</span>)}
      </div>
    </div>
  )
}

function Teams() {
  return (
    <Reveal className="container teams">
      <p className="teams__label">Teams I’ve designed with</p>
      <ul className="teams__list">
        {teams.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </Reveal>
  )
}

function DesignAI() {
  return (
    <section className="section" aria-labelledby="ai-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">Design × AI</span>
          <h2 id="ai-title" className="h2">Designing for <span className="accent">AI.</span><br />Designing with <span className="accent">AI.</span></h2>
          <p className="lead">AI is changing what products can do and how they’re made. I work on both sides: crafting AI-powered experiences people understand and trust, and using AI to go from insight to prototype faster.</p>
        </Reveal>
        <RevealGroup className="grid-2">
          {designAI.map((c) => (
            <RevealItem key={c.tag} className="card card--pad card--hover ai-card">
              <div className="ai-card__top">
                <span className="ai-card__icon" aria-hidden="true">✦</span>
                <span className="eyebrow">{c.tag}</span>
              </div>
              <h3 className="h3">{c.title}</h3>
              <p className="body">{c.text}</p>
              <ul className="check-list">{c.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

function SelectedWork() {
  const cs = [
    { slug: 'certracker', p: find('certracker-app') },
    { slug: 'paypetal', p: find('paypetal-app') },
  ].map(({ slug, p }) => ({ slug, card: { category: getCaseStudy(slug)!.card.category, title: p.title, description: p.description, image: p.image } }))
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div style={{ display: 'grid', gap: 16 }}>
            <span className="eyebrow">Selected work</span>
            <h2 id="work-title" className="h2">Products I’ve helped bring to life</h2>
          </div>
          <Link className="btn btn--ghost" to="/projects">View all projects <ArrowRight /></Link>
        </Reveal>
        <RevealGroup className="grid-2">
          {cs.map((c) => (
            <RevealItem key={c.slug}>
              <CaseStudyCard slug={c.slug} content={c.card} />
            </RevealItem>
          ))}
          <RevealItem><ProjectCard project={find('paypetal-admin')} showDesc /></RevealItem>
          <RevealItem><ProjectCard project={find('certracker-web')} showDesc /></RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}

function WhyMe() {
  return (
    <section id="about" className="section" aria-labelledby="why-title">
      <div className="container why">
        <Reveal className="why__intro">
          <span className="eyebrow">Why work with me</span>
          <h2 id="why-title" className="h2">Design that works for your users and your business.</h2>
          <p className="lead">I don’t just make interfaces look good. I craft experiences that solve real problems, support your goals and make every pixel earn its place.</p>
          <a className="btn btn--primary" href="#contact">Let’s work together <ArrowRight /></a>
        </Reveal>
        <RevealGroup className="grid-2">
          {whyMe.map((w, i) => (
            <RevealItem key={w.title} className="card card--pad card--hover info-card">
              <span className="num">{num(i)}</span>
              <h3 className="h4">{w.title}</h3>
              <p className="body">{w.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Services</span>
          <h2 id="services-title" className="h2">End-to-end product design</h2>
          <p className="lead">Whether you’re building from scratch or refining what you have, I bring the research, design and strategy to take it from idea to launch.</p>
        </Reveal>
        <RevealGroup className="grid-3" gap={0.06}>
          {services.map((s, i) => (
            <RevealItem key={s.title} className="card card--pad card--hover info-card">
              <span className="num">{num(i)}</span>
              <h3 className="h4">{s.title}</h3>
              <p className="body">{s.text}</p>
              <p className="tags">{s.tags}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

function Tools() {
  return (
    <section id="toolkit" className="section" aria-labelledby="tools-title">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Toolkit</span>
          <h2 id="tools-title" className="h2">The stack behind the work</h2>
          <p className="lead">A modern, AI-augmented toolkit covering the full product cycle: research, design, prototyping, handoff and build.</p>
        </Reveal>
        <div>
          {toolGroups.map((g) => (
            <Reveal key={g.title} className="tool-group">
              <div style={{ display: 'grid', gap: 8, alignContent: 'start' }}>
                <h3 className="h4">{g.title}</h3>
                <p className="small">{g.text}</p>
              </div>
              <ul className="tool-list">
                {g.tools.map((t) => (
                  <li key={t.name} className="tool">
                    {t.logo ? <img src={t.logo} alt="" width={28} height={28} loading="lazy" /> : <span className="tool__mono" aria-hidden="true">{t.name[0]}</span>}
                    {t.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="section" aria-labelledby="t-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">Kind words</span>
          <h2 id="t-title" className="h2">What clients and teams say</h2>
        </Reveal>
        <RevealGroup className="grid-3">
          {testimonials.map((t) => (
            <RevealItem as="figure" key={t.name} className="card card--pad card--hover quote-card">
              <blockquote>{t.quote}</blockquote>
              <figcaption className="person">
                <img src={t.avatar} alt="" width={52} height={52} loading="lazy" />
                <div><strong>{t.name}</strong><span>{t.role}</span></div>
              </figcaption>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Teams />
      <DesignAI />
      <SelectedWork />
      <WhyMe />
      <Services />
      <Tools />
      <Testimonials />
    </>
  )
}
