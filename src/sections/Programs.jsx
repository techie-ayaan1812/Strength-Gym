import { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import SectionHead from '../components/SectionHead.jsx';
import Visual from '../components/Visual.jsx';
import Icon from '../components/Icon.jsx';
import { programs } from '../data/siteConfig.js';

function ProgramModal({ program, onClose, onEnquire }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    const esc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = ''; prev?.focus?.(); };
  }, [onClose]);
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="prog-title" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close program details"><X /></button>
        <Visual src={program.image} alt={`${program.title} at Strength Gym`} icon={program.icon} className="modal-img" />
        <div className="modal-body">
          <h3 id="prog-title">{program.title}</h3>
          <p>{program.text}</p>
          <ul>{program.details.map((d) => <li key={d}>{d}</li>)}</ul>
          <button className="btn btn-primary" onClick={() => onEnquire(program)}>Enquire about this program</button>
        </div>
      </div>
    </div>
  );
}

export default function Programs({ onProgramEnquire }) {
  const [open, setOpen] = useState(null);
  return (
    <section id="programs" className="section programs">
      <div className="container">
        <SectionHead title="Training programs">Six ways to train, each built around a clear goal and a plan you can follow.</SectionHead>
        <div className="program-grid">
          {programs.map((p, i) => (
            <article key={p.id} className={`program-card ${i % 3 === 1 ? 'offset' : ''}`}>
              <Visual src={p.image} alt={`${p.title} training`} icon={p.icon} className="program-img" />
              <div className="program-body">
                <span className="ico"><Icon name={p.icon} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <button className="link-btn" onClick={() => setOpen(p)} aria-haspopup="dialog">
                  Explore {p.title} <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {open && (
        <ProgramModal program={open} onClose={() => setOpen(null)}
          onEnquire={(p) => { setOpen(null); onProgramEnquire(p.title); }} />
      )}
    </section>
  );
}
