import React from 'react';
import './styles.module.css';
const NavBar = () => {
  return (
    <nav className="bg-primary text-white flex justify-between items-center px-6 py-4">
      <div className="flex items-center">
        <img
          // src="/logo.png"
          // alt="Logo"
          className="mr-4 h-8 w-auto"
        />
        <span className="font-bold text-xl">
          Gomonji
        </span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a
          href="#about"
          className="text-white hover:text-secondary transition-colors duration-300"
        >
          About Us
        </a>
        <a
          href="#services"
          className="text-white hover:text-secondary transition-colors duration-300"
        >
          Our Services
        </a>
        <a
          href="#contact"
          className="text-white hover:text-secondary transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
      <div className="space-x-4 flex items-center">
        <div className="relative">
          <input
            type="text"
            className="h-10 pl-4 pr-10 rounded-lg text-sm bg-white text-gray-700 placeholder-gray-400 focus:outline-none"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-2.5 mr-3"
          >
            <svg
              className="text-gray-600 h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
        <a
          href="#login"
          className="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded transition-colors duration-300"
        >
          Login
        </a>
        <a
          href="#signup"
          className="bg-secondary hover:bg-accent text-white font-semibold py-2 px-4 border border-secondary hover:border-transparent rounded transition-colors duration-300"
        >
          Signup
        </a>
      </div>
      <div className="md:hidden">
        <button
          id="nav-toggle"
          className="text-secondary hover:text-accent focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
