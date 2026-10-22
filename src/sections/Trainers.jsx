import SectionHead from '../components/SectionHead.jsx';
import Visual from '../components/Visual.jsx';
import { trainers } from '../data/siteConfig.js';

export default function Trainers({ goTo }) {
  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <SectionHead title="Meet the coaches">Demonstration profiles. Swap in your real coaches, photos and credentials.</SectionHead>
        <div className="trainer-grid">
          {trainers.map((t) => (
            <article key={t.name} className="trainer-card">
              <Visual src={t.image} alt={`Portrait of ${t.name}`} icon="UserCheck" label="Add trainer photo" className="trainer-img" />
              <div className="trainer-body">
                <span className="demo-tag">Demo profile</span>
                <h3>{t.name}</h3>
                <p className="role">{t.role}</p>
                <p>{t.bio}</p>
                <ul className="chips">{t.specialties.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
