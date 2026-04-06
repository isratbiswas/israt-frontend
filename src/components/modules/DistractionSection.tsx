import Image from "next/image";
import React from "react";

const DistractionSection = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      <section className="px-6 pt-24 pb-16 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 text-[13px] font-medium border rounded-full border-white/10 bg-white/5 text-blue-400">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
          Are Distractions Holding You Back?
        </div>

        <h2 className="text-3xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-12">
          If you struggle to focus, feel <br className="hidden md:block" />
          <span className="text-white/30">
            overwhelmed by endless tasks, or procrastinate instead of making
            progress, you’re not alone.
          </span>
        </h2>

        <div className="flex justify-center gap-4">
          {[
            "/assets/people9.png",
            "/assets/people1.png",
            "/assets/people3.png",
          ].map((src, i) => (
            <div
              key={i}
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                src={src}
                width={128}
                height={128}
                alt="User feeling overwhelmed"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5 relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] md:aspect-auto">
            <Image
              src="/assets/people6.png"
              fill
              alt="Deep work"
              className="object-cover"
            />
          </div>

          <div className="md:col-span-7 bg-[#0A0A0A] rounded-[2.5rem] border border-white/10 p-8 md:p-16 flex flex-col justify-between relative overflow-hidden min-h-[500px]">
            <div className="flex justify-between items-start w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium border rounded-full border-white/10 bg-white/5 text-blue-400">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                No worries
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex -space-x-3">
                  {[
                    "/assets/Avatar.png",
                    "/assets/Avatar(1).png",
                    "/assets/Avatar(2).png",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-gray-800"
                    >
                      <Image src={src} width={32} height={32} alt="User" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-white/40 font-medium">
                  Join with 5k other students
                </p>
              </div>
            </div>

            <div className="max-w-md mt-12 md:mt-0">
              <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-6">
                The ability to concentrate deeply is the ultimate productivity
                hack.
              </p>
              <h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                And fortunately it’s a skill you can train & develop.
              </h3>
            </div>

            <div className="hidden lg:flex flex-col gap-4 absolute right-12 bottom-12">
              {[
                "/assets/people4.png",
                "/assets/people2.png",
                "/assets/people.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-24 h-28 rounded-2xl overflow-hidden border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-300"
                >
                  <Image
                    src={src}
                    width={100}
                    height={120}
                    alt="Productivity"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DistractionSection;
