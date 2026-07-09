import { useState } from 'react';
import { Send } from 'lucide-react';
import { useSectionReveal } from '../hooks/useScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useSectionReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section" ref={sectionRef}>
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-text">
            <h2>Sign Up Now!</h2>
            <p>Be the first to know about exciting offers, travel updates, and more from Deyor.</p>
          </div>
          {submitted ? (
            <p className="newsletter-success">Thank you for subscribing!</p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">
                <Send size={18} />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
