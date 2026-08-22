"use client";

import Link from "next/link";
import { ArrowLeft, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";

const VALUES = [
  {
    title: "Trusted",
    description: "Every order is handled with honesty and care, from request to delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable",
    description: "We show up, we follow through, and we keep you updated the whole way.",
    icon: Sparkles,
  },
  {
    title: "Women-Centered",
    description: "Built with women in mind — busy, far from home, and deserving of ease.",
    icon: Heart,
  },
  {
    title: "Friendly",
    description: "We treat every customer like family, not just a transaction.",
    icon: Users,
  },
];

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--purple)]/60 transition-colors hover:text-[var(--magenta)]"
        >
          <ArrowLeft size={14} strokeWidth={2.2} aria-hidden="true" />
          Back to home
        </Link>

        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--magenta)]">
          About ShopperSisi
        </p>

        <h1
          id="about-heading"
          className="max-w-2xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[var(--purple)] sm:text-5xl"
        >
          Bringing home closer,
          <span className="block text-[var(--magenta)]">one errand at a time.</span>
        </h1>

        <div className="mt-8 max-w-2xl space-y-5 text-sm leading-7 text-[#1D1D1D]/70 sm:text-base">
          <p>
            ShopperSisi started with a simple frustration: being far from home
            and craving the taste, fabrics, and everyday items only a
            Nigerian market can offer — with no easy way to get them.
          </p>
          <p>
            We run errands for a living, shopping Nigerian markets on your
            behalf and delivering straight to your doorstep, whether you're
            down the street or across the world. From foodstuffs and fabrics
            to dry fish, spices, and everything in between, we handle the
            back-and-forth so you don't have to.
          </p>
          <p>
            Today we deliver locally within Nigeria and internationally to
            Canada, the USA, Australia, and Finland — with more countries on
            the way.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="font-[var(--font-display)] text-2xl font-medium text-[var(--purple)] sm:text-3xl">
            What we stand for
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex items-start gap-4 rounded-2xl border border-black/[0.06] bg-[var(--soft-pink)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--magenta)]/25"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/20 text-[var(--magenta)]">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#1D1D1D]">
                      {value.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#1D1D1D]/60">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/[0.08] p-6 text-center">
          <p className="text-sm leading-6 text-[#1D1D1D]/80">
            Ready to get started?{" "}
            <Link
              href="/request"
              className="font-semibold text-[var(--magenta)] underline underline-offset-4 hover:text-[var(--purple)]"
            >
              Send us your first request
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}