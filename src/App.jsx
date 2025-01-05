import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

import AboutUsPage from "./Components/AboutUsPage";
import BlogPage from "./Components/BlogPage";
import ContactUsPage from "./Components/ContactUsPage";
import Homepage from "./Components/Homepage";
import Navigation from "./Components/Navigation";
import ProductsPage from "./Components/ProductsPage";
import ServicesPage from "./Components/ServicesPage";
import SmartphoneBlog from "./Blogs/SmartphoneBlog";
import BatteryLifeBlog from "./Blogs/BatteryLifeBlog";
import MobileTechBlog from "./Blogs/MobileTechBlog";
import "./index.css";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <Navigation />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/1" element={<SmartphoneBlog />} />
          <Route path="/blog/2" element={<BatteryLifeBlog />} />
          <Route path="/blog/3" element={<MobileTechBlog />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-black text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Left Section */}
              <div className="text-center md:text-left">
                <p className="text-sm mb-2">
                  <span className="font-semibold">
                    © 2025 Narayan Mobile Shop. All Rights Reserved.
                  </span>
                </p>
                <p className="text-sm mb-2">
                  Established in 2011, we have been serving the community with
                  the best mobile deals, repair services, and same-day delivery.
                </p>
                <p className="text-sm mb-4">
                  Visit us at:{" "}
                  <span className="font-semibold">
                    G-18, Goyal Complex, Nishatganj, Lucknow, Uttar Pradesh
                    226007
                  </span>
                </p>
              </div>

              {/* Right Section with Icons */}
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <a
                  href="tel:+919208881234"
                  className="flex items-center text-white hover:text-gray-300 transition duration-300 mb-4 md:mb-0"
                >
                  <FaPhoneAlt className="mr-2" /> Call Us: 092088 81234
                </a>
                <a
                  href="https://wa.me/919208881234?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-gray-300 transition duration-300 mb-4 md:mb-0"
                >
                  <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                </a>
                <a
                  href="https://www.google.com/maps/search/?q=Narayan+Mobile+Shop,+Nishatganj,+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-gray-300 transition duration-300"
                >
                  <FaMapMarkerAlt className="mr-2" /> Find Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
