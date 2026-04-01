import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personal, projects, certifications } from '../data';
import useReveal from '../components/useReveal';
import './Home.css';

/* ── Typewriter ── */
function Typewriter() {
  const roles = personal.roles;
  const [index, setIndex]       = useState(0);
  const [text, setText]         = useState('');
  const [deleting, setDeleting] = useState(false);
  const [char, setChar]         = useState(0);

  useEffect(() => {
    const word = roles[index];
    let t;
    if (!deleting && char <= word.length) {
      setText(word.slice(0, char));
      t = setTimeout(() => setChar(c => c + 1), 65);
    } else if (!deleting && char > word.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && char > 0) {
      setText(word.slice(0, char));
      t = setTimeout(() => setChar(c => c - 1), 35);
    } else {
      setDeleting(false);
      setIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [char, deleting, index, roles]);

  return (
    <span className="tw">
      {text}<span className="tw__cursor" />
    </span>
  );
}

/* ── Profile Ring ── */
function ProfileRing() {
  return (
    <div className="profile">
      <div className="profile__ring profile__ring--1" />
      <div className="profile__ring profile__ring--2" />
      <div className="profile__photo">
        <img src="/profile.jpg" alt="Ernest Mpiani" className="profile__img" />
      </div>
    </div>
  );
}

/* ── Project Row ── */
function ProjectRow({ project, delay }) {
  const ref = useReveal();
  return (
    <div className="reveal proj-row" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <span className="proj-row__num label">{String(project.id).padStart(2, '0')}</span>
      <div className="proj-row__body">
        <h3 className="proj-row__title">{project.title}</h3>
        <p className="proj-row__desc">{project.description}</p>
        <div className="proj-row__tags">
          {project.tech.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      <span className={`status-badge ${project.status === 'Completed' ? 'done' : 'wip'}`}>
        {project.status}
      </span>
    </div>
  );
}

/* ── Cert Row ── */
function CertRow({ cert, delay }) {
  const ref = useReveal();
  return (
    <div className="reveal cert-row" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <span className="cert-row__num label">{cert.badge}</span>
      <div className="cert-row__body">
        <h4 className="cert-row__title">{cert.title}</h4>
        <span className="cert-row__meta label">{cert.issuer} · {cert.date}</span>
      </div>
    </div>
  );
}

/* ── Home Page ── */
export default function Home() {
  const heroRef  = useReveal();
  const projHead = useReveal();
  const certHead = useReveal();
  const ctaRef   = useReveal();

  return (
    <div className="home">

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero__grid" />
        <div className="hero__inner container">

          <div className="hero__text reveal" ref={heroRef}>
            <p className="hero__eyebrow label">
              <span className="hero__dot" />
              {personal.university} · {personal.year}
            </p>

            <h1 className="hero__name">{personal.name}</h1>

            <p className="hero__role">
              <span className="hero__slash">// </span>
              <Typewriter />
            </p>

            <p className="hero__bio">{personal.bio[0]}</p>

            <div className="hero__actions">
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact"  className="btn btn-ghost">Contact Me</Link>
            </div>

            <div className="hero__stats">
              {[
                { n: '3+', l: 'Certifications' },
                { n: '4',  l: 'Projects' },
                { n: '3',  l: 'Years @ KNUST' },
              ].map(({ n, l }, i) => (
                <div key={l} className="hstat">
                  <span className="hstat__num">{n}</span>
                  <span className="hstat__label label">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <ProfileRing />
          </div>
        </div>

        <div className="hero__scroll">
          <span className="label">scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section className="home-section">
        <div className="container">
          <div className="home-section__head reveal" ref={projHead}>
            <div>
              <p className="label home-section__label">// 01 — Selected Work</p>
              <h2 className="home-section__title">Projects.</h2>
            </div>
            <Link to="/projects" className="btn btn-ghost home-section__cta">All Projects →</Link>
          </div>

          <div className="proj-list">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectRow key={p.id} project={p} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      <div className="container"><hr className="rule" /></div>

      {/* ═══ CERTIFICATIONS ═══ */}
      <section className="home-section">
        <div className="container">
          <div className="home-section__head reveal" ref={certHead}>
            <div>
              <p className="label home-section__label">// 02 — Credentials</p>
              <h2 className="home-section__title">Certifications.</h2>
            </div>
            <Link to="/certifications" className="btn btn-ghost home-section__cta">View All →</Link>
          </div>

          <div className="cert-list">
            {certifications.map((c, i) => (
              <CertRow key={c.id} cert={c} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      <div className="container"><hr className="rule" /></div>

      {/* ═══ CTA ═══ */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta__box reveal" ref={ctaRef}>
            <div className="home-cta__grid" />
            <p className="label home-cta__label">// Let's Work Together</p>
            <h2 className="home-cta__title">
              Got a project in mind?<br />
              <em>Let's build it.</em>
            </h2>
            <p className="home-cta__sub">
              Open to collaborations, internships, and freelance opportunities.
            </p>
            <Link to="/contact" className="btn btn-primary">Start a Conversation →</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
