import { personal, skills } from '../data';
import useReveal from '../components/useReveal';
import './About.css';

function R({ children, delay = 0 }) {
  const ref = useReveal();
  return <div className="reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>{children}</div>;
}

export default function About() {
  const h = useReveal();
  return (
    <div className="page about-page">
      <div className="container">

        <div className="reveal pg-hero" ref={h}>
          <p className="pg-label">About Me</p>
          <h1 className="pg-title">The person<br />behind the code.</h1>
        </div>

        <div className="about-main">
          <div className="about-left">
            <R>
              <div className="about-avatar">
                <div className="av-ring av-ring--1" />
                <div className="av-ring av-ring--2" />
                <div className="av-photo"><span className="av-initials">EM</span></div>
              </div>
            </R>
            <R delay={0.1}>
              <table className="info-table card-dark">
                <tbody>
                  {[
                    ['Name',     personal.name],
                    ['School',   'KNUST, Ghana'],
                    ['Major',    'Computer Engineering'],
                    ['Year',     '3rd Year'],
                    ['Location', 'Kumasi 🇬🇭'],
                    ['Status',   '● Open to Opportunities'],
                  ].map(([k, v]) => (
                    <tr key={k} className="info-row">
                      <td className="info-key">{k}</td>
                      <td className="info-val">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </R>
          </div>

          <div className="about-right">
            {personal.bio.map((p, i) => (
              <R key={i} delay={i * 0.1}><p className="bio-p">{p}</p></R>
            ))}
            <R delay={0.3}>
              <div className="roles">
                {personal.roles.map(r => <span key={r} className="role-chip">{r}</span>)}
              </div>
            </R>
          </div>
        </div>

        <hr className="rule section-rule" />

        <R>
          <div className="about-section-head">
            <p className="pg-label">Skills & Stack</p>
            <h2 className="about-section-title">What I work with.</h2>
          </div>
        </R>
        <div className="skills-grid">
          {skills.map((g, i) => (
            <R key={g.category} delay={i * 0.08}>
              <div className="skill-col">
                <p className="label skill-cat">{g.category}</p>
                <ul className="skill-list">
                  {g.items.map(item => <li key={item} className="skill-item">{item}</li>)}
                </ul>
              </div>
            </R>
          ))}
        </div>

        <hr className="rule section-rule" />

        <R>
          <div className="philosophy">
            <p className="pg-label">Philosophy</p>
            <p className="philosophy-q">
              "I build with purpose. Every line of code should solve a real
              problem — not just exist because it can."
            </p>
            <p className="label philosophy-cite">— Ernest Mpiani</p>
          </div>
        </R>

      </div>
    </div>
  );
}
