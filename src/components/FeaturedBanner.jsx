import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Clock } from 'lucide-react';
import { formatPrice } from '../data/tours';

export default function FeaturedBanner({ tour }) {
  if (!tour) return null;

  return (
    <section className="featured-banner">
      <div className="container">
        <Link to={`/tours/${tour.id}`} className="featured-banner-card">
          <div className="featured-banner-image">
            <img src={tour.image} alt={tour.title} />
            <span className="featured-banner-badge">{tour.badge || 'Featured Tour'}</span>
          </div>
          <div className="featured-banner-content">
            <h2>{tour.title}</h2>
            <p className="featured-banner-sub">{tour.subtitle}</p>
            <div className="featured-banner-meta">
              <span><Clock size={15} /> {tour.duration}</span>
              <span><MapPin size={15} /> {tour.route}</span>
              <span>{tour.months}</span>
            </div>
            <div className="featured-banner-footer">
              <div>
                <span className="featured-price-label">Starting from</span>
                <span className="featured-price">{formatPrice(tour.price)}</span>
              </div>
              <span className="btn btn-primary">
                View Tour <ChevronRight size={18} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
