import { motion } from "motion/react";
import Coming1 from "../assets/images/coming1.png";
import Coming2 from "../assets/images/coming2.png";

const CaseStudies = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-12">
      <div className="text-center space-y-4 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0E0F0F]">
          Case Studies Coming Soon
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          I’m currently curating two in-depth case studies from real-life
          projects that highlight my design process, creativity, and
          problem-solving approach. They’ll be live here soon—stay tuned!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {[Coming1, Coming2].map((img, index) => (
          <motion.div
            key={index}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Blurred Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center "
              style={{ backgroundImage: `url(${img})` }}
            />
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0E0F0F] tracking-wide">
                Coming Soon...
              </h3>
            </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
