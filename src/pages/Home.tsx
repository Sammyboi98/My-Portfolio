import Hero from "../components/Hero";
import impactHeroUnderline from "../assets/svg/impact-hero.svg";
// import About from "./pages/About";
import Stats from "../components/Stat";
import FeaturedProjects from "../components/FeaturedProjects";
import Services from "../components/Services";
import SkillsExpertise from "../components/SkillExpertise";
import ToolsTechnologies from "../components/ToolTechnologies";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import WhyMe from "../components/WhyMe";

import HeroImage from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero>
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Designing Digital <br />
            Experiences That Drive{" "}
            <span className="relative inline-block text-[#2AF5FF]">
              Impact
              {/* underline accent image */}
              <img
                src={impactHeroUnderline}
                alt="Hero Underline"
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 -bottom-2 w-[120%] z-10"
              />
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl">
            I’m{" "}
            <span className="text-[#2AF5FF] font-medium">Obadare Samson</span>,
            a senior product designer passionate about crafting intuitive and
            user-centered experiences across various industries. Beyond design,
            I align user needs with business goals to create solutions that are
            scalable, efficient, and impactful.
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
      </Hero>
      <WhyMe />
      <Stats
        stats={[
          {
            value: "5+",
            label: "Years Experience",
            color: "text-indigo-900",
          },
          {
            value: "20+",
            label: "Projects Completed",
            color: "text-blue-500",
          },
          { value: "10+", label: "Happy Clients", color: "text-cyan-400" },
        ]}
      />
      <FeaturedProjects viewAllLink="/projects" />
      <Services />
      <SkillsExpertise />
      <ToolsTechnologies />
      <div className="bg-[#F4F4F6] flex flex-col text-[#0E0F0F] font-Lato px-4 sm:px-6 md:px-12 lg:px-20 py-20">
        <Testimonials />
      </div>
      {/* <Contact /> */}
      <ContactForm />
    </>
  );
};

export default Home;
