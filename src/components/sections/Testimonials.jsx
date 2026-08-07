"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ruth O.",
      quote:
        "Excellently crafted! I'm grateful to encounter God's Word through these newsletters. It's comforting to know that God can use them as another channel to speak to me.",
    },
    {
      name: "Tiwalola A.",
      quote:
        "The teachings have been remarkably timely. They have often aligned with my current season and even served as confirmation. Through the newsletters, I've also grown in my knowledge of God.",
    },
    {
      name: "Tobe O.",
      quote:
        "The quality of the writing is impressive. Every piece reflects thoughtful effort, excellence, and a remarkable writing style.",
    },
    {
      name: "Oyinloye F.",
      quote:
        "The write-ups have been a tremendous blessing. They consistently align with what God is communicating in each season and have become one of the channels through which He speaks to me.",
    },
  ];

  return (
    <section
      id="testimonials"
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
            Testimonials
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-serif">
            Words That
            <br />
            Have Made an Impact
          </h2>

          <p className="mt-6 text-lg text-[#F5F1E8]/70 leading-relaxed">
            Every piece we write is guided by prayer, shaped with excellence,
            and rooted in God's Word. These reflections from our readers
            remind us why faithful writing matters.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
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
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="h-1 w-12 rounded-full bg-[#D4AF37] mb-6" />

              <div className="text-[#D4AF37] text-xl mb-5">
                ★★★★★
              </div>

              <p className="italic leading-relaxed text-[#F5F1E8]/80">
                "{item.quote}"
              </p>

              <p className="mt-8 font-medium text-[#D4AF37]">
                — {item.name}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-20 text-center">
          <p className="text-2xl text-[#D4AF37]">
            ★★★★★
          </p>

          <p className="mt-4 text-[#F5F1E8]/60 leading-relaxed max-w-2xl mx-auto">
            Encouraging believers through thoughtful, biblically grounded
            writing that points hearts toward Christ.
          </p>
        </div>

      </div>
    </section>
  );
}