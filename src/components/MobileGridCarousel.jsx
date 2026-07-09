import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { formatPrice } from '../data/tours';

const CARDS_PER_PAGE = 4;

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

export default function MobileGridCarousel({ items, viewAllLink = '/tours' }) {
  const trackRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const pages = chunkArray(items, CARDS_PER_PAGE);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const pageWidth = track.offsetWidth;
      if (!pageWidth) return;
      const page = Math.round(track.scrollLeft / pageWidth);
      setActivePage(Math.min(page, pages.length - 1));
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [pages.length]);

  const scrollToPage = (index) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.offsetWidth, behavior: 'smooth' });
  };

  if (!items.length) return null;

  return (
    <div className="mobile-grid-carousel">
      <div className="mobile-grid-track" ref={trackRef}>
        {pages.map((page, pageIndex) => (
          <div key={pageIndex} className="mobile-grid-page">
            {page.map((item) => {
              const name = item.shortName || item.label || item.name;
              const link = item.link || `/tours?category=${item.category || item.id}`;

              return (
                <Link key={item.id || `${name}-${pageIndex}`} to={link} className="mobile-dest-card">
                  <img src={item.image} alt={name} loading="lazy" />
                  <div className="mobile-dest-overlay" />
                  {item.tours && (
                    <span className="mobile-dest-badge">{item.tours}+ Packages</span>
                  )}
                  <div className="mobile-dest-content">
                    <h3 className="mobile-dest-name">{name}</h3>
                    {item.tagline && <p className="mobile-dest-tagline">{item.tagline}</p>}
                    {item.startingPrice && (
                      <div className="mobile-dest-price-box">
                        <span className="mobile-dest-price-label">Starting from</span>
                        <span className="mobile-dest-price">{formatPrice(item.startingPrice)}</span>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {pages.length > 1 && (
        <div className="mobile-grid-dots">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`mobile-grid-dot ${activePage === i ? 'active' : ''}`}
              onClick={() => scrollToPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="mobile-grid-footer">
        <Link to={viewAllLink} className="mobile-grid-view-all">
          View All <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
}
