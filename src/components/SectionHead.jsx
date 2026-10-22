import { useReveal } from '../hooks/useReveal.js';

export default function SectionHead({ title, children, align = 'left' }) {
  const [ref, vis] = useReveal();
  return (
    <header ref={ref} className={`section-head ${align} reveal ${vis ? 'in' : ''}`}>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </header>
  );
}
