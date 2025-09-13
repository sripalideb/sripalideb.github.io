import React from 'react';
import Nav from './Nav';
import ThemeToggle from './ThemeToggle';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-sm border-b border-neutral-gray/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-heading font-semibold">
              <NavLink to={"/"}>
                <span className="text-current dancing-script ">sri</span>
                <span className="text-warm-brown">.</span>
              </NavLink>
            </div>
            <Nav />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;