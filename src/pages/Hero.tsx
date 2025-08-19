import Navbar from "../components/Nav";

import HeroImage from "../assets/images/hero.png";

const Hero: React.FC = () => {
  return (
    <div className="bg-[#1C2260] h-full flex flex-col text-white font-Lato px-20">
      <Navbar />
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center h-full py-4 gap-4">
        <div className="flex flex-col items-start max-w-2xl space-y-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-left">
            Designing Digital
            <br /> Experiences That Drive
            <br /> Impact
          </h1>
          <p className="text-base md:text-lg mt-4 text-left leading-normal">
            I’m Obadare Samson, a product designer passionate about crafting
            intuitive and user-centered experiences across various industries.
            Beyond design, I focus on aligning user needs with business goals,
            creating solutions that are not just visually appealing but also
            scalable, efficient, and impactful.
          </p>
          <div className="flex gap-4 mt-2 mb-8">
            <button className="px-3 py-2 md:px-6 md:py-4 bg-[#F4F4F6] text-[#050A30] rounded-4xl font-semibold transition-colors duration-300 hover:text-[#050A30] hover:bg-[#2AF5FF] hover:cursor-pointer text-sm">
              Explore My Work
            </button>
            <button className="px-3 py-2 md:px-6 md:py-4 bg-transparent border-[#F4F4F6] border-[1px] text-[#F4F4F6] rounded-4xl font-semibold hover:bg-[#2AF5FF] transition-colors duration-300 hover:text-[#050A30] hover:cursor-pointer">
              Let's Talk
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full max-w-md">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-auto max-h-[743px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;