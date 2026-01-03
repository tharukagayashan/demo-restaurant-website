import React, { useState } from 'react';
import { menuData, cocktailImages } from '../data/restaurantData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MenuSection = ({ title, items, showPrices = true }) => {
  return (
    <div className="mb-16">
      <h3 className="heading-2 mb-8" style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h4 className="heading-3 mb-2">{item.name}</h4>
              {item.description && (
                <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              )}
            </div>
            {showPrices && (
              <span className="body-regular font-medium flex-shrink-0" style={{ color: 'var(--text-primary)' }}>
                ${item.price.toFixed(2)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const GroupDinnerMenu = ({ menuNumber, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="mb-4 transition-smooth"
      style={{ border: '1px solid var(--border-light)', borderRadius: '0px' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center hover:bg-[var(--bg-secondary)] transition-smooth"
      >
        <h4 className="heading-3">Group Dinner Menu {menuNumber}</h4>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0" style={{ borderTop: '1px solid var(--border-light)' }}>
          <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
            {items}
          </p>
        </div>
      )}
    </div>
  );
};

const Menu = () => {
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
          <h1 className="hero-large mb-6">Our Menu</h1>
          <p className="body-large max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Our menu is ever-shifting, featuring the freshest catches and seasonal ingredients. 
            Dishes change based on availability and our chef's creativity.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto max-w-4xl">
          {/* Starters / Hot Items */}
          <MenuSection 
            title="Starters & Small Plates" 
            items={menuData.hotItems}
          />

          {/* Desserts */}
          <MenuSection 
            title="Desserts" 
            items={menuData.desserts}
          />

          {/* Cocktails */}
          <div className="mb-16">
            <h3 className="heading-2 mb-8" style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
              Specialty Cocktails
            </h3>
            
            {/* Zero-Proof */}
            <div className="mb-10">
              <h4 className="heading-3 mb-6">Zero-Proof</h4>
              <div className="space-y-6">
                {menuData.cocktails.zeroProof.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h5 className="body-large font-medium mb-2">{item.name}</h5>
                      <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>
                    </div>
                    <span className="body-regular font-medium flex-shrink-0" style={{ color: 'var(--text-primary)' }}>
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature Cocktails */}
            <div className="mb-10">
              <h4 className="heading-3 mb-6">Signature Cocktails</h4>
              <div className="space-y-6">
                {menuData.cocktails.signature.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h5 className="body-large font-medium mb-2">{item.name}</h5>
                      <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>
                    </div>
                    <span className="body-regular font-medium flex-shrink-0" style={{ color: 'var(--text-primary)' }}>
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* After Dinner */}
            <div className="mb-10">
              <h4 className="heading-3 mb-6">After Dinner Drinks</h4>
              <div className="space-y-6">
                {menuData.cocktails.afterDinner.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h5 className="body-large font-medium mb-2">{item.name}</h5>
                      <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>
                    </div>
                    <span className="body-regular font-medium flex-shrink-0" style={{ color: 'var(--text-primary)' }}>
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coffee Note */}
            <div 
              className="p-6 mt-8"
              style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
            >
              <p className="body-regular" style={{ color: 'var(--text-primary)' }}>
                ☕ {menuData.coffeeNote}
              </p>
            </div>
          </div>

          {/* Group Dinner Menus */}
          <div className="mb-16">
            <h3 className="heading-2 mb-8" style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
              Group Dinner Menus
            </h3>
            <p className="body-regular mb-6" style={{ color: 'var(--text-secondary)' }}>
              Perfect for parties and special occasions. Please contact us to discuss options and pricing.
            </p>
            <GroupDinnerMenu 
              menuNumber="I" 
              items="Customized selection featuring our signature starters, fresh catches, and house-made desserts."
            />
            <GroupDinnerMenu 
              menuNumber="II" 
              items="Premium seafood experience with chef's choice preparations and wine pairings."
            />
            <GroupDinnerMenu 
              menuNumber="III" 
              items="Grand tasting menu showcasing seasonal specialties and innovative presentations."
            />
            <GroupDinnerMenu 
              menuNumber="IV" 
              items="Executive dining experience with rare catches and premium cocktails."
            />
            <GroupDinnerMenu 
              menuNumber="V" 
              items="Ultimate celebration menu featuring the finest selections and exclusive preparations."
            />
          </div>

          {/* Menu Note */}
          <div 
            className="p-8 text-center"
            style={{ background: 'var(--bg-secondary)', borderRadius: '0px' }}
          >
            <p className="body-large mb-2" style={{ color: 'var(--text-primary)' }}>
              Please note: Our menu changes frequently based on the freshest available catches.
            </p>
            <p className="body-regular" style={{ color: 'var(--text-secondary)' }}>
              Items and prices are subject to change. Ask your server about today's specials.
            </p>
          </div>
        </div>
      </section>

      {/* Cocktail Showcase */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="h-96 bg-cover bg-center hover-lift"
              style={{ backgroundImage: `url(${cocktailImages.elegant1})`, borderRadius: '0px' }}
            />
            <div 
              className="h-96 bg-cover bg-center hover-lift"
              style={{ backgroundImage: `url(${cocktailImages.elegant2})`, borderRadius: '0px' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
