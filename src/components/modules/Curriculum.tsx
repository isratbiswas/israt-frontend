"use client";

import React, { useState } from "react";
import { Play, Lock, CheckCircle2 } from "lucide-react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsFillPatchCheckFill } from "react-icons/bs";

const modules = [
  {
    id: 1,
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        isPreview: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        isPreview: false,
      },
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        isPreview: false,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        isPreview: false,
      },
    ],
  },
  {
    id: 2,
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [],
  },
  {
    id: 3,
    title: "Module 3: Eliminating Procrastination",
    duration: "1.5h of video",
    lessons: [],
  },
  {
    id: 4,
    title: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    lessons: [],
  },
];

const Curriculum = () => {
  const [openModule, setOpenModule] = useState(1);

  return (
    <section className="bg-black text-white py-24 px-6 min-h-screen lg:mt-32 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 text-[11px]  tracking-widest  border rounded-2xl border-white/10 bg-[#0A0A0A] text-white">
            <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />

            <span className="whitespace-nowrap font-normal text-sm md:text-lg leading-relaxed">
              Course Curriculum
            </span>
          </div>
          <h2 className="text-3xl md:text-[42px] font-medium tracking-tight leading-tight mt-1">
            Mastering Deep Work: A Structured <br className="hidden md:block" />
            Path to Peak Productivity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            {modules.map((module) => (
              <div
                key={module.id}
                className="pb-4 last:border-0 border-b border-transparent 
  [border-image:linear-gradient(to_right,rgba(59,130,246,0.1),rgba(37,99,235,1),rgba(59,130,246,0.1))_1]"
              >
                <button
                  onClick={() =>
                    setOpenModule(openModule === module.id ? 0 : module.id)
                  }
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <div>
                    <h3 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-sm text-white/40 mt-1">
                      {module.duration}
                    </p>
                  </div>
                  {openModule === module.id ? (
                    <TiArrowSortedUp className="w-5 h-5 text-white" />
                  ) : (
                    <TiArrowSortedDown className="w-5 h-5 text-white" />
                  )}
                </button>

                {openModule === module.id && module.lessons.length > 0 && (
                  <div className="mt-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                    {module.lessons.map((lesson, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.03] transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          {lesson.isPreview ? (
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                              <Play className="w-3.5 h-3.5 text-blue-700 fill-blue-700 " />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-[#FFFFFF4D] flex items-center justify-center">
                              <Play className="w-3.5  h-3.5 text-[#171B21] fill-[#171B21]" />
                            </div>
                          )}

                          <span
                            className={`text-sm ${lesson.isPreview ? "text-white/90" : "text-white/40"}`}
                          >
                            {lesson.title}
                          </span>
                          {lesson.isPreview && (
                            <span className="text-[10px]  tracking-tighter bg-white/10 px-3 py-1 rounded-full text-blue-400 font-normal">
                              Preview
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-white/30 font-mono">
                          {lesson.time}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#0A0A0A] border border-blue-400/15 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-colors" />

              <h4 className="text-2xl font-medium mb-8">
                Not only video lessons!
              </h4>

              <ul className="space-y-6 mb-10">
                {[
                  "6h of videos - Step-by-step deep work strategies.",
                  "Templates & Trackers - Stay on track effortlessly.",
                  "Live Q&As - Expert guidance & accountability.",
                  "Exclusive Community - Connect with others.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group/item">
                    <div className="bg-blue-500/10 p-2 rounded-full border border-blue-500/20">
                      <BsFillPatchCheckFill className="text-white text-sm" />
                    </div>
                    <span className="text-sm text-white/60 leading-relaxed group-hover/item:text-white/90 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-[0.98]">
                Enroll now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
