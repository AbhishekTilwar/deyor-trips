import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { formatPrice } from '../data/tours';
import HorizontalScroll from './HorizontalScroll';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PromoCards({ promos }) {
  const sectionRef = useScrollReveal({ childSelector: '.section-animate' });

  return (
    <section className="promo-section" ref={sectionRef}>
      <div className="container-fluid">
        <HorizontalScroll>
          {promos.map((promo) => (
            <Link key={promo.id} to={promo.link} className="promo-card section-animate">
              <img src={promo.image} alt={promo.title} loading="lazy" />
              <div className="promo-card-overlay">
                <span className="promo-badge">{promo.badge}</span>
                <h3>{promo.title}</h3>
                <p>{promo.subtitle}</p>
                <div className="promo-stats">
                  <div>
                    <span className="promo-stat-label">TOURS</span>
                    <span className="promo-stat-value">{promo.tours}</span>
                  </div>
                  <div>
                    <span className="promo-stat-label">STARTING FROM</span>
                    <span className="promo-stat-value">{formatPrice(promo.startingPrice)}</span>
                  </div>
                </div>
                <span className="promo-cta">View Collection <ChevronRight size={16} /></span>
              </div>
            </Link>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
