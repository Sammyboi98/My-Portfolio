import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from '../components/Icons'
import { ease, Reveal, RevealGroup, RevealItem, WordReveal } from '../components/Motion'
import { usePreview } from '../components/Preview'
import { getCaseStudy, type CaseStudy as CS, type Shot } from '../data/caseStudies'

const num = (i: number) => String(i + 1).padStart(2, '0')

function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id)
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [items])
  return (
    <nav className="section-nav" aria-label="On this page">
      <div className="container section-nav__inner">
        {items.map((i) => (
          <a key={i.id} href={`#${i.id}`} className={active === i.id ? 'is-active' : ''} aria-current={active === i.id ? 'true' : undefined}>
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

function Head({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <Reveal className={`section-head ${center ? 'section-head--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2">{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </Reveal>
  )
}

function ShotFigure({ shot, hero, gallery, index }: { shot: Shot; hero?: boolean; gallery: Shot[]; index: number }) {
  const preview = usePreview()
  return (
    <figure className="shot" style={{ margin: 0 }}>
      <button
        type="button"
        className={`shot__frame ${hero ? 'shot__frame--hero' : 'shot__frame--grid'}`}
        onClick={() => preview({ title: shot.caption.split(':')[0], images: gallery.map((g) => ({ src: g.src, caption: g.caption })) }, index)}
        aria-label={`Enlarge: ${shot.caption}`}
      >
        <img src={shot.src} alt={shot.caption} loading="lazy" decoding="async" />
      </button>
      <figcaption>{shot.caption}</figcaption>
    </figure>
  )
}

function Cards({ items, cols = 'grid-3', tags }: { items: { title: string; text: string; tags?: string }[]; cols?: string; tags?: boolean }) {
  return (
    <RevealGroup className={cols} gap={0.07}>
      {items.map((it, i) => (
        <RevealItem key={it.title} className="card card--pad card--hover info-card">
          <span className="num">{num(i)}</span>
          <h3 className="h4">{it.title}</h3>
          <p className="body">{it.text}</p>
          {tags && it.tags && <p className="tags">{it.tags}</p>}
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const cs = getCaseStudy(slug)
  const preview = usePreview()
  if (!cs) return <Navigate to="/case-studies" replace />
  const next = getCaseStudy(cs.next)!
  const gallery: Shot[] = [cs.product.hero, ...cs.product.grid]

  const nav = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'users', label: 'Users' },
    { id: 'process', label: 'Process' },
    { id: 'decisions', label: 'Decisions' },
    { id: 'product', label: 'Product' },
    ...(cs.magnet ? [{ id: 'magnetready', label: 'MagnetReady' }] : []),
    ...(cs.credit ? [{ id: 'credit', label: 'Credit (BNPL)' }] : []),
    ...(cs.highlights ? [{ id: 'highlights', label: cs.highlights.eyebrow }] : []),
    { id: 'learnings', label: 'Learnings' },
  ]

  return (
    <article>
      <header className="cs-hero">
        <div className="glow glow--a" />
        <div className="glow glow--b" />
        <div className="container">
          <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease }}>
            <Link to="/case-studies" className="back-link"><ArrowLeft size={16} /> All case studies</Link>
          </motion.div>
          <div className="cs-hero__copy">
            <motion.span className="pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>{cs.eyebrow}</motion.span>
            <WordReveal text={cs.title} accent={cs.highlight} className="display" />
            <motion.p className="lead" style={{ maxWidth: 680 }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.5 }}>{cs.intro}</motion.p>
          </div>
          <motion.dl className="meta" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.65 }}>
            {cs.meta.map((m) => (
              <div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd></div>
            ))}
          </motion.dl>
        </div>
      </header>

      <SectionNav items={nav} />

      <div className="container">
        <motion.div className="cover" initial={{ opacity: 0, y: 32, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, ease, delay: 0.3 }}>
          <img src={cs.cover.src} alt={`${cs.title} cover`} width={1200} height={700} fetchPriority="high" />
        </motion.div>
      </div>

      <section id="overview" className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Overview</span>
            <h2 className="h2" style={{ marginTop: 16 }}>{cs.overview.heading}</h2>
          </Reveal>
          <Reveal className="split__body" delay={0.1}>
            {cs.overview.paragraphs.map((p) => <p key={p} className="lead">{p}</p>)}
          </Reveal>
        </div>
        <div className="container" style={{ marginTop: 'clamp(56px, 7vw, 88px)' }}>
          <Reveal><span className="eyebrow">{cs.glance.eyebrow}</span></Reveal>
          <RevealGroup className="grid-4 mt-24" gap={0.08}>
            {cs.glance.stats.map((s) => (
              <RevealItem key={s.label} className="card card--pad stat-card" >
                <div className="h2">{s.value}</div>
                <p className="small">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="source">{cs.glance.source}</p>
        </div>
      </section>

      <section id="problem" className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">The problem</span>
            <h2 className="h2" style={{ marginTop: 16 }}>{cs.problem.heading}</h2>
          </Reveal>
          <RevealGroup className="pain">
            {cs.problem.points.map((p, i) => (
              <RevealItem key={p.title} className="pain__item">
                <span className="num">{num(i)}</span>
                <h3 className="h4">{p.title}</h3>
                <p className="body">{p.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="users" className="section">
        <div className="container">
          <Head eyebrow="Who it’s for" title={cs.users.heading} />
          <Cards items={cs.users.items} tags />
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <Head eyebrow="My role & process" title={cs.role.heading} intro={cs.role.intro} />
          <Cards items={cs.role.steps} cols="grid-4" />
        </div>
      </section>

      <section id="decisions" className="section">
        <div className="container">
          <Head eyebrow="Key design decisions" title="Four decisions that shaped the product" />
          <Cards items={cs.decisions} cols="grid-2" />
        </div>
      </section>

      <section id="product" className="section">
        <div className="container">
          <Head eyebrow="The product" title={cs.product.heading} />
          <Reveal><ShotFigure shot={cs.product.hero} hero gallery={gallery} index={0} /></Reveal>
          <RevealGroup className="grid-2 mt-24" gap={0.08}>
            {cs.product.grid.map((s, i) => (
              <RevealItem key={s.src}><ShotFigure shot={s} gallery={gallery} index={i + 1} /></RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {cs.magnet && <Magnet m={cs.magnet} />}

      {cs.credit && (
        <section id="credit" className="section">
          <div className="container">
            <Reveal className="section-head">
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <span className="eyebrow">{cs.credit.eyebrow}</span>
                <span className="badge">{cs.credit.badge}</span>
              </div>
              <h2 className="h2">{cs.credit.heading}</h2>
              <p className="lead">{cs.credit.intro}</p>
            </Reveal>
            <RevealGroup className="credit-screens" gap={0.1}>
              {cs.credit.screens.map((s, i) => (
                <RevealItem as="figure" key={s.src}>
                  <button type="button" onClick={() => preview({ title: 'PayPetal Credit', images: cs.credit!.screens }, i)} aria-label={`Enlarge: ${s.caption}`}>
                    <img src={s.src} alt={s.caption} loading="lazy" />
                  </button>
                  <figcaption>{s.caption}</figcaption>
                </RevealItem>
              ))}
            </RevealGroup>
            <div style={{ marginTop: 24 }}><Cards items={cs.credit.points} cols="grid-2" /></div>
            <p className="source">{cs.credit.note}</p>
          </div>
        </section>
      )}

      {cs.highlights && (
        <section id="highlights" className="section">
          <div className="container">
            <Head eyebrow={cs.highlights.eyebrow} title={cs.highlights.heading} />
            <RevealGroup className="grid-3" gap={0.06}>
              {cs.highlights.items.map((h) => (
                <RevealItem key={h.title} className="card card--pad card--hover info-card">
                  <span className="ai-card__icon" aria-hidden="true" style={{ width: 40, height: 40, fontSize: 16 }}>★</span>
                  <h3 className="h4" style={{ marginTop: 8 }}>{h.title}</h3>
                  <p className="small">{h.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
            <p className="source">{cs.highlights.source}</p>
          </div>
        </section>
      )}

      {cs.testimonial && (
        <section className="section">
          <Reveal className="container testimonial">
            <span className="mark" aria-hidden="true">“</span>
            <blockquote>{cs.testimonial.quote}</blockquote>
            <div className="person">
              <img src={cs.testimonial.avatar} alt="" width={56} height={56} />
              <div style={{ textAlign: 'left' }}><strong>{cs.testimonial.name}</strong><span>{cs.testimonial.role}</span></div>
            </div>
          </Reveal>
        </section>
      )}

      <section id="learnings" className="section">
        <div className="container">
          <Head eyebrow="What I learned" title="Lessons I carry into every project" />
          <Cards items={cs.learnings} />
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <Reveal>
            <Link to={`/case-studies/${next.slug}`} className="card card--hover next-card">
              <div style={{ display: 'grid', gap: 18, justifyItems: 'start' }}>
                <span className="eyebrow">Next case study</span>
                <h2 className="h2">{next.card.title}</h2>
                <p className="body">{next.card.description}</p>
                <span className="btn btn--primary btn--sm">Read case study <ArrowRight /></span>
              </div>
              <div className="next-card__media"><img src={next.card.image} alt="" loading="lazy" /></div>
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  )
}

function Magnet({ m }: { m: NonNullable<CS['magnet']> }) {
  const preview = usePreview()
  return (
    <section id="magnetready" className="section">
      <div className="container">
        <Head eyebrow={m.eyebrow} title={m.heading} intro={m.intro} />
        <div className="magnet">
          <Reveal>
            <button type="button" className="shot__frame shot__frame--grid" style={{ width: '100%', aspectRatio: '620 / 422' }} onClick={() => preview({ title: 'MagnetReady', images: [{ src: m.image, caption: 'MagnetReady Program Director dashboard' }] })} aria-label="Enlarge MagnetReady dashboard">
              <img src={m.image} alt="MagnetReady Program Director dashboard" loading="lazy" />
            </button>
          </Reveal>
          <Reveal delay={0.1} className="split__body">
            <h3 className="h3">{m.subheading}</h3>
            <p className="body">{m.subtext}</p>
            <ul className="check-list" style={{ borderTop: 0, paddingTop: 0 }}>{m.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <div className="grid-2" style={{ gap: 16 }}>
              {m.stats.map((s) => (
                <div key={s.value} className="card card--pad stat-card" style={{ padding: 20 }}>
                  <div className="h3 accent">{s.value}</div>
                  <p className="small">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <p className="source">{m.source}</p>
      </div>
    </section>
  )
}
