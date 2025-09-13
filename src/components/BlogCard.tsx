import React from 'react';
import { Link } from 'react-router-dom';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime?: number;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-light-bg dark:bg-dark-bg border border-neutral-gray/20 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] focus:scale-[1.01] focus:shadow-lg"
    >
      <div className="flex items-start justify-between mb-3">
        <time 
          dateTime={post.date}
          className="text-sm text-neutral-gray"
        >
          {formatDate(post.date)}
        </time>
        {post.readTime && (
          <span className="text-sm text-neutral-gray">
            {post.readTime} min read
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-warm-brown group-focus:text-warm-brown transition-colors duration-200">
        {post.title}
      </h3>
      
      <p className="text-neutral-gray mb-4 leading-relaxed">
        {post.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-warm-brown/10 text-warm-brown text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default BlogCard;