import React from 'react';
import User from './icons/User';
import Folder from './icons/Folder';
import FileText from './icons/FileText';
import Search from './icons/Search';
import Mail from './icons/Mail';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const actionItems = [
    { icon: User, label: 'about', to: '/about' },
    { icon: Folder, label: 'projects', to: '/projects' },
    { icon: FileText, label: 'blog', to: '/blog' },
    { icon: Search, label: 'resources', to: '/resources' },
    { icon: Mail, label: 'contact', to: '/contact' },
  ];

  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main card */}
        <div className="bg-light-bg dark:bg-neutral-900 border border-neutral-gray/20 rounded-2xl p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Hero text */}
          <div className="mb-12">
            <h1 className="text-6xl font-heading font-bold mb-4 leading-tight ">
              hi! i'm <span className="text-warm-brown dancing-script">sri</span>
            </h1>
            <p className="text-xl text-neutral-gray font-medium">
              i design, dance, build, and play with ai, and this site is my little diary where i yap about it all.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center space-x-8">
            {actionItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group flex flex-col items-center space-y-3 p-4 rounded-lg transition-all duration-200 hover:scale-105 focus:scale-105 hover:bg-neutral-gray/5 focus:bg-neutral-gray/5"
                  aria-label={`Go to ${item.label} page`}
                >
                  <div className="p-3 bg-neutral-gray/35 rounded-full group-hover:bg-warm-brown/20 group-focus:bg-warm-brown/20 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-neutral-gray group-hover:text-warm-brown group-focus:text-warm-brown transition-colors duration-200" />
                  </div>
                  <span className="text-sm font-medium text-neutral-gray group-hover:text-warm-brown group-focus:text-warm-brown transition-colors duration-200">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;