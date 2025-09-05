// components/FeaturedProjects.tsx
import React from "react";
import { Link } from "react-router-dom"; // or next/link if using Next.js

interface Project {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
  viewAllLink?: string;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  viewAllLink = "/projects",
}) => {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Featured Projects
        </h2>
        <Link
          to={viewAllLink}
          className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-[#2AF5FF] px-3 py-2 rounded-md flex items-center gap-1 cursor-pointer"
        >
          View all projects →
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.link}
            className="group block rounded-2xl overflow-hidden text-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
            />
            <div className="mt-4 sm:mt-6">
              <h3 className="text-base sm:text-lg font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
