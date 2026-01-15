import { motion } from "motion/react";
import ContactForm from "../components/ContactForm";
import MyProjects from "../components/MyProjects";
import ProjectBg from "../assets/images/project-bg.png"; // Importing the background image
import Navbar from "../components/Nav";
import { projectsNavItems } from "../lib/utils";

import impactHeroUnderline from "../assets/svg/Vector 2.svg";

const Projects = () => {
  return (
    <>
      <section
        className="relative w-full h-[60vh] md:h-[70vh] bg-cover bg-center flex flex-col items-center justify-start overflow-hidden"
        style={{
          backgroundImage: `url(${ProjectBg})`,
          backgroundColor: "#0A0F3C", // Fallback
        }}
      >
        <Navbar navItems={projectsNavItems} />
        <motion.div
          className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto space-y-8 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Custom Nav Overlay Placeholder if needed, but standard Nav is likely global */}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mt-10">
            <span className="relative inline-block text-[#28C2FF]">
              My Projects
              {/* underline accent image */}
              <img
                src={impactHeroUnderline}
                alt="Hero Underline"
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 -bottom-4 w-full z-10"
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Explore a curated selection of my design work across various
            categories—case studies, mobile apps, dashboards, landing pages, and
            more.
          </p>
        </motion.div>
      </section>

      <MyProjects />
      <ContactForm />
    </>
  );
};

export default Projects;
