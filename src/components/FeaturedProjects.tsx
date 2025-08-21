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
  viewAllLink,
}) => {
  return (
    <section className="w-full py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center sm:text-left">Featured Projects</h2>
          {viewAllLink && (
            <Link
              to={viewAllLink}
              className="text-sm sm:text-base p-3 sm:p-4 font-medium text-[#050A30] hover:bg-[#2AF5FF] rounded-lg transition-all duration-300"
            >
              View all projects →
            </Link>
          )}
        </div>
        {/* Projects Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-lg transition-all duration-300 overflow-hidden flex flex-col p-3 sm:p-4 hover:bg-[#1C2260] text-[#000] hover:text-[#F4F4F6] cursor-pointer hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-lg"
              />
              <div className="p-3 sm:p-4 flex-1 items-center text-center flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base">{project.subtitle}</p>
                </div>
                <Link
                  to={project.link}
                  className="mt-4 rounded-full bg-[#050A30] px-4 py-2 text-sm sm:text-base font-medium text-[#F4F4F6] hover:bg-[#2AF5FF] hover:text-[#050A30] text-center transition-all duration-300"
                >
                  View projects
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
