import Image from "next/image";
import { Play } from "lucide-react"; // Optional: install lucide-react for the icon

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col items-center">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      {/* --- Header/Hero Content --- */}
      <div className="relative z-10 pt-20 px-6 text-center max-w-4xl mx-auto">
        {/* Countdown Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[13px] font-medium border rounded-full border-white/10 bg-white/5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
          <span className="text-white/80">
            30% off until 4d : 2h : 41m : 17s
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
          Master Focus & Get <br /> More Done in Less Time
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          A step-by-step system to eliminate procrastination, train your brain
          for deep work, and boost productivity effortlessly.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Enroll now
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium backdrop-blur-sm transition-all">
            Curriculum
          </button>
        </div>
      </div>

      {/* --- Video/Visual Section --- */}
      <div className="relative w-full max-w-6xl px-4 md:px-10">
        {/* The Dotted/Textured Background Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Video Thumbnail Container */}
        <div className="relative mt-12 group cursor-pointer">
          {/* Blue Border Frame */}
          <div className="absolute -inset-1 rounded-[2rem] border-2 border-blue-500/50 blur-[2px] opacity-50" />

          <div className="relative aspect-video rounded-[1.8rem] overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/assets/hero.png"
              alt="Hero Video Thumbnail"
              fill
              className="object-cover"
              priority
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-full shadow-xl transition-transform group-hover:scale-110">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-blue-600 fill-current ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Scanning Line Texture (Bottom) */}
        <div className="mt-8 w-full h-24 relative opacity-40">
          <Image
            src="/assets/texture.png"
            alt="texture background"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
