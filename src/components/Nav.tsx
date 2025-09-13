import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  const navItems = [
    { to: '/projects', label: 'projects' },
    { to: '/blog', label: 'blog' },
    { to: '/resources', label: 'resources' },
    { to: '/about', label: 'about' },
    { to: '/contact', label: 'contact' },
  ];

  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul className="flex items-center space-x-8">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `relative py-2 px-3 text-sm font-medium transition-colors duration-200 hover:text-warm-brown focus:text-warm-brown ${
                  isActive ? 'text-warm-brown' : 'text-current'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-warm-brown"
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