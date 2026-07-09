import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { formatPrice } from '../data/tours';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Collections({ collections }) {
  const sectionRef = useScrollReveal({ childSelector: '.reveal-item' });

  return (
    <section className="customized-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">Our Top Collections</h2>
          <Link to="/tours" className="view-all-link">
            View All <ChevronRight size={18} />
          </Link>
        </div>
        <div className="customized-grid">
          {collections.map((dest) => (
            <Link
              key={dest.id}
              to={`/tours?category=${dest.category}`}
              className="customized-card reveal-item"
            >
              <img src={dest.image} alt={dest.name} loading="lazy" />
              <div className="customized-overlay">
                <h3>{dest.name}</h3>
                <p>{dest.tours} Tours</p>
                <span className="customized-price">From {formatPrice(dest.startingPrice)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
