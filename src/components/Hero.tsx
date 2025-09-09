import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import Navbar from "./Nav";

import { homeNavItems, projectsNavItems } from "../lib/utils";


interface HeroProps {
  children: React.ReactNode;
  className?: string;
}
const Hero: React.FC<HeroProps> = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  
    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);


  return (
    <section className="relative bg-[#0A0F3C] text-white min-h-screen flex flex-col items-center pb-8 sm:pb-4"> 
      <Navbar navItems={ pathname === "/" ? homeNavItems : projectsNavItems} />
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">
       {children}
      </div>
    </section>
  );
};

export default Hero;