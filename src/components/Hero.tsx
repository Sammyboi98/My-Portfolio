// components/Hero.tsx
import React from "react";
import Navbar from "./Nav";
import HeroImage from "../assets/images/hero.png";
import { Link } from "react-router-dom"; 
const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#0A0F3C] text-white min-h-screen flex flex-col items-center pb-8 sm:pb-4"> 
      <Navbar />
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Designing Digital <br />
            Experiences That Drive{" "}
            <span className="relative inline-block text-[#2AF5FF]">
              Impact
              {/* underline accent image */}
              <img
                src="/src/assets/svg/impact-hero.svg"
                alt="Hero Underline"
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 -bottom-2 w-[120%] z-10"
              />
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl">
            I’m <span className="text-[#2AF5FF] font-medium">Obadare Samson</span>, a senior product designer passionate about crafting intuitive and user-centered experiences across various industries. Beyond design, I align user needs with business goals to create solutions that are scalable, efficient, and impactful.
          </p>

          <div className="flex gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-full bg-[#F4F4F6] text-[#050A30] font-medium shadow-md hover:bg-[#1EE0E8] transition"
            >
              Explore My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full border border-[#F4F4F6] text-[#F4F4F6] font-medium hover:bg-[#2AF5FF] hover:text-[#0A0F3C] transition"
            >
              Let’s Talk
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 sm:w-96 lg:w-[420px]">
            <img
              src={HeroImage}
              alt="Obadare Samson"
              className="relative rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;