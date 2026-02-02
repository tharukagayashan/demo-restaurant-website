import React from 'react';
import { Star } from 'lucide-react';
import { restaurantInfo, reviews, topMentions } from '../data/restaurantData';

const Reviews = () => {
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
          <h1 className="hero-large mb-6">Guest Reviews</h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={32} 
                  fill={i < Math.floor(restaurantInfo.rating) ? "#FFD700" : "none"}
                  color="#FFD700"
                />
              ))}
            </div>
            <span className="hero-medium">{restaurantInfo.rating}</span>
          </div>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Based on {restaurantInfo.totalReviews.toLocaleString()} reviews
          </p>
        </div>
      </section>

      {/* Top Mentions */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-6">Top Mentions</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              What our guests love most
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {topMentions.map((mention, index) => (
              <div 
                key={index}
                className="px-8 py-4 hover-lift transition-smooth"
                style={{ 
                  background: 'var(--bg-secondary)', 
                  borderRadius: '0px',
                  border: '1px solid var(--border-light)'
                }}
              >
                <span className="body-regular font-medium capitalize">{mention}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Cards */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="heading-1 text-center mb-16">Featured Reviews</h2>
          <div className="space-y-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="p-10 hover-lift"
                style={{ background: 'var(--bg-primary)', borderRadius: '0px' }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      fill="#FFD700"
                      color="#FFD700"
                    />
                  ))}
                </div>
                <p className="body-large mb-4" style={{ color: 'var(--text-primary)' }}>
                  "{review.quote}"
                </p>
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto">
          <h2 className="heading-1 text-center mb-16">What Guests Appreciate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <div className="text-5xl mb-4">🦞</div>
              <h3 className="heading-3 mb-3">Fresh Seafood</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Daily catches and innovative preparations
              </p>
            </div>
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="heading-3 mb-3">Exceptional Service</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Attentive staff and knowledgeable servers
              </p>
            </div>
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="heading-3 mb-3">Beautiful Ambiance</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Stylish warehouse space with elegant touches
              </p>
            </div>
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <div className="text-5xl mb-4">🍸</div>
              <h3 className="heading-3 mb-3">Craft Cocktails</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Creative drinks and extensive wine selection
              </p>
            </div>
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <div className="text-5xl mb-4">🍰</div>
              <h3 className="heading-3 mb-3">Desserts</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                House-made sweet endings to your meal
              </p>
            </div>
            <div 
              className="p-8 text-center hover-lift"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <div className="text-5xl mb-4">💰</div>
              <h3 className="heading-3 mb-3">Great Value</h3>
              <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                Quality and portion sizes for the price
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="heading-1 mb-6">Experience It Yourself</h2>
          <p className="body-large mb-10" style={{ color: 'var(--text-secondary)' }}>
            Join thousands of satisfied guests who have discovered exceptional seafood dining
          </p>
          <a href="/restaurant-demo/reservations" className="btn-primary">
            Make a Reservation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
