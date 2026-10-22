import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { features } from '../data/siteConfig.js';

export default function WhyUs() {
  return (
    <section className="section why">
      <div className="container why-grid">
        <div className="why-intro">
          <SectionHead title="Why train here">
            The things serious lifters look for, laid out plainly. Edit each item in the config file to match what the gym really offers.
          </SectionHead>
        </div>
        <ul className="feature-list">
          {features.map((f) => (
            <li key={f.title}>
              <span className="ico"><Icon name={f.icon} /></span>
              <div><h3>{f.title}</h3><p>{f.text}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
