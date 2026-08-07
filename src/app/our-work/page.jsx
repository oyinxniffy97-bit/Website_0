import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  const works = [
    {
      title: "Devotional Writing",
      description:
        "Scripture-rich devotionals that encourage spiritual growth, deepen biblical understanding, and inspire believers to walk closely with God.",
    },
    {
      title: "Ministry Communications",
      description:
        "Newsletters, sermon resources, website copy, conference materials, and ministry publications that communicate truth with clarity and excellence.",
    },
    {
      title: "Editorial & Manuscript Development",
      description:
        "Editing, proofreading, and manuscript refinement that preserve your voice while strengthening structure, readability, and impact.",
    },
    {
      title: "Research & Educational Writing",
      description:
        "Thoughtfully researched articles, educational resources, Bible study materials, and academic writing that make complex ideas accessible.",
    },
  ];

  return (
    <main className="bg-[#121212] text-[#F5F1E8] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
          Our Work
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight">
          Every Piece
          <br />
          Begins With
          <br />
          Purpose.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#F5F1E8]/70">
          We believe writing should do more than communicate information.
          It should illuminate truth, strengthen faith, and create lasting
          impact. Every project is approached with prayer, excellence, and
          intentionality.
        </p>
      </section>

      {/* Portfolio */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((item) => (
            <article
              key={item.title}
              className="
                rounded-3xl
                border
                border-[#F5F1E8]/10
                bg-white/5
                backdrop-blur-xl
                p-8
                hover:border-[#D4AF37]/40
                transition-all
                duration-300
              "
            >
              <h2 className="text-3xl font-serif">{item.title}</h2>

              <p className="mt-5 leading-relaxed text-[#F5F1E8]/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-[#F5F1E8]/10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm text-center">
            Our Process
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-serif text-center">
            From Vision to
            <br />
            Meaningful Words
          </h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">
            <div>
              <h3 className="text-2xl font-serif">01</h3>
              <h4 className="mt-4 text-xl">Listen</h4>
              <p className="mt-3 text-[#F5F1E8]/70">
                Every project begins by understanding your message,
                audience, and purpose.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif">02</h3>
              <h4 className="mt-4 text-xl">Research</h4>
              <p className="mt-3 text-[#F5F1E8]/70">
                We build every piece on thoughtful research,
                biblical accuracy, and clear communication.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif">03</h3>
              <h4 className="mt-4 text-xl">Write</h4>
              <p className="mt-3 text-[#F5F1E8]/70">
                Every sentence is carefully crafted to inspire,
                inform, and leave a lasting impression.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif">04</h3>
              <h4 className="mt-4 text-xl">Refine</h4>
              <p className="mt-3 text-[#F5F1E8]/70">
                Through careful editing and collaboration,
                each project reaches its highest quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm">
            Let's Work Together
          </p>

          <h2 className="mt-6 text-5xl font-serif">
            Let's Tell a Story
            <br />
            That Matters.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-[#F5F1E8]/70">
            Whether you're building a ministry, writing a book,
            or communicating a message that deserves to be heard,
            LisbethWrites is ready to help you communicate with
            clarity, excellence, and purpose.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 text-[#121212] font-medium hover:scale-105 transition"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}