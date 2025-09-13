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
    <main id="main-content" className="py-20">
      <div className="container mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">blog</h1>
          <p className="text-lg text-neutral-gray max-w-2xl">
            thoughts on design, creativity, and the process behind building meaningful digital experiences.
          </p>
        </header>

        <div className="max-w-4xl space-y-8">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-gray">cooking up something fun. stay tuned!!!!</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;