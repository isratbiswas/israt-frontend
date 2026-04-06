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

  // Breakpoint Logic Summary:
  // 1. Desktop (> 981px): flex-[0_0_33.33%] -> 3 Cards
  // 2. Tablet Large (980px - 681px): flex-[0_0_50%] -> 2 Cards
  // 3. Tablet Small (680px - 521px): flex-[0_0_66.66%] -> 1.5 Cards
  // 4. Mobile (520px - 412px): flex-[0_0_66.66%] -> 1.5 Cards

  const slideResponsiveClass =
    "pl-6 min-w-0 " +
    "flex-[0_0_66.66%] " + // Default (Mobile & Small Tablet: 1.5 cards)
    "[@media(min-width:681px)]:flex-[0_0_50%] " + // Large Tablet: 2 cards
    "[@media(min-width:981px)]:flex-[0_0_33.33%]"; // Desktop: 3 cards

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium border rounded-full border-white/10 bg-white/5 text-blue-400">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
          Testimonials
        </div>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
          Real Results from <br /> Real People
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h3 className="text-2xl md:text-3xl font-medium text-white/90">
            Join with 5K other students
          </h3>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-90"
            >
              <ChevronLeft className="w-5 h-5 text-white/60" />
            </button>
            <button
              onClick={scrollNext}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white active:scale-90"
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
            {/* Card 1 */}
            <div className={slideResponsiveClass}>
              <div className="group p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 flex flex-col justify-between min-h-[400px] hover:border-blue-500/30 transition-all duration-500 h-full">
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
                    was always a challenge. This course gave me the tools to
                    work with absolute clarity.
                  </p>
                </div>
                <div className="mt-8">
                  <h5 className="text-xl font-medium">Alex Carter</h5>
                  <p className="text-sm text-white/40">Freelance Designer</p>
                </div>
              </div>
            </div>

            {/* Card 2: Video Testimonial */}
            <div className={slideResponsiveClass}>
              <div className="relative group rounded-[2rem] overflow-hidden border border-white/10 h-[450px] sm:h-full shadow-2xl">
                <Image
                  src="/assets/people11.jpg"
                  fill
                  alt="Daniel Foster"
                  className="object-cover brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-5 left-5 z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                    <Image
                      src="/assets/Avatar (4).png"
                      width={48}
                      height={48}
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-[#2563EB] fill-[#2563EB] ml-1" />
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
                <div className="group p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 flex flex-col justify-between min-h-[400px] h-full hover:border-blue-500/30 transition-all duration-500">
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
                      back. My efficiency has doubled!
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
