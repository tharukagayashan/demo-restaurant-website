// GW Fins Restaurant Data

export const restaurantInfo = {
  name: "GW Fins",
  category: "Seafood restaurant",
  rating: 4.8,
  totalReviews: 5125,
  priceRange: "$50–100 per person",
  tagline: "Creative, ever-shifting seafood menu featuring fresh catches in a stylish updated warehouse space.",
  phone: "+1 504-581-3467",
  website: "gwfins.com",
  address: {
    street: "808 Bienville St",
    city: "New Orleans",
    state: "LA",
    zip: "70112",
    country: "United States",
    location: "DH Holmes",
    plusCode: "XW4J+6F New Orleans, Louisiana, USA",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123!2d-90.068!3d29.956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzIxLjYiTiA5MMKwMDQnMDQuOCJX!5e0!3m2!1sen!2sus!4v1234567890"
  },
  hours: {
    status: "Closed · Opens 5 PM",
    note: "Dinner-focused"
  },
  serviceOptions: {
    dineIn: true,
    takeaway: true,
    delivery: true
  },
  reservations: {
    required: true,
    recommended: true,
    accepts: true,
    usuallyWait: true
  },
  accessibility: {
    wheelchairEntrance: true,
    wheelchairSeating: true,
    wheelchairToilet: true
  },
  amenities: {
    barOnSite: true,
    toilet: true,
    wifi: true,
    freeWifi: true
  },
  highlights: [
    "Great cocktails",
    "Great wine list",
    "Great beer selection",
    "Great coffee",
    "Great dessert",
    "Serves local specialty"
  ],
  popularFor: ["Dinner", "Solo dining"],
  atmosphere: ["Cosy", "Romantic", "Trendy", "Upmarket"],
  crowd: ["Family friendly", "Groups", "Tourists"],
  payments: ["Credit cards", "Debit cards"],
  children: {
    goodForKids: true,
    highChairs: true
  },
  parking: {
    streetParking: true,
    free: true
  }
};

export const popularDishes = [
  {
    name: "Lobster Dumplings",
    image: "https://images.unsplash.com/photo-1673663095553-357663b18983?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcGxhdGluZ3xlbnwwfHx8fDE3Njc0MjE3OTJ8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    name: "Lobster Bisque",
    image: "https://images.unsplash.com/photo-1673663095512-b188c4604a5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxzZWFmb29kJTIwcGxhdGluZ3xlbnwwfHx8fDE3Njc0MjE3OTJ8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    name: "Yellowfin Tuna Tartare",
    image: "https://images.unsplash.com/photo-1673663095553-357663b18983?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcGxhdGluZ3xlbnwwfHx8fDE3Njc0MjE3OTJ8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    name: "Smoked Sizzling Oysters",
    image: "https://images.unsplash.com/photo-1673663095512-b188c4604a5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxzZWFmb29kJTIwcGxhdGluZ3xlbnwwfHx8fDE3Njc0MjE3OTJ8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    name: "Firecracker Tuna Tacos",
    image: "https://images.unsplash.com/photo-1673663095553-357663b18983?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxzZWFmb29kJTIwcGxhdGluZ3xlbnwwfHx8fDE3Njc0MjE3OTJ8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    name: "Crispy Pork Belly with Watermelon",
    image: "https://images.unsplash.com/photo-1673663095512-b188c4604a5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxzZWFmb29kJTIwcGxhdGluZ3xlbnwwfHx8fDE3Njc0MjE3OTJ8MA&ixlib=rb-4.1.0&q=85"
  }
];

export const menuData = {
  hotItems: [
    {
      name: "Lobster Dumplings",
      description: "White fish mousseline, tomatoes, lobster butter",
      price: 14.00
    },
    {
      name: "Tempura Snapper Breast",
      description: "Crispy noodle salad, Korean glaze",
      price: 14.00
    },
    {
      name: "Crispy Pork Belly",
      description: "Compressed pineapple, pickled ginger slaw",
      price: 14.00
    },
    {
      name: "Fried Oysters",
      description: "Banh mi vegetables, toasted brioche, Vietnamese glaze",
      price: 16.00
    },
    {
      name: "Barbeque Shrimp",
      description: "Abita beer, goat cheese grits, Leidenheimer crouton",
      price: 15.00
    },
    {
      name: "Panko Crusted Calamari",
      description: "Pickled vegetables, Gochujang chili aioli",
      price: 14.00
    },
    {
      name: "Fish & Chips",
      description: "Beer battered grouper, malt vinegar chips, house tartar",
      price: 16.00
    },
    {
      name: "Lobster Bisque",
      description: "Maine lobster, cognac creme fraiche",
      price: 14.00
    }
  ],
  desserts: [
    {
      name: "Salty Malty Ice Cream Pie",
      description: "Pretzel crust, caramel whipped cream",
      price: 12.00
    },
    {
      name: "White Chocolate & Caramel Bread Pudding",
      description: "Dark chocolate chunks, pecans, whipped cream",
      price: 12.00
    },
    {
      name: "Creme Brulee",
      description: "Fresh fruit",
      price: 13.00
    },
    {
      name: "Chocolate Mousse Bombe",
      description: "Raspberry coulis",
      price: 12.00
    },
    {
      name: "Dark Cherry Almond Cake",
      description: "Vanilla ice cream, toasted oat crumble",
      price: 12.00
    },
    {
      name: "GW Fins Biscuit Mix",
      description: "",
      price: 10.00
    }
  ],
  cocktails: {
    zeroProof: [
      {
        name: "French 0.75",
        description: "Fre Sparkling Brut N/A, orange bitters, gin syrup",
        price: 9.00
      },
      {
        name: "Mango No-Jito",
        description: "Mango, lime juice, mint, Fre Brut N/A",
        price: 9.00
      }
    ],
    signature: [
      {
        name: "French 75",
        description: "Branson Phantom cognac, lemon juice, simple syrup, prosecco",
        price: 14.00
      },
      {
        name: "Under the Mistletoe",
        description: "Botanist gin, Campari, pomegranate, rosemary, prosecco",
        price: 15.00
      },
      {
        name: "Bourbon Apple Pie",
        description: "Four Roses, Calvados, spiced pear, apple cinnamon",
        price: 17.00
      },
      {
        name: "Through the Night",
        description: "Diplomatico, Averna, Madeira, house cocoa bitters",
        price: 18.00
      },
      {
        name: "Jalapeno Margarita",
        description: "Dobel tequila, jalapeno, lime, salt, Grand Marnier",
        price: 14.00
      },
      {
        name: "Whistle Old Fashioned",
        description: "WhistlePig 6 Year rye, Angostura bitters, orange bitters",
        price: 25.00
      }
    ],
    afterDinner: [
      {
        name: "Everything Nice Milk Punch",
        description: "1792 Bourbon, spiced pumpkin syrup, milk",
        price: 13.00
      },
      {
        name: "Espresso Martini",
        description: "Tito's, Kahlua, Espresso",
        price: 15.00
      },
      {
        name: "Cappuccino Fins",
        description: "Kahlua, frangelico, praline liqueur, shaved chocolate",
        price: 12.00
      },
      {
        name: "Chocolate Martini",
        description: "Van Gogh Dutch Chocolate vodka, creme de cacao, chocolate rim",
        price: 15.00
      },
      {
        name: "Fins Carajillo",
        description: "Cold brew, Licor 43, Teremana Reposado",
        price: 13.00
      },
      {
        name: "Dubai Chocolate Martini",
        description: "Tito's, Russo Pistachio Cream Liqueur, Creme de cacao",
        price: 14.00
      }
    ]
  },
  coffeeNote: "Locally roasted French Truck Coffee"
};

export const reviews = [
  {
    quote: "Great service, amazing food & atmosphere, reasonably priced for the quality too.",
    author: "Guest Review"
  },
  {
    quote: "Ordered tuna tacos, the oysters, and the lobster dumplings.",
    author: "Guest Review"
  },
  {
    quote: "My chicken was tender, with a small crispy salty piece of skin, so amazing.",
    author: "Guest Review"
  }
];

export const topMentions = [
  "lobster dumplings",
  "pork belly",
  "sheepshead",
  "bread pudding",
  "dress code",
  "ice cream pie",
  "dry-aged fish"
];

export const heroImages = {
  main: "https://images.unsplash.com/photo-1744776411255-3c427c203685?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHx1cHNjYWxlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fHx8MTc2NzQyMTc4Nnww&ixlib=rb-4.1.0&q=85",
  interior: "https://images.unsplash.com/photo-1744776411221-72b8bb5665e6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHx1cHNjYWxlJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fHx8MTc2NzQyMTc4Nnww&ixlib=rb-4.1.0&q=85",
  lighting: "https://images.unsplash.com/photo-1759004285109-016ecc84aeb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHx3YXJlaG91c2UlMjByZXN0YXVyYW50JTIwbGlnaHRpbmd8ZW58MHx8fHwxNzY3NDIxODA0fDA&ixlib=rb-4.1.0&q=85",
  warehouse: "https://images.pexels.com/photos/2387804/pexels-photo-2387804.jpeg"
};

export const cocktailImages = {
  elegant1: "https://images.unsplash.com/photo-1765227548954-55aa7cfc498e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY29ja3RhaWxzfGVufDB8fHx8MTc2NzQyMTc5OHww&ixlib=rb-4.1.0&q=85",
  elegant2: "https://images.unsplash.com/photo-1746785011420-504d56709419?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxlbGVnYW50JTIwY29ja3RhaWxzfGVufDB8fHx8MTc2NzQyMTc5OHww&ixlib=rb-4.1.0&q=85"
};
