import { Link } from 'react-router-dom';

export default function Logo({ variant = 'default', onClick }) {
  return (
    <Link to="/" className="logo" onClick={onClick} aria-label="Deyor Home">
      <span className={`logo-text ${variant === 'white' ? 'logo-text--white' : ''}`}>Deyor</span>
    </Link>
  );
}
