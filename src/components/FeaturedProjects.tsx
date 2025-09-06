// components/FeaturedProjects.tsx
import React from "react";
import { Link } from "react-router-dom"; // or next/link if using Next.js
import { projects } from "../lib/utils";
import DesignShots from "./DesignShots";

interface FeaturedProjectsProps {
  viewAllLink?: string;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
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
          <DesignShots key={index} title={project.title} subtitle={project.subtitle} image={project.image} link={project.link} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
