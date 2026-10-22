import SectionHead from '../components/SectionHead.jsx';
import { testimonials } from '../data/siteConfig.js';

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHead title="Member voices">Demonstration content only. These are not real reviews.</SectionHead>
        <div className="quote-grid">
          {testimonials.map((t, i) => (
            <figure key={i} className="quote">
              <span className="demo-tag">Demo testimonial</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption><strong>{t.name}</strong><span>{t.detail}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
