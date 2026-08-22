"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const COUNTRIES = [
  { name: "Canada", code: "ca" },
  { name: "USA", code: "us" },
  { name: "Australia", code: "au" },
  { name: "Finland", code: "fi" },
];

export default function DeliverTo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="rounded-[22px] border border-[#B80668]/10 bg-white px-6 py-7 shadow-[0_8px_30px_rgba(106,5,114,0.05)] sm:px-8 sm:py-8"
    >
      <h2 className="font-[var(--font-display)] text-2xl font-bold leading-tight text-[#6A0572] sm:text-[28px]">
        We Deliver To
      </h2>

      <div className="mt-3 h-[4px] w-12 rounded-full bg-[#B80668]" />

      <p className="mt-4 max-w-[500px] text-sm leading-6 text-[#1D1D1D]/65 sm:text-[15px]">
        We proudly deliver to the following countries — with more on the way.
      </p>

      <div className="mt-7 grid grid-cols-2 gap-4 sm:gap-5">
        {COUNTRIES.map((country) => (
          <div
            key={country.code}
            className="flex flex-col items-center justify-center rounded-[15px] bg-[#FFF5F8] px-3 py-4 transition-all duration-200 hover:-translate-y-1"
          >
            <div className="relative h-[42px] w-[64px] overflow-hidden rounded-[3px]">
              <Image
                src={`https://flagcdn.com/w160/${country.code}.png`}
                alt={`${country.name} flag`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <span className="mt-3 text-center text-[11px] font-bold uppercase tracking-[0.04em] text-[#1D1D1D]">
              {country.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}