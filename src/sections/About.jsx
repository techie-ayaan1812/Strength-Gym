import { useEffect, useRef, useState } from 'react';
import SectionHead from '../components/SectionHead.jsx';
import Visual from '../components/Visual.jsx';
import Icon from '../components/Icon.jsx';
import { images, stats, values } from '../data/siteConfig.js';
import { useReveal } from '../hooks/useReveal.js';

function Counter({ value, suffix }) {
  const [ref, vis] = useReveal(0.4);
  const [n, setN] = useState(0);
  const raf = useRef();
  useEffect(() => {
    if (!vis) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || value === 0) { setN(value); return; }
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1200, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [vis, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-media">
          <Visual src={images.about} alt="Lifters training together at Strength Gym" label="Add about.jpg" className="about-photo" />
          <div className="about-badge" aria-hidden="true">Est. your year here</div>
        </div>
        <div className="about-text">
          <SectionHead title="More than a gym. A standard of strength.">
            Strength Gym is built for people who treat training as a craft. Heavy iron, honest coaching and a room
            full of people working toward something. Whether you are lifting for the first time or chasing a new
            personal best, the standard is the same: show up, put in the work, get stronger.
          </SectionHead>
          <ul className="values">
            {values.map((v) => (
              <li key={v.title}>
                <span className="ico"><Icon name={v.icon} /></span>
                <div><h3>{v.title}</h3><p>{v.text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd><Counter value={s.value} suffix={s.suffix} /></dd>
            </div>
          ))}
        </dl>
        <p className="note">Statistics are sample values. Edit them in <code>src/data/siteConfig.js</code>.</p>
      </div>
    </section>
  );
}
