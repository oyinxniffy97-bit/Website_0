import Image from "next/image";
import { ArrowRight, Package } from "lucide-react";

const CATEGORIES = [
  {
    title: "Foodstuffs",
    img: "/foodstuff.png",
  },
  {
    title: "Provisions",
    img: "/provision-store.jpg",
  },
  {
    title: "Fabrics",
    img: "/Fabric.webp",
  },
  {
    title: "Bonga Fish",
    img: "/blended_bonga_fish.webp.jpeg",
  },
  {
    title: "Dry Fish",
    img: "/dried_fish.webp.jpeg",
  },
  {
    title: "Snails",
    img: "/snails.webp.jpeg",
  },
  {
    title: "Meat",
    img: "/meat.webp.jpeg",
  },
];

export default function WhatWeShop() {
  return (
    <section
      id="shop"
      className="bg-white px-6 py-16 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-[#8D0668] sm:text-4xl">
            What We Shop
          </h2>

          <p className="mx-auto mt-3 max-w-xl font-[var(--font-body)] text-[#1D1D1D]/60">
            We help you get the best from Nigeria and deliver to you.
          </p>
        </div>

        {/* SHOPPING CATEGORIES */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#FFF5F8]">
                <Image
                  src={category.img}
                  alt={category.title}
                  fill
                  sizes="
                    (min-width: 1024px) 250px,
                    (min-width: 640px) 30vw,
                    45vw
                  "
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>

              <p className="mt-3 text-center font-[var(--font-body)] text-sm font-semibold uppercase tracking-wide text-[#1D1D1D]">
                {category.title}
              </p>
            </div>
          ))}

          {/* AND MANY MORE / REQUEST ORDER */}
          <a
            href="https://wa.me/2348101605616"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Request an order through WhatsApp"
            className="group flex flex-col"
          >
            <div className="relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#6A0572] to-[#8D0668] px-5 text-center transition duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_12px_30px_rgba(106,5,114,0.2)]">

              <Package
                size={30}
                strokeWidth={1.8}
                aria-hidden="true"
                className="text-[#FFC107]"
              />

              <span className="font-[var(--font-display)] text-lg font-bold text-white">
                And Many More
              </span>

              <p className="text-xs leading-relaxed text-white/85">
                Can&apos;t see what you want?
                <br />
                Place an order and we&apos;ll shop for you.
              </p>

              <ArrowRight
                size={18}
                strokeWidth={2.3}
                aria-hidden="true"
                className="mt-1 text-[#FFC107] transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>

            <p className="mt-3 text-center font-[var(--font-body)] text-sm font-semibold uppercase tracking-wide text-[#1D1D1D]">
              Request an Order
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}