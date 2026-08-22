import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

export const metadata = {
  title: "About Us | ShopperSisi — Nigerian Market Errands & Delivery",
  description:
    "Learn how ShopperSisi runs errands for a living — shopping Nigerian markets and delivering foodstuffs, fabrics, and more locally and internationally.",
  keywords: [
    "ShopperSisi about",
    "Nigerian market shopping service",
    "errand service Nigeria",
    "Nigerian foodstuffs delivery abroad",
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}