"use client";

import { HiOutlineLightBulb } from "react-icons/hi";
import { BiBrain } from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";
import { PiPathFill } from "react-icons/pi";

const steps = [
  {
    icon: <HiOutlineLightBulb className="w-6 h-6 text-white" />,
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: <BiBrain className="w-6 h-6 text-white" />,
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: <BsPatchCheckFill className="w-5 h-5 text-white" />,
    text: "Overcome procrastination & get more done.",
  },
  {
    icon: <PiPathFill className="w-5 h-5 text-white" />,
    text: "Build lasting habits for long-term success.",
  },
];

const Work = () => {
  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden min-h-screen mt-16 lg:mt-32">
      <div className="max-w-sm mx-auto mb-28 sm:mb-12">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-6 text-xs font-medium border rounded-2xl border-blue-400/20 bg-[#171B21] text-white shadow-[-6px_-6px_12px_rgba(59,130,246,0.25),6px_6px_12px_rgba(0,0,0,0.6)]">
            <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></span>

            <span className="whitespace-nowrap font-normal text-sm md:text-lg leading-relaxed">
              The Deep Work Blueprint
            </span>
          </div>
        </div>

        <h2 className="text-[28px] font-medium tracking-tight leading-[1.25] text-white">
          A self-paced, results-driven course designed to help you
        </h2>
      </div>

      <div className="max-w-sm mx-auto relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-blue-600 via-blue-500/30 to-transparent" />

        <div className="flex flex-col">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-start gap-5 mb-10 last:mb-0 group"
            >
              <div className="relative z-10 flex-shrink-0 mt-1">
                <div className="w-[15px] h-[15px] rounded-full bg-blue-600 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] flex items-center justify-center"></div>
              </div>

              <div className="flex-1 rounded-2xl px-1 py-1 group-hover:border-blue-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#171B21] border border-blue-500/20 flex items-center justify-center mb-4 group-hover:border-blue-500/30 transition-colors duration-300 shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                  {step.icon}
                </div>

                <p className="text-white/90 text-base leading-relaxed font-normal group-hover:text-white/80 transition-colors duration-300">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
