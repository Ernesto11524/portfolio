import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">

          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__name">Ernest Mpiani</Link>
            <p className="footer__sub">
              Backend Developer · Data Scientist · Virtual Assistant
            </p>
            <p className="footer__uni label">KNUST, Ghana · 3rd Year Computer Engineering</p>
          </div>

          {/* Nav */}
          <div className="footer__nav">
            <p className="footer__nav-head label">Pages</p>
            {[['About','/about'],['Projects','/projects'],['Certifications','/certifications'],['Contact','/contact']].map(([l,to]) => (
              <Link key={to} to={to} className="footer__link">{l}</Link>
            ))}
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <p className="footer__nav-head label">Connect</p>
            <a href="mailto:ernest.mpiani@email.com" className="footer__link">ernest.mpiani@email.com</a>
            <a href="https://github.com/Ernesto11524" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub →</a>
            <a href="https://linkedin.com/in/ernest-524" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn →</a>
            <div className="footer__avail">
              <span className="footer__avail-dot" />
              <span className="label">Open to Opportunities</span>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <span className="label">© {year} Ernest Mpiani. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
