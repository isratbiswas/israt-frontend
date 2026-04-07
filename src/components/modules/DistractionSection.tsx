import Image from "next/image";

const DistractionSection = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 mt-8 lg:mt-32">
      <section className="px-6 pt-12 md:pt-24 pb-12 text-center max-w-5xl mx-auto">
        <div className="inline-flex mt-32 sm:mt-16 items-center gap-2 px-5 py-2.5 mb-8 text-[13px] font-medium border rounded-2xl border-blue-800/10 bg-[#121418] backdrop-blur-md shadow-[-2px_-2px_6px_rgba(59,130,246,0.25),3px_3px_8px_rgba(59,130,246,0.2)]">
          <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_6px_#3b82f6]"></span>

          <span className="whitespace-nowrap font-normal text-normal">
            Are Distractions Holding You Back?
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-6xl font-normal tracking-tight leading-[1.2] md:leading-[1.1] mb-10 md:mb-12">
          If you struggle to focus, feel <br className="hidden md:block" />
          overwhelmed by endless{" "}
          <span className="text-white/30">
            tasks, or procrastinate instead of making progress, you’re not
            alone.
          </span>
        </h2>

        <div className="flex justify-center gap-2 md:gap-4 overflow-x-auto pb-4 md:overflow-visible">
          {[
            "/assets/people9.png",
            "/assets/people1.png",
            "/assets/people3.png",
          ].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-white/10"
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

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-24 mt-10 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0A0A0A] lg:bg-transparent rounded-[2.5rem] overflow-visible">
          <div className="hidden sm:block sm:col-span-12 lg:col-span-5 relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square lg:aspect-auto min-h-[400px]">
            <Image
              src="/assets/people6.png"
              fill
              alt="Deep work"
              className="object-cover"
            />
          </div>

          <div className="col-span-1 lg:col-span-7 bg-[#0A0A0A] rounded-[2.5rem] border border-white/10 p-6 sm:p-10 md:p-16 flex flex-col justify-between relative overflow-visible min-h-[500px]">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium border rounded-full border-white/10 bg-white/5 text-white">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="whitespace-nowrap font-normal text-sm leading-relaxed">
                  No worries
                </span>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-2 z-10">
                <div className="flex -space-x-3">
                  {[
                    "/assets/Avatar8.jpg",
                    "/assets/Avatar7.jpg",
                    "/assets/Avatar6.jpg",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-gray-800"
                    >
                      <Image src={src} width={32} height={32} alt="User" />
                    </div>
                  ))}
                </div>

                <p className="text-[10px] text-white/60 font-medium">
                  Join with 5k other students
                </p>
              </div>
            </div>

            <div className="max-w-md mt-10 lg:mt-0 z-10">
              <p className="text-lg md:text-2xl text-white/50 font-light leading-relaxed mb-6">
                The ability to concentrate deeply is the ultimate productivity
                hack.
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-tight">
                And fortunately it’s a skill you can train & develop.
              </h3>
            </div>

            <div className=" lg:mt-20 lg:absolute right-0 bottom-0 lg:right-12 lg:bottom-20 flex lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 ">
              {[
                "/assets/people4.png",
                "/assets/people2.png",
                "/assets/people.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0  w-24 h-28 md:w-28 md:h-32 rounded-2xl overflow-hidden border border-white/10 lg:rotate-3 hover:rotate-0 transition-transform duration-300"
                >
                  <Image
                    src={src}
                    width={112}
                    height={128}
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
