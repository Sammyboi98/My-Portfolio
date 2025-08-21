// components/Stats.tsx
import React from "react";

interface Stat {
  value: string;
  label: string;
  color?: string;
}

interface StatsProps {
  stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-6 max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6 sm:gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center w-full md:w-auto py-4">
            <h2
              className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold ${stat.color ? stat.color : "text-gray-800"}`}
            >
              {stat.value}
            </h2>
            <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-[#000000CC]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;