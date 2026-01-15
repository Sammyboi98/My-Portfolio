import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../lib/utils";
import DesignShots from "./DesignShots";

interface FeaturedProjectsProps {
  viewAllLink?: string;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  viewAllLink = "/projects",
}) => {
  return (
    <motion.section
      className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 sm:mb-12"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Featured Projects
        </h2>
        <Link
          to={viewAllLink}
          className="text-sm sm:text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-[#2AF5FF]/20 px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 group"
        >
          View all projects
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <DesignShots
              title={project.title}
              subtitle={project.subtitle}
              image={project.image}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
