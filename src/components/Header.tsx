import React, { useState } from 'react';
import Nav from './Nav';
import ThemeToggle from './ThemeToggle';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-sm border-b border-neutral-gray/20">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="text-lg sm:text-xl font-heading font-semibold">
              <NavLink to={"/"}>
                <span className="text-current dancing-script ">sri</span>
                <span className="text-warm-brown">.</span>
              </NavLink>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <Nav />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-neutral-gray/10 focus:bg-neutral-gray/10 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-gray/20">
            <Nav isMobile={true} onItemClick={() => setIsMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;