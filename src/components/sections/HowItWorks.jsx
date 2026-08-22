"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  MessageCircle,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Tell us what you need",
    description:
      "Browse what we have available, or tell us exactly what you're looking for. If we don't have it, our errand service can help source it.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "We sort it out",
    description:
      "We'll confirm availability, quantity, price, and any details with you before we proceed. No guesswork, no surprises.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Get your order",
    description:
      "Pick up from our store or have your order arranged for delivery, depending on what works best for you.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Subtle brand detail */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#8D0668]/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20"
        >
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8D0668]">
              How it works
            </p>

            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#1D1D1D] sm:text-5xl lg:text-6xl">
              Getting what you need
              <span className="block text-[#8D0668]">
                shouldn&apos;t be complicated.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#1D1D1D]/60 sm:text-lg">
            Whether you&apos;re shopping from our available products or asking
            us to find something specific, we keep the process simple from
            start to finish.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-14 border-t border-[#1D1D1D]/10 lg:mt-20">
          <div className="grid md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="group relative border-b border-[#1D1D1D]/10 px-0 py-9 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm text-[#1D1D1D]/30">
                      {step.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8D0668]/15 text-[#8D0668] transition-all duration-300 group-hover:border-[#8D0668] group-hover:bg-[#8D0668] group-hover:text-white">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Step */}
                  <h3 className="mt-9 font-display text-2xl font-medium tracking-[-0.02em] text-[#1D1D1D] sm:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#1D1D1D]/55">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 rounded-[1.75rem] bg-[#FFF5F8] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="font-display text-xl text-[#1D1D1D] sm:text-2xl">
              Already know what you need?
            </p>

            <p className="mt-1.5 text-sm leading-6 text-[#1D1D1D]/55">
              Start with our available products or send us an errand request.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8D0668] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6A0572]"
            >
              Shop now

              <ArrowRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/errands"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1D1D1D]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#1D1D1D] transition-all duration-300 hover:border-[#8D0668]/30 hover:text-[#8D0668]"
            >
              Request an errand
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}