import { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', adults: 1, children: 0, message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useScrollReveal();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions? We&apos;d love to hear from you.</p>
        </div>
      </div>

      <div className="container contact-content" ref={sectionRef}>
        <div className="contact-info section-animate">
          <h2>Get in Touch</h2>
          <p>Our team is available to help you plan your perfect adventure.</p>
          <div className="contact-details">
            <div className="contact-item">
              <Phone size={20} />
              <div>
                <strong>Phone</strong>
                <p><a href="tel:+919870417123">+91 9870417123</a></p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <div>
                <strong>Email</strong>
                <p><a href="mailto:care@deyor.in">care@deyor.in</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper section-animate">
          {submitted ? (
            <div className="form-success">
              <h3>Thank you!</h3>
              <p>We&apos;ve received your message and will get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="date">Preferred Travel Date</label>
                <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="adults">Adults</label>
                  <input id="adults" name="adults" type="number" min="1" value={form.adults} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="children">Children</label>
                  <input id="children" name="children" type="number" min="0" value={form.children} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Additional Comments</label>
                <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">
                <Send size={18} />
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
