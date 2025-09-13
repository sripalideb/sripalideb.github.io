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
    <main id="main-content" className="py-20">
      <div className="container mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">resources</h1>
          <p className="text-lg text-neutral-gray max-w-2xl">
            a curated collection of tools, articles, and resources that i find valuable in my design practice.
          </p>
        </header>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map(resource => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-light-bg dark:bg-dark-bg border border-neutral-gray/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:scale-[1.02] focus:shadow-lg"
            >
              <div className="mb-4">
                <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-warm-brown group-focus:text-warm-brown transition-colors duration-200">
                  {resource.title}
                </h3>
                <p className="text-neutral-gray text-sm mb-3 leading-relaxed">
                  {resource.description}
                </p>
                <span className="text-xs text-warm-brown font-medium bg-warm-brown/10 px-2 py-1 rounded-full">
                  {resource.category}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-neutral-gray/10 text-neutral-gray text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {resources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-gray">still growing… new resources will appear here soon.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Resources;