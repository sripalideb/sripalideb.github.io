import React, { useState } from 'react';
import ProjectCard, { Project } from '../components/ProjectCard';
import Search from '../components/icons/Search';

const Projects: React.FC = () => {


  const projects: Project[] = [
    // {
    //   id: '1',
    //   title: 'E-commerce Mobile App',
    //   description: 'A modern mobile shopping experience with intuitive navigation and seamless checkout process.',
    //   tags: ['Mobile Design', 'UX/UI', 'E-commerce'],
    //   image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   link : "https://fonts.google.com/selection/embed"
    // },
  ];

  // Filter projects
  // const filteredProjects = projects.filter(project => {
  //   const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                        project.description.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesTag = !selectedTag || project.tags.includes
  //   return matchesSearch && matchesTag;
  // });

  return (
    <main id="main-content" className="py-20">
      <div className="container mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">projects</h1>
          <p className="text-lg text-neutral-gray max-w-2xl">
            a collection of design projects showcasing user experience, interface design, and creative problem-solving.
          </p>
        </header>

        {/* Search and filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}

          {/* Tag filters */}
          {/* <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTag === null
                  ? 'bg-warm-brown text-white'
                  : 'bg-neutral-gray/10 text-neutral-gray hover:bg-warm-brown/20 hover:text-warm-brown'
              }`}
              aria-pressed={selectedTag === null}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-warm-brown text-white'
                    : 'bg-neutral-gray/10 text-neutral-gray hover:bg-warm-brown/20 hover:text-warm-brown'
                }`}
                aria-pressed={selectedTag === tag}
              >
                {tag}
              </button>
            ))}
          </div> */}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-gray">coming soon! new projects are being crafted behind the scenes.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;