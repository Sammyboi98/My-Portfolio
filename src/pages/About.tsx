import "../App.css"

import gridImage from "../assets/images/grid-image.png";

const About: React.FC = () => {
  return (
    <div className="bg-[#F4F4F6] h-full flex flex-col text-[#0E0F0F] font-Lato px-20">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center mt-20">
          Why Me?
        </h1>
        <p className="text-sm leading-relaxed md:text-lg text-center mt-4 max-w-[60rem] mx-auto">
          In a world filled with designers, what makes me different? I don’t
          just design beautiful interfaces—I craft experiences that solve real
          problems and drive business growth. My approach blends user empathy,
          strategic thinking, and business goals, ensuring that every pixel
          serves a purpose.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-col lg:grid grid-cols-6 grid-rows-8 gap-4 h-full text-[#0E0F0F]">
          <div className="bg-[#28C2FF] flex flex-wrap md:flex-nowrap px-10 col-span-4 row-span-2 col-start-1 row-start-1 rounded-xl">
            <div className="max-w-4xl flex flex-col justify-center py-6">
              <h2 className="text-[18px] font-bold mb-4">
                User-Centered, Business-Driven
              </h2>
              <p className="text-base max-w-xl">
                I design with people in mind—your users, your customers, and
                your team. But beyond usability, I align every decision with
                your business objectives to ensure your product is not just
                functional but successful.
              </p>
            </div>
              <div className="max-w-[20rem] flex items-end">
                <img className="w-full" src={gridImage} alt="" />
              </div>
          </div>
          <div className="bg-[#60afff] col-span-2 row-span-4 col-start-5 row-start-1 rounded-[16px] flex flex-wrap md:flex-nowrap flex-row lg:flex-col justify-between items-center pt-2 px-10 lg:px-2">
            <div className="max-w-4xl flex flex-col justify-center py-6">
              <h2 className="text-[18px] font-bold mb-4">
                Research-Backed, Data-Driven
              </h2>
              <p className="text-base max-w-xl">
               Great design isn’t guesswork. I dive deep into user research, behavior patterns, and industry trends to make informed design decisions that enhance engagement and retention.
              </p>
            </div>
              <div className="max-w-[20rem] flex items-end">
                <img className="w-full" src={gridImage} alt="" />
              </div>
          </div>
          <div className="bg-[#60AFFF] rounded-[16px] flex flex-wrap md:flex-nowrap flex-row lg:flex-col justify-between items-center pt-2 px-10 lg:px-2 col-span-2 row-span-4 col-start-1 row-start-3">
            {/* div3 content */}
            <div className="max-w-4xl flex flex-col justify-center py-6">
              <h2 className="text-[18px] font-bold mb-4">
                 Problem Solver at Heart
              </h2>
              <p className="text-base max-w-xl">
               Roadblocks? Constraints? I see them as opportunities for innovation. Whether it's optimizing a complex workflow or enhancing accessibility, I thrive on solving design challenges creatively and efficiently.
              </p>
            </div>
              <div className="max-w-[20rem] flex items-end">
                <img className="w-full" src={gridImage} alt="" />
              </div>
          </div>
          <div className="bg-[#050A30]  col-span-2 row-span-4 col-start-3 row-start-3 rounded-[16px] flex flex-wrap md:flex-nowrap flex-row lg:flex-col justify-between items-center pt-2 px-10 lg:px-2 text-[#F4F4F6]">
            {/* div4 content */}
             <div className="max-w-4xl flex flex-col justify-center py-6">
              <h2 className="text-[18px] font-bold mb-4">
                  Collaborative & Adaptive
              </h2>
              <p className="text-base max-w-xl">
               I don’t work in a silo. I collaborate closely with stakeholders, developers, and product teams to ensure a smooth process from ideation to implementation. Every project is a partnership, and I’m here to make sure we build something exceptional together.
              </p>
            </div>
              <div className="max-w-[20rem] flex items-end">
                <img className="w-full" src={gridImage} alt="" />
              </div>
          </div>
          <div className="bg-[#1C2260] text-[#F4F4F6] flex flex-wrap md:flex-nowrap px-10 col-span-4 row-span-2 col-start-1 row-start-7 rounded-[16px]">
            {/* div5 content */}
            <div className="max-w-4xl flex flex-col justify-center py-6">
              <h2 className="text-[18px] font-bold mb-4">
                  Cross-Industry Expertise
              </h2>
              <p className="text-base max-w-xl">
               From fintech to healthcare, logistics to education, I’ve designed solutions that impact lives and transform industries. No matter the sector, my goal is the same: to create seamless, intuitive, and scalable experiences.
              </p>
            </div>
              <div className="max-w-[20rem] flex items-end">
                <img className="w-full" src={gridImage} alt="" />
              </div>
          </div>
          <div className="col-span-2 row-span-4 col-start-5 row-start-5">
            {/* div6 content */}
            <h1 className="text-4xl mb-4 text-left leading-relaxed font-normal text-[#0E0F0F]">
              Let’s create <br/> something impactful! Whether you're launching a new product or refining an existing one, I’m <br/> ready  to bring your vision to life.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
