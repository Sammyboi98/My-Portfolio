import Navbar from "../components/Nav";

import HeroImage from "../assets/images/hero.png";

const Hero: React.FC = () => {
  return (
  <div className="bg-[#1C2260] min-h-screen flex flex-col text-white font-Lato px-4 sm:px-6 lg:px-12 xl:px-20 pt-6 lg:pt-12">
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center items-center h-full py-8 lg:py-12 gap-6 lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start max-w-2xl space-y-6 text-white text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Designing Digital
            <br /> Experiences That Drive
            <br /> Impact
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-2 lg:mt-4 leading-normal max-w-xl">
            I’m Obadare Samson, a product designer passionate about crafting
            intuitive and user-centered experiences across various industries.
            Beyond design, I focus on aligning user needs with business goals,
            creating solutions that are not just visually appealing but also
            scalable, efficient, and impactful.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 mb-8 justify-center lg:justify-start w-full">
            <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-[#F4F4F6] text-[#050A30] rounded-3xl font-semibold transition-colors duration-300 hover:bg-[#2AF5FF] text-sm">
              Explore My Work
            </button>
            <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-transparent border-[#F4F4F6] border text-[#F4F4F6] rounded-3xl font-semibold hover:bg-[#2AF5FF] transition-colors duration-300 hover:text-[#050A30]">
              Let's Talk
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-full max-w-[220px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[520px] xl:max-w-[640px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;