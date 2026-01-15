import certMobile from "../assets/images/certracker.png";
import certWeb from "../assets/images/cetracker-web.png";
import paypetalMobile from "../assets/images/paypetal.png";
import paypetalMobile2 from "../assets/images/paypetal-MobileApp.png";
import paypetalWeb from "../assets/images/paypetal-merchant.png";
import certAdmin from "../assets/images/certracker-adminManager.png";
import AibWeb from "../assets/images/Aib-logistics.png";
import AibWeb2 from "../assets/images/aiblogistic-2.png";
import winampWeb from "../assets/images/winamp-redesign.png";
import integrityPayMobile from "../assets/images/integrity-pay.png";
import mechno from "../assets/images/mechno.png";
import weatherflow from "../assets/images/weatherflow.png";

// Landing Pages Images
import aibLanding from "../assets/images/aib-landing.png";
import certLanding from "../assets/images/certacker-landing.png";
import paypetalLanding from "../assets/images/paypetal-landing.png";
import dqvLanding from "../assets/images/dqv-landing.png";

// Case Studies Images
import coming1 from "../assets/images/coming1.png";
import coming2 from "../assets/images/coming2.png";

export const homeNavItems = [
  { label: "Home", href: "/", active: true },
  { label: "Why Me?", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" },
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
    title: "Certracker",
    subtitle: "Mobile App",
    image: certMobile,
    link: "/projects/certracker-mobile",
    label: "design shots",
  },

  {
    title: "Paypetal",
    subtitle: "Admin Dashboard",
    image: paypetalMobile,
    link: "/projects/paypetal-mobile",
    label: "design shots",
  },
  {
    title: "Paypetal",
    subtitle: "Merchant Dashboard",
    image: paypetalWeb,
    link: "/projects/paypetal-merchant",
    label: "design shots",
  },
  {
    title: "Certracker",
    subtitle: "Web App",
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
    link: "/projects/paypetal-mobile",
    label: "design shots",
  },
  {
    title: "AIB Logistics",
    subtitle: "Admin Dashboard",
    image: AibWeb,
    link: "/projects/certracker-mobile",
    label: "design shots",
  },
  {
    title: "WINAMP Redesign",
    subtitle: "Web App",
    image: winampWeb,
    link: "/projects/certracker-mobile",
    label: "design shots",
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
    subtitle: "Web App",
    image: AibWeb2,
    link: "/projects/certracker-mobile",
    label: "design shots",
  },
  {
    title: "Mechno",
    subtitle: "Mobile App",
    image: mechno,
    link: "/projects/certracker-mobile",
    label: "design shots",
  },
  {
    title: "Weatherflow",
    subtitle: "Mobile App",
    image: weatherflow,
    link: "/projects/certracker-mobile",
    label: "design shots",
  },
];

export const landingPages = [
  {
    title: "Certracker",
    subtitle: "HealthTech",
    image: certLanding,
    link: "https://certracker.com", // Replace with actual link if available
  },
  {
    title: "Paypetal",
    subtitle: "Fintech",
    image: paypetalLanding,
    link: "https://paypetal.com",
  },
  {
    title: "AIB Logistics",
    subtitle: "E-commerce",
    image: aibLanding,
    link: "https://aiblogistics.com",
  },
  {
    title: "DQVPlatform",
    subtitle: "RegTech",
    image: dqvLanding,
    link: "https://dqv.com",
  },
];
