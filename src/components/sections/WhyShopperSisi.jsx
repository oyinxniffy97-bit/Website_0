"use client";

import { motion } from "framer-motion";
import { MessageCircle, Package, ShoppingCart, Smile } from "lucide-react";

const steps = [
  { number: "1", title: "You send your request", description: "Tell us what you need via WhatsApp or call.", icon: MessageCircle },
  { number: "2", title: "We shop for you", description: "We get the best and keep you updated.", icon: ShoppingCart },
  { number: "3", title: "We deliver to you", description: "To your doorstep, locally or internationally.", icon: Package },
  { number: "4", title: "You relax & enjoy", description: "Your needs, our priority. You smile!", icon: Smile },
];

export default function WhyShopperSisi() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-[1.75rem] bg-white p-6 shadow-[0_8px_28px_rgba(29,29,29,0.06)] sm:p-8"
    >
      <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-[var(--purple)] sm:text-3xl">
        How It Works
      </h2>

      <span className="mt-3 block h-1 w-10 rounded-full bg-[var(--magenta)]" aria-hidden="true" />

      <ol className="mt-7 space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;
          return (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative flex gap-4"
            >
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--magenta)] text-sm font-bold text-white">
                  {step.number}
                </span>
                {!isLast && (
                  <span className="mt-1 w-px flex-1 border-l-2 border-dashed border-[var(--magenta)]/25" aria-hidden="true" />
                )}
              </div>
              <div className="pb-1">
                <div className="flex items-center gap-2">
                  <Icon size={16} strokeWidth={2} className="text-[var(--gold)]" aria-hidden="true" />
                  <p className="text-sm font-bold uppercase tracking-wide text-[var(--charcoal)]">{step.title}</p>
                </div>
                <p className="mt-1 text-sm leading-6 text-[var(--charcoal)]/60">{step.description}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </motion.div>
  );
}