"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "How do I place an order?",
    answer:
      "Use our request form, chat with us on WhatsApp, or give us a call. Tell us what you need — foodstuffs, fabrics, or an errand — and we'll take it from there.",
  },
  {
    question: "Where do you deliver?",
    answer:
      "We deliver locally within Nigeria, and internationally to Canada, the USA, Australia, and Finland — with more countries on the way.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Local deliveries within Nigeria are typically same-day to a few days depending on your location. International deliveries vary by destination — we'll give you an estimated timeline when you place your request.",
  },
  {
    question: "Can I pay online, or only bank transfer?",
    answer:
      "Currently we accept bank transfer. We'll share account details once your order is confirmed.",
  },
  {
    question: "What's the difference between Personal Shopping and Errand Services?",
    answer:
      "Personal Shopping is for customers living outside Nigeria who want items shipped internationally. Errand Services is for customers already in Nigeria who can't get to the market themselves — we shop locally and deliver within the country.",
  },
  {
    question: "Can I visit your store in person?",
    answer:
      "Yes — we have a walk-in store where you can browse and buy directly. Check our Contact page for store details.",
  },
  {
    question: "What if I can't find the item I need listed?",
    answer:
      "No problem — just tell us! We handle special and hard-to-find requests too. Message us on WhatsApp or use the request form's 'Something else' option.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      aria-labelledby="faq-heading"
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
          FAQ
        </p>

        <h1
          id="faq-heading"
          className="max-w-xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[var(--purple)] sm:text-5xl"
        >
          Questions?
          <span className="block text-[var(--magenta)]">We&apos;ve got answers.</span>
        </h1>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-black/[0.06] bg-[var(--soft-pink)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-[var(--font-body)] text-sm font-semibold text-[#1D1D1D] sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                    className={
                      "shrink-0 text-[var(--magenta)] transition-transform duration-300 " +
                      (isOpen ? "rotate-180" : "")
                    }
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-6 text-[#1D1D1D]/65">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/[0.08] p-6 text-center">
          <p className="text-sm leading-6 text-[#1D1D1D]/80">
            Still have questions?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[var(--magenta)] underline underline-offset-4 hover:text-[var(--purple)]"
            >
              Contact us directly
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}