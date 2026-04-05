import { certifications } from '../data';
import useReveal from '../components/useReveal';
import './Certifications.css';

function CertCard({ cert, delay }) {
  const ref = useReveal();
  return (
    <div className="reveal cert-card" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="cert-card__num">{cert.badge}</div>
      <div className="cert-card__body">
        <p className="label cert-card__meta">{cert.issuer} · {cert.date}</p>
        <h2 className="cert-card__title">{cert.title}</h2>
        <p className="cert-card__desc">{cert.description}</p>
        {cert.link && cert.link !== 'YOUR_GOOGLE_DRIVE_LINK_1' && cert.link !== 'YOUR_GOOGLE_DRIVE_LINK_2' && cert.link !== 'YOUR_GOOGLE_DRIVE_LINK_3' && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card__btn"
          >
            View Certificate →
          </a>
        )}
      </div>
      <div className="cert-card__line" />
    </div>
  );
}

export default function Certifications() {
  const h = useReveal(), r = useReveal();
  return (
    <div className="page certs-page">
      <div className="container">
        <div className="reveal pg-hero" ref={h}>
          <p className="pg-label">Credentials</p>
          <h1 className="pg-title">Certified.<br /><em>Qualified.</em></h1>
          <p className="pg-sub">Professional certifications validating my skills in backend development, data science, and virtual assistance.</p>
        </div>
        <div className="certs-list">
          {certifications.map((c, i) => <CertCard key={c.id} cert={c} delay={i * 0.1} />)}
        </div>
        <hr className="rule section-rule" />
        <div className="reveal next-up" ref={r}>
          <div className="next-up__head">
            <p className="pg-label">Always Learning</p>
            <h2 className="next-up__title">What's next.</h2>
            <p className="next-up__sub">Actively pursuing more certifications in cloud, ML, and system design.</p>
          </div>
          <div className="next-up__items">
            {['AWS Cloud Practitioner','TensorFlow Developer Certificate','MongoDB Developer Path'].map(label => (
              <div key={label} className="next-item">
                <span className="next-item__dot" />
                <span className="next-item__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
