import { motion } from "motion/react";
import AvatarOne from "../assets/images/img1.png";
import AvatarTwo from "../assets/images/img2.png";
import AvatarThree from "../assets/images/img3.png";
import AvatarFour from "../assets/images/img3.png";

const SkillsExpertise = () => {
  const skillsData = [
    {
      title: "Product Design",
      avatar: AvatarOne,
      skills: [
        "UI/UX Design",
        "Visual Design",
        "Design Systems",
        "Wireframing",
        "Prototyping",
      ],
      bgColor: "bg-cyan-300",
    },
    {
      title: "UX Research & Strategy",
      avatar: AvatarTwo,
      skills: [
        "User Research",
        "User Testing",
        "Information Architecture",
        "Accessibility",
        "UX Audit",
      ],
      bgColor: "bg-cyan-300",
    },
    {
      title: "Product Thinking & Business",
      avatar: AvatarThree,
      skills: [
        "Product Strategy",
        "MVP Planning",
        "Conversion Optimization",
        "Design Thinking",
        "Stakeholder Alignment",
      ],
      bgColor: "bg-cyan-300",
    },
    {
      title: "Consultation & Collaboration",
      avatar: AvatarFour,
      skills: [
        "UI/UX Training",
        "Product Consultation",
        "Design Reviews",
        "Team Workshops",
        "Mentorship",
      ],
      bgColor: "bg-cyan-300",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <motion.div
          className="text-center mb-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            Skills & Expertise
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I combine design thinking, user psychology, and business strategy to
            craft intuitive experiences that drive results. Here's how I bring
            ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="group relative rounded-tl-4xl rounded-tr-4xl rounded-2xl bg-cyan-300 p-6 pt-14 shadow-md transition-all duration-300 hover:bg-[#050A30] cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              {/* avatar overlapping top */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:translate-x-6 ring-4 ring-white">
                  <img
                    src={category.avatar}
                    alt={`${category.title} avatar`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <h3 className="text-base sm:text-2xl font-semibold text-[#050A30] group-hover:text-[#F4F4F6] transition-colors text-left mb-4">
                {category.title}
              </h3>

              <ul className="space-y-2 px-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3">
                    <span className="mt-1 w-2 h-2 bg-[#050A30] rounded-full flex-shrink-0 transition-colors duration-300 group-hover:bg-[#F4F4F6]"></span>
                    <span className="text-sm sm:text-base text-[#050A30] group-hover:text-[#F4F4F6] transition-colors duration-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsExpertise;
