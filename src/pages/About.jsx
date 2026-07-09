import { Link } from 'react-router-dom';
import { Shield, Users, Award, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1>About Deyor</h1>
          <p>India&apos;s premier community travel platform — Featured on Shark Tank India</p>
        </div>
      </div>

      <div className="container about-content" ref={sectionRef}>
        <section className="about-intro section-animate">
          <h2>Our Story</h2>
          <p>
            Deyor was born from a passion for adventure and community. We specialize in multi-day tours,
            bike trips, treks, and international getaways that bring like-minded travelers together.
          </p>
          <p>
            Featured on Shark Tank India Season 2 and recognized by Forbes 30 Under 30 Asia,
            we&apos;ve grown into a trusted platform serving 50,000+ happy travelers across 50+ destinations.
          </p>
        </section>

        <section className="about-values section-animate">
          <h2>What We Stand For</h2>
          <div className="values-grid">
            <div className="value-card section-animate">
              <Shield size={32} />
              <h3>Safety First</h3>
              <p>Certified trip leaders, first-aid trained marshals, and 24/7 on-ground support.</p>
            </div>
            <div className="value-card section-animate">
              <Users size={32} />
              <h3>Community</h3>
              <p>Like-minded travelers who share your passion for exploration and adventure.</p>
            </div>
            <div className="value-card section-animate">
              <Award size={32} />
              <h3>Excellence</h3>
              <p>Shark Tank featured, Forbes recognized, and award-winning travel experiences.</p>
            </div>
            <div className="value-card section-animate">
              <Globe size={32} />
              <h3>Adventure</h3>
              <p>200+ tour packages across domestic and international destinations.</p>
            </div>
          </div>
        </section>

        <section className="about-cta section-animate">
          <h2>Ready for Your Next Adventure?</h2>
          <p>Join 50,000+ happy travelers and explore the world with Deyor.</p>
          <Link to="/tours" className="btn btn-primary btn-lg">Browse All Trips</Link>
        </section>
      </div>
    </div>
  );
}
