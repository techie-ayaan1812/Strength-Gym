import { useState } from 'react';
import Icon from './Icon.jsx';

/**
 * Photo slot. Shows the image from `src` when the file exists; otherwise a
 * built-in fallback (navy plate graphic) so nothing ever looks broken.
 */
export default function Visual({ src, alt, icon = 'Dumbbell', label, className = '', onStatus, eager }) {
  const [ok, setOk] = useState(true);
  const fail = () => { setOk(false); onStatus && onStatus(false); };
  return (
    <div className={`visual ${className}`}>
      {ok && (
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={fail} />
      )}
      {!ok && (
        <div className="visual-fallback" role="img" aria-label={alt}>
          <svg viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="86" fill="none" stroke="currentColor" strokeWidth="10" />
            <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="100" cy="100" r="14" fill="currentColor" />
          </svg>
          <Icon name={icon} size={30} />
          {label && <span>{label}</span>}
        </div>
      )}
    </div>
  );
}
