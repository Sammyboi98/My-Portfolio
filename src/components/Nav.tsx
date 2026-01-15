import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "../assets/images/Logo.png";
import Resume from "../assets/OBADARE SAMSON OLUWOLE RESUME.pdf";

interface NavProps {
  navItems: { label: string; href: string; active?: boolean }[];
}

const Navbar: React.FC<NavProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`px-4 py-4 sm:py-6 transition-all ${
        scrolled ? "fixed top-0 left-0 right-0 z-50 " : ""
      }`}
    >
      <div className="relative mx-auto flex items-center justify-center">
        <div
          className={`inline-flex justify-between lg:justify-center mx-auto items-center gap-x-52 lg:gap-x-6  bg-[#F4F4F6F2] rounded-full py-2 sm:py-3 px-4 sm:px-6 md:px-10 ${
            scrolled ? "shadow-lg bg-white/60 backdrop-blur" : ""
          }`}
        >
          <img
            className="h-12 w-12 sm:h-14 sm:w-14 aspect-[4/3]"
            src={Logo}
            alt="Logo for the website"
          />
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="md:flex space-x-4 text-[#0E0F0F] gap-4 text-center font-medium text-sm sm:text-base">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="text-center hover:font-bold cursor-pointer"
                >
                  {item.label === "Resume" ? (
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none p-2 rounded-md bg-white/0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border z-50 px-4 py-3">
            <ul className="space-y-2 text-[#0E0F0F] font-medium text-sm text-left">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="text-center hover:font-bold cursor-pointer"
                >
                  {item.label === "Resume" ? (
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
