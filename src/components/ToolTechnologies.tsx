import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import FigmaIcon from "../assets/images/figma.png";
import SketchIcon from "../assets/images/sketch.png";
import BalsamiqIcon from "../assets/images/balsamiq.png";
import CreatieIcon from "../assets/images/creatie.png";
import LottieFilesIcon from "../assets/images/lottiefiles.png";
import PhaseIcon from "../assets/images/phase.png";
import ProtopieIcon from "../assets/images/protopie.png";

import MiroIcon from "../assets/images/ miro.png";
import NotionIcon from "../assets/images/notion.png";
import MsOfficeIcon from "../assets/images/ms.png";

import ZeplinIcon from "../assets/images/zeplin.png";
import TrelloIcon from "../assets/images/trello.png";
import ClickupIcon from "../assets/images/clickup.png";

import HtmlIcon from "../assets/images/html.png";
import CssIcon from "../assets/images/css.png";
import OnlookIcon from "../assets/images/onlook.png";
import FramerIcon from "../assets/images/framer.png";
import WebflowIcon from "../assets/images/webflow.png";
import FlutterflowIcon from "../assets/images/flutterflow.png";

const ToolsTechnologies = () => {
  const toolCategories = [
    {
      category: "Design & Prototyping Tools",
      tools: [
        { name: "Figma", icon: FigmaIcon },
        { name: "Sketch", icon: SketchIcon },
        { name: "Balsamiq", icon: BalsamiqIcon },
        { name: "Creatie", icon: CreatieIcon },
        { name: "Protopie", icon: ProtopieIcon },
        { name: "Lottiefiles", icon: LottieFilesIcon },
        { name: "Phase", icon: PhaseIcon },
      ],
    },
    {
      category: "Brainstorming Tools",
      tools: [
        { name: "Miro", icon: MiroIcon },
        { name: "Notion", icon: NotionIcon },
        { name: "MS Office", icon: MsOfficeIcon },
      ],
    },
    {
      category: "Collaboration Tools",
      tools: [
        { name: "Figma Dev", icon: FigmaIcon }, // Reusing Figma for Figma Dev as placeholder
        { name: "Zeplin", icon: ZeplinIcon },
        { name: "Trello", icon: TrelloIcon },
        { name: "Clickup", icon: ClickupIcon },
      ],
    },
    {
      category: "Development Tools",
      tools: [
        { name: "Html 5", icon: HtmlIcon },
        { name: "Css3", icon: CssIcon },
        { name: "Onlook", icon: OnlookIcon },
        { name: "Framer", icon: FramerIcon },
        { name: "Webflow", icon: WebflowIcon },
        { name: "Flutterflow", icon: FlutterflowIcon },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % toolCategories.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [toolCategories.length]);

  return (
    <section className="py-10 bg-gradient-to-br from-[#0A0F3C] to-[#1C2260] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          Tools & Technologies
        </h2>

        <div className="relative min-h-[100px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:col-span-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-[#2AF5FF]">
                  {toolCategories[currentIndex].category}
                </h3>
              </div>

              <div className="lg:col-span-3 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
                {toolCategories[currentIndex].tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-2xl flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300 ring-1 ring-white/10">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-12 sm:mt-16">
          {toolCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-[#2AF5FF]"
                  : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;
