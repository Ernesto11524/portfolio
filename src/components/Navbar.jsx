import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/',               label: 'Home',    end: true },
  { to: '/about',          label: 'About' },
  { to: '/projects',       label: 'Projects' },
  { to: '/certifications', label: 'Certs' },
  { to: '/contact',        label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location                = useLocation();

  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <NavLink to="/" className="nav__logo">
          <span className="nav__logo-bracket">[</span>EM<span className="nav__logo-bracket">]</span>
        </NavLink>

        <nav className="nav__links">
          {links.map(l => (
            <NavLink
              key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`nav__burger${open ? ' nav__burger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__mobile${open ? ' nav__mobile--open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to} to={l.to} end={l.end}
            className={({ isActive }) => `nav__mobile-link${isActive ? ' nav__mobile-link--active' : ''}`}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
