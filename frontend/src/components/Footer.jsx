import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Globe, Clock } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-5">
          {/* Brand */}
          <div>
            <h3 className="heading-3 mb-6">GW FINS</h3>
            <p className="body-small mb-4" style={{ color: 'var(--text-secondary)' }}>
              {restaurantInfo.tagline}
            </p>
            <div className="flex items-center gap-2 body-small" style={{ color: 'var(--text-secondary)' }}>
              <span className="text-xl">⭐</span>
              <span>{restaurantInfo.rating} ({restaurantInfo.totalReviews} reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3 mb-6">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <Link to="/restaurant-demo/" className="body-regular transition-smooth hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>
                Home
              </Link>
              <Link to="/restaurant-demo/menu" className="body-regular transition-smooth hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>
                Menu
              </Link>
              <Link to="/restaurant-demo/reservations" className="body-regular transition-smooth hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>
                Reservations
              </Link>
              <Link to="/restaurant-demo/about" className="body-regular transition-smooth hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>
                About
              </Link>
              <Link to="/restaurant-demo/reviews" className="body-regular transition-smooth hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>
                Reviews
              </Link>
              <Link to="/restaurant-demo/contact" className="body-regular transition-smooth hover:opacity-70" style={{ color: 'var(--text-secondary)' }}>
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-3 mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
                </p>
              </div>
              <a href={`tel:${restaurantInfo.phone}`} className="flex items-center gap-3 transition-smooth hover:opacity-70">
                <Phone size={18} style={{ color: 'var(--text-secondary)' }} />
                <span className="body-regular" style={{ color: 'var(--text-secondary)' }}>{restaurantInfo.phone}</span>
              </a>
              <a href={`https://${restaurantInfo.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-smooth hover:opacity-70">
                <Globe size={18} style={{ color: 'var(--text-secondary)' }} />
                <span className="body-regular" style={{ color: 'var(--text-secondary)' }}>{restaurantInfo.website}</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="heading-3 mb-6">Hours</h4>
            <div className="flex items-start gap-3 mb-4">
              <Clock size={18} className="mt-1" style={{ color: 'var(--text-secondary)' }} />
              <div>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  {restaurantInfo.hours.status}
                </p>
                <p className="body-small mt-2" style={{ color: 'var(--text-light)' }}>
                  {restaurantInfo.hours.note}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/restaurant-demo/reservations" className="btn-primary w-full">
                Make Reservation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border-light)] text-center">
          <p className="body-small" style={{ color: 'var(--text-light)' }}>
            © {new Date().getFullYear()} GW Fins. All rights reserved. | {restaurantInfo.address.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
