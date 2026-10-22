import Visual from '../components/Visual.jsx';
import { images } from '../data/siteConfig.js';

export default function CTA({ goTo }) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <Visual src={images.cta} alt="" className="cta-bg" label="" />
      <div className="cta-shade" aria-hidden="true" />
      <div className="container cta-inner">
        <h2 id="cta-title">Your strongest chapter starts here.</h2>
        <a href="#contact" className="btn btn-primary btn-lg" onClick={(e) => { e.preventDefault(); goTo('contact'); }}>Join Strength Gym</a>
      </div>
    </section>
  );
}
