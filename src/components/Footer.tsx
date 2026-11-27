import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { ArrowRight } from './Icons'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__lead">
            <Link to="/" className="brand">
              <img src="/images/logo-mark.webp" alt="" width={44} height={44} />
              <span>{site.name}</span>
            </Link>
            <p>
              <span className="accent">AI-native</span> product designer crafting intelligent, human-centred products.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn btn--primary btn--sm" href="#contact">Let’s talk <ArrowRight /></a>
              <a className="btn btn--ghost btn--sm" href={site.resume} target="_blank" rel="noopener noreferrer">Download résumé <ArrowRight /></a>
            </div>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <h4>Navigate</h4>
              <ul>
                <li><Link to="/projects">Work</Link></li>
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#services">Services</Link></li>
                <li><Link to="/#toolkit">Toolkit</Link></li>
                <li><Link to="/#testimonials">Testimonials</Link></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Connect</h4>
              <ul>
                {site.linkedin && (
                  <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer"><img src="/images/icon-linkedin.webp" alt="" />LinkedIn</a></li>
                )}
                <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><img src="/images/icon-whatsapp.webp" alt="" />WhatsApp</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Contact</h4>
              <ul>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="wordmark" aria-hidden="true">{site.name}</div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Designed with intent. Built with AI in the loop.</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button>
        </div>
      </div>
    </footer>
  )
}
