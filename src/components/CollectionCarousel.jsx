import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { formatPrice } from '../data/tours';
import HorizontalScroll from './HorizontalScroll';
import MobileGridCarousel from './MobileGridCarousel';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CollectionCarousel({ collections }) {
  const sectionRef = useScrollReveal({ childSelector: '.section-animate' });

  return (
    <section className="collection-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-animate">
          <span className="section-label">Collections</span>
          <div className="section-header-row">
            <h2 className="section-title">Our Top Collections</h2>
            <Link to="/tours" className="view-all-link desktop-only">
              View All <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="desktop-only">
        <div className="container-fluid">
          <HorizontalScroll>
            {collections.map((col) => (
              <Link
                key={col.id}
                to={`/tours?category=${col.category}`}
                className="collection-card section-animate"
              >
                <div className="collection-card-image">
                  <img src={col.image} alt={col.name} loading="lazy" />
                  <div className="collection-card-overlay">
                    <h3>{col.name}</h3>
                    <div className="collection-card-meta">
                      <span>{col.tours} Tours</span>
                      <span className="collection-price">From {formatPrice(col.startingPrice)}</span>
                    </div>
                    <span className="collection-explore">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </HorizontalScroll>
        </div>
      </div>

      <div className="mobile-only collection-mobile-grid">
        <MobileGridCarousel items={collections} viewAllLink="/tours" />
      </div>
    </section>
  );
}
