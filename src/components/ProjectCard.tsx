import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Card = project.link ? 'a' : 'div';
  
  return (
    <Card
      {...(project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group bg-light-bg dark:bg-dark-bg border border-neutral-gray/20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus:scale-[1.02] focus:shadow-lg"
    >
      <div className="aspect-video bg-neutral-gray/10 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
        />
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-heading font-semibold mb-2 group-hover:text-warm-brown group-focus:text-warm-brown transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-neutral-gray dark:text-neutral-gray-light text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-3 py-1 bg-warm-brown/10 text-warm-brown text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;