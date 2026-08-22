"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Beef,
  Fish,
  Flame,
  Palette,
  Shell,
  ShoppingBag,
  Shirt,
} from "lucide-react";

const categories = [
  {
    name: "Fish & Seafood",
    icon: Fish,
    image: "/blended_bonga_fish.webp.jpeg",
    href: "/shop?category=fish-seafood",
  },
  {
    name: "Meat & Bush Meat",
    icon: Beef,
    image: "/meat.webp.jpeg",
    href: "/shop?category=meat-bush-meat",
  },
  {
    name: "Snails",
    icon: Shell,
    image: "/snails.webp.jpeg",
    href: "/shop?category=snails",
  },
  {
    name: "Dried & Smoked Foods",
    icon: Flame,
    image: "/dried_fish.webp.jpeg",
    href: "/shop?category=dried-smoked-foods",
  },
  {
    name: "Thrift Wears",
    icon: Shirt,
    image: "/thrift-wears.jpg",
    href: "/shop?category=thrift-wears",
  },
  {
    name: "African Fabrics",
    icon: Palette,
    image: "/Fabric.webp",
    href: "/shop?category=african-fabrics",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header — centered, matches mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 text-center md:mb-16"
        >
          <h2
            id="categories-heading"
            className="font-[var(--font-display)] text-3xl font-semibold tracking-[-0.02em] text-[var(--purple)] sm:text-4xl"
          >
            What We Shop
          </h2>

          <span
            className="mx-auto mt-3 block h-1 w-10 rounded-full bg-[var(--magenta)]"
            aria-hidden="true"
          />

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--charcoal)]/60 sm:text-base">
            We help you get the best from Nigeria and deliver it to you —
            locally sourced, honestly priced.
          </p>

          <Link
            href="/shop"
            className="group absolute right-0 top-1 hidden items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[var(--charcoal)]/50 transition-colors hover:text-[var(--magenta)] sm:inline-flex"
          >
            View all
            <ArrowRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-5">
          {categories.map((category, index) => (
            <CategoryCard key={category.name} category={category} delay={index * 0.06} />
          ))}
        </div>

        {/* Mobile-only "view all" link */}
        <Link
          href="/shop"
          className="group mt-8 flex items-center justify-center gap-1 text-xs font-semibold uppercase tracking-wide text-[var(--charcoal)]/50 transition-colors hover:text-[var(--magenta)] sm:hidden"
        >
          View all products
          <ArrowRight
            size={14}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>

        {/* Errand Handoff */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-[1.75rem] bg-[var(--charcoal)] lg:mt-16"
        >
          <div className="flex flex-col gap-7 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-9">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Looking for something else?
              </p>

              <h3 className="mt-2 font-[var(--font-display)] text-2xl leading-tight text-white sm:text-3xl">
                Don&apos;t see what you need?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                Tell us what you&apos;re looking for. ShopperSisi can source
                it for you as part of our personal errand service.
              </p>
            </div>

            <Link
              href="/request"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[var(--gold)] px-6 py-3.5 text-sm font-semibold text-[var(--charcoal)] transition-all duration-300 hover:bg-white"
            >
              Request an Errand
              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({ category, delay = 0 }) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      <Link href={category.href} className="group block text-center">
        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--soft-pink)] shadow-[0_8px_24px_rgba(29,29,29,0.08)] transition-shadow duration-300 group-hover:shadow-[0_14px_32px_rgba(141,6,104,0.18)]">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Icon badge — overlaps bottom edge of the image, matches mockup */}
          <span className="absolute -bottom-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--magenta)] text-white shadow-[0_6px_16px_rgba(141,6,104,0.35)] ring-4 ring-white transition-colors duration-300 group-hover:bg-[var(--purple)]">
            <Icon size={16} strokeWidth={2} aria-hidden="true" />
          </span>
        </div>

        <p className="mt-6 text-[11px] font-bold uppercase tracking-wide text-[var(--charcoal)] transition-colors duration-300 group-hover:text-[var(--magenta)] sm:text-xs">
          {category.name}
        </p>
      </Link>
    </motion.div>
  );
}
