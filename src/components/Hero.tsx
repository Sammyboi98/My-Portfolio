import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";

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
    <section className="relative bg-[#0A0F3C] text-white min-h-[100dvh] flex flex-col items-center justify-center pb-8 sm:pb-4">
      <Navbar navItems={pathname === "/" ? homeNavItems : projectsNavItems} />
      <motion.div
        className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Hero;
