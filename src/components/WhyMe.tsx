import WhyMeOne from "./icons/whymeOne";
import WhyMeTwo from "./icons/whymeTwo";
import WhyMeThree from "./icons/whymeThree";
import WhyMeFour from "./icons/whymeFour";
import WhyMeFive from "./icons/whymeFive";

const WhyMe = () => {
  const features = [
    {
      icon: <WhyMeOne />,
      title: "User-Centered, Business-Driven",
      description:
        "I design with more than beauty in mind—I consider your users, their needs, and your business goals. My work ensures every product is not just functional but successful.",
      bg: "bg-[#28C2FF]",
    },
    {
      icon: <WhyMeFive />,
      title: "Research-Backed, Data-Driven",
      description:
        "I don’t rely on guesswork. I use research and insights to validate design decisions, helping your business reduce risks, improve performance, and drive results.",
      bg: "bg-[#60AFFF]",
    },
    {
      icon: <WhyMeTwo />,
      title: "Problem Solver at Heart",
      description:
        "Roadblocks? Constraints? I see them as opportunities for innovation. Whether it's optimizing a complex workflow or enhancing accessibility, I thrive on solving design challenges creatively and efficiently.",
      bg: "bg-[#60AFFF]",
    },
    {
      icon: <WhyMeThree />,
      title: "Collaborative & Adaptive",
      description:
        "I don’t work in a silo. I believe in closely collaborating with clients, devs, and stakeholders to bring ideas to life. Flexible and adaptive to your project’s needs.",
      bg: "bg-[#050A30]",
    },
    {
      icon: <WhyMeFour />,
      title: "Cross-Industry Expertise",
      description:
        "From fintech to healthcare, logistics to education—I’ve worked across diverse industries, giving me the skills to design versatile, scalable, and innovative solutions.",
      bg: "bg-[#1C2260]",
    },
  ];

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Why Me?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In a world filled with designers, what makes me different? I don’t
            just design beautiful interfaces—I craft experiences that solve real
            problems and drive business growth. My approach blends user empathy,
            strategic thinking, and business goals, ensuring that every pixel
            serves a purpose.
          </p>
        </div>

        {/* Grid + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Left: Two-column card grid (spans 2 cols on large screens) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Top wide card (spans both columns on small+ screens) */}
            <div
              className={`${features[0].bg} rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition sm:col-span-2 min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem] lg:min-h-[14rem]`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="mr-0 sm:mr-2 flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-[#0E0F0F] mb-2">
                    {features[0].title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#0E0F0F]">
                    {features[0].description}
                  </p>
                </div>
                <div className="mt-3 sm:mt-0 flex-shrink-0">{features[0].icon}</div>
              </div>
            </div>

            {/* Middle two cards (side-by-side) */}
            <div
              className={`${features[2].bg} rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition min-h-[7rem] sm:min-h-[9rem] md:min-h-[10rem]`}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold text-[#0E0F0F] mb-2">
                    {features[2].title}
                  </h3>
                  <p className="text-base text-[#0E0F0F] leading-relaxed">
                    {features[2].description}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">{features[2].icon}</div>
              </div>
            </div>

            <div
              className={`${features[3].bg} rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition min-h-[7rem] sm:min-h-[9rem] md:min-h-[10rem]`}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold text-[#F4F4F6] mb-2">
                    {features[3].title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#F4F4F6]">
                    {features[3].description}
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">{features[3].icon}</div>
              </div>
            </div>

            {/* Bottom full-width card */}
            <div
              className={`${features[4].bg} rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition sm:col-span-2 min-h-[7rem] sm:min-h-[9rem] md:min-h-[10rem]`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-[#F4F4F6] mb-1">
                    {features[4].title}
                  </h3>
                  <p className="text-base text-[#F4F4F6] leading-relaxed">
                    {features[4].description}
                  </p>
                </div>
                <div className="flex-shrink-0 mt-3 sm:mt-0">{features[4].icon}</div>
              </div>
            </div>
          </div>

          {/* Right column: tall feature card above CTA */}
          <div className="flex flex-col gap-6">
            <div
              className={`${features[1].bg} rounded-2xl p-4 sm:p-6 shadow-md min-h-[12rem] sm:min-h-[14rem] md:min-h-[16rem] lg:min-h-[20rem] flex items-start flex-col gap-6`}
            >
              <div>
                <h3 className="text-lg font-bold text-[#0E0F0F] mb-2">
                  {features[1].title}
                </h3>
                <p className="text-base leading-relaxed text-[#0E0F0F]">
                  {features[1].description}
                </p>
              </div>
              <div className="mt-auto">{features[1].icon}</div>
            </div>

            <div className="flex-1 flex flex-col justify-center text-gray-900 min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-left leading-14 font-normal text-[#0E0F0F]">
                Let’s create something impactful! Whether you’re launching a new
                product or refining an existing one, I’m ready to bring your
                vision to life.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
