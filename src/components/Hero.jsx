import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/tours';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const destRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section className="hero">
      <div className="hero-bg-carousel">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.destination}
            className={`hero-bg-slide ${i === currentIndex ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.destination} />
          </div>
        ))}
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-inner">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-tagline">Wander | Travel | Connect | Repeat</p>
            <h1>
              Book Your <span className="text-accent">Deyor</span> Trip to
            </h1>
            <div className="hero-destination">
              <span ref={destRef} className="destination-name" key={currentIndex}>
                {currentSlide.destination}
              </span>
            </div>
            <p className="hero-subtitle">
              Where Adventure meets Community — #deyorforlife
            </p>
            <div className="hero-badge">
              <span className="shark-tank-badge">Featured on Shark Tank India Season 2</span>
            </div>
            <div className="hero-actions">
              <Link to="/tours" className="btn btn-primary btn-lg">
                Explore Trips
                <ChevronRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">
                Custom Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
