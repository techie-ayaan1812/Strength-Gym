import { Check } from 'lucide-react';
import SectionHead from '../components/SectionHead.jsx';
import { plans } from '../data/siteConfig.js';

export default function Membership({ onChoose }) {
  return (
    <section id="membership" className="section membership">
      <div className="container">
        <SectionHead title="Membership plans" align="center">
          Placeholder pricing. Set your real prices in the config file.
        </SectionHead>
        <div className="plan-grid">
          {plans.map((p) => (
            <article key={p.id} className={`plan ${p.featured ? 'featured' : ''}`}>
              {p.featured && <span className="plan-flag">Recommended</span>}
              <h3>{p.id}</h3>
              <p className="price"><span>{p.price}</span>{p.period}</p>
              <p className="plan-note">{p.note}</p>
              <ul>
                {p.features.map((f) => <li key={f}><Check size={18} aria-hidden="true" />{f}</li>)}
              </ul>
              <button className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'}`} onClick={() => onChoose(p.id)}>
                Choose plan <span className="sr-only">{p.id}</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
