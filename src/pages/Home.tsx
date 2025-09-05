import Hero from "../components/Hero";
// import About from "./pages/About";
import Stats from "../components/Stat";
import FeaturedProjects from "../components/FeaturedProjects";
import certMobile from "../assets/images/certrackerMobileImg.png";
import paypetalMobile from "../assets/images/paypetalImg.png";
import certWeb from "../assets/images/certrackerWebImg.png";
import Services from "../components/Services";
import SkillsExpertise from "../components/SkillExpertise";
import ToolsTechnologies from "../components/ToolTechnologies";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import WhyMe from "../components/WhyMe";

const Home = () => {
  return (
    <>
      <Hero />
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
      <FeaturedProjects
        viewAllLink="/projects"
        projects={[
          {
            title: "Certracker Mobile App",
            subtitle: "Mobile App Design",
            image: certMobile,
            link: "/projects/certracker-mobile",
          },

          {
            title: "Paypetal Mobile App",
            subtitle: "Mobile App Design",
            image: paypetalMobile,
            link: "/projects/paypetal-mobile",
          },
          {
            title: "Certracker Web App",
            subtitle: "Web App Design",
            image: certWeb,
            link: "/projects/certracker-web",
          },
          {
            title: "Certracker Mobile App",
            subtitle: "Mobile App Design",
            image: certMobile,
            link: "/projects/certracker-mobile",
          },
        ]}
      />
      <Services />
      <SkillsExpertise />
      <ToolsTechnologies />
      <Contact />
      <ContactForm />
    </>
  );
};

export default Home;
