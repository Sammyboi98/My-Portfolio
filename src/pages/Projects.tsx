import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import MyProjects from "../components/MyProjects";

const Projects = () => {
  return (
    <>
      <Hero>
        <div className="space-y-14 col-span-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center mt-20">
            <span className="relative inline-block text-[#28C2FF]">
              My Projects
              {/* underline accent image */}
              <img
                src="/src/assets/svg/Vector 2.svg"
                alt="Hero Underline"
                aria-hidden="true"
                className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 -bottom-6 z-10"
              />
            </span>
          </h1>

          <p className="text-center text-sm sm:text-base lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore a curated selection of my design work across various
            categories—case studies, mobile apps, dashboards, landing pages, and
            more.
          </p>
        </div>
      </Hero>
      <MyProjects />
      <ContactForm />
    </>
  );
};

export default Projects;
