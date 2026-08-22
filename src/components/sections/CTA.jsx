"use client";

import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Store } from "lucide-react";
import { motion } from "framer-motion";

// TODO: replace with your real walk-in store details
const STORE_ADDRESS = ""; // e.g. "12 Allen Avenue, Ikeja, Lagos"
const STORE_HOURS = ""; // e.g. "Mon–Sat, 9am–6pm"
const STORE_MAPS_LINK = ""; // e.g. Google Maps share link

export default function CTA() {
  const hasStoreDetails = STORE_ADDRESS && STORE_HOURS;

  return (
    <section className="relative overflow-hidden bg-[var(--soft-pink)] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Brand atmosphere */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[var(--magenta)]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 -top-20 h-[24rem] w-[24rem] rounded-full bg-[var(--gold)]/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="overflow-hidden rounded-[2.5rem] bg-[var(--magenta)] px-6 py-12 shadow-[0_30px_70px_rgba(141,6,104,0.16)] sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--gold)] sm:text-[11px]">
              Need something?
            </p>

            <h2 className="mt-5 font-[var(--font-display)] text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Tell us what you need.
              <span className="mt-1 block text-[var(--gold)]">
                We&apos;ll help you get it.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-[var(--font-body)] text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Shop what&apos;s available, ask us to source something specific,
              or visit our store in person. However you choose to shop,
              ShopperSisi is here to make it easier.
            </p>
          </div>

          {/* Primary Actions */}
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-[var(--font-body)] text-sm font-semibold text-[var(--magenta)] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--gold)] hover:text-[var(--charcoal)]"
            >
              Shop now

              <ArrowRight
                size={17}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/request"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-[var(--font-body)] text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Request an errand
            </Link>
          </div>

          {/* Secondary Options */}
          <div className="mt-12 grid gap-3 border-t border-white/15 pt-8 sm:grid-cols-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/2348101605616"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with ShopperSisi on WhatsApp"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:bg-white/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--magenta)]">
                <MessageCircle
                  size={19}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <span className="text-left">
                <span className="block font-[var(--font-body)] text-sm font-semibold text-white">
                  Chat with us
                </span>

                <span className="mt-0.5 block font-[var(--font-body)] text-xs text-white/50">
                  Talk to ShopperSisi on WhatsApp
                </span>
              </span>

              <ArrowRight
                size={16}
                aria-hidden="true"
                className="ml-auto text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
              />
            </a>

            {/* Store */}
            {hasStoreDetails ? (
              <a
                href={STORE_MAPS_LINK || undefined}
                target={STORE_MAPS_LINK ? "_blank" : undefined}
                rel={STORE_MAPS_LINK ? "noopener noreferrer" : undefined}
                aria-label="Get directions to the ShopperSisi store"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:bg-white/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--charcoal)]">
                  <MapPin size={19} strokeWidth={1.8} aria-hidden="true" />
                </span>

                <span className="text-left">
                  <span className="block font-[var(--font-body)] text-sm font-semibold text-white">
                    Visit our store
                  </span>

                  <span className="mt-0.5 block font-[var(--font-body)] text-xs text-white/50">
                    {STORE_ADDRESS} · {STORE_HOURS}
                  </span>
                </span>

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="ml-auto text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
                />
              </a>
            ) : (
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--charcoal)]">
                  <Store size={19} strokeWidth={1.8} aria-hidden="true" />
                </span>

                <span className="text-left">
                  <span className="block font-[var(--font-body)] text-sm font-semibold text-white">
                    Visit our store
                  </span>

                  <span className="mt-0.5 block font-[var(--font-body)] text-xs text-white/50">
                    Walk in and shop with us
                  </span>
                </span>

                <span
                  className="ml-auto h-2 w-2 rounded-full bg-[var(--gold)]"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>

          {/* Store details fallback — only shows until STORE_ADDRESS / STORE_HOURS are filled in above */}
          {!hasStoreDetails && (
            <p className="mt-6 text-center font-[var(--font-body)] text-[11px] text-white/35">
              Store location and opening hours coming soon.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
