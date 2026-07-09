import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useHorizontalScroll } from '../hooks/useScrollReveal';

export default function HorizontalScroll({
  children,
  className = '',
  showArrows = true,
  gap = '1rem',
  variant = 'default',
  scrollStep = null,
}) {
  const { trackRef, scrollLeft, scrollRight } = useHorizontalScroll(scrollStep);
  const wrapperRef = useRef(null);

  return (
    <div className={`h-scroll-wrapper h-scroll-wrapper--${variant} ${className}`} ref={wrapperRef}>
      {showArrows && (
        <>
          <button
            type="button"
            className="h-scroll-arrow h-scroll-arrow-left"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            className="h-scroll-arrow h-scroll-arrow-right"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}
      <div
        className={`h-scroll-track h-scroll-track--${variant}`}
        ref={trackRef}
        style={{ gap }}
      >
        {children}
      </div>
    </div>
  );
}
