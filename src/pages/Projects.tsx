import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

import certMobile from "../assets/images/certrackerMobileImg.png";
import paypetalMobile from "../assets/images/paypetalImg.png";
import certWeb from "../assets/images/certrackerWebImg.png";

const Projects = () => {
  return (
    <>
      <Hero />
      <FeaturedProjects
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
      <ContactForm />
    </>
  );
};

export default Projects;
