import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHead from '../components/SectionHead.jsx';
import { site, programs, plans } from '../data/siteConfig.js';

const empty = { name: '', phone: '', email: '', program: '', plan: '', message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Enter your full name.';
  if (!/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = 'Enter a phone number with at least 7 digits.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address, like name@example.com.';
  if (!v.program) e.program = 'Choose a program.';
  if (!v.plan) e.plan = 'Choose a membership option.';
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters so we know how to help.';
  return e;
}

export default function Contact({ prefill }) {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle' });

  useEffect(() => {
    if (prefill.plan) setV((o) => ({ ...o, plan: prefill.plan }));
    if (prefill.program) setV((o) => ({ ...o, program: prefill.program }));
  }, [prefill]);

  const set = (k) => (e) => { setV({ ...v, [k]: e.target.value }); if (errors[k]) setErrors({ ...errors, [k]: undefined }); };

  async function submit(e) {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus({ type: 'invalid' });
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    if (!site.formEndpoint) { setStatus({ type: 'demo' }); return; }
    setStatus({ type: 'sending' });
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v),
      });
      if (!res.ok) throw new Error('bad status');
      setStatus({ type: 'sent' }); setV(empty);
    } catch {
      setStatus({ type: 'error' });
    }
  }

  const field = (id, label, input) => (
    <div className={`field ${errors[id] ? 'bad' : ''}`}>
      <label htmlFor={`f-${id}`}>{label}</label>
      {input}
      {errors[id] && <p className="err" id={`e-${id}`}>{errors[id]}</p>}
    </div>
  );
  const a = (id) => ({ id: `f-${id}`, value: v[id], onChange: set(id), 'aria-invalid': !!errors[id], 'aria-describedby': errors[id] ? `e-${id}` : undefined });

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <SectionHead title="Start with an enquiry">Tell us what you want to train for and we will point you to the right plan.</SectionHead>
          <ul className="contact-info">
            <li><MapPin aria-hidden="true" /><span>{site.contact.address}</span></li>
            <li><Phone aria-hidden="true" /><span>{site.contact.phone}</span></li>
            <li><Mail aria-hidden="true" /><span>{site.contact.email}</span></li>
            <li><Clock aria-hidden="true" />
              <span>{site.contact.hours.map((h) => <span key={h.days} className="hours"><b>{h.days}</b> {h.time}</span>)}</span>
            </li>
          </ul>
        </div>
        <form className="form" onSubmit={submit} noValidate>
          {field('name', 'Full name', <input {...a('name')} type="text" autoComplete="name" />)}
          <div className="row">
            {field('phone', 'Phone number', <input {...a('phone')} type="tel" autoComplete="tel" />)}
            {field('email', 'Email', <input {...a('email')} type="email" autoComplete="email" />)}
          </div>
          <div className="row">
            {field('program', 'Interested program', (
              <select {...a('program')}>
                <option value="">Select a program</option>
                {programs.map((p) => <option key={p.id} value={p.title}>{p.title}</option>)}
              </select>
            ))}
            {field('plan', 'Membership preference', (
              <select {...a('plan')}>
                <option value="">Select a plan</option>
                {plans.map((p) => <option key={p.id} value={p.id}>{p.id}</option>)}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            ))}
          </div>
          {field('message', 'Message', <textarea {...a('message')} rows="4" />)}
          <button className="btn btn-primary" type="submit" disabled={status.type === 'sending'}>
            {status.type === 'sending' ? 'Sending…' : 'Send enquiry'}
          </button>
          <div className="status" role="status" aria-live="polite">
            {status.type === 'invalid' && <p className="msg warn"><AlertCircle size={18} aria-hidden="true" />Fix the highlighted fields and send again.</p>}
            {status.type === 'demo' && <p className="msg info"><AlertCircle size={18} aria-hidden="true" />Demo mode: your details are valid, but nothing was sent. The site owner needs to connect a form service first.</p>}
            {status.type === 'sent' && <p className="msg ok"><CheckCircle2 size={18} aria-hidden="true" />Enquiry sent. We will get back to you soon.</p>}
            {status.type === 'error' && <p className="msg warn"><AlertCircle size={18} aria-hidden="true" />We could not send your enquiry. Check your connection and try again.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
