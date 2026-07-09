import { Link } from 'react-router-dom';
import { MapPin, Clock, Star } from 'lucide-react';
import { formatPrice } from '../data/tours';

export default function TourCard({ tour, variant = 'default' }) {
  return (
    <Link to={`/tours/${tour.id}`} className={`tour-card tour-card--${variant}`}>
      <div className="tour-card-image">
        <img src={tour.image} alt={tour.title} loading="lazy" />
        {tour.discount && (
          <span className="tour-badge discount">Upto ₹{tour.discount.toLocaleString('en-IN')} off</span>
        )}
        {tour.badge && (
          <span className={`tour-badge ${tour.bestSeller ? 'bestseller' : 'featured'}`}>
            {tour.badge}
          </span>
        )}
      </div>
      <div className="tour-card-body">
        <h3 className="tour-title">{tour.title}</h3>
        <div className="tour-meta">
          <span><MapPin size={13} /> {tour.route}</span>
          <span><Clock size={13} /> {tour.duration}</span>
        </div>
        <p className="tour-months">{tour.months}</p>
        <div className="tour-footer">
          <div className="tour-price">
            {tour.originalPrice && (
              <span className="price-original">{formatPrice(tour.originalPrice)}</span>
            )}
            <span className="price-current">{formatPrice(tour.price)}</span>
            {tour.reviews > 1000 && (
              <span className="tour-reviews">({Math.floor(tour.reviews / 1000)}k+)</span>
            )}
          </div>
          <div className="tour-rating">
            <Star size={13} fill="currentColor" />
            <span>{tour.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
