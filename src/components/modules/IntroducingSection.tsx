import { FaCheckCircle, FaCircle } from "react-icons/fa";

const IntroducingSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 min-[981px]:grid-cols-2 gap-6">
        <div className="bg-[#111111] border border-white/5 p-8 md:p-12 rounded-[2rem] flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-blue-500/30 px-3 py-1 rounded-full w-fit mb-6">
            <FaCircle className="text-[#2563EB] text-[8px] animate-pulse" />
            <span className="text-xs font-medium text-gray-300">
              Introducing
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
            The Deep Work <br /> Blueprint
          </h2>

          <p className="text-gray-400 mb-10 text-lg">
            What extra you will get if you enroll now
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="bg-blue-500/10 p-1 rounded-full border border-blue-500/20">
                <FaCheckCircle className="text-blue-500 text-sm" />
              </div>
              <span>Bonus: 1:1 coaching session to boost focus.</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="bg-blue-500/10 p-1 rounded-full border border-blue-500/20">
                <FaCheckCircle className="text-blue-500 text-sm" />
              </div>
              <span>Discount: Save 30% when you enroll now!</span>
            </div>
          </div>
        </div>

        <div className="bg-[#111111] border border-white/5 p-8 md:p-12 rounded-[2rem] relative flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold">$349</span>
              <span className="text-2xl text-gray-500 line-through decoration-red-500">
                $500
              </span>
            </div>
            <span className="bg-[#2563EB] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
              30% off
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-10">
            30% off until 4d : 2h : 41m : 17s
          </p>

          <div className="space-y-6 flex-grow mb-12">
            {[
              "6h of videos - Step-by-step deep work strategies.",
              "Templates & Trackers — Stay on track effortlessly.",
              "Live Q&As — Expert guidance & accountability.",
              "Exclusive Community — Connect with others.",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 text-gray-400 text-sm md:text-base"
              >
                <FaCheckCircle className="text-white/80 mt-1 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-[#2563EB] hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]">
            Enroll now
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSection;
