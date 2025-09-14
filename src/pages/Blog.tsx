import React, { useState } from 'react';
import BlogCard, { BlogPost } from '../components/BlogCard';

const Blog: React.FC = () => {


  // Mock blog data
  const posts: BlogPost[] = [
    // {
    //   slug: 'welcome-to-my-blog',
    //   title: 'Welcome to my design journey',
    //   date: '2025-01-01',
    //   excerpt: 'Starting a new chapter in documenting my thoughts on design, process, and creativity.',
    //   tags: ['Welcome', 'Design'],
    //   readTime: 3,
    // },
  ];



  return (
    <main id="main-content" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <header className="mb-8 sm:mb-10 lg:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">blog</h1>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-gray dark:text-neutral-gray-light max-w-2xl mx-auto leading-relaxed">
            thoughts on design, creativity, and the process behind building meaningful digital experiences.
          </p>
        </header>

        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-base sm:text-lg text-neutral-gray dark:text-neutral-gray-light">cooking up something fun. stay tuned!!!!</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;