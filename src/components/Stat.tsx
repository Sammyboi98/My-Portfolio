// components/Stats.tsx
import React from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

import { parseValue } from "../lib/parseValue";

interface Stat {
  value: string | number;
  label: string;
  color?: string;
}

interface StatsProps {
  stats: Stat[];
}

// Child component for a single stat
const StatItem: React.FC<{ stat: Stat; idx: number }> = ({ stat, idx }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref);
   const { number, suffix } = parseValue(stat.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      className="flex flex-col items-center text-center w-full md:w-auto py-4"
    >
      <h2
        className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold ${
          stat.color ? stat.color : "text-gray-800"
        }`}
      >
        {inView ? <CountUp end={number} duration={5} /> : "0"}{suffix}
      </h2>
      <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-[#000000CC]">
        {stat.label}
      </p>
    </motion.div>
  );
};

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-6 max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6 sm:gap-8">
        {stats.map((stat, idx) => (
          <StatItem key={idx} stat={stat} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Stats;


// // components/Stats.tsx
// import React from "react";

// interface Stat {
//   value: string;
//   label: string;
//   color?: string;
// }

// interface StatsProps {
//   stats: Stat[];
// }

// const Stats: React.FC<StatsProps> = ({ stats }) => {
//   return (
//     <section className="w-full py-12 sm:py-16 md:py-20">
//       <div className="px-4 sm:px-6 max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6 sm:gap-8">
//         {stats.map((stat, idx) => (
//           <div key={idx} className="flex flex-col items-center text-center w-full md:w-auto py-4">
//             <h2
//               className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold ${stat.color ? stat.color : "text-gray-800"}`}
//             >
//               {stat.value}
//             </h2>
//             <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-[#000000CC]">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Stats;
