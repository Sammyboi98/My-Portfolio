import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "../assets/images/Logo.png";

const Navbar: React.FC = () => {
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
    <nav className={`w-full px-4 my-10 z-50 transition-all ${scrolled ? "fixed top-0 left-0 right-0 shadow-4xl" : ""}`}>
      <div className="relative w-full max-w-6xl flex items-center justify-center shadow-4xl">
        <div className="flex justify-between lg:justify-center max-w-3xl mx-auto items-center gap-x-10 w-full bg-[#F4F4F6F2] shadow-4xl  rounded-[100px] py-2 px-10">
          <img
            className="h-16 w-16 aspect-[4/3]"
            src={Logo}
            alt="Logo for the website"
          />
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="md:flex space-x-4 text-[#0E0F0F] gap-5 text-center font-medium">
              <li className="text-center hover:font-bold">
                <Link to="/">Home</Link>
              </li>
              <li className="text-center hover:font-bold">
                <Link to="/about">Why Me?</Link>
              </li>
              <li className="text-center hover:font-bold">
                <Link to="/contact">Services</Link>
              </li>
              <li className="text-center hover:font-bold">
                <Link to="/">Projects</Link>
              </li>
              <li className="text-center hover:font-bold">
                <Link to="/about">Contact</Link>
              </li>
              <li className="text-center hover:font-bold">
                <Link to="/contact">Resume</Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
              >
                Services
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
