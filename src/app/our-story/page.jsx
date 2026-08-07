import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Team from "@/components/sections/Team";

export const metadata = {
  title: "Our Story | LisbethWrites",
  description:
    "Learn about LisbethWrites, a Christian Writing Studio committed to teaching the world the Word through writing and creating Scripture-centered content with faith, excellence, and purpose.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#121212] text-[#F5F1E8] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
          Our Story
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight">
          Teaching the World
          <br />
          the Word Through Writing.
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-[#F5F1E8]/70 leading-relaxed">
          LisbethWrites exists to use the power of words to teach,
          encourage, and communicate God's truth. We believe every
          message carries purpose when guided by Scripture and written
          with excellence.
        </p>
      </section>

      {/* Story */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
            Our Story
          </p>

          <h2 className="mt-5 text-4xl font-serif">
            Words Are More
            <br />
            Than Sentences.
          </h2>

          <p className="mt-6 text-[#F5F1E8]/70 leading-relaxed">
            LisbethWrites was founded from the conviction that writing can
            become a vessel for truth, transformation, and spiritual
            growth.
          </p>

          <p className="mt-5 text-[#F5F1E8]/70 leading-relaxed">
            Through articles, devotionals, Bible studies, scripts,
            books, and Christian resources, we help individuals and
            organizations communicate messages that inspire faith and
            impact lives.
          </p>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-[#D4AF37]/20
            bg-white/5
            backdrop-blur-xl
            p-10
          "
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
            Our Mission
          </p>

          <h3 className="mt-6 text-3xl font-serif leading-tight">
            To teach the world the Word until the earth is filled with
            the knowledge of the glory of the Lord.
          </h3>
        </div>
      </section>

      {/* Team */}
      <Team />

      <Footer />
    </main>
  );
}