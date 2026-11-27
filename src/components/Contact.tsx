import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { ArrowRight } from './Icons'
import { Reveal } from './Motion'

/** Contact section. The form opens the visitor's email app with the message filled in, so no backend is needed. */
export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Project enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact">
          <div className="contact__info">
            <span className="eyebrow">Have a project in mind?</span>
            <h2 className="display" style={{ fontSize: 'clamp(40px, 5.4vw, 64px)' }}>
              Let’s build something people <span className="accent">love.</span>
            </h2>
            <p className="lead">Tell me about your product, your users and where you want to take it.</p>
            <div className="contact__lines">
              <a className="contact__line" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                <img src="/images/icon-phone.webp" alt="" width={44} height={44} />
                {site.phone}
              </a>
              <a className="contact__line" href={`mailto:${site.email}`}>
                <img src="/images/icon-mail.webp" alt="" width={44} height={44} />
                {site.email}
              </a>
            </div>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <h3 className="h4">Send a message</h3>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Your full name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project…" required />
            </div>
            <button className="btn btn--primary" type="submit">
              Send message <ArrowRight />
            </button>
            <p className="form__note" aria-live="polite">
              {sent ? 'Your email app should open with the message ready to send.' : 'Opens your email app with your message ready to send.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
