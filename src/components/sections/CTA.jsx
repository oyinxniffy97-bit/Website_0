import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl border border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl p-12 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
          Let's Work Together
        </p>

        <h2 className="mt-6 text-4xl md:text-5xl font-serif leading-tight">
          Let's Tell Stories
          <br />
          That Matter.
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-[#F5F1E8]/70">
          Whether you need devotionals, Bible study materials, articles,
          newsletters, Christian content, or thoughtful editing, we'd be
          honored to help you communicate God's truth with clarity,
          excellence, and purpose.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 font-medium text-[#121212] transition-all duration-300 hover:scale-105 hover:bg-[#E5C158]"
          >
            Work With Us →
          </Link>

          <a
            href="https://wa.me/2348132963356"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37] px-8 py-4 text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#121212]"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}