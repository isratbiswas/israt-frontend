"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Play, Lock, CheckCircle2 } from "lucide-react";

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
    <section className="bg-black text-white py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[11px] uppercase tracking-widest font-semibold border rounded-full border-white/10 bg-[#0A0A0A] text-blue-400">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
            Course Curriculum
          </div>
          <h2 className="text-3xl md:text-[42px] font-medium tracking-tight leading-tight">
            Mastering Deep Work: A Structured <br className="hidden md:block" />
            Path to Peak Productivity
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Accordion Modules */}
          <div className="lg:col-span-7 space-y-4">
            {modules.map((module) => (
              <div key={module.id} className="border-b border-white/5 pb-4">
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
                    <ChevronUp className="w-5 h-5 text-white/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </button>

                {/* Lesson List */}
                {openModule === module.id && module.lessons.length > 0 && (
                  <div className="mt-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                    {module.lessons.map((lesson, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.03] transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                            {lesson.isPreview ? (
                              <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                            ) : (
                              <Lock className="w-3.5 h-3.5 text-white/20" />
                            )}
                          </div>
                          <span
                            className={`text-sm ${lesson.isPreview ? "text-white/90" : "text-white/40"}`}
                          >
                            {lesson.title}
                          </span>
                          {lesson.isPreview && (
                            <span className="text-[10px] uppercase tracking-tighter bg-white/10 px-2 py-0.5 rounded text-white/60 font-semibold">
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

          {/* Right Column: Sticky Promo Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              {/* Subtle background glow */}
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
                    <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-500/20 transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-white/80 group-hover/item:text-blue-400" />
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
