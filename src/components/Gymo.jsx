import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { gymo, site } from '../data/siteConfig.js';

export default function Gymo({ goTo }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [msgs, setMsgs] = useState([{ from: 'bot', text: gymo.greeting }]);
  const end = useRef(null);

  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }); }, [msgs, open]);
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, []);

  const reply = (faq, q) => setMsgs((m) => [
    ...m, { from: 'me', text: q },
    faq ? { from: 'bot', text: faq.a, go: faq.go, goLabel: faq.goLabel } : { from: 'bot', text: gymo.fallback, go: 'contact', goLabel: 'Contact us' },
  ]);

  const send = (e) => {
    e.preventDefault();
    const q = text.trim();
    if (!q) return;
    const low = q.toLowerCase();
    reply(gymo.faqs.find((f) => f.keys.some((k) => low.includes(k))), q);
    setText('');
  };

  return (
    <div className="gymo">
      {open && (
        <section className="gymo-panel" role="dialog" aria-label="Gymo chat assistant">
          <header>
            <img src={site.logo} alt="" width="36" height="36" />
            <div><strong>Gymo</strong><span>STRENGTH GYM assistant</span></div>
            <button onClick={() => setOpen(false)} aria-label="Close chat"><X size={20} /></button>
          </header>
          <div className="gymo-body" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`gymo-msg ${m.from}`}>
                <p>{m.text}</p>
                {m.go && <button className="gymo-go" onClick={() => { setOpen(false); goTo(m.go); }}>{m.goLabel}</button>}
              </div>
            ))}
            <div ref={end} />
          </div>
          <div className="gymo-chips">
            {gymo.faqs.map((f) => <button key={f.q} onClick={() => reply(f, f.q)}>{f.q}</button>)}
          </div>
          <form onSubmit={send}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your question" aria-label="Type your question" />
            <button type="submit" aria-label="Send"><Send size={18} /></button>
          </form>
        </section>
      )}
      <button className="gymo-fab" onClick={() => setOpen(!open)} aria-label={open ? 'Close Gymo chat' : 'Chat with Gymo'} aria-expanded={open}>
        {open ? <X /> : <MessageCircle />}<span>Gymo</span>
      </button>
    </div>
  );
}
