import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHead from '../components/SectionHead.jsx';
import Visual from '../components/Visual.jsx';
import { gallery, images } from '../data/siteConfig.js';

function Tile({ item, index, onOpen }) {
  const [ok, setOk] = useState(true);
  const inner = <Visual src={item.src} alt={item.alt} label={`Add ${item.src.split('/').pop()}`} onStatus={setOk} />;
  if (!ok) return <div className={`tile ${item.span}`}>{inner}</div>;
  return (
    <button className={`tile ${item.span}`} onClick={() => onOpen(index)} aria-label={`Open photo: ${item.alt}`}>
      {inner}<span className="tile-label">{item.label}</span>
    </button>
  );
}

export default function Gallery() {
  const [idx, setIdx] = useState(null);
  const closeRef = useRef(null);
  const total = gallery.length;

  useEffect(() => {
    if (idx === null) return;
    closeRef.current?.focus();
    const key = (e) => {
      if (e.key === 'Escape') setIdx(null);
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % total);
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + total) % total);
    };
    window.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = ''; };
  }, [idx, total]);

  return (
    <section className="section gallery" aria-label="Gallery">
      <div className="container">
        <SectionHead title="Inside the training floor">
          Photography slots for your own gym photos. Click a photo to enlarge it once added.
        </SectionHead>
        <div className="gallery-grid">
          {gallery.map((g, i) => <Tile key={g.src} item={g} index={i} onOpen={setIdx} />)}
        </div>
        <div className="ba">
          <h3>Progress comparison</h3>
          <p>Layout for real member progress photos. Only use images from members who gave written consent.</p>
          <div className="ba-pair">
            <figure><Visual src={images.before} alt="Before photo" label="Add before.jpg" /><figcaption>Before</figcaption></figure>
            <figure><Visual src={images.after} alt="After photo" label="Add after.jpg" /><figcaption>After</figcaption></figure>
          </div>
        </div>
      </div>
      {idx !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setIdx(null)}>
          <button ref={closeRef} className="lb-close" onClick={() => setIdx(null)} aria-label="Close photo"><X /></button>
          <button className="lb-nav prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + total) % total); }}><ChevronLeft /></button>
          <img src={gallery[idx].src} alt={gallery[idx].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lb-nav next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % total); }}><ChevronRight /></button>
        </div>
      )}
    </section>
  );
}
