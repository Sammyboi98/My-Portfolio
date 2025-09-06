import certMobile from "../assets/images/certrackerMobileImg.png";
import paypetalMobile from "../assets/images/paypetalImg.png";
import certWeb from "../assets/images/certrackerWebImg.png";// Home page


export const homeNavItems = [
  { label: "Home", href: "/", active: true },
  { label: "Why Me?", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
  // ... more items
];

// Projects page
export const projectsNavItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects", active: true },
  { label: "Contact", href: "/contact", active: true },
  { label: "Resume", href: "/resume", active: true },
];

export const projects = [
  {
    title: "Certracker Mobile App",
    subtitle: "Mobile App Design",
    image: certMobile,
    link: "/projects/certracker-mobile",
    label: "design shots",
  },

  {
    title: "Paypetal Mobile App",
    subtitle: "Mobile App Design",
    image: paypetalMobile,
    link: "/projects/paypetal-mobile",
    label: "landing pages",
  },
  {
    title: "Certracker Web App",
    subtitle: "Web App Design",
    image: certWeb,
    link: "/projects/certracker-web",
    label: "case studies",
  },
  {
    title: "Certracker Mobile App",
    subtitle: "Mobile App Design",
    image: certMobile,
    link: "/projects/certracker-mobile",
    label: "design shots",
  },
];
