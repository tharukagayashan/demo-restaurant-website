import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Wine, UtensilsCrossed, Coffee, Cake, Award } from 'lucide-react';
import { restaurantInfo, popularDishes, reviews, heroImages } from '../data/restaurantData';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-[85vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImages.main})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="hero-large text-white mb-6">
              {restaurantInfo.name}
            </h1>
            <p className="body-large text-white/90 mb-8 max-w-2xl">
              {restaurantInfo.tagline}
            </p>
            <div className="flex items-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Star size={24} fill="#FFD700" color="#FFD700" />
                <span className="body-large text-white font-medium">
                  {restaurantInfo.rating}
                </span>
                <span className="body-regular text-white/70">
                  ({restaurantInfo.totalReviews.toLocaleString()} reviews)
                </span>
              </div>
              <div className="h-6 w-px bg-white/30"></div>
              <span className="body-regular text-white/90">
                {restaurantInfo.priceRange}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/restaurant-demo/reservations" className="btn-primary bg-white/10 border-white text-white hover:bg-white hover:text-black backdrop-blur-sm">
                Reserve a Table
              </Link>
              <Link to="/restaurant-demo/menu" className="btn-primary bg-transparent border-white text-white hover:bg-white hover:text-black">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why GW Fins - Highlights */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto">
          <h2 className="heading-1 text-center mb-16">Why GW Fins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center hover-lift">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ background: 'var(--bg-secondary)' }}>
                <Wine size={32} style={{ color: 'var(--text-primary)' }} />
              </div>
              <h3 className="heading-3 mb-3">Great Cocktails & Wine</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Expertly crafted cocktails and an exceptional wine selection
              </p>
            </div>
            <div className="text-center hover-lift">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ background: 'var(--bg-secondary)' }}>
                <UtensilsCrossed size={32} style={{ color: 'var(--text-primary)' }} />
              </div>
              <h3 className="heading-3 mb-3">Ever-Changing Menu</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Fresh catches daily with creative seasonal preparations
              </p>
            </div>
            <div className="text-center hover-lift">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ background: 'var(--bg-secondary)' }}>
                <Cake size={32} style={{ color: 'var(--text-primary)' }} />
              </div>
              <h3 className="heading-3 mb-3">Amazing Desserts</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                House-made desserts that complete your dining experience
              </p>
            </div>
            <div className="text-center hover-lift">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ background: 'var(--bg-secondary)' }}>
                <Coffee size={32} style={{ color: 'var(--text-primary)' }} />
              </div>
              <h3 className="heading-3 mb-3">Great Coffee</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Locally roasted French Truck Coffee
              </p>
            </div>
            <div className="text-center hover-lift">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ background: 'var(--bg-secondary)' }}>
                <Award size={32} style={{ color: 'var(--text-primary)' }} />
              </div>
              <h3 className="heading-3 mb-3">Upmarket Atmosphere</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Stylish warehouse space perfect for any occasion
              </p>
            </div>
            <div className="text-center hover-lift">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ background: 'var(--bg-secondary)' }}>
                <Star size={32} style={{ color: 'var(--text-primary)' }} />
              </div>
              <h3 className="heading-3 mb-3">Local Specialties</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Authentic New Orleans seafood traditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">Popular Dishes</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Guest favorites from our ever-changing menu
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDishes.map((dish, index) => (
              <div 
                key={index} 
                className="hover-lift cursor-pointer"
                style={{ background: 'var(--bg-primary)', borderRadius: '0px' }}
              >
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${dish.image})` }}
                />
                <div className="p-6">
                  <h3 className="heading-3">{dish.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/restaurant-demo/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">What Guests Say</h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star size={28} fill="#FFD700" color="#FFD700" />
              <span className="heading-2">{restaurantInfo.rating}</span>
              <span className="body-large" style={{ color: 'var(--text-secondary)' }}>
                ({restaurantInfo.totalReviews.toLocaleString()} reviews)
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="p-8 hover-lift"
                style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
              >
                <p className="body-large mb-4" style={{ color: 'var(--text-primary)' }}>
                  "{review.quote}"
                </p>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/restaurant-demo/reviews" className="btn-secondary">
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-1 mb-8">Visit Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="heading-3 mb-3">Address</h3>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                    {restaurantInfo.address.street}<br />
                    {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}<br />
                    {restaurantInfo.address.location}
                  </p>
                </div>
                <div>
                  <h3 className="heading-3 mb-3">Hours</h3>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                    {restaurantInfo.hours.status}<br />
                    <span className="body-small" style={{ color: 'var(--text-light)' }}>
                      {restaurantInfo.hours.note}
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="heading-3 mb-3">Contact</h3>
                  <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                    <a href={`tel:${restaurantInfo.phone}`} className="transition-smooth hover:opacity-70">
                      {restaurantInfo.phone}
                    </a><br />
                    <a href={`https://${restaurantInfo.website}`} target="_blank" rel="noopener noreferrer" className="transition-smooth hover:opacity-70">
                      {restaurantInfo.website}
                    </a>
                  </p>
                </div>
                <div className="pt-4">
                  <Link to="/restaurant-demo/reservations" className="btn-primary">
                    Make Reservation
                  </Link>
                </div>
              </div>
            </div>
            <div 
              className="h-96 lg:h-[500px]" 
              style={{ background: 'var(--bg-primary)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4886719753643!2d-90.07057968489194!3d29.956134381928537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a609877f1f5b%3A0x7b3c3b3c3b3c3b3c!2s808%20Bienville%20St%2C%20New%20Orleans%2C%20LA%2070112!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GW Fins Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
