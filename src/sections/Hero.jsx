import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Icon from '../components/Icon.jsx';
import { heroHighlights, images, site } from '../data/siteConfig.js';

export default function Hero({ goTo }) {
  const [photo, setPhoto] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => setPhoto(true);
    img.src = images.hero;
  }, []);

  return (
    <section id="home" className="hero" aria-label="Welcome">
      <div className="hero-bg" aria-hidden="true">
        {photo && <img src={images.hero} alt="" fetchpriority="high" />}
        <div className="hero-rings" />
        <div className="hero-shade" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{site.name} · {site.mapArea}</p>
          <h1>
            <span className="line l1">Built by discipline.</span>
            <span className="line l2">Defined by strength.</span>
          </h1>
          <p className="lead">{site.tagline}</p>
          <div className="hero-cta">
            <a href="#membership" className="btn btn-primary" onClick={(e) => { e.preventDefault(); goTo('membership'); }}>
              Join now
            </a>
            <a href="#about" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); goTo('about'); }}>
              Explore the gym
            </a>
          </div>
        </div>
        <div className="hero-emblem">
          <div className="emblem-glow" aria-hidden="true" />
          <img src={site.logo} alt={`${site.name} official emblem`} width="520" height="520" fetchpriority="high" />
        </div>
      </div>
      <ul className="container hero-points">
        {heroHighlights.map((h) => (
          <li key={h.title}>
            <Icon name={h.icon} />
            <div><strong>{h.title}</strong><span>{h.text}</span></div>
          </li>
        ))}
      </ul>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About section" onClick={(e) => { e.preventDefault(); goTo('about'); }}>
        <ChevronDown aria-hidden="true" />
      </a>
    </section>
  );
}
