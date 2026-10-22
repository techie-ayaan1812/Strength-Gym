import { useCallback, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Gymo from './components/Gymo.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Programs from './sections/Programs.jsx';
import WhyUs from './sections/WhyUs.jsx';
import Trainers from './sections/Trainers.jsx';
import Membership from './sections/Membership.jsx';
import Gallery from './sections/Gallery.jsx';
import Testimonials from './sections/Testimonials.jsx';
import CTA from './sections/CTA.jsx';
import Location from './sections/Location.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import { useScrolled } from './hooks/useReveal.js';

export default function App() {
  const [prefill, setPrefill] = useState({});
  const showTop = useScrolled(900);

  const goTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  }, []);

  useEffect(() => { if (location.hash) setTimeout(() => goTo(location.hash.slice(1)), 50); }, [goTo]);

  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Navbar goTo={goTo} />
      <main>
        <Hero goTo={goTo} />
        <About />
        <Programs onProgramEnquire={(program) => { setPrefill((p) => ({ ...p, program, t: Date.now() })); goTo('contact'); }} />
        <WhyUs />
        <Trainers />
        <Membership onChoose={(plan) => { setPrefill((p) => ({ ...p, plan, t: Date.now() })); goTo('contact'); }} />
        <Gallery />
        <Testimonials />
        <CTA goTo={goTo} />
        <Location />
        <Contact prefill={prefill} />
      </main>
      <Footer goTo={goTo} />
      <Gymo goTo={goTo} />
      <button className={`to-top ${showTop ? 'show' : ''}`} onClick={() => goTo('home')} aria-label="Back to top" tabIndex={showTop ? 0 : -1}>
        <ArrowUp aria-hidden="true" />
      </button>
    </>
  );
}
