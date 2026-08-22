import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";

export const metadata = {
  title: "Our Services | Personal Shopping, Errands & Walk-In Store — ShopperSisi",
  description:
    "ShopperSisi offers personal shopping for Nigerians abroad, local errand services within Nigeria, and a walk-in store — delivering African foodstuffs, fabrics, and more to Canada, USA, Australia & Finland.",
  keywords: [
    "Nigerian foodstuffs delivery",
    "shop Nigerian market from abroad",
    "African fabrics delivery",
    "errand service Nigeria",
    "personal shopper Nigeria",
    "buy Nigerian food online Canada",
    "buy Nigerian food online USA",
    "Nigerian grocery delivery international",
  ],
};

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Services />
      <Footer />
    </main>
  );
}