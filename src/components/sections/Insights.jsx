"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      category: "Christian Living",
      title: "Every Day Carries a Message",
      description:
        "Discover how God speaks through the ordinary moments of life and why every day presents an opportunity to grow in Him.",
      href: "/insights/every-day-carries-a-message",
    },
    {
      category: "Spiritual Growth",
      title: "Growing at God's Pace",
      description:
        "A reminder that spiritual maturity is cultivated through faithfulness, patience, and trusting God's perfect timing.",
      href: "/insights/growing-at-gods-pace",
    },
    {
      category: "Biblical Reflection",
      title: "When God Comes Looking for Fruit",
      description:
        "An exploration of what it means to bear lasting spiritual fruit and respond faithfully to God's work in our lives.",
      href: "/insights/when-god-comes-looking-for-fruit",
    },
  ];

  return (
    <section
      id="insights"
      className="py-24 bg-[#121212] text-[#F5F1E8]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
            Insights
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-serif">
            Teaching the Word,
            <br />
            One Article at a Time.
          </h2>

          <p className="mt-6 text-[#F5F1E8]/70 text-lg leading-relaxed">
            Every article begins at LisbethWrites and is published through
            <span className="text-[#D4AF37]"> Arkscribe</span>, our Christian
            publishing platform dedicated to sharing biblically grounded writing
            with the world.
          </p>
        </motion.div>

        {/* Articles */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                rounded-3xl
                border
                border-[#F5F1E8]/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition
                hover:border-[#D4AF37]/40
                hover:-translate-y-1
              "
            >
              <BookOpen
                size={32}
                className="text-[#D4AF37]"
              />

              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                {article.category}
              </p>

              <h3 className="mt-4 text-2xl font-serif leading-tight">
                {article.title}
              </h3>

              <p className="mt-5 text-[#F5F1E8]/70 leading-relaxed">
                {article.description}
              </p>

              <div className="mt-6 text-xs uppercase tracking-[0.2em] text-[#F5F1E8]/50">
                Published on Arkscribe
              </div>

              <Link
                href={article.href}
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  text-[#D4AF37]
                  font-medium
                  transition-all
                  group-hover:gap-3
                "
              >
                Read on Arkscribe
                <ArrowUpRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/insights"
            className="
              inline-flex
              items-center
              gap-2
              text-[#D4AF37]
              font-medium
              group
            "
          >
            Explore All Insights
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}