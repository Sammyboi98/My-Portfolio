import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
// import About from "./pages/About";
import Stats from "./components/Stat";
import FeaturedProjects from "./components/FeaturedProjects";
import certMobile from "./assets/images/certrackerMobileImg.png";
import paypetalMobile from "./assets/images/paypetalImg.png";
import certWeb from "./assets/images/certrackerWebImg.png";
import Services from "./components/Services";
import SkillsExpertise from "./components/SkillExpertise";
import ToolsTechnologies from "./pages/ToolTechnologies";
import Contact from "./pages/Contact";
import ContactForm from "./components/ContactForm";
import WhyMe from "./components/WhyMe";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<div>Contact Page</div>} /> */}
        </Routes>
        {/* <About /> */}
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
          ]}
        />
        <Services />
        <SkillsExpertise />
        <ToolsTechnologies />
        <Contact />
        <ContactForm />
      </BrowserRouter>
    </>
  );
};

export default App;
