import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "FAQ | ShopperSisi",
  description:
    "Answers to common questions about ordering, delivery, payment, and our services at ShopperSisi.",
  keywords: [
    "ShopperSisi FAQ",
    "Nigerian market delivery questions",
    "how to order Nigerian foodstuffs",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | ShopperSisi",
    description:
      "Answers to common questions about ordering, delivery, payment, and our services at ShopperSisi.",
    url: "/faq",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function FAQPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <FAQ />
      <Footer />
    </main>
  );
}