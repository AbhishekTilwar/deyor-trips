import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { reviews } from '../data/reviews';
import HorizontalScroll from './HorizontalScroll';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reviews() {
  const sectionRef = useScrollReveal({ childSelector: '.section-animate' });

  return (
    <section className="reviews-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header center section-animate">
          <span className="section-label">Reviews</span>
          <h2 className="section-title">What Our Travelers Say About Us</h2>
        </div>
      </div>

      <div className="container-fluid container-fluid--bleed">
        <HorizontalScroll variant="reviews">
          {reviews.map((review) => (
            <div key={review.id} className="review-scroll-card section-animate" data-scroll-item>
              <div className="review-scroll-image">
                <img src={review.image} alt={review.tour} loading="lazy" />
              </div>
              <div className="review-scroll-body">
                <div className="review-scroll-header">
                  <div className="review-avatar">{review.avatar}</div>
                  <div>
                    <h4 className="review-author">{review.name}</h4>
                    <div className="review-stars">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
                <Link to={`/tours/${review.tourId}`} className="review-tour-link">
                  {review.tour}
                </Link>
                <Link to={`/tours/${review.tourId}`} className="btn btn-primary btn-sm review-try-btn">
                  Try Yourself
                </Link>
              </div>
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
