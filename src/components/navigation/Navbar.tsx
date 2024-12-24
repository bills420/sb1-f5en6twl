import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-deep-black/90 backdrop-blur-sm z-50 theme-transition">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://pps.whatsapp.net/v/t61.24694-24/470027058_1139593527735297_4561882821730127384_n.jpg?ccb=11-4&oh=01_Q5AaINmXaRCTnzmZYTN2bF2tcYQV-IdItSHLfI_fyfO-EyCO&oe=676BE9E4&_nc_sid=5e03e0&_nc_cat=111"
              alt="Bills Co Logo"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-3">
              <span className="text-2xl font-bold white-text">BILLS CO.</span>
              <span className="text-off-white text-sm block">
                LABOUR|BEAUTIFICATION|WEB|MUSIC
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-pure-white hover:text-off-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="text-pure-white hover:text-off-white transition-colors"
            >
              Work
            </Link>
            <Link
              to="/services"
              className="text-pure-white hover:text-off-white transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-pure-white hover:text-off-white transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
            <a
              href="mailto:info@billsco.co.nz"
              className="button-gradient px-6 py-2 rounded-lg text-pure-white"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
