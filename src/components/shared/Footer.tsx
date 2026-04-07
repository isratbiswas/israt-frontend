"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111214] px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16 lg:px-32 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16 lg:mb-24 text-center lg:text-left">
        <div className="max-w-md">
          <h2 className="text-white font-semibold tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
            The Deep Work Blueprint
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            Master Focus & Get More <br className="lg:hidden" /> Done in Less
            Time
          </p>
        </div>

        <div className="bg-[#2563EB] p-8 rounded-[2.5rem] relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] w-full max-w-[420px] lg:w-[450px]">
          <div className="flex justify-between items-start mb-14">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="relative w-12 h-12 border-2 border-[#2563EB] rounded-full overflow-hidden bg-gray-800"
                >
                  <Image
                    src={`/assets/Avatar${i === 0 ? "" : `(${i})`}.png`}
                    fill
                    alt="avatar"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full text-[#2563EB] shadow-lg">
              <FaArrowRight size={18} />
            </div>
          </div>

          <p className="text-white text-xl font-medium text-left">
            Join with 5K other students
          </p>
        </div>
      </div>

      <div className="relative w-full h-[1px] mb-12">
        <div className="absolute left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/50 to-transparent" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        <ul className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-gray-400 text-sm font-medium order-1 lg:order-2">
          <li className="hover:text-white cursor-pointer transition-colors">
            Terms & conditions
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Refund policy
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Pricing
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Support
          </li>
        </ul>

        {/* Copyright */}
        <div className="text-sm text-gray-500 font-light order-2 lg:order-1">
          © Copyright 2024, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
