"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, ShoppingCart, Package, Smile } from "lucide-react";

const STEPS = [
  {
    number: "1",
    title: "You send your request",
    description:
      "Reach out via WhatsApp, call, or our request form and tell us exactly what you need — foodstuffs, fabrics, or an errand.",
    icon: MessageCircle,
  },
  {
    number: "2",
    title: "We shop for you",
    description:
      "We head to the market, compare prices, check quality, and keep you updated with photos or messages along the way.",
    icon: ShoppingCart,
  },
  {
    number: "3",
    title: "We deliver to you",
    description:
      "Your items are packaged and delivered to your doorstep — locally within Nigeria or internationally to Canada, USA, Australia, and Finland.",
    icon: Package,
  },
  {
    number: "4",
    title: "You relax & enjoy",
    description:
      "No market stress, no long trips. Just what you needed, right at your door.",
    icon: Smile,
  },
];

export default function HowItWorksPage() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--purple)]/60 transition-colors hover:text-[var(--magenta)]"
        >
          <ArrowLeft size={14} strokeWidth={2.2} aria-hidden="true" />
          Back to home
        </Link>

        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--magenta)]">
          How It Works
        </p>

        <h1
          id="how-it-works-heading"
          className="max-w-xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[var(--purple)] sm:text-5xl"
        >
          From request to doorstep,
          <span className="block text-[var(--magenta)]">in four simple steps.</span>
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-7 text-[#1D1D1D]/65 sm:text-base">
          Ordering Nigerian foodstuffs, fabrics, or errands has never been easier.
        </p>

        <div className="mt-14 rounded-[1.75rem] border border-black/[0.06] bg-[var(--soft-pink)] p-6 sm:p-8">
          <ol className="space-y-8">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === STEPS.length - 1;

              return (
                <li key={step.number} className="relative flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--magenta)] text-base font-bold text-white">
                      {step.number}
                    </span>
                    {!isLast && (
                      <span
                        className="mt-1 w-px flex-1 border-l-2 border-dashed border-[var(--magenta)]/25"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="pb-2">
                    <div className="flex items-center gap-2">
                      <Icon
                        size={18}
                        strokeWidth={2}
                        className="text-[var(--magenta)]"
                        aria-hidden="true"
                      />
                      <p className="font-[var(--font-display)] text-lg font-semibold text-[var(--purple)]">
                        {step.title}
                      </p>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#1D1D1D]/65">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/[0.08] p-6 text-center">
          <p className="text-sm leading-6 text-[#1D1D1D]/80">
            Ready to start?{" "}
            <Link
              href="/request"
              className="font-semibold text-[var(--magenta)] underline underline-offset-4 hover:text-[var(--purple)]"
            >
              Send your request now
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}