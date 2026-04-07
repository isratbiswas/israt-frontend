import Image from "next/image";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col items-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `

            linear-gradient(to bottom, 
              black 0%, 
              black 10%, 
              rgba(37, 99, 235, 0.15) 70%, 
              rgba(37, 99, 235, 0.3) 100%
            ),
        
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(37, 99, 235, 0.1) 3px,
              transparent 4px
            )
          `,
        }}
      />

      <div className="relative z-10 pt-20 px-6 text-center max-w-4xl mx-auto">
        <div
          className="inline-flex lg:mt-32 mt-24  items-center gap-2 px-5 py-2.5 mb-8 text-[13px] font-medium border rounded-2xl border-blue-800/10 bg-[#121418] backdrop-blur-md
shadow-[-2px_-2px_6px_rgba(59,130,246,0.25),3px_3px_8px_rgba(59,130,246,0.2)]"
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_6px_#3b82f6]"></span>

          <span className="whitespace-nowrap font-base text-normal">
            30% off until
            <span className="text-white"> 4d : 2h : 41m : 17s</span>
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
          Master Focus & Get <br /> More Done in Less Time
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          A step-by-step system to eliminate procrastination, train your brain
          for deep work, and boost productivity effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Enroll now
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium backdrop-blur-sm transition-all">
            Curriculum
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-10 pb-20">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 rounded-[2rem] bg-blue-500/20 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative aspect-video rounded-[1.8rem] overflow-hidden border border-blue-500/30 shadow-2xl">
            <Image
              src="/assets/hero1.png"
              alt="Hero Video Thumbnail"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
              <div className="group relative cursor-pointer">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white md:h-20 md:w-20 ring-[6px] ring-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_15px_45px_rgba(0,0,0,0.2)]">
                  <Play className="ml-1 h-6 w-6 fill-current text-blue-600 md:h-8 md:w-8 transition-transform group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
