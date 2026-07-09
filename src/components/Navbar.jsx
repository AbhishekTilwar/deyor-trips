import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Search, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { navMenu, PHONE, PHONE_DISPLAY, EMAIL } from '../data/navigation';

function NavDropdown({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const hasGroups = item.children?.[0]?.items;

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button type="button" className="nav-link nav-dropdown-trigger">
        {item.label}
        <ChevronDown size={14} className={`nav-chevron ${open ? 'open' : ''}`} />
      </button>

      {open && (
        <div className="nav-dropdown-menu">
          {hasGroups ? (
            <div className="nav-dropdown-grid">
              {item.children.map((group) => (
                <div key={group.label} className="nav-dropdown-group">
                  <span className="nav-dropdown-group-title">{group.label}</span>
                  {group.items.map((sub) => (
                    <Link key={sub.label} to={sub.path} className="nav-dropdown-item" onClick={onClose}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="nav-dropdown-list">
              {item.children.map((sub) => (
                <Link key={sub.label} to={sub.path} className="nav-dropdown-item" onClick={onClose}>
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children?.length;

  if (!hasChildren) {
    return (
      <Link to={item.path} className="mobile-nav-link" onClick={onClose}>
        {item.label}
      </Link>
    );
  }

  const hasGroups = item.children[0]?.items;

  return (
    <div className="mobile-nav-group">
      <button type="button" className="mobile-nav-link" onClick={() => setOpen(!open)}>
        {item.label}
        <ChevronDown size={16} className={open ? 'open' : ''} />
      </button>
      {open && (
        <div className="mobile-nav-sub">
          {hasGroups
            ? item.children.map((group) => (
                <div key={group.label}>
                  <span className="mobile-nav-subtitle">{group.label}</span>
                  {group.items.map((sub) => (
                    <Link key={sub.label} to={sub.path} className="mobile-nav-sublink" onClick={onClose}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ))
            : item.children.map((sub) => (
                <Link key={sub.label} to={sub.path} className="mobile-nav-sublink" onClick={onClose}>
                  {sub.label}
                </Link>
              ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href={`tel:${PHONE}`} className="top-bar-link">
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="top-bar-link">
              <Mail size={14} />
              {EMAIL}
            </a>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-currency">INR ₹</span>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="container navbar-inner">
          <Logo onClick={closeMobile} />

          <nav className="nav-desktop">
            {navMenu.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} item={item} onClose={closeMobile} />
              ) : (
                <Link key={item.label} to={item.path} className="nav-link">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="navbar-actions">
            <Link to="/tours" className="nav-search-btn" aria-label="Search trips">
              <Search size={20} />
            </Link>
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <>
          <button type="button" className="mobile-nav-backdrop" onClick={closeMobile} aria-label="Close menu" />
          <div className="mobile-nav">
            <div className="container">
              {navMenu.map((item) => (
                <MobileNavItem key={item.label} item={item} onClose={closeMobile} />
              ))}
              <div className="mobile-nav-contact">
                <a href={`tel:${PHONE}`} className="btn btn-outline btn-block">
                  <Phone size={16} /> Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
