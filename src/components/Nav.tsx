import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

const Nav: React.FC<NavProps> = ({ isMobile = false, onItemClick }) => {
  const navItems = [
    { to: '/about', label: 'about' },
    { to: '/blog', label: 'blog' },
    { to: '/projects', label: 'projects' },
    { to: '/resources', label: 'resources' },
    { to: '/contact', label: 'contact' },
  ];

  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul className={`flex ${isMobile ? 'flex-col space-y-2' : 'items-center space-x-6 lg:space-x-8'}`}>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              onClick={onItemClick}
              className={({ isActive }) =>
                `relative py-2 px-3 text-sm font-medium transition-colors duration-200 hover:text-warm-brown focus:text-warm-brown ${
                  isActive ? 'text-warm-brown' : 'text-current'
                } ${isMobile ? 'block w-full text-left' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && !isMobile && (
                    <span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-warm-brown"
                      aria-hidden="true"
                    />
                  )}
                  {isActive && isMobile && (
                    <span 
                      className="absolute left-0 top-0 bottom-0 w-1 bg-warm-brown"
                      aria-hidden="true"
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;