import React from "react";
import "@/App.css";
import "./styles/restaurant.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// Layout Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/demo-restaurant-website" element={<Home />} />
          <Route path="/demo-restaurant-website/menu" element={<Menu />} />
          <Route path="/demo-restaurant-website/reservations" element={<Reservations />} />
          <Route path="/demo-restaurant-website/about" element={<About />} />
          <Route path="/demo-restaurant-website/reviews" element={<Reviews />} />
          <Route path="/demo-restaurant-website/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
