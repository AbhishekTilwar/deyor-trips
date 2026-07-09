import { Shield, Heart, Award, Users } from 'lucide-react';
import { whyChooseUs, awards } from '../data/tours';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = {
  shield: Shield,
  heart: Heart,
  award: Award,
  users: Users,
};

export default function WhyChooseUs() {
  const sectionRef = useScrollReveal({ childSelector: '.section-animate' });

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="container">
        <div className="why-header section-animate">
          <h2 className="section-title">Why Choose Deyor?</h2>
          <p className="why-description">
            Featured on Shark Tank India Season 2, recognized by Forbes 30 Under 30 Asia,
            and trusted by 50,000+ travelers — Deyor is India&apos;s premier community travel platform.
          </p>
        </div>
        <div className="why-grid">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="why-card section-animate">
                <div className="why-icon">
                  <Icon size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="awards-section section-animate">
          <h3 className="awards-title">Awards, Affiliations & Press Coverage</h3>
          <div className="awards-list">
            {awards.map((award) => (
              <span key={award} className="award-badge">{award}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
