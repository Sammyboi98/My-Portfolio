import { motion } from "motion/react";
import WebIcon from "./icons/webIcon";
import MobileIcon from "./icons/mobile";
import LandingPageIcon from "./icons/LandingPageIcon";
import DesignIcon from "./icons/designIcon";
import UxResearchIcon from "./icons/uxResearchIcon";
import DashboardAdmin from "./icons/dashboardAdmin";
import ProductThinking from "./icons/productThinking";

const Services = () => {
  const services = [
    {
      icon: <WebIcon />,
      title: "Web & Mobile UI/UX Design",
      description:
        "Crafting intuitive, user-friendly interfaces that enhance engagement and improve usability across web and mobile platforms. Every design is built with research-backed insights and a seamless user flow in mind.",
    },
    {
      icon: <MobileIcon />,
      title: "Mobile App Design",
      description:
        "From concept to high-fidelity prototypes, I design scalable, visually appealing, and functional mobile apps that prioritize user experience and business goals.",
    },
    {
      icon: <LandingPageIcon />,
      title: "Landing Page & Website Design",
      description:
        "Your website is your digital storefront. I create high-converting, visually stunning landing pages that capture attention, communicate your brand, and drive action.",
    },
    {
      icon: <DesignIcon />,
      title: "Design System & Branding",
      description:
        "Cohesive design matters. I help businesses build scalable design systems, component libraries, and branding guidelines that ensure consistency across all digital touchpoints.",
    },
    {
      icon: <UxResearchIcon />,
      title: "UX Research & Strategy",
      description:
        "Great design starts with understanding your users. I conduct user research, competitor analysis, and usability testing to ensure your product is intuitive and effective.",
    },
    {
      icon: <DashboardAdmin />,
      title: "Dashboard & Admin Panel",
      description:
        "I design clean, data-driven, and efficient admin panels that empower teams with clear insights and easy navigation, ensuring productivity and informed decision-making.",
    },
    {
      icon: <ProductThinking />,
      title: "Product Thinking, Strategy & Consultation",
      description:
        "More than just design—I think about the bigger picture. I align user experience with business objectives to create products that not only look great but perform exceptionally well in the market.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I don't just design—I create experiences that elevate products and
            drive business success. Whether you're building from scratch or
            refining an existing product, I provide end-to-end design solutions
            tailored to your needs.
          </p>
        </motion.div>

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 items-stretch">
          {/* Left large card */}
          <motion.div
            className="bg-[#E6E6E9] rounded-2xl p-5 sm:p-8 shadow-md h-full flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="flex flex-col items-start gap-4">
              <div className="flex-shrink-0 self-center p-3 rounded-lg">
                {services[0].icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {services[0].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {services[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center stacked */}
          <div className="flex flex-col gap-4">
            {services.slice(1, 3).map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-[#E6E6E9] rounded-xl py-5 px-2 shadow-md h-full flex flex-col"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                      {service.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right large card */}
          <motion.div
            className="bg-[#E6E6E9] rounded-2xl p-5 sm:p-8 shadow-md h-full flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="flex flex-col items-start gap-4 text-center md:text-left">
              <div className="flex-shrink-0 self-center md:self-start p-3 rounded-lg">
                {services[3].icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {services[3].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {services[3].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(4, 7).map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-[#E6E6E9] rounded-2xl p-6 shadow-md h-full flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h4 className="flex-1 text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h4>
                </div>
                <div>
                  <p className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
