import React, { useState } from 'react';
import Search from '../components/icons/Search';

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
}

const Resources: React.FC = () => {

  const resources: Resource[] = [
    // {
    //   id: '1',
    //   title: 'Figma Design System Kit',
    //   description: 'A comprehensive design system template with components, tokens, and documentation.',
    //   url: 'https://figma.com',
    //   category: 'Design Tools',
    //   tags: ['Figma', 'Design System', 'Components'],
    // },
  ];


  return (
    <main id="main-content" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <header className="mb-8 sm:mb-10 lg:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">resources</h1>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-gray dark:text-neutral-gray-light max-w-2xl mx-auto leading-relaxed">
            a curated collection of tools, articles, and resources that i find valuable in my design practice.
          </p>
        </header>

        {/* Resources grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resources.map(resource => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-light-bg dark:bg-dark-bg border border-neutral-gray/20 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:scale-[1.02] focus:shadow-lg"
            >
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-heading font-semibold mb-2 group-hover:text-warm-brown group-focus:text-warm-brown transition-colors duration-200">
                  {resource.title}
                </h3>
                <p className="text-neutral-gray dark:text-neutral-gray-light text-sm sm:text-base mb-3 leading-relaxed">
                  {resource.description}
                </p>
                <span className="text-xs text-warm-brown font-medium bg-warm-brown/10 px-2 py-1 rounded-full">
                  {resource.category}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-neutral-gray/10 text-neutral-gray dark:text-neutral-gray-light text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {resources.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-base sm:text-lg text-neutral-gray dark:text-neutral-gray-light">still growing… new resources will appear here soon.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Resources;