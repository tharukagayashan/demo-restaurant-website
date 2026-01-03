import React from 'react';
import { MapPin, Phone, Globe, Clock, Mail, Navigation } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section 
        className="py-32"
        style={{ 
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="hero-large mb-6">Contact Us</h1>
          <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Details */}
            <div>
              <h2 className="heading-1 mb-12">Get In Touch</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div 
                  className="p-8 hover-lift"
                  style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
                >
                  <div className="flex items-start gap-4">
                    <MapPin size={28} className="flex-shrink-0 mt-1" style={{ color: 'var(--text-primary)' }} />
                    <div>
                      <h3 className="heading-3 mb-3">Address</h3>
                      <p className="body-regular mb-2" style={{ color: 'var(--text-secondary)' }}>
                        {restaurantInfo.address.street}<br />
                        {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}<br />
                        {restaurantInfo.address.country}
                      </p>
                      <p className="body-small mb-4" style={{ color: 'var(--text-light)' }}>
                        Located in {restaurantInfo.address.location}
                      </p>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address.street + ', ' + restaurantInfo.address.city)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 body-regular transition-smooth hover:opacity-70"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        <Navigation size={16} />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div 
                  className="p-8 hover-lift"
                  style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
                >
                  <div className="flex items-start gap-4">
                    <Phone size={28} className="flex-shrink-0 mt-1" style={{ color: 'var(--text-primary)' }} />
                    <div>
                      <h3 className="heading-3 mb-3">Phone</h3>
                      <a 
                        href={`tel:${restaurantInfo.phone}`}
                        className="body-large transition-smooth hover:opacity-70"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {restaurantInfo.phone}
                      </a>
                      <p className="body-small mt-2" style={{ color: 'var(--text-light)' }}>
                        Call for reservations or inquiries
                      </p>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div 
                  className="p-8 hover-lift"
                  style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
                >
                  <div className="flex items-start gap-4">
                    <Globe size={28} className="flex-shrink-0 mt-1" style={{ color: 'var(--text-primary)' }} />
                    <div>
                      <h3 className="heading-3 mb-3">Website</h3>
                      <a 
                        href={`https://${restaurantInfo.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="body-large transition-smooth hover:opacity-70"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {restaurantInfo.website}
                      </a>
                      <p className="body-small mt-2" style={{ color: 'var(--text-light)' }}>
                        Visit our official website
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div 
                  className="p-8 hover-lift"
                  style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
                >
                  <div className="flex items-start gap-4">
                    <Clock size={28} className="flex-shrink-0 mt-1" style={{ color: 'var(--text-primary)' }} />
                    <div>
                      <h3 className="heading-3 mb-3">Hours</h3>
                      <p className="body-regular mb-2" style={{ color: 'var(--text-secondary)' }}>
                        {restaurantInfo.hours.status}
                      </p>
                      <p className="body-small" style={{ color: 'var(--text-light)' }}>
                        {restaurantInfo.hours.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12">
                <h3 className="heading-2 mb-6">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/reservations" className="btn-primary flex-1 text-center">
                    Make Reservation
                  </a>
                  <a href="/menu" className="btn-primary flex-1 text-center">
                    View Menu
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Map */}
            <div>
              <div className="sticky top-24">
                <h2 className="heading-1 mb-8">Find Us</h2>
                <div 
                  className="h-[600px] mb-6" 
                  style={{ 
                    background: 'var(--bg-secondary)',
                    borderRadius: '0px'
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4886719753643!2d-90.07057968489194!3d29.956134381928537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a609877f1f5b%3A0x7b3c3b3c3b3c3b3c!2s808%20Bienville%20St%2C%20New%20Orleans%2C%20LA%2070112!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GW Fins Location Map"
                  ></iframe>
                </div>
                
                {/* Parking Info */}
                <div 
                  className="p-6"
                  style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
                >
                  <h4 className="heading-3 mb-3">Parking Information</h4>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                    {restaurantInfo.parking.free ? 'Free' : 'Paid'} street parking available nearby. 
                    Additional parking options available in the French Quarter area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="heading-1 text-center mb-12">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-primary)', borderRadius: '0px' }}
            >
              <h3 className="heading-3 mb-4">Private Events</h3>
              <p className="body-regular mb-4" style={{ color: 'var(--text-secondary)' }}>
                Host your special occasion with us
              </p>
              <a href={`tel:${restaurantInfo.phone}`} className="body-regular transition-smooth hover:opacity-70">
                Call to inquire
              </a>
            </div>
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-primary)', borderRadius: '0px' }}
            >
              <h3 className="heading-3 mb-4">Group Dining</h3>
              <p className="body-regular mb-4" style={{ color: 'var(--text-secondary)' }}>
                Special menus for parties of 9+
              </p>
              <a href="/menu" className="body-regular transition-smooth hover:opacity-70">
                View group menus
              </a>
            </div>
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-primary)', borderRadius: '0px' }}
            >
              <h3 className="heading-3 mb-4">Careers</h3>
              <p className="body-regular mb-4" style={{ color: 'var(--text-secondary)' }}>
                Join our team of professionals
              </p>
              <a href={`https://${restaurantInfo.website}`} target="_blank" rel="noopener noreferrer" className="body-regular transition-smooth hover:opacity-70">
                Visit website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
