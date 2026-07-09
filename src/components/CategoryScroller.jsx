import { Link } from 'react-router-dom';
import HorizontalScroll from './HorizontalScroll';
import { categoryPills } from '../data/tours';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CategoryScroller() {
  const sectionRef = useScrollReveal({ childSelector: '.section-animate' });

  return (
    <section className="category-scroller-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-animate">
          <span className="section-label">Explore by Category</span>
          <h2 className="section-title">Where do you want to go?</h2>
        </div>
      </div>
      <div className="container-fluid">
        <HorizontalScroll showArrows={false}>
          {categoryPills.map((cat, i) => (
            <Link
              key={`${cat.id}-${cat.label}-${i}`}
              to={`/tours?category=${cat.id}`}
              className="category-pill section-animate"
            >
              <div className="category-pill-image">
                <img src={cat.image} alt={cat.label} loading="lazy" />
              </div>
              <span className="category-pill-label">{cat.label}</span>
            </Link>
          ))}
        </HorizontalScroll>
      </div>
    </section>
  );
}
