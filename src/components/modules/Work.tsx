"use client";

import React from "react";
import { Lightbulb, Target, CheckCircle2, Workflow } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: <Target className="w-5 h-5 text-white" />,
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    text: "Overcome procrastination & get more done.",
  },
  {
    icon: <Workflow className="w-5 h-5 text-white" />,
    text: "Build lasting habits for long-term success.",
  },
];

const Work = () => {
  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[11px] uppercase tracking-widest font-semibold border rounded-full border-white/10 bg-[#0A0A0A] text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
          The Deep Work Blueprint
        </div>

        <h2 className="text-3xl md:text-[42px] font-medium tracking-tight leading-[1.15] text-white">
          A self-paced, results-driven <br className="hidden md:block" />
          course designed to help you
        </h2>
      </div>

      {/* Timeline Path */}
      <div className="max-w-xl mx-auto relative">
        {/* The Precise Vertical Line with Blue Glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-600 via-blue-500/20 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.4)]" />

        <div className="flex flex-col gap-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group"
            >
              {/* 1. The Blue Point (Dot) */}
              <div className="relative z-20 mb-10">
                <div className="w-3.5 h-3.5 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 w-3.5 h-3.5 bg-blue-500 rounded-full animate-ping opacity-25" />
              </div>

              {/* 2. The Glassmorphism Icon Container */}
              <div className="relative z-10 mb-8">
                <div className="w-[72px] h-[72px] rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-blue-500/40 group-hover:bg-[#111] transition-all duration-700">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* 3. The Content Text */}
              <div className="text-center px-6">
                <p className="text-lg md:text-[20px] text-white/50 group-hover:text-white transition-colors duration-700 font-light leading-[1.6] max-w-[320px]">
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
