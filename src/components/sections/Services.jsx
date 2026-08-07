"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PenTool,
  BookOpen,
  Edit3,
  Mic,
} from "lucide-react";
export default function Services() {

  const services = [
    {
      icon: PenTool,
      title: "Christian Content Writing",
      description:
        "Biblically grounded articles, devotionals, newsletters, and ministry resources crafted with clarity and purpose.",
    },
    {
      icon: BookOpen,
      title: "Devotional & Bible Study Writing",
      description:
        "Thoughtful spiritual materials designed to encourage believers and communicate biblical truth effectively.",
    },
    {
      icon: Edit3,
      title: "Book Editing & Refinement",
      description:
        "Developmental editing, proofreading, and manuscript refinement to help Christian authors present their message with excellence.",
    },
    {
      icon: Mic,
      title: "YouTube Script Writing",
      description:
        "Engaging Christian scripts that combine biblical teaching, research, and storytelling to reach wider audiences.",
    },
  
  ];

  return (
  <section
    id="services"
    className="py-24 bg-[#121212] text-[#F5F1E8]"
  >
    <div className="max-w-7xl mx-auto px-6">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
          What We Do
        </p>

        <h2 className="mt-5 text-4xl md:text-5xl font-serif">
          Words Crafted With
          <br />
          Purpose and Excellence
        </h2>

        <p className="mt-6 text-[#F5F1E8]/70 text-lg leading-relaxed">
          Helping ministries, authors, and faith-driven organizations
          communicate God's truth through thoughtful writing.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="mt-20 grid md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border
                border-[#F5F1E8]/10
                bg-white/5
                backdrop-blur-xl
                p-8
                hover:border-[#D4AF37]/40
                transition
              "
            >
              <Icon size={34} className="text-[#D4AF37]" />

              <h3 className="mt-6 text-2xl font-serif">
                {service.title}
              </h3>

              <p className="mt-5 text-[#F5F1E8]/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* View All Services */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/services"
          className="
            inline-flex
            items-center
            gap-2
            text-[#D4AF37]
            font-medium
            group
          "
        >
          View All Services
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* CTA */}
      <div
        className="
          mt-32
          rounded-3xl
          border
          border-[#D4AF37]/20
          bg-white/5
          p-12
          text-center
        "
      >
        <h2 className="text-4xl md:text-5xl font-serif">
          Every Meaningful Message
          <br />
          Deserves Exceptional Writing.
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-[#F5F1E8]/70 text-lg">
          Let us help you communicate your message with clarity,
          excellence, and purpose.
        </p>

        <Link
          href="/contact"
          className="
            inline-flex
            mt-10
            px-8
            py-4
            rounded-full
            bg-[#D4AF37]
            text-[#121212]
            font-medium
            hover:scale-105
            transition
          "
        >
          Work With Us →
        </Link>
      </div>

    </div>
  </section>
);
}