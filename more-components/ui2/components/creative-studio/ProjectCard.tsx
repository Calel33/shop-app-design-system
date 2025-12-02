import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCardProps } from './types';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  className = '',
  onClick
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-card to-background ring-1 ring-border rounded-3xl overflow-hidden group hover:ring-accent/30 transition-colors cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-accent text-sm font-medium">{category}</span>
          <button className="h-8 w-8 hover:bg-muted transition-colors bg-foreground rounded-full items-center justify-center flex">
            <ArrowUpRight className="w-3.5 h-3.5 text-background" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;