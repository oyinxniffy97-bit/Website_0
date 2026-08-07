"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function OurStory() {
  return (
    <section
      id="story"
      className="py-24 bg-[#121212] text-[#F5F1E8]"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
            Our Story
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-serif leading-tight">
            Words Are More
            <br />
            Than Sentences.
            <br />
            They Carry Truth.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-[#F5F1E8]/80">
            LisbethWrites was born from a conviction that words are powerful
            instruments in God's hands—capable of teaching, encouraging,
            restoring, and transforming lives.
          </p>

          <p className="mt-5 leading-relaxed text-[#F5F1E8]/70">
            Through devotionals, articles, newsletters, and thoughtful
            storytelling, we help people encounter God's Word with clarity,
            hope, and purpose.
          </p>

          <div className="mt-8 flex items-center gap-3 text-[#D4AF37]">
            <Sparkles size={20} />

            <span className="text-sm tracking-wide">
              Teaching the World the Word, Through Writing.
            </span>
          </div>

          <p className="mt-8 text-[#F5F1E8]/60 text-sm">
            Discover the heart behind LisbethWrites.
          </p>

          <Link
  href="/our-story"
  className="
    inline-flex
    items-center
    gap-2
    mt-4
    text-[#D4AF37]
    font-medium
    group
  "
>
  Read Our Story
  <span className="transition-transform group-hover:translate-x-1">
    →
  </span>
</Link>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            rounded-3xl
            border
            border-[#D4AF37]/20
            bg-white/5
            backdrop-blur-xl
            p-10
            overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl" />

          <div className="relative">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs">
              Our Mission
            </p>

            <h3 className="mt-6 text-3xl font-serif leading-tight">
              To teach the world
              <br />
              the Word until
              <br />
              the earth is filled
              <br />
              with the knowledge
              <br />
              of the glory
              <br />
              of the Lord.
            </h3>

            <div className="mt-8 h-px bg-[#D4AF37]/40" />

            <p className="mt-8 text-[#F5F1E8]/75 leading-relaxed">
              Through Christ-centered writing, we create devotionals,
              articles, reflections, newsletters, and stories that point
              people to God's truth, inspire faith, and make His glory
              known.
            </p>

            <p className="mt-8 text-[#D4AF37] italic text-sm leading-relaxed">
              “For the earth will be filled with the knowledge of the glory
              of the Lord as the waters cover the sea.”
              <br />
              — Habakkuk 2:14
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}