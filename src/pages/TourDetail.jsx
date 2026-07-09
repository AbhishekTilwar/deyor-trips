import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Star, Check, ArrowLeft } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { getTourById, formatPrice } from '../data/tours';

gsap.registerPlugin(useGSAP);

export default function TourDetail() {
  const { id } = useParams();
  const tour = getTourById(id);
  const pageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.tour-detail-hero-overlay > .container > *',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
    );
    gsap.fromTo('.tour-detail-main > *',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, { scope: pageRef, dependencies: [id] });

  if (!tour) {
    return (
      <div className="container page-content">
        <h1>Tour not found</h1>
        <Link to="/tours" className="btn btn-primary">Back to Tours</Link>
      </div>
    );
  }

  return (
    <div className="tour-detail-page" ref={pageRef}>
      <div className="tour-detail-hero">
        <img src={tour.image} alt={tour.title} />
        <div className="tour-detail-hero-overlay">
          <div className="container">
            <Link to="/tours" className="back-link">
              <ArrowLeft size={18} /> Back to Trips
            </Link>
            <h1>{tour.title}</h1>
            <p>{tour.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container tour-detail-content">
        <div className="tour-detail-main">
          <div className="tour-detail-info">
            <div className="info-chips">
              <span><MapPin size={16} /> {tour.route}</span>
              <span><Clock size={16} /> {tour.duration}</span>
              <span>{tour.months}</span>
              <span className="rating-chip">
                <Star size={16} fill="currentColor" /> {tour.rating}
              </span>
            </div>

            <section className="detail-section">
              <h2>About This Trip</h2>
              <p>{tour.description}</p>
            </section>

            <section className="detail-section">
              <h2>Highlights</h2>
              <ul className="highlights-list">
                {tour.highlights.map((h) => (
                  <li key={h}>
                    <Check size={18} />
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="booking-card">
            <div className="booking-price">
              {tour.originalPrice && (
                <span className="price-original">{formatPrice(tour.originalPrice)}</span>
              )}
              <span className="price-current">{formatPrice(tour.price)}</span>
              <span className="price-label">per person</span>
            </div>
            {tour.discount && (
              <p className="booking-discount">Save up to ₹{tour.discount.toLocaleString('en-IN')}</p>
            )}
            <a
              href="https://wa.me/919870417123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg btn-block"
            >
              Book Now
            </a>
            <Link to="/contact" className="btn btn-outline btn-block">Enquire Now</Link>
            <div className="booking-meta">
              <p><strong>Duration:</strong> {tour.duration}</p>
              <p><strong>Best Time:</strong> {tour.months}</p>
              <p><strong>Category:</strong> {tour.category}</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
