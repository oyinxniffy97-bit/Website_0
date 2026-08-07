"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  const team = [
    {
      name: "Adese Abosede",
      role: "Founder & Lead Writer",
      image: "/abosede.jpg",
      bio: "Leads the creative vision of LisbethWrites, crafting faith-centered content that communicates biblical truth with clarity, excellence, and purpose.",
    },
    {
      name: "Obaseki Favour",
      role: "Editorial Lead",
      image: "/favour.jpg",
      bio: "Ensures every manuscript, article, and publication meets the highest editorial standards through thoughtful editing and refinement.",
    },
    {
      name: "Olatunbosun Faith",
      role: "Creative Design Lead",
      image: "/faith.jpg",
      bio: "Designs compelling visuals that complement every message, helping faith-filled stories communicate with beauty and impact.",
    },
  ];

  return (
    <section
      id="team"
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
            Meet the Team
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-serif">
            The People
            <br />
            Behind the Mission
          </h2>

          <p className="mt-6 text-lg text-[#F5F1E8]/70 leading-relaxed">
            Every message we create is the result of thoughtful collaboration,
            editorial excellence, and a shared commitment to communicating
            God's truth with clarity, creativity, and purpose.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-[#F5F1E8]/10
                bg-white/5
                backdrop-blur-xl
                hover:border-[#D4AF37]/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="p-8">
                <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs">
                  {member.role}
                </p>

                <h3 className="mt-3 text-2xl font-serif">
                  {member.name}
                </h3>

                <p className="mt-5 text-[#F5F1E8]/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}