import { skills } from '../data';
import useReveal from '../components/useReveal';
import './About.css';

function R({ children, delay = 0 }) {
  const ref = useReveal();
  return <div className="reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>{children}</div>;
}

const journey = [
  {
    period: 'Early Years',
    place: 'Obuasi, Ghana',
    icon: '📍',
    text: 'Born and raised in Obuasi — a city that shaped who I am. My earliest school was Christian Academy for nursery, before moving to Steadfast Academy from KG1 all the way through Class 6. Those years built my foundation: curiosity, discipline, and a love for learning.',
  },
  {
    period: 'Junior High School',
    place: 'T.I. Ahmadiyya JHS B',
    icon: '🏫',
    text: 'After Steadfast Academy, I joined T.I. Ahmadiyya JHS B for JHS 1 through JHS 3. It was here I sat the BECE — and when the results came in, I earned a place at one of the most prestigious senior high schools in Ghana.',
  },
  {
    period: 'Senior High School',
    place: 'Opoku Ware School',
    icon: '🎓',
    text: 'Opoku Ware School. One of the best in Ghana — and I was proud to be there. I studied General Science, pushing through the rigorous WASSCE curriculum. Graduating from OWASS was a milestone I will never forget.',
  },
  {
    period: 'University',
    place: 'KNUST, Kumasi',
    icon: '💻',
    text: 'Now in my 3rd year studying Computer Engineering at KNUST — one of Africa\'s top technical universities. This is where the love for code became a career path. Backend development, data science, intelligent systems — I\'m building the skills to shape the future.',
  },
];

const hobbies = [
  { icon: '🍳', label: 'Cooking' },
  { icon: '🎬', label: 'Movies & Series' },
  { icon: '🎵', label: 'Music' },
  { icon: '✈️', label: 'Travelling' },
  { icon: '🏋️', label: 'Gym & Fitness' },
];

export default function About() {
  const h = useReveal();

  return (
    <div className="page about-page">
      <div className="container">

        {/* ── Page Header ── */}
        <div className="reveal pg-hero" ref={h}>
          <p className="pg-label">About Me</p>
          <h1 className="pg-title">The person<br />behind the code.</h1>
        </div>

        {/* ── Profile + Quick Info ── */}
        <div className="about-main">
          <div className="about-left">
            <R>
              <div className="about-avatar">
                <div className="av-ring av-ring--1" />
                <div className="av-ring av-ring--2" />
                <div className="av-photo">
                  <img src="/profile.jpg" alt="Ernest Mpiani" className="av-img"
                    onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
                  />
                  <span className="av-initials" style={{ display:'none' }}>EM</span>
                </div>
              </div>
            </R>
            <R delay={0.1}>
              <table className="info-table card-dark">
                <tbody>
                  {[
                    ['Name',     'Ernest Mpiani'],
                    ['Origin',   'Obuasi, Ghana 🇬🇭'],
                    ['School',   'KNUST, Kumasi'],
                    ['Major',    'Computer Engineering'],
                    ['Year',     '3rd Year'],
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
            <R>
              <p className="about-intro">
                I'm a Backend Developer, Data Scientist, and Virtual Assistant — 
                currently in my 3rd year of Computer Engineering at KNUST, Ghana. 
                But before the code, there was a journey.
              </p>
            </R>
            <R delay={0.1}>
              <p className="about-intro">
                I grew up in Obuasi — a mining city in the Ashanti Region. From 
                nursery at Christian Academy to grinding through the BECE and WASSCE, 
                every step was a chapter. Now I'm at KNUST, building real things with 
                code and pushing toward a career in tech that makes an actual difference.
              </p>
            </R>
            <R delay={0.2}>
              <div className="roles">
                {['Backend Developer','Data Scientist','Virtual Assistant','Computer Engineer'].map(r => (
                  <span key={r} className="role-chip">{r}</span>
                ))}
              </div>
            </R>
          </div>
        </div>

        <hr className="rule section-rule" />

        {/* ── Journey / Story ── */}
        <R>
          <div className="about-section-head">
            <p className="pg-label">My Journey</p>
            <h2 className="about-section-title">From Obuasi<br />to KNUST.</h2>
          </div>
        </R>

        <div className="journey">
          {journey.map((j, i) => (
            <R key={j.period} delay={i * 0.1}>
              <div className="journey-item">
                <div className="journey-item__left">
                  <span className="journey-item__icon">{j.icon}</span>
                  <div className="journey-item__line" />
                </div>
                <div className="journey-item__body">
                  <div className="journey-item__meta">
                    <span className="pg-label journey-item__period">{j.period}</span>
                    <span className="journey-item__place">{j.place}</span>
                  </div>
                  <p className="journey-item__text">{j.text}</p>
                </div>
              </div>
            </R>
          ))}
        </div>

        <hr className="rule section-rule" />

        {/* ── Hobbies ── */}
        <R>
          <div className="about-section-head">
            <p className="pg-label">Outside the Code</p>
            <h2 className="about-section-title">What I do<br />for fun.</h2>
          </div>
        </R>

        <div className="hobbies-grid">
          {hobbies.map((hb, i) => (
            <R key={hb.label} delay={i * 0.07}>
              <div className="hobby-card">
                <span className="hobby-card__icon">{hb.icon}</span>
                <span className="hobby-card__label">{hb.label}</span>
              </div>
            </R>
          ))}
        </div>

        <hr className="rule section-rule" />

        {/* ── Skills ── */}
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

        {/* ── Philosophy ── */}
        <R>
          <div className="philosophy">
            <p className="pg-label">Philosophy</p>
            <p className="philosophy-q">
              "Coding the future, one line at a time."
            </p>
            <p className="label philosophy-cite">— Ernest Mpiani</p>
          </div>
        </R>

      </div>
    </div>
  );
}
