import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Christian Writing Services | LisbethWrites",

  description:
    "LisbethWrites provides Christian writing services for ministries, churches, authors, and faith-driven organizations, including devotionals, Bible study resources, Christian articles, newsletters, YouTube scripts, ghostwriting, editing, and Scripture-centered content.",

  keywords: [
    "Christian writing services",
    "Christian content writer",
    "Christian ghostwriter",
    "devotional writer",
    "Bible study writer",
    "Christian book editing",
    "church content writer",
    "ministry writing services",
    "faith-based writing",
  ],

  alternates: {
    canonical: "https://lisbethwrites.vercel.app/services",
  },

  openGraph: {
    title: "Christian Writing Services | LisbethWrites",

    description:
      "Helping ministries, Christian authors, and Kingdom organizations communicate God's message through thoughtful, Scripture-centered writing.",

    url: "https://lisbethwrites.vercel.app/services",

    siteName: "LisbethWrites",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LisbethWrites Christian Writing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Christian Writing Services | LisbethWrites",

    description:
      "Scripture-centered writing services for ministries, authors, and faith-driven organizations.",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Christian Content Writing",
      description:
        "Biblically grounded articles, devotionals, newsletters, and ministry resources crafted to communicate God's truth with clarity and purpose.",
    },
    {
      title: "Devotional & Bible Study Writing",
      description:
        "Thoughtful devotional materials and Bible study resources designed to encourage spiritual growth and deeper understanding of Scripture.",
    },
    {
      title: "YouTube Script Writing",
      description:
        "Engaging Christian scripts that combine biblical teaching, storytelling, and research to help messages reach wider audiences.",
    },
    {
      title: "Book & Manuscript Editing",
      description:
        "Careful editing, proofreading, and refinement that helps Christian authors present their message with excellence.",
    },
    {
      title: "Ghostwriting",
      description:
        "Transforming your ideas, experiences, and messages into meaningful written works while preserving your voice and vision.",
    },
    {
      title: "SEO Writing",
      description:
        "Search-friendly Christian content designed to help your message reach more people while remaining faithful to your purpose.",
    },
  ];

  return (
    <main className="bg-[#121212] text-[#F5F1E8] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
          Services
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight">
          Words Written
          <br />
          With Purpose.
        </h1>

        <p className="mt-8 max-w-2xl text-[#F5F1E8]/70 text-lg leading-relaxed">
          We help ministries, Christian authors, and Kingdom organizations
          communicate God's message through thoughtful writing rooted in
          biblical truth, clarity, and excellence.
        </p>
      </section>

      {/* Services */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
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
              <h2 className="text-2xl font-serif">{service.title}</h2>

              <p className="mt-5 text-[#F5F1E8]/70 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-24 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif">
          Every Message
          <br />
          Carries a Purpose.
        </h2>

        <p className="mt-6 text-[#F5F1E8]/70 text-lg">
          We are committed to helping you communicate God's message with
          faithfulness, excellence, and creativity.
        </p>
      </section>

      <Footer />
    </main>
  );
}