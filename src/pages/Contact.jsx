import { useState } from 'react';
import { personal } from '../data';
import useReveal from '../components/useReveal';
import './Contact.css';

export default function Contact() {
  const h = useReveal(), fr = useReveal(), ir = useReveal();
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState('idle');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = async e => {
    e.preventDefault(); setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${personal.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name:'', email:'', subject:'', message:'' });
    } catch { setStatus('error'); }
  };

  return (
    <div className="page contact-page">
      <div className="container">
        <div className="reveal pg-hero" ref={h}>
          <p className="pg-label">Contact</p>
          <h1 className="pg-title">Let's build<br /><em>something together.</em></h1>
          <p className="pg-sub">Collaborations, internships, freelance, or just a conversation about tech — I'm all ears.</p>
        </div>
        <div className="contact-layout">
          <div className="reveal" ref={fr}>
            {status === 'success' ? (
              <div className="success-box">
                <div className="success-box__icon">✓</div>
                <h3 className="success-box__title">Message received.</h3>
                <p className="success-box__sub">I'll get back to you shortly.</p>
                <button className="btn btn-ghost" style={{ marginTop:'28px' }} onClick={() => setStatus('idle')}>Send another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" className="form-input" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" className="form-input" placeholder="john@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" className="form-input" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" className="form-input form-textarea" placeholder="Tell me about your project or idea..." value={form.message} onChange={handleChange} required rows={7} />
                </div>
                {status === 'error' && <p className="form-error">⚠ Something went wrong. Please try again.</p>}
                <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
          <div className="reveal contact-info" ref={ir} style={{ transitionDelay:'0.12s' }}>
            <div className="info-block">
              <p className="label info-block__head">Direct Contact</p>
              <div className="info-block__rows">
                <div className="info-block__row">
                  <span className="info-block__key">Email</span>
                  <a href={`mailto:${personal.email}`} className="info-block__val info-link">{personal.email}</a>
                </div>
                <div className="info-block__row">
                  <span className="info-block__key">Location</span>
                  <span className="info-block__val">Kumasi, Ghana 🇬🇭</span>
                </div>
              </div>
            </div>
            <div className="info-block">
              <p className="label info-block__head">Online</p>
              <div className="info-block__rows">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-row">
                  <span className="social-row__name">GitHub</span>
                  <span className="social-row__handle">@Ernesto11524 →</span>
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-row">
                  <span className="social-row__name">LinkedIn</span>
                  <span className="social-row__handle">Ernest Mpiani →</span>
                </a>
              </div>
            </div>
            <div className="avail-badge">
              <span className="avail-badge__dot" />
              <div>
                <p className="avail-badge__title">Available for opportunities</p>
                <p className="avail-badge__sub">Internships · Freelance · Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
