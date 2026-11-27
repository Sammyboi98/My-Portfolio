import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import { Close, Menu } from './Icons'
import { ease } from './Motion'

function NavItem({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) {
  if (to.startsWith('#')) {
    return <a className="nav__link" href={to} onClick={onClick}>{label}</a>
  }
  if (to.includes('#')) {
    return <Link className="nav__link" to={to} onClick={onClick}>{label}</Link>
  }
  return (
    <NavLink className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`} to={to} onClick={onClick}>
      {label}
    </NavLink>
  )
}

function Actions({ onClick }: { onClick?: () => void }) {
  return (
    <div className="nav__actions">
      <a className="btn btn--ghost btn--sm" href={site.resume} target="_blank" rel="noopener noreferrer" onClick={onClick}>Resume</a>
      <a className="btn btn--primary btn--sm" href="#contact" onClick={onClick}>Let’s talk</a>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <motion.header className={`nav ${scrolled ? 'is-scrolled' : ''}`} initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease }}>
        <nav className="container nav__inner" aria-label="Main">
          <Link to="/" className="brand" aria-label={`${site.name}, home`}>
            <img src="/images/logo-mark.webp" alt="" width={44} height={44} />
            <span>{site.name}</span>
          </Link>
          <div className="nav__links">
            {navLinks.map((l) => <NavItem key={l.label} {...l} />)}
          </div>
          <Actions />
          <button className="nav__toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <Close /> : <Menu />}
          </button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease }}>
            {navLinks.map((l) => <NavItem key={l.label} {...l} onClick={close} />)}
            <Actions onClick={close} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
