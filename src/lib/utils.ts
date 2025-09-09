import certMobile from "../assets/images/certracker.png";
import certWeb from "../assets/images/cetracker-web.png";
import paypetalMobile from "../assets/images/paypetal.png";
import paypetalMobile2 from "../assets/images/paypetal-MobileApp.png";
import paypetalWeb from "../assets/images/paypetal-merchant.png"
import certAdmin from "../assets/images/certracker-adminManager.png"
import AibWeb from "../assets/images/Aib-logistics.png"
import AibWeb2 from "../assets/images/aiblogistic-2.png"
import winampWeb from "../assets/images/winamp-redesign.png"
import integrityPayMobile from "../assets/images/integrity-pay.png"
import mechno from "../assets/images/mechno.png"
import weatherflow from "../assets/images/weatherflow.png"

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
    image: paypetalWeb,
    link: "/projects/certracker-web",
    label: "case studies",
  },
  {
    title: "Certracker Mobile App",
    subtitle: "Mobile App Design",
    image: certWeb,
    link: "/projects/certracker-mobile",
    label: "design shots",
  },
  {
    title: "Certracker Manager",
    subtitle: "Admin Dashboard",
    image: certAdmin,
    link: "/projects/certracker-mobile",
    label: "design shots",
  },
  {
    title: "Paypetal",
    subtitle: "Mobile App",
    image: paypetalMobile2,
    link: "/projects/certracker-mobile",
    label: "case studies",
  },
  {
    title: "AIB Logistics",
    subtitle: "Admin Dashboard",
    image: AibWeb,
    link: "/projects/certracker-mobile",
    label: "case studies",
  },
  {
    title: "WINAMP Redesign",
    subtitle: "Web App",
    image: winampWeb,
    link: "/projects/certracker-mobile",
    label: "landing pages",
  },
  {
    title: "Integrity Pay",
    subtitle: "Mobile App",
    image: integrityPayMobile,
    link: "/projects/certracker-mobile",
    label: "design shots",
  },
  {
    title: "AIB Logistics",
    subtitle: "Admin Dashboard",
    image: AibWeb2,
    link: "/projects/certracker-mobile",
    label: "case studies",
  },
  {
    title: "Mechno",
    subtitle: "Mobile App",
    image: mechno,
    link: "/projects/certracker-mobile",
    label: "case studies",
  },
  {
    title: "Weatherflow",
    subtitle: "Mobile App",
    image: weatherflow,
    link: "/projects/certracker-mobile",
    label: "landing pages",
  },
];
