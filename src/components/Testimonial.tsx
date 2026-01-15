import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import TestimonialBg from "../assets/images/testimonial-bg.png";
import ShineIcon from "../assets/images/shine.png";
import IgweImg from "../assets/images/igwe.png";
import IlemobayoImg from "../assets/images/ilemobayo.png";
import DevinImg from "../assets/images/devin.png";
import ToriloImg from "../assets/images/torilo.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Samson is an incredibly intuitive designer! Having worked with him over the last two years, I can confidently say his UX/UI expertise, design thinking, and user research skills are top-notch. His ability to craft user-centric solutions is truly impressive!",
      clientName: "Shadrach Igwe",
      clientRole: "CO-Founder @ Certracker",
      clientImage: IgweImg,
      rating: 5,
    },
    {
      id: 2,
      text: "Working with samson elevated our entire product experience. His designs are not just beautiful—they’re strategic, user-focused, and aligned with our business goals. A true asset to the PayPetal journey",
      clientName: "Ilemobayo Samson",
      clientRole: "CEO @ Paypetal",
      clientImage: IlemobayoImg,
      rating: 5,
    },
    {
      id: 3,
      text: "Working with Samson as our Senior Designer at CertTracker has been a game-changer. He blends design talent with a strong UX focus, turning complex workflows into simple, user-first solutions. Samson is hardworking, collaborative, and genuinely cares about the product and the people behind it.",
      clientName: "Devin Patterson",
      clientRole: "Founder @ Certracker",
      clientImage: DevinImg,
      rating: 5,
    },
    {
      id: 4,
      text: "Samson has been an invaluable part of Torilo Academy. His ability to simplify complex design concepts and connect with students made a lasting impact. Passionate, knowledgeable, and deeply committed. He has helped shape the next generation of designers.",
      clientName: "Team Torilo",
      clientRole: "Torilo Academy",
      clientImage: ToriloImg,
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite loop logic: we want to show 2 items at a time
  // For infinite scroll effect, we effectively just increment index and wrap around
  const getDisplayedTestimonials = () => {
    const displayed = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % testimonials.length;
      displayed.push(testimonials[index]);
    }
    return displayed;
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const displayedTestimonials = getDisplayedTestimonials();

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-cover bg-center bg-no-repeat flex flex-col justify-center overflow-hidden rounded-[2.5rem]"
      style={{
        backgroundImage: `url(${TestimonialBg})`,
        backgroundColor: "#0A0F3C", // Fallback
      }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white relative inline-block">
            Testimonials That
            <img
              src={ShineIcon}
              alt=""
              className="absolute -top-3 -right-8 text-white/80 w-6 h-6 transform rotate-12 hidden sm:block"
            />
          </h2>
          <div>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white block sm:inline">
              Speak to{" "}
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2AF5FF] block sm:inline">
              My Results
            </span>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg pt-4 leading-relaxed">
            What matters most to me isn’t just the final design—it’s the
            experience along the way. Here’s what others have shared about
            working together, creating together, and building ideas into
            reality.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 sm:gap-8"
              initial={false}
              key={currentIndex}
            >
              <AnimatePresence mode="popLayout">
                {displayedTestimonials.map((testimonial) => (
                  <motion.div
                    key={`${testimonial.id}-${currentIndex}`} // Unique key to force re-render for animation
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`flex-1 min-w-0 ${
                      itemsPerPage === 1 ? "w-full" : "w-1/2"
                    }`}
                  >
                    <div className="bg-white rounded-3xl p-8 sm:p-10 h-full shadow-2xl">
                      <div className="flex flex-col-reverse lg:flex-row gap-8 h-full">
                        {/* Left Column: Text & Stars */}
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-6 h-6 fill-[#F59E0B] text-[#F59E0B]"
                              />
                            ))}
                          </div>
                          <p className="text-gray-900 text-lg leading-relaxed font-medium">
                            {testimonial.text}
                          </p>
                        </div>

                        {/* Right Column: Image & Info */}
                        <div className="lg:w-48 flex-shrink-0 flex flex-col items-start lg:items-center space-y-4">
                          <img
                            src={testimonial.clientImage}
                            alt={testimonial.clientName}
                            className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-md"
                          />
                          <div className="text-left lg:text-center w-full">
                            <h4 className="font-bold text-gray-900 text-xl">
                              {testimonial.clientName}
                            </h4>
                            <p className="text-gray-500 text-base">
                              {testimonial.clientRole}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-16">
            <button
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 group ring-1 ring-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 group ring-1 ring-white/20"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
