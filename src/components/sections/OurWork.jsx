"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    category: "Long-Form YouTube Script",
    title: "25 Signs You're Entering a New Anointing Season",
    description:
      "A research-driven Christian YouTube script exploring biblical signs of spiritual transition, growth, and divine preparation through compelling storytelling and scriptural teaching.",
    button: "Explore Project",
    href: "/our-work/25-signs-youre-entering-a-new-anointing-season",
  },
  {
    category: "Long-Form YouTube Script",
    title: "5 Signs You Are a Seer",
    description:
      "An in-depth biblical script examining the characteristics, calling, and purpose of a seer through Scripture, practical application, and engaging storytelling.",
    button: "Explore Project",
    href: "/our-work/5-signs-you-are-a-seer",
  },
  {
    category: "Christian Article",
    title: "How to Discern Between Your Thoughts and God's Voice",
    description:
      "A biblically grounded article exploring how believers can distinguish God's voice from their own thoughts through Scripture, spiritual discernment, and the guidance of the Holy Spirit.",
    button: "Read Article",
    href: "/our-work/how-to-discern-between-your-thoughts-and-gods-voice",
  },
];

export default function OurWork() {
  return (
    <section
      id="work"
      className="py-24 bg-[#121212] text-[#F5F1E8]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
            Selected Works
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-serif leading-tight">
            Writing That Inspires,
            <br />
            Equips, and Endures.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#F5F1E8]/70">
            Explore a selection of Christian writing that reflects our
            commitment to biblical truth, thoughtful storytelling, and
            purposeful communication across YouTube scripts, articles,
            and faith-based resources.
          </p>
        </motion.div>

        {/* Featured Work */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#F5F1E8]/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                hover:-translate-y-1
                hover:border-[#D4AF37]/40
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-0
                  h-1
                  w-full
                  bg-transparent
                  group-hover:bg-[#D4AF37]
                  transition
                "
              />

              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                {project.category}
              </p>

              <h3 className="mt-5 text-2xl font-serif leading-snug">
                {project.title}
              </h3>

              <p className="mt-5 text-[#F5F1E8]/70 leading-relaxed">
                {project.description}
              </p>

              <Link
                href={project.href}
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-[#D4AF37]
                  font-medium
                  transition-all
                  group-hover:gap-3
                "
              >
                {project.button}
                <ArrowUpRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Work */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/our-work"
            className="
              inline-flex
              items-center
              gap-2
              text-[#D4AF37]
              font-medium
              group
            "
          >
            View Our Work
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}