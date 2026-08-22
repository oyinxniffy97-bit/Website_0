"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Truck,
  Store,
} from "lucide-react";

const SERVICES = [
  {
    id: "personal-shopping",
    icon: ShoppingBag,
    title: "Personal Shopping",
    tagline: "Abroad and craving home?",
    description:
      "Living outside Nigeria but missing the market? We shop Nigerian foodstuffs, fabrics, dry fish, and spices on your behalf, then ship them straight to your doorstep — delivering to Canada, the USA, Australia, and Finland.",
    points: [
      "For customers outside Nigeria",
      "Foodstuffs, fabrics & spices",
      "Compared prices, quality checked",
      "International delivery to Canada, USA, Australia & Finland",
    ],
  },
  {
    id: "errands",
    icon: Truck,
    title: "Errand Services",
    tagline: "In Nigeria, but can't get to the market?",
    description:
      "Busy schedule, no transport, or just can't make the trip? Our Nigeria errand service shops local markets for you and delivers to your doorstep, anywhere in Nigeria.",
    points: [
      "For customers within Nigeria",
      "We visit the market for you",
      "Same-day or scheduled delivery",
      "Bill payments & pickups too",
    ],
  },
  {
    id: "walk-in-store",
    icon: Store,
    title: "Walk-In Store",
    tagline: "Prefer to shop in person?",
    description:
      "Visit our physical store to browse and buy Nigerian foodstuffs and fabrics directly — same trusted quality, no waiting on delivery. Great for last-minute needs or seeing items before you buy.",
    points: [
      "Browse in-store inventory",
      "Pay on the spot",
      "Same-day pickup",
      "Friendly, no-pressure service",
    ],
  },
];

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--purple)]/60 transition-colors hover:text-[var(--magenta)]"
        >
          <ArrowLeft size={14} strokeWidth={2.2} aria-hidden="true" />
          Back to home
        </Link>

        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--magenta)]">
          Our Services
        </p>

        <h1
          id="services-heading"
          className="max-w-xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[var(--purple)] sm:text-5xl"
        >
          Three ways we
          <span className="block text-[var(--magenta)]">make it easy.</span>
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-7 text-[#1D1D1D]/65 sm:text-base">
          Whether you&apos;re shopping the Nigerian market from abroad or
          running errands locally, we&apos;ve got a way to help.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="flex flex-col rounded-[1.75rem] border border-black/[0.06] bg-[var(--soft-pink)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--magenta)]/25 sm:p-8"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/20 text-[var(--magenta)]">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>

                <h2 className="mt-5 font-[var(--font-display)] text-xl font-semibold text-[var(--purple)] sm:text-2xl">
                  {service.title}
                </h2>

                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--magenta)]/70">
                  {service.tagline}
                </p>

                <p className="mt-4 text-sm leading-6 text-[#1D1D1D]/65">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-[#1D1D1D]/70"
                    >
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <Link
                    href="/request"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--magenta)] transition-colors hover:text-[var(--purple)]"
                  >
                    Request this
                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/[0.08] p-6 text-center">
          <p className="text-sm leading-6 text-[#1D1D1D]/80">
            Not sure which service fits your need?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--magenta)] underline underline-offset-4 hover:text-[var(--purple)]"
            >
              Reach out to us
            </Link>{" "}
            and we&apos;ll point you in the right direction.
          </p>
        </div>
      </div>
    </section>
  );
}