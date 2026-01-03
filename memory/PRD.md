# GW Fins Restaurant Website - Product Requirements Document

## Project Overview
**Product Name:** GW Fins Professional Restaurant Website  
**Tech Stack:** React + Vite + Tailwind CSS + FastAPI + MongoDB  
**Design System:** Luxury Minimalist (Premium Commerce)  
**Date Created:** January 3, 2025

---

## Original Problem Statement
Build a Professional Restaurant Website (GW Fins) - A modern, premium, conversion-focused restaurant website for an upscale seafood restaurant in New Orleans. The website must feel upmarket, romantic, trendy, and match a stylish updated warehouse vibe.

**User Choices:**
1. Multi-page site with separate routes ✅
2. High-quality stock images ✅
3. Simple contact form (frontend) ✅
4. Embedded Google Maps ✅
5. React + Tailwind + Vite ✅

---

## User Personas

### Primary Persona: Fine Dining Enthusiasts
- Age: 35-65
- Seeking upscale dining experiences
- Values quality, ambiance, and service
- Likely to make reservations in advance
- Budget: $50-100 per person

### Secondary Persona: Tourists & Visitors
- Researching New Orleans dining
- Reading reviews before deciding
- Need clear location/hours information
- May book last-minute

### Tertiary Persona: Local Regulars
- Familiar with rotating menu
- Interested in seasonal specials
- May use takeaway/delivery options

---

## Core Requirements (Static)

### Functional Requirements
1. **Multi-page Navigation**
   - Home, Menu, Reservations, About, Reviews, Contact
   - Sticky navigation header
   - Mobile-responsive menu

2. **Reservation System**
   - Form captures: name, phone, email, date, time, party size, notes
   - Frontend validation
   - Toast notification on submission

3. **Menu Display**
   - Starters & Small Plates
   - Desserts
   - Cocktails (Zero-Proof, Signature, After Dinner)
   - Group Dinner Menus (accordion expandable)
   - Prices displayed

4. **Location & Contact**
   - Embedded Google Maps
   - Full contact information
   - Hours of operation
   - Parking information

5. **Reviews Section**
   - Display rating (4.8★)
   - Show total reviews (5,125)
   - Featured guest testimonials
   - Top mentions/keywords

### Design Requirements
- Warm neutral color palette (#fffef2 background)
- Sharp rectangular buttons (0px border radius)
- Generous white space (120px section padding)
- Typography hierarchy using Inter font family
- High-quality imagery throughout
- Hover animations and smooth transitions
- No bright gradients or saturated colors

---

## What's Been Implemented

### Phase 1: Frontend Development (January 3, 2025) ✅

**Pages Created:**
- `/` - Home page with hero, highlights, popular dishes, reviews preview, location
- `/menu` - Full menu with all categories and prices
- `/reservations` - Booking form with validation
- `/about` - Restaurant story, atmosphere, amenities
- `/reviews` - Guest reviews, ratings, top mentions
- `/contact` - Contact info, map, quick actions

**Components:**
- `Navigation.jsx` - Sticky header with desktop/mobile menu
- `Footer.jsx` - Site footer with links and contact info

**Data Structure:**
- `restaurantData.js` - Centralized data store with:
  - Restaurant information
  - Menu items (hot items, desserts, cocktails)
  - Reviews and testimonials
  - Images URLs

**Styling:**
- `restaurant.css` - Luxury minimalist design system
- Warm color palette variables
- Typography classes
- Button styles (primary, secondary, icon)
- Responsive breakpoints

**Features Implemented:**
- Toast notifications (Sonner)
- Form validation
- Responsive navigation
- Google Maps embed
- Smooth scroll sections
- Hover effects and transitions

---

## Architecture

### Frontend Structure
```
/app/frontend/src/
├── components/
│   ├── Navigation.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Reservations.jsx
│   ├── About.jsx
│   ├── Reviews.jsx
│   └── Contact.jsx
├── data/
│   └── restaurantData.js
├── styles/
│   └── restaurant.css
└── App.js
```

### Backend (To Be Implemented)
```
/app/backend/
├── models/
│   └── reservation.py
├── routes/
│   ├── reservations.py
│   └── contact.py
└── server.py
```

---

## API Contracts (Future Backend)

### Reservations API

**POST /api/reservations**
```json
Request:
{
  "name": "John Doe",
  "phone": "+1 504-555-0123",
  "email": "john@example.com",
  "date": "2025-01-15",
  "time": "19:00",
  "partySize": "4",
  "notes": "Anniversary dinner"
}

Response:
{
  "success": true,
  "reservationId": "res_123456",
  "message": "Reservation request received. We will contact you shortly."
}
```

**GET /api/reservations**
- Admin endpoint to fetch all reservations
- Requires authentication

### Contact Form API

**POST /api/contact**
```json
Request:
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Private Event Inquiry",
  "message": "Interested in booking for a party of 20..."
}

Response:
{
  "success": true,
  "message": "Message received. We'll respond within 24 hours."
}
```

---

## Mock Data vs Backend

**Currently Mocked (Frontend Only):**
- Reservation form submission (displays toast, no database storage)
- All menu items (static data in restaurantData.js)
- Reviews and testimonials (static)
- Restaurant information (static)

**To Be Integrated with Backend:**
- Reservation storage in MongoDB
- Email notifications for new reservations
- Admin panel to view/manage reservations
- Contact form submissions
- Menu management system (admin can update items/prices)

---

## Prioritized Backlog

### P0 - Critical (Next Phase)
1. **Backend Integration**
   - Set up reservation model in MongoDB
   - Create POST /api/reservations endpoint
   - Integrate frontend form with backend
   - Add email notification system

2. **Testing**
   - Test all page navigation
   - Test form submissions
   - Test responsive design on mobile/tablet
   - Test map functionality

### P1 - High Priority
1. **Admin Panel**
   - Authentication system
   - Dashboard to view reservations
   - Ability to confirm/cancel reservations
   - Menu management interface

2. **Enhancements**
   - Add loading states to forms
   - Implement form error handling
   - Add reservation confirmation emails
   - Add calendar availability checking

### P2 - Nice to Have
1. **Online Ordering**
   - Shopping cart for takeaway/delivery
   - Payment integration (Stripe)
   - Order tracking system

2. **Features**
   - Newsletter subscription
   - Social media integration
   - Blog/news section for updates
   - Gift card purchase system
   - Customer accounts (save favorite orders)

3. **SEO & Performance**
   - Meta tags optimization
   - Schema.org structured data
   - Image optimization
   - Performance monitoring

---

## Next Tasks

### Immediate (After Completion)
1. User testing of all pages
2. Cross-browser compatibility check
3. Accessibility audit
4. Performance optimization

### Short-term (Next Sprint)
1. Backend development for reservations
2. Email notification setup
3. Admin authentication
4. Database schema implementation

### Long-term
1. Online ordering system
2. Customer reviews integration
3. Analytics dashboard
4. Marketing automation

---

## Technical Debt & Notes
- Using Inter font as fallback for Suisse International
- Google Maps embed uses generic coordinates (needs actual restaurant coordinates)
- Form submission is frontend-only (needs backend)
- No actual reservation availability checking yet
- Images are stock photos (client should replace with real restaurant photos)

---

## Success Metrics
- Page load time < 3 seconds
- Mobile responsiveness: 100% functional
- Reservation conversion rate target: 15%
- User engagement: avg 3+ pages per session
- Bounce rate: < 40%

---

*Document Version: 1.0*  
*Last Updated: January 3, 2025*
