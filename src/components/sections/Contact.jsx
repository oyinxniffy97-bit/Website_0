"use client";

import Link from "next/link";
import { ArrowLeft, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import {
  EMAIL,
  EMAIL_LINK,
  PHONE_LINK,
  PHONE_NUMBER,
  STORE_ADDRESS,
  STORE_HOURS,
  WHATSAPP_LINK,
} from "@/lib/site-config";

export default function Contact() {
  const hasStoreDetails = Boolean(STORE_ADDRESS && STORE_HOURS);

  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-3xl">

        {/* BACK TO HOME */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--purple)]/60 transition-colors hover:text-[var(--magenta)]"
        >
          <ArrowLeft size={14} strokeWidth={2.2} aria-hidden="true" />
          Back to home
        </Link>

        {/* EYEBROW */}
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--magenta)]">
          Get In Touch
        </p>

        {/* HEADING */}
        <h1
          id="contact-heading"
          className="max-w-xl font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[var(--purple)] sm:text-5xl"
        >
          We&apos;re here to help,
          <span className="block text-[var(--magenta)]">
            whenever you need us.
          </span>
        </h1>

        {/* INTRO */}
        <p className="mt-5 max-w-lg text-sm leading-7 text-[#1D1D1D]/65 sm:text-base">
          Have a question, a special request, or just want to say hi? Reach
          out through any of the channels below.
        </p>

        {/* CONTACT OPTIONS */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">

          {/* WHATSAPP */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with ShopperSisi on WhatsApp"
            className="group flex items-start gap-4 rounded-2xl border border-black/[0.06] bg-[var(--soft-pink)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--magenta)]/25"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/20 text-[var(--magenta)]">
              <MessageCircle
                size={20}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>

            <div>
              <p className="text-sm font-semibold text-[#1D1D1D]">
                Chat on WhatsApp
              </p>

              <p className="mt-1 text-sm leading-6 text-[#1D1D1D]/60">
                Fastest way to reach us — usually a same-day reply.
              </p>
            </div>
          </a>

          {/* PHONE */}
          <a
            href={PHONE_LINK}
            aria-label={`Call ShopperSisi at ${PHONE_NUMBER}`}
            className="group flex items-start gap-4 rounded-2xl border border-black/[0.06] bg-[var(--soft-pink)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--magenta)]/25"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/20 text-[var(--magenta)]">
              <Phone
                size={20}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>

            <div>
              <p className="text-sm font-semibold text-[#1D1D1D]">
                Call Us
              </p>

              <p className="mt-1 text-sm leading-6 text-[#1D1D1D]/60">
                {PHONE_NUMBER}
              </p>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href={EMAIL_LINK}
            aria-label={`Email ShopperSisi at ${EMAIL}`}
            className="group flex items-start gap-4 rounded-2xl border border-black/[0.06] bg-[var(--soft-pink)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--magenta)]/25"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/20 text-[var(--magenta)]">
              <Mail
                size={20}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>

            <div>
              <p className="text-sm font-semibold text-[#1D1D1D]">
                Email Us
              </p>

              <p className="mt-1 text-sm leading-6 text-[#1D1D1D]/60">
                {EMAIL}
              </p>
            </div>
          </a>

          {/* STORE */}
          <div className="flex items-start gap-4 rounded-2xl border border-black/[0.06] bg-[var(--soft-pink)] p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/20 text-[var(--magenta)]">
              <MapPin
                size={20}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>

            <div>
              <p className="text-sm font-semibold text-[#1D1D1D]">
                Visit Our Store
              </p>

              <p className="mt-1 text-sm leading-6 text-[#1D1D1D]/60">
                {hasStoreDetails
                  ? STORE_ADDRESS + " · " + STORE_HOURS
                  : "Walk-in store available."}
              </p>
            </div>
          </div>
        </div>

        {/* ORDER CTA */}
        <div className="mt-10 rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/[0.08] p-6 text-center">
          <p className="text-sm leading-6 text-[#1D1D1D]/80">
            Placing an order?{" "}
            <Link
              href="/request"
              className="font-semibold text-[var(--magenta)] underline underline-offset-4 hover:text-[var(--purple)]"
            >
              Use our errand request form
            </Link>{" "}
            instead for a faster response.
          </p>
        </div>
      </div>
    </section>
  );
}