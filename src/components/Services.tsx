import { 
  Monitor, 
  Smartphone, 
  Globe, 
  Search, 
  BarChart3, 
  Lightbulb 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700" />,
      title: "Web & Mobile UI/UX Design",
      description: "Cutting-edge, user-friendly interfaces that enhance customer experiences while ensuring accessibility across web and mobile platforms. Every design is built with research-backed insights and a seamless user flow in mind."
    },
    {
      icon: <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Mobile App Design",
      description: "From concept to high-fidelity prototypes, I design scalable, visually appealing, and functional mobile apps that prioritize user experience and business goals."
    },
    {
      icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />,
      title: "Landing Page & Website Design",
      description: "Your website is your digital storefront. I create high-converting, visually stunning pages that captivate attention, communicate your brand, and drive action."
    },
    {
      icon: <Search className="w-7 h-7 sm:w-8 sm:h-8 text-gray-600" />,
      title: "Design System & Branding",
      description: "Cohesive design matters. I help businesses build scalable design systems, component libraries, and branding guidelines that ensure consistency across all digital touchpoints."
    },
    {
      icon: <Search className="w-7 h-7 sm:w-8 sm:h-8 text-gray-600" />,
      title: "UX Research & Strategy",
      description: "Great design starts with understanding your users. I conduct user research, competitive analysis, and usability testing to ensure your product is intuitive and effective."
    },
    {
      icon: <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />,
      title: "Dashboard & Admin Panel",
      description: "I design clean, data-driven, and efficient admin panels that empower teams with clear insights and easy navigation, ensuring productivity and informed decision-making."
    },
    {
      icon: <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-600" />,
      title: "Product Thinking, Strategy & Consultation",
      description: "More than just design—I think about the bigger picture. I align user experience with business objectives to create products that not only look great but perform exceptionally well in the market."
    }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I don't just design—I create experiences that elevate products and drive business success. 
            Whether you're building from scratch or refining an existing product, I provide end-to-end design 
            solutions tailored to your needs.
          </p>
        </div>

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Left large card */}
          <div className="bg-[#E6E6E9] rounded-2xl p-5 sm:p-8 shadow-md h-full flex flex-col">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
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
          </div>

          {/* Center stacked */}
          <div className="flex flex-col gap-4">
            {services.slice(1, 3).map((service, idx) => (
              <div key={idx} className="bg-[#E6E6E9] rounded-xl p-5 shadow-md h-full flex flex-col">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
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
              </div>
            ))}
          </div>

          {/* Right large card */}
          <div className="bg-[#E6E6E9] rounded-2xl p-5 sm:p-8 shadow-md h-full flex flex-col">
            <div className="flex flex-col items-start gap-4 text-center md:text-left">
              <div className="flex-shrink-0 self-center md:self-start p-3 bg-gray-50 rounded-lg">
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
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(4, 7).map((service, idx) => (
            <div key={idx} className="bg-[#E6E6E9] rounded-2xl p-6 shadow-md h-full flex flex-col">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
