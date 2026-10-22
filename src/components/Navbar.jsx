import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav, site } from '../data/siteConfig.js';
import { useScrolled } from '../hooks/useReveal.js';

export default function Navbar({ goTo }) {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [open]);

  const go = (id) => (e) => { e.preventDefault(); setOpen(false); goTo(id); };

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={go('home')} aria-label={`${site.name} home`}>
          <img src={site.logo} alt="" width="48" height="48" />
          <span>{site.name}</span>
        </a>
        <nav aria-label="Primary" className="nav-links">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={go(n.id)} aria-current={active === n.id ? 'true' : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#membership" className="btn btn-primary nav-join" onClick={go('membership')}>JOIN NOW</a>
        <button className="nav-toggle" aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div id="mobile-menu" className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={go(n.id)} tabIndex={open ? 0 : -1}>{n.label}</a>
          ))}
          <a href="#membership" className="btn btn-primary" onClick={go('membership')} tabIndex={open ? 0 : -1}>JOIN NOW</a>
        </nav>
      </div>
    </header>
  );
}
