import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TourCard from './TourCard';
import { categories } from '../data/tours';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TourSection({ title, tours, showTabs = false, showViewAll = true, filterKey = 'category' }) {
  const [activeTab, setActiveTab] = useState('all');
  const sectionRef = useScrollReveal({ childSelector: '.reveal-item' });

  const filteredTours = showTabs && activeTab !== 'all'
    ? tours.filter((t) => t[filterKey] === activeTab)
    : tours;

  const displayTours = filteredTours.slice(0, 4);

  return (
    <section className="tour-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">{title}</h2>
          {showViewAll && (
            <Link to="/tours" className="view-all-link">
              View All <ChevronRight size={18} />
            </Link>
          )}
        </div>

        {showTabs && (
          <div className="category-tabs reveal-item">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="tour-grid">
          {displayTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
