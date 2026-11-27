import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ease } from './components/Motion'
import { Navbar } from './components/Navbar'
import { PreviewProvider } from './components/Preview'
import CaseStudy from './pages/CaseStudy'
import Home from './pages/Home'
import Work from './pages/Work'

/** Scrolls to the top on page change, or to the #section in the URL. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

const titles: Record<string, string> = {
  '/': 'El_Shamzy · AI-native Product Designer',
  '/projects': 'Work · El_Shamzy',
  '/landing-pages': 'Landing pages · El_Shamzy',
  '/case-studies': 'Case studies · El_Shamzy',
}

export default function App() {
  const location = useLocation()
  useEffect(() => {
    document.title = titles[location.pathname] ?? 'Case study · El_Shamzy'
  }, [location.pathname])

  return (
    <MotionConfig reducedMotion="user">
      <PreviewProvider>
        <a href="#main" className="skip-link">Skip to content</a>
        <ScrollManager />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            id="main"
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Work kind="all" />} />
              <Route path="/landing-pages" element={<Work kind="landing" />} />
              <Route path="/case-studies" element={<Work kind="case" />} />
              <Route path="/case-studies/:slug" element={<CaseStudy />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Contact />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </PreviewProvider>
    </MotionConfig>
  )
}
