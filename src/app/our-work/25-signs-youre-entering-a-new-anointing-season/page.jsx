import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "25 Signs You're Entering a New Anointing Season | LisbethWrites",
  description:
    "A long-form Christian YouTube script showcasing biblical storytelling, research, and audience-retention writing.",
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#F5F1E8]">

      {/* Hero */}

      <section className="border-b border-[#F5F1E8]/10">

        <div className="max-w-5xl mx-auto px-6 py-16">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} />
            Back to Selected Works
          </Link>

          <p className="mt-12 uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
            Long-Form YouTube Script
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight">
            25 Signs You're Entering
            <br />
            a New Anointing Season
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-[#F5F1E8]/70 leading-relaxed">
            A research-driven Christian YouTube script exploring biblical
            signs of spiritual transition, growth, and divine preparation
            through compelling storytelling and scriptural teaching.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <div className="rounded-full border border-[#D4AF37]/30 px-5 py-2">
              35 Minute Read
            </div>

            <div className="rounded-full border border-[#D4AF37]/30 px-5 py-2">
              Christian Content
            </div>

            <div className="rounded-full border border-[#D4AF37]/30 px-5 py-2">
              Scriptwriting
            </div>

            <div className="rounded-full border border-[#D4AF37]/30 px-5 py-2">
              Biblical Teaching
            </div>

          </div>

        </div>

      </section>

      {/* Project Overview */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-16">

            <div>

              <p className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
                Project Details
              </p>

              <div className="mt-8 space-y-8">

                <div>
                  <p className="text-[#F5F1E8]/50 uppercase text-xs tracking-[0.2em]">
                    Category
                  </p>

                  <p className="mt-2">
                    Long-Form Christian YouTube Script
                  </p>
                </div>

                <div>
                  <p className="text-[#F5F1E8]/50 uppercase text-xs tracking-[0.2em]">
                    Services
                  </p>

                  <p className="mt-2">
                    Research
                    <br />
                    Scriptwriting
                    <br />
                    Biblical Storytelling
                    <br />
                    Audience Retention
                  </p>
                </div>

                <div>
                  <p className="text-[#F5F1E8]/50 uppercase text-xs tracking-[0.2em]">
                    Reading Time
                  </p>

                  <p className="mt-2">
                    Approximately 35 minutes
                  </p>
                </div>

              </div>

            </div>

            <div className="lg:col-span-2">

              <p className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
                Overview
              </p>

              <h2 className="mt-6 text-4xl font-serif">
                About This Project
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-9 text-[#F5F1E8]/75">

                <p>
                  This long-form script was written to educate, encourage,
                  and inspire Christian audiences through a compelling
                  exploration of biblical themes surrounding spiritual
                  transition and divine preparation.
                </p>

                <p>
                  Designed for YouTube, the script combines careful biblical
                  research, engaging storytelling, audience-retention
                  techniques, and practical application to create a viewing
                  experience that is both spiritually enriching and highly
                  engaging.
                </p>

                <p>
                  The work demonstrates our approach to Christian
                  communication—faithful to Scripture, rich in narrative,
                  and intentionally crafted to help audiences understand
                  and apply biblical truth.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-28 border-t border-[#F5F1E8]/10 pt-20">

            <p className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
              Manuscript
            </p>

            <h2 className="mt-6 text-5xl font-serif">
              25 Signs You're Entering
              <br />
              a New Anointing Season
            </h2>

            <article className="mt-16 max-w-4xl mx-auto">

  <div className="rounded-3xl border border-[#F5F1E8]/10 bg-[#181818] p-8 md:p-12">

                <p className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
                  Introduction
                </p>

                <h3 className="mt-6 text-3xl font-serif">
                  Opening Hook
                </h3>

                <div className="mt-8 space-y-8 text-lg leading-9 text-[#F5F1E8]/80">

                  <p>
                    {/* Replace this placeholder with the opening of your script. */}
                    Have you ever felt that God was preparing you for something
                    greater, yet everything around you seemed to be falling
                    apart? Sometimes, the seasons that look like setbacks are
                    actually the beginning of a deeper work of God in your life.
                  </p>

                  <p>
                    Continue pasting your complete script here. Preserve your
                    headings, Scripture references, and transitions so visitors
                    experience the manuscript exactly as it was written.
                  </p>

                </div>

              </div>

              <div className="mt-20 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#1B1B1B] to-[#242424] p-10">

                <p className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
                  About This Work
                </p>

                <h3 className="mt-5 text-3xl font-serif">
                  Crafted to Inform, Encourage, and Inspire
                </h3>

                <p className="mt-6 text-lg leading-8 text-[#F5F1E8]/75">
                  Every script in the LisbethWrites portfolio is carefully
                  researched, prayerfully developed, and intentionally written
                  to communicate biblical truth with clarity, depth, and
                  excellence. This sample reflects our commitment to helping
                  ministries, creators, and Christian brands tell stories that
                  point people toward Christ.
                </p>

              </div>

              <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#F5F1E8]/10 pt-10">

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-[#D4AF37] hover:gap-3 transition-all"
                >
                  <ArrowLeft size={18} />
                  Back to Selected Works
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full bg-[#D4AF37] px-8 py-4 text-[#121212] font-medium transition hover:scale-105"
                >
                  Start a Project
                </Link>

              </div>

            </article>

          </div>

        </div>

      </section>

    </main>
  );
}