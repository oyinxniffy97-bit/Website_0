import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HowItWorksPage from "@/components/sections/HowItWorksPage";

export const metadata = {
  title: "How It Works | ShopperSisi",
  description:
    "See how ShopperSisi works — from sending your request to getting Nigerian foodstuffs, fabrics, and more delivered to your doorstep, locally or abroad.",
  keywords: [
    "how ShopperSisi works",
    "Nigerian market delivery process",
    "order process Nigerian foodstuffs",
  ],
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works | ShopperSisi",
    description:
      "From request to doorstep in four simple steps. See how ShopperSisi makes shopping Nigerian markets easy.",
    url: "/how-it-works",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function HowItWorksRoute() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <HowItWorksPage />
      <Footer />
    </main>
  );
}