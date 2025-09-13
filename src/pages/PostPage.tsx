import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface PostData {
  title: string;
  date: string;
  tags: string[];
  readTime: number;
  content: string;
}

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [readingProgress, setReadingProgress] = useState(0);

  // Mock post data (in a real app, this would come from MDX files)
  const mockPosts: Record<string, PostData> = {
    'welcome-to-my-blog': {
      title: 'Welcome to my design journey',
      date: '2025-01-01',
      tags: ['Welcome', 'Design'],
      readTime: 3,
      content: `
        <h2>Hello and welcome!</h2>
        <p>I'm excited to share my journey as a product designer through this blog. Here, I'll document my thoughts on design, creativity, and the process behind building meaningful digital experiences.</p>
        
        <h3>What you can expect</h3>
        <p>This space will serve as a collection of insights, case studies, and reflections on the ever-evolving world of design. From initial concepts to final implementations, I'll share the stories behind my work.</p>
        
        <p>Design is more than just making things look beautiful—it's about solving problems, understanding users, and creating experiences that truly matter. Through these posts, I hope to explore the intersection of creativity and functionality.</p>
        
        <h3>Let's connect</h3>
        <p>I believe the best learning happens through conversation and collaboration. Feel free to reach out if any of these topics resonate with you, or if you'd like to discuss design, creativity, or anything in between.</p>
        
        <p>Here's to the journey ahead!</p>
      `,
    },
    'design-thinking-process': {
      title: 'My design thinking process',
      date: '2025-01-15',
      tags: ['Process', 'Design', 'UX'],
      readTime: 7,
      content: `
        <h2>Understanding the problem</h2>
        <p>Every great design starts with a deep understanding of the problem we're trying to solve. I spend significant time in this phase, conducting user research, analyzing data, and empathizing with the people who will ultimately use what I'm designing.</p>
        
        <h3>Research and discovery</h3>
        <p>My process begins with thorough research. This includes user interviews, competitive analysis, and stakeholder discussions. I believe that the best solutions come from truly understanding the context and constraints we're working within.</p>
        
        <h3>Ideation and exploration</h3>
        <p>Once I have a solid foundation of understanding, I move into the ideation phase. This is where creativity meets strategy. I explore multiple solutions, often starting with rapid sketches and low-fidelity prototypes.</p>
        
        <h3>Prototyping and testing</h3>
        <p>Ideas are only as good as their execution. I create interactive prototypes to test concepts with real users, gathering feedback and iterating based on their responses. This cycle of build-test-learn is at the heart of my process.</p>
        
        <h3>Refinement and delivery</h3>
        <p>The final phase involves refining the design based on testing insights, creating detailed specifications, and working closely with development teams to ensure the vision is realized effectively.</p>
        
        <p>This process isn't always linear—design thinking is iterative by nature, and I often find myself cycling back through earlier phases as new insights emerge.</p>
      `,
    },
  };

  useEffect(() => {
    if (slug && mockPosts[slug]) {
      setPost(mockPosts[slug]);
    }
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!post) {
    return (
      <main id="main-content" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold mb-4">Post not found</h1>
            <Link to="/blog" className="text-warm-brown hover:underline">
              ← Back to blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Reading progress bar */}
      <div className="reading-progress">
        <div 
          className="reading-progress-bar"
          style={{ width: `${readingProgress}%` }}
          aria-hidden="true"
        />
      </div>

      <main id="main-content" className="py-20">
        <div className="container mx-auto px-6">
          <article className="max-w-content mx-auto">
            {/* Back link */}
            <Link 
              to="/blog" 
              className="inline-flex items-center text-warm-brown hover:underline mb-8 font-medium"
            >
              ← Back to blog
            </Link>

            {/* Post header */}
            <header className="mb-12">
              <h1 className="text-4xl font-heading font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-neutral-gray mb-6">
                <time dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <span>{post.readTime} min read</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-warm-brown/10 text-warm-brown text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Post content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-current
                prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-xl prose-h3:font-medium prose-h3:mb-3 prose-h3:mt-6
                prose-p:mb-6 prose-p:leading-relaxed
                prose-a:text-warm-brown prose-a:no-underline hover:prose-a:underline
                dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>
    </>
  );
};

export default PostPage;