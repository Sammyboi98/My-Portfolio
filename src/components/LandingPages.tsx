import { motion } from "motion/react";
import { MoveRight } from "lucide-react";

interface LandingPageProps {
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

const LandingPages = ({
  landingPages,
}: {
  landingPages: LandingPageProps[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
      {landingPages.map((project, index) => (
        <motion.div
          key={index}
          className="flex flex-col gap-6 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Card Container */}
          <div className="bg-[#111] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-2">
            {/* Image Container with specific aspect ratio/padding to match design */}
            <div className="relative aspect-[4/3] bg-[#0A0A0A] p-6 flex items-center justify-center">
              {/* Device/Browser frame mockup effect can be enhanced here if needed */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded-md shadow-lg transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-[#0E0F0F]">
                {project.title}
              </h3>
              <p className="text-gray-500 text-lg">{project.subtitle}</p>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0F3C] text-white rounded-full text-sm font-medium hover:bg-[#1a237e] transition-colors"
              >
                View Live Page
              </a>
            )}
            {!project.link && (
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0F3C] text-white rounded-full text-sm font-medium hover:bg-[#1a237e] transition-colors"
              >
                View Project
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LandingPages;
