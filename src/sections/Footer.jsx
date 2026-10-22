import Icon from '../components/Icon.jsx';
import { nav, site } from '../data/siteConfig.js';

export default function Footer({ goTo }) {
  const socials = site.social.filter((s) => s.url);
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="f-brand">
          <img src={site.logo} alt={`${site.name} logo`} width="96" height="96" loading="lazy" />
          <p>{site.statement}</p>
        </div>
        <nav aria-label="Footer">
          <h2>Quick links</h2>
          <ul>{nav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} onClick={(e) => { e.preventDefault(); goTo(n.id); }}>{n.label}</a></li>
          ))}</ul>
        </nav>
        <div>
          <h2>Contact</h2>
          <ul className="f-contact">
            <li>{site.mapArea}</li><li>{site.contact.address}</li><li>{site.contact.phone}</li><li>{site.contact.email}</li>
          </ul>
          {socials.length > 0 && (
            <ul className="socials">
              {socials.map((s) => (
                <li key={s.id}><a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}><Icon name={s.label} /></a></li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="container footer-bar">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Privacy policy and Terms: add links when your policies are ready.</p>
      </div>
    </footer>
  );
}
