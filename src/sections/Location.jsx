import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import SectionHead from '../components/SectionHead.jsx';
import { site } from '../data/siteConfig.js';

const q = encodeURIComponent(site.mapQuery);
const links = {
  embed: `https://www.google.com/maps?q=${q}&output=embed`,
  open: `https://www.google.com/maps/search/?api=1&query=${q}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
};

export default function Location() {
  return (
    <section id="location" className="section location">
      <div className="container">
        <SectionHead title="Find STRENGTH GYM">
          Visit us in {site.mapArea}. The map searches Google Maps until the exact street address is configured.
        </SectionHead>
        <div className="map-wrap glass">
          <div className="map-frame">
            <iframe title={`${site.name} on Google Maps`} src={links.embed} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
          <div className="map-side">
            <MapPin aria-hidden="true" />
            <h3>{site.name}</h3>
            <p>{site.mapArea}</p>
            <p className="note">{site.contact.address}</p>
            <a className="btn btn-primary" href={links.directions} target="_blank" rel="noopener noreferrer"><Navigation size={18} aria-hidden="true" />Get directions</a>
            <a className="btn btn-ghost" href={links.open} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} aria-hidden="true" />Open in Google Maps</a>
          </div>
        </div>
      </div>
    </section>
  );
}
