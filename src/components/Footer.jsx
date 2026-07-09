import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo variant="white" />
            <p className="footer-tagline">
              Multi Day Tours | Experiences and Attractions
            </p>
            <p className="footer-contact">
              <Phone size={16} />
              <a href="tel:+919870417123">+91 9870417123</a>
            </p>
            <p className="footer-contact">
              <Mail size={16} />
              <a href="mailto:care@deyor.in">care@deyor.in</a>
            </p>
            <a
              href="https://wa.me/919870417123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm footer-whatsapp"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/contact">Careers</Link>
            <Link to="/contact">Customer Support</Link>
          </div>

          <div className="footer-links">
            <h4>Popular Trips</h4>
            <Link to="/tours?category=bike">Ladakh Bike Trips</Link>
            <Link to="/tours?category=spiti">Spiti Valley</Link>
            <Link to="/tours?category=international">Maldives</Link>
            <Link to="/tours?category=community">Bhutan</Link>
            <Link to="/tours?category=community">Meghalaya</Link>
          </div>

          <div className="footer-links">
            <h4>More</h4>
            <Link to="/contact">Corporate Bookings</Link>
            <Link to="/tours?category=treks">Treks</Link>
            <Link to="/tours?category=luxury">Deyor Luxec</Link>
            <Link to="/tours?category=international">Deyor World</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026, Deyor. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
