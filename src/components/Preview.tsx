import { AnimatePresence, motion } from 'framer-motion'
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Chevron, Close } from './Icons'
import { ease } from './Motion'

export type PreviewItem = {
  title: string
  category?: string
  images: { src: string; caption?: string }[]
  caseStudy?: string
  /** When present, the overlay becomes an app-store chooser. */
  stores?: { ios: string; android: string }
}

const Ctx = createContext<(item: PreviewItem, start?: number) => void>(() => {})
export const usePreview = () => useContext(Ctx)

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<PreviewItem | null>(null)
  const [index, setIndex] = useState(0)
  const opener = useRef<HTMLElement | null>(null)

  const open = useCallback((next: PreviewItem, start = 0) => {
    opener.current = document.activeElement as HTMLElement
    setIndex(start)
    setItem(next)
  }, [])

  const close = useCallback(() => {
    setItem(null)
    opener.current?.focus()
  }, [])

  return (
    <Ctx.Provider value={open}>
      {children}
      <AnimatePresence>{item && <Overlay key="overlay" item={item} index={index} setIndex={setIndex} onClose={close} />}</AnimatePresence>
    </Ctx.Provider>
  )
}

function Overlay({ item, index, setIndex, onClose }: { item: PreviewItem; index: number; setIndex: (n: number) => void; onClose: () => void }) {
  const panel = useRef<HTMLDivElement>(null)
  const count = item.images.length
  const go = useCallback((d: number) => setIndex((index + d + count) % count), [index, count, setIndex])
  const current = item.images[index]

  useEffect(() => {
    document.body.classList.add('no-scroll')
    panel.current?.querySelector<HTMLElement>('.overlay__close')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && count > 1) go(1)
      if (e.key === 'ArrowLeft' && count > 1) go(-1)
      if (e.key === 'Tab' && panel.current) {
        // keep focus inside the dialog
        const f = panel.current.querySelectorAll<HTMLElement>('button, a[href]')
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('no-scroll')
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, go, count])

  return (
    <motion.div className="overlay" role="dialog" aria-modal="true" aria-label={`${item.title} preview`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.24 }}>
      <div className="overlay__scrim" onClick={onClose} />
      <motion.div ref={panel} className="overlay__panel" initial={{ opacity: 0, y: 28, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.45, ease }}>
        <div className="overlay__head">
          <div className="overlay__title">
            {item.category && <span className="eyebrow">{item.category}</span>}
            <h2 className="h4">{item.title}</h2>
          </div>
          <button className="overlay__close" onClick={onClose} aria-label="Close preview">
            <Close />
          </button>
        </div>
        {item.stores && <StoreChooser stores={item.stores} title={item.title} />}
        <div className="overlay__stage">
          <div className="overlay__image">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={current.src}
                src={current.src}
                alt={current.caption ?? item.title}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease }}
              />
            </AnimatePresence>
            {count > 1 && (
            <>
              <button className="overlay__nav overlay__nav--prev" onClick={() => go(-1)} aria-label="Previous image">
                <Chevron dir="left" />
              </button>
              <button className="overlay__nav overlay__nav--next" onClick={() => go(1)} aria-label="Next image">
                <Chevron />
              </button>
            </>
          )}
          </div>
          <div className="overlay__foot">
            <p className="small" aria-live="polite">
              {current.caption}
              {count > 1 && <span style={{ color: 'var(--muted-2)' }}> · {index + 1} of {count}</span>}
            </p>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
              {count > 1 && (
                <div className="thumbs">
                  {item.images.map((im, i) => (
                    <button key={im.src} className={`thumb ${i === index ? 'is-active' : ''}`} onClick={() => setIndex(i)} aria-label={`Show image ${i + 1}`}>
                      <img src={im.src} alt="" />
                    </button>
                  ))}
                </div>
              )}
              {item.caseStudy && (
                <Link to={`/case-studies/${item.caseStudy}`} className="btn btn--primary btn--sm" onClick={onClose}>
                  Read case study <ArrowRight />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const AppleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.37 12.6c.02 2.4 2.1 3.2 2.13 3.21-.02.06-.33 1.14-1.1 2.26-.66.97-1.35 1.93-2.43 1.95-1.06.02-1.4-.63-2.62-.63-1.21 0-1.6.61-2.6.65-1.05.04-1.84-1.05-2.51-2.01-1.36-1.97-2.4-5.57-1-8 .69-1.21 1.93-1.98 3.28-2 1.03-.02 2-.69 2.62-.69.63 0 1.81.86 3.05.73.52.02 1.98.21 2.92 1.58-.08.05-1.74 1.02-1.73 3.03ZM14.37 5.8c.56-.67.93-1.6.83-2.53-.8.03-1.77.53-2.34 1.2-.52.6-.97 1.55-.85 2.46.9.07 1.8-.46 2.36-1.13Z" />
  </svg>
)
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 3.5v17a.8.8 0 0 0 1.2.7l14.6-8.5a.8.8 0 0 0 0-1.4L6.2 2.8A.8.8 0 0 0 5 3.5Z" fill="currentColor" />
  </svg>
)

function StoreChooser({ stores, title }: { stores: { ios: string; android: string }; title: string }) {
  return (
    <div className="stores">
      <div>
        <h3 className="h4">Download {title}</h3>
        <p className="small">Live on both app stores. Choose your platform.</p>
      </div>
      <div className="stores__buttons">
        <a className="store-btn" href={stores.ios} target="_blank" rel="noopener noreferrer" aria-label={`${title} on the App Store (opens in a new tab)`}>
          <AppleIcon />
          <span><small>Download on the</small>App Store</span>
        </a>
        <a className="store-btn" href={stores.android} target="_blank" rel="noopener noreferrer" aria-label={`${title} on Google Play (opens in a new tab)`}>
          <PlayIcon />
          <span><small>Get it on</small>Google Play</span>
        </a>
      </div>
    </div>
  )
}
