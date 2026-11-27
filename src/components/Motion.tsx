import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

/** Motion system: one easing curve and a small set of durations, used everywhere. */
export const ease = [0.16, 1, 0.3, 1] as const
export const dur = { fast: 0.16, base: 0.28, slow: 0.6, reveal: 0.7 }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: dur.reveal, ease } },
}

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

type RevealProps = { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'section' | 'li' | 'figure' }

/** Fades and lifts content in once, when it scrolls into view. */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px 0px' }}
      variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: dur.reveal, ease, delay } } }}
    >
      {children}
    </M>
  )
}

/** A grid/list whose direct <RevealItem> children appear one after another. */
export function RevealGroup({ children, className, gap = 0.08, as = 'div' }: { children: ReactNode; className?: string; gap?: number; as?: 'div' | 'ul' }) {
  const M = motion[as]
  return (
    <M className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px 0px' }} variants={stagger(gap)}>
      {children}
    </M>
  )
}

export function RevealItem({ children, className, as = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'li' | 'figure' | 'article' }) {
  const M = motion[as]
  return (
    <M className={className} variants={fadeUp}>
      {children}
    </M>
  )
}

/** Headline that rises in word by word, once, on load. */
export function WordReveal({ text, accent, className, as = 'h1', delay = 0.1 }: { text: string; accent?: string; className?: string; as?: 'h1' | 'h2'; delay?: number }) {
  const M = motion[as]
  const words = text.split(' ')
  const accentWords = new Set((accent ?? '').split(' ').filter(Boolean))
  return (
    <M className={className} initial="hidden" animate="show" variants={stagger(0.06, delay)} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', paddingBottom: '0.08em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            className={accentWords.has(w.replace(/[.,:]$/, '')) ? 'accent' : undefined}
            variants={{ hidden: { y: '105%' }, show: { y: 0, transition: { duration: dur.slow + 0.2, ease } } }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </M>
  )
}
