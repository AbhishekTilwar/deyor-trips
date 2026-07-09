import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, ChevronRight } from 'lucide-react';
import TourCard from './TourCard';
import HorizontalScroll from './HorizontalScroll';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TourCarousel({
  title,
  subtitle,
  tours,
  tabs = null,
  activeTab,
  onTabChange,
  viewAllLink = '/tours',
  label,
}) {
  const sectionRef = useScrollReveal({ childSelector: '.section-animate' });

  return (
    <section className="carousel-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-animate">
          {label && <span className="section-label">{label}</span>}
          <div className="section-header-row">
            <div>
              <h2 className="section-title">{title}</h2>
              {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </div>
            <Link to={viewAllLink} className="view-all-link">
              View All <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {tabs && (
          <div className="filter-tabs section-animate">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`filter-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="container-fluid container-fluid--bleed">
        <HorizontalScroll variant="tours">
          {tours.map((tour) => (
            <div key={tour.id} className="h-scroll-item section-animate" data-scroll-item>
              <TourCard tour={tour} />
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
