"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "African Foodstuffs",
    description: "Rice, gari, beans, palm oil, seasonings, and pantry staples from Nigerian markets.",
    image: "/shop-foodstuffs.jpg",
  },
  {
    name: "Fabrics",
    description: "Ankara, lace, and traditional fabrics in a wide range of colors and patterns.",
    image: "/shop-fabrics.jpg",
  },
  {
    name: "Dry Fish & Meat",
    description: "Quality dry fish, stockfish, and meat, sourced fresh from trusted market vendors.",
    image: "/shop-dryfish.jpg",
  },
  {
    name: "Spices & Ingredients",
    description: "Local spices, herbs, and seasoning blends to bring authentic flavor to your kitchen.",
    image: "/shop-spices.jpg",
  },
  {
    name: "Household Items",
    description: "Everyday essentials and household goods, shopped and delivered on request.",
    image: "/shop-household.jpg",
  },
  {
    name: "And Many More",
    description: "Something specific in mind? Tell us and we'll source it for you.",
    image: "/shop-more.jpg",
  },
];

export default function Shop() {
  return (
    <section
      aria-labelledby="shop-heading"
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
          Shop
        </p>

        <h1
          id="shop-heading"
          className="max-w-xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[var(--purple)] sm:text-5xl"
        >
          Everything the market has,
          <span className="block text-[var(--magenta)]">delivered to you.</span>
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-7 text-[#1D1D1D]/65 sm:text-base">
          Browse what we shop for, then send us your request — locally in
          Nigeria or shipped internationally.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="group overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-[var(--soft-pink)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--magenta)]/25"
            >
              <div className="relative h-44 w-full overflow-hidden bg-black/5">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h2 className="font-[var(--font-display)] text-lg font-semibold text-[var(--purple)]">
                  {category.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#1D1D1D]/65">
                  {category.description}
                </p>

                <Link
                  href="/request"
                  className="group/link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--magenta)] transition-colors hover:text-[var(--purple)]"
                >
                  Request this
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/[0.08] p-6 text-center">
          <p className="text-sm leading-6 text-[#1D1D1D]/80">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link
              href="/request"
              className="font-semibold text-[var(--magenta)] underline underline-offset-4 hover:text-[var(--purple)]"
            >
              Send a custom request
            </Link>{" "}
            and we&apos;ll source it for you.
          </p>
        </div>
      </div>
    </section>
  );
}