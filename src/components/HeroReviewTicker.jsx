import { Star } from 'lucide-react';
import { reviews } from '../data/reviews';
import HorizontalScroll from './HorizontalScroll';

export default function HeroReviewTicker() {
  return (
    <section className="hero-review-ticker" aria-label="Traveler reviews">
      <HorizontalScroll variant="ticker" showArrows={false}>
        {reviews.map((review) => (
          <div key={review.id} className="review-ticker-card" data-scroll-item>
            <div className="review-ticker-header">
              <span className="review-ticker-avatar">{review.avatar}</span>
              <div>
                <strong>{review.name}</strong>
                <div className="review-ticker-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
}
