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
          <Route path="/restaurant-demo/" element={<Home />} />
          <Route path="/restaurant-demo/menu" element={<Menu />} />
          <Route path="/restaurant-demo/reservations" element={<Reservations />} />
          <Route path="/restaurant-demo/about" element={<About />} />
          <Route path="/restaurant-demo/reviews" element={<Reviews />} />
          <Route path="/restaurant-demo/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
