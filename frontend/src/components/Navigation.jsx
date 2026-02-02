import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/restaurant-demo/', label: 'Home' },
    { path: '/restaurant-demo/menu', label: 'Menu' },
    { path: '/restaurant-demo/reservations', label: 'Reservations' },
    { path: '/restaurant-demo/about', label: 'About' },
    { path: '/restaurant-demo/reviews', label: 'Reviews' },
    { path: '/restaurant-demo/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navigation-header">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/restaurant-demo/" className="text-2xl font-light tracking-wide" style={{ color: 'var(--text-primary)' }}>
            GW FINS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navigation-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+15045813467" className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <Phone size={16} />
              <span>(504) 581-3467</span>
            </a>
            <Link to="/restaurant-demo/reservations" className="btn-primary">
              Reserve
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-8 pb-6 border-t border-[var(--border-light)] pt-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navigation-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[var(--border-light)]">
                <a href="tel:+15045813467" className="flex items-center gap-2 body-regular mb-4" style={{ color: 'var(--text-secondary)' }}>
                  <Phone size={16} />
                  <span>(504) 581-3467</span>
                </a>
                <Link to="/restaurant-demo/reservations" className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                  Reserve Table
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
