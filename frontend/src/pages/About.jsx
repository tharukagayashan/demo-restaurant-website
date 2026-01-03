import React from 'react';
import { restaurantInfo, heroImages } from '../data/restaurantData';
import { Users, Utensils, Heart, Award, Accessibility, Wifi, Car } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section 
        className="relative py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImages.interior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="hero-large text-white mb-6">About GW Fins</h1>
          <p className="body-large text-white/90 max-w-2xl mx-auto">
            {restaurantInfo.tagline}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6">Our Story</h2>
            <div className="space-y-6 body-large" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Nestled in the heart of New Orleans' historic French Quarter, GW Fins has redefined 
                fine seafood dining since our opening. Our stylish, updated warehouse space provides 
                the perfect backdrop for an unforgettable culinary experience.
              </p>
              <p>
                What sets us apart is our unwavering commitment to freshness and creativity. Our menu 
                is ever-shifting, changing daily to showcase the finest catches from sustainable sources. 
                Each dish is a testament to our chef's innovation and respect for the ingredients.
              </p>
              <p>
                Whether you're celebrating a special occasion, enjoying a romantic dinner, or gathering 
                with friends and family, GW Fins offers an upmarket yet welcoming atmosphere that 
                captures the essence of New Orleans hospitality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="h-80 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${heroImages.warehouse})`,
                borderRadius: '0px'
              }}
            />
            <div 
              className="h-80 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${heroImages.lighting})`,
                borderRadius: '0px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6">The Experience</h2>
            <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              An atmosphere that combines industrial elegance with intimate comfort
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {restaurantInfo.atmosphere.map((vibe, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full"
                  style={{ background: 'var(--bg-primary)' }}
                >
                  <Heart size={32} style={{ color: 'var(--text-primary)' }} />
                </div>
                <p className="body-regular font-medium capitalize">{vibe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & Features */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6">Amenities & Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Accessibility */}
            <div 
              className="p-8 hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <Accessibility size={32} className="mb-4" style={{ color: 'var(--text-primary)' }} />
              <h3 className="heading-3 mb-3">Fully Accessible</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Wheelchair-accessible entrance, seating, and restrooms
              </p>
            </div>

            {/* Bar */}
            <div 
              className="p-8 hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <Utensils size={32} className="mb-4" style={{ color: 'var(--text-primary)' }} />
              <h3 className="heading-3 mb-3">Bar On Site</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Full bar with exceptional cocktails, wine, and beer selection
              </p>
            </div>

            {/* WiFi */}
            <div 
              className="p-8 hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <Wifi size={32} className="mb-4" style={{ color: 'var(--text-primary)' }} />
              <h3 className="heading-3 mb-3">Free Wi-Fi</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Complimentary high-speed wireless internet
              </p>
            </div>

            {/* Family Friendly */}
            <div 
              className="p-8 hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <Users size={32} className="mb-4" style={{ color: 'var(--text-primary)' }} />
              <h3 className="heading-3 mb-3">Family Friendly</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Welcoming to families with high chairs available
              </p>
            </div>

            {/* Parking */}
            <div 
              className="p-8 hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <Car size={32} className="mb-4" style={{ color: 'var(--text-primary)' }} />
              <h3 className="heading-3 mb-3">Street Parking</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Free street parking available nearby
              </p>
            </div>

            {/* Awards */}
            <div 
              className="p-8 hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <Award size={32} className="mb-4" style={{ color: 'var(--text-primary)' }} />
              <h3 className="heading-3 mb-3">Highly Rated</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                {restaurantInfo.rating} stars with {restaurantInfo.totalReviews.toLocaleString()}+ reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-6">Dining Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-primary)', borderRadius: '0px' }}
            >
              <h3 className="heading-2 mb-4">Dine-In</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Experience our full menu in our elegant dining room
              </p>
            </div>
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-primary)', borderRadius: '0px' }}
            >
              <h3 className="heading-2 mb-4">Takeaway</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Enjoy our cuisine in the comfort of your home
              </p>
            </div>
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-primary)', borderRadius: '0px' }}
            >
              <h3 className="heading-2 mb-4">Delivery</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Fresh seafood delivered to your door
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular For */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto text-center">
          <h2 className="heading-1 mb-12">Perfect For</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[...restaurantInfo.popularFor, ...restaurantInfo.crowd].map((item, index) => (
              <div 
                key={index}
                className="px-6 py-3 hover-lift transition-smooth"
                style={{ 
                  background: 'var(--bg-secondary)', 
                  borderRadius: '0px',
                  textTransform: 'capitalize'
                }}
              >
                <span className="body-regular">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
