"use client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative flex items-center justify-between bg-black border-blue-800 transition-all duration-300 px-4 py-4 sm:px-6 sm:py-4 md:px-10 md:py-5 lg:px-20 lg:py-6 ">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        aria-hidden="true"
      />
      <div className="flex items-center gap-2 shrink-0">
        <Image
          src="/assets/Vector (1).png"
          width={35}
          height={35}
          alt="logo icon"
        />
        <Image
          src="/assets/PPA.png"
          width={45}
          height={20}
          alt="PPA"
          className="object-contain"
        />
      </div>
      <div className="hidden min-[981px]:flex">
        <ul className="flex items-center gap-10 text-[16px] font-medium text-[#D0D5D9]">
          <li className="hover:text-white cursor-pointer transition-colors">
            Overview
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Curriculum
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Testimonials
          </li>
          <li className="hover:text-white cursor-pointer transition-colors">
            Pricing
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3 min-[512px]:gap-6">
        <div className="cursor-pointer hover:opacity-80 transition-opacity shrink-0">
          <Image
            src="/assets/Toggle.png"
            width={55}
            height={28}
            alt="theme toggle"
            className="max-[520px]:w-[45px]"
          />
        </div>
        <button className="bg-[#2563EB] hover:bg-blue-600 text-white font-semibold transition-all whitespace-nowrap min-[981px]:px-8 min-[981px]:py-3 min-[981px]:text-base rounded-xl max-[980px]:px-5 max-[980px]:py-2 max-[980px]:text-sm rounded-lg">
          Enroll now
        </button>

        {/* Hamburger Menu Icon (Visible below 981px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="min-[981px]:hidden flex flex-col gap-1.5 ml-2"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-gray-800 min-[981px]:hidden flex flex-col items-center py-6 gap-6 z-50">
          <ul className="flex flex-col items-center gap-6 text-gray-400">
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Overview
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Curriculum
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
