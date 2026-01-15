import { motion } from "motion/react";
import { useState } from "react";
import { projects, landingPages } from "../lib/utils";
import DesignShots from "./DesignShots";
import LandingPages from "./LandingPages";
import CaseStudies from "./CaseStudies";

const MyProjects = () => {
  const [isSelected, setIsSelected] = useState<string>("Design Shots");
  const categories = ["Design Shots", "Landing Pages", "Case Studies"];

  const setNewCategory = (category: string) => {
    setIsSelected(category);
  };

  return (
    <section className="bg-[#E6E6E9] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Filter Tabs */}
        {/* ... existing filters ... */}
        <div className="flex flex-wrap justify-start gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                isSelected === category
                  ? "bg-white text-[#050A30] shadow-md ring-1 ring-[#050A30]/5"
                  : "bg-transparent text-gray-500 hover:text-[#050A30] hover:bg-white/50"
              }`}
              onClick={() => setNewCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="w-full"
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {isSelected === "Landing Pages" ? (
            <LandingPages landingPages={landingPages} />
          ) : isSelected === "Case Studies" ? (
            <CaseStudies />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {projects
                .filter(
                  (project) =>
                    project.label &&
                    project.label.toLowerCase() === isSelected.toLowerCase()
                )
                .map((project, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-center"
                    layout
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                  >
                    <div className="w-full max-w-lg">
                      <DesignShots
                        title={project.title}
                        subtitle={project.subtitle}
                        image={project.image}
                        link={project.link}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;
