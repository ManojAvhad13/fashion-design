import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaHome, FaImage, FaPhoneAlt, FaBriefcase } from "react-icons/fa";  // Icons for Home, Gallery, Contact, Portfolio
import { IoPersonCircle } from "react-icons/io5";  // Icon for User (Register)
import { BsCalendarCheck } from "react-icons/bs";  // Icon for Booking
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import RegistrationForm from "./components/RegistrationForm";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle the menu toggle

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);  // Close the menu when a link is clicked

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Shambhu Fashin Design</h1>

            {/* Hamburger Icon for Mobile */}
            <button
              className="lg:hidden text-white"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            {/* Links */}
            <ul className={`lg:flex space-x-4 ${isMenuOpen ? "block absolute top-0 left-0 w-full h-30 bg-gray-800 bg-opacity-90 z-50 p-8 space-y-6 flex-col justify-center items-center transition-all ease-in-out duration-300" : "hidden"} lg:block`}>
              <li><Link to="/" className="hover:text-gray-300 flex items-center" onClick={closeMenu}><FaHome className="mr-2" />Home</Link></li>
              <li><Link to="/gallery" className="hover:text-gray-300 flex items-center" onClick={closeMenu}><FaImage className="mr-2" />Gallery</Link></li>
              <li><Link to="/booking" className="hover:text-gray-300 flex items-center" onClick={closeMenu}><BsCalendarCheck className="mr-2" />Booking</Link></li>
              <li><Link to="/register" className="hover:text-gray-300 flex items-center" onClick={closeMenu}><IoPersonCircle className="mr-2" />Register</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-300 flex items-center" onClick={closeMenu}><FaBriefcase className="mr-2" />Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300 flex items-center" onClick={closeMenu}><FaPhoneAlt className="mr-2" />Contact</Link></li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2025 Shambhu Fashion Design. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
