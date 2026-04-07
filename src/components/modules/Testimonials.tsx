"use client";

import Image from "next/image";
import React, { useCallback } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const slideResponsiveClass =
    "pl-6 min-w-0 " +
    "flex-[0_0_66.66%] " +
    "[@media(min-width:681px)]:flex-[0_0_50%] " +
    "[@media(min-width:981px)]:flex-[0_0_33.33%]";

  return (
    <section
      id="testimonials"
      className="bg-black text-white py-24 px-6 overflow-hidden mt-16 lg:mt-32"
    >
      <div className="max-w-7xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-3 px-5 py-2 mb-6 text-xs font-medium border rounded-2xl border-white/10 bg-white/5 text-white ">
          <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></span>

          <span className="whitespace-nowrap font-normal text-sm md:text-lg leading-relaxed">
            Testimonials
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
          Real Results from <br /> Real People
        </h2>
      </div>

      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-end mb-10 ">
          <h3 className="text-2xl md:text-3xl font-medium text-white/90 lg:mt-20">
            Join with 5K other students
          </h3>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full bg-[#171B21] hover:bg-white/10 transition-all active:scale-90"
            >
              <ChevronLeft className="w-5 h-5 text-white/60" />
            </button>
            <button
              onClick={scrollNext}
              className="p-4 rounded-full bg-[#171B21]  hover:bg-white/10 transition-all text-white active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex -ml-6">
            <div className={slideResponsiveClass}>
              <div className="group p-8 rounded-[2rem] bg-[#0A0A0A] border border-blue-400/20 flex flex-col justify-between min-h-[400px] hover:border-blue-500/30 transition-all duration-500 h-full">
                <div>
                  <div className="w-12 h-12 rounded-full overflow-hidden mb-8 border border-white/20">
                    <Image
                      src="/assets/avatar.png"
                      width={48}
                      height={48}
                      alt="Alex Carter"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-lg text-white/60 leading-relaxed font-light">
                    As someone who juggles multiple projects, staying focused
                    was always a challenge. This course gave me the tools to cut
                    through distractions and work with absolute clarity. My
                    productivity has never been better!
                  </p>
                </div>
                <div className="mt-8">
                  <h5 className="text-xl font-medium">Alex Carter</h5>
                  <p className="text-sm text-white/40">Freelance Designer</p>
                </div>
              </div>
            </div>

            <div className={slideResponsiveClass}>
              <div className="relative group rounded-[2rem] overflow-hidden border border-blue-400/20 h-[450px] sm:h-full shadow-2xl">
                <Image
                  src="/assets/people11.jpg"
                  fill
                  alt="Daniel Foster"
                  className="object-cover brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-8 left-5 z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                    <Image
                      src="/assets/Avatar (4).png"
                      width={48}
                      height={48}
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                  <div className="group relative cursor-pointer">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white md:h-20 md:w-20 ring-[6px] ring-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_15px_45px_rgba(0,0,0,0.2)]">
                      <Play className="ml-1 h-6 w-6 fill-current text-blue-600 md:h-8 md:w-8 transition-transform group-hover:scale-105" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 z-10">
                  <h5 className="text-xl font-semibold text-white">
                    Daniel Foster
                  </h5>
                  <p className="text-white/70 text-sm mt-1">Content creator</p>
                </div>
              </div>
            </div>

            {/* Repeated Cards */}
            {[3, 4, 5].map((i) => (
              <div key={i} className={slideResponsiveClass}>
                <div className="group p-8 rounded-[2rem] bg-[#0A0A0A] border border-blue-400/20 flex flex-col justify-between min-h-[400px] h-full hover:border-blue-500/30 transition-all duration-500">
                  <div>
                    <div className="w-12 h-12 rounded-full overflow-hidden mb-8 border border-white/20 bg-gray-800">
                      <Image
                        src="/assets/Avatar (5).png"
                        width={48}
                        height={48}
                        alt="Mark"
                      />
                    </div>
                    <p className="text-lg text-white/60 leading-relaxed font-light">
                      I never realized how much distractions were holding me
                      back. After applying the deep work techniques, I feel more
                      in control of my time and energy. My efficiency has
                      doubled!
                    </p>
                  </div>
                  <div className="mt-8">
                    <h5 className="text-xl font-medium">Mark Davidson</h5>
                    <p className="text-sm text-white/40">Software Developer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
