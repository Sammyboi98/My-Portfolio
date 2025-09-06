import { useState } from "react";
import { projects } from "../lib/utils";
import DesignShots from "./DesignShots";
const MyProjects = () => {
  const [isSelected, setIsSelected] = useState<string>("All");
  const categories = ["All", "Design Shots", "Landing Pages", "Case Studies"];
  const setNewCategory = (category: string) => {
    setIsSelected(category);
  };
  console.log(isSelected);
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-12 max-w-6xl mx-auto space-y-10">
      <div className="flex flex-wrap gap-3 justify-start">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-4xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              isSelected === category ? "bg-[#E6E6E9] text-[#0E0F0F] shadow-lg border-[#00000026]" : ""
            }`}
            onClick={() => setNewCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {
            projects.filter(project => isSelected === "All" || (project.label && project.label.toLowerCase() === isSelected.toLowerCase())).map((project, index) => (
                <DesignShots key={index} title={project.title} subtitle={project.subtitle} image={project.image} link={project.link} />
            ))
        }
      </div>
    </section>
  );
};

export default MyProjects;
