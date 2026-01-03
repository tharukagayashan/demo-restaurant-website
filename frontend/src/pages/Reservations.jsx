import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';
import { toast } from 'sonner';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    partySize: '2',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in production, this would send to backend
    console.log('Reservation submitted:', formData);
    toast.success('Reservation request received! We will contact you shortly to confirm.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      partySize: '2',
      notes: ''
    });
  };

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
          <h1 className="hero-large mb-6">Reservations</h1>
          <p className="body-large max-w-2xl mx-auto mb-4" style={{ color: 'var(--text-secondary)' }}>
            Reservations are highly recommended. We typically have a wait during peak dining hours.
          </p>
          <p className="body-regular" style={{ color: 'var(--text-meta)' }}>
            Opens daily at 5 PM for dinner service
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="heading-2 mb-8">Book Your Table</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="body-regular block mb-2" style={{ color: 'var(--text-primary)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 body-regular"
                    style={{
                      border: '1px solid var(--border-medium)',
                      borderRadius: '0px',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="body-regular block mb-2" style={{ color: 'var(--text-primary)' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 body-regular"
                    style={{
                      border: '1px solid var(--border-medium)',
                      borderRadius: '0px',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="(504) 555-0123"
                  />
                </div>

                <div>
                  <label className="body-regular block mb-2" style={{ color: 'var(--text-primary)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 body-regular"
                    style={{
                      border: '1px solid var(--border-medium)',
                      borderRadius: '0px',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="body-regular block mb-2" style={{ color: 'var(--text-primary)' }}>
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar 
                        size={18} 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        style={{ color: 'var(--text-secondary)' }}
                      />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 body-regular"
                        style={{
                          border: '1px solid var(--border-medium)',
                          borderRadius: '0px',
                          background: 'var(--bg-primary)',
                          color: 'var(--text-primary)'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="body-regular block mb-2" style={{ color: 'var(--text-primary)' }}>
                      Time *
                    </label>
                    <div className="relative">
                      <Clock 
                        size={18} 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        style={{ color: 'var(--text-secondary)' }}
                      />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 body-regular appearance-none"
                        style={{
                          border: '1px solid var(--border-medium)',
                          borderRadius: '0px',
                          background: 'var(--bg-primary)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <option value="">Select time</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                        <option value="21:30">9:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="body-regular block mb-2" style={{ color: 'var(--text-primary)' }}>
                    Party Size *
                  </label>
                  <div className="relative">
                    <Users 
                      size={18} 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      style={{ color: 'var(--text-secondary)' }}
                    />
                    <select
                      name="partySize"
                      value={formData.partySize}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 body-regular appearance-none"
                      style={{
                        border: '1px solid var(--border-medium)',
                        borderRadius: '0px',
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8 Guests</option>
                      <option value="9+">9+ Guests (Large party)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="body-regular block mb-2" style={{ color: 'var(--text-primary)' }}>
                    Special Requests or Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 body-regular resize-none"
                    style={{
                      border: '1px solid var(--border-medium)',
                      borderRadius: '0px',
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Dietary restrictions, allergies, special occasions, etc."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Request Reservation
                </button>

                <p className="body-small text-center" style={{ color: 'var(--text-light)' }}>
                  By submitting, you agree to be contacted to confirm your reservation
                </p>
              </form>
            </div>

            {/* Info Sidebar */}
            <div>
              <div 
                className="p-8 mb-8"
                style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
              >
                <h3 className="heading-3 mb-6">Reservation Information</h3>
                <ul className="space-y-4 body-regular" style={{ color: 'var(--text-secondary)' }}>
                  <li className="flex items-start gap-3">
                    <span style={{ color: 'var(--text-primary)' }}>•</span>
                    <span>Reservations are highly recommended and usually required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: 'var(--text-primary)' }}>•</span>
                    <span>We typically have a wait during peak dining hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: 'var(--text-primary)' }}>•</span>
                    <span>Dinner service begins at 5:00 PM daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: 'var(--text-primary)' }}>•</span>
                    <span>For parties of 9 or more, please call us directly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: 'var(--text-primary)' }}>•</span>
                    <span>We accommodate dietary restrictions with advance notice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: 'var(--text-primary)' }}>•</span>
                    <span>Dress code: Upmarket casual to formal</span>
                  </li>
                </ul>
              </div>

              <div 
                className="p-8"
                style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
              >
                <h3 className="heading-3 mb-6">Prefer to Call?</h3>
                <p className="body-regular mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Our team is ready to help you plan your perfect dining experience.
                </p>
                <a 
                  href={`tel:${restaurantInfo.phone}`}
                  className="flex items-center gap-3 p-4 transition-smooth hover-lift"
                  style={{ border: '1px solid var(--border-medium)', borderRadius: '0px' }}
                >
                  <Phone size={24} style={{ color: 'var(--text-primary)' }} />
                  <div>
                    <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Call us at</p>
                    <p className="body-large font-medium" style={{ color: 'var(--text-primary)' }}>
                      {restaurantInfo.phone}
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <h3 className="heading-3 mb-6">Other Options</h3>
                <div className="space-y-4">
                  <div 
                    className="p-6 hover-lift transition-smooth"
                    style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
                  >
                    <h4 className="body-large font-medium mb-2">Takeaway</h4>
                    <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                      Enjoy our cuisine at home. Call to place your order.
                    </p>
                  </div>
                  <div 
                    className="p-6 hover-lift transition-smooth"
                    style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
                  >
                    <h4 className="body-large font-medium mb-2">Delivery</h4>
                    <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                      We offer delivery service for your convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
