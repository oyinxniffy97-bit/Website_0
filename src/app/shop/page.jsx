import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Shop from "@/components/sections/Shop";

export const metadata = {
  title: "Shop | ShopperSisi",
  description:
    "Browse African foodstuffs, fabrics, dry fish & meat, spices, and more — shopped from Nigerian markets and delivered to your doorstep locally or abroad.",
  keywords: [
    "shop Nigerian foodstuffs online",
    "buy African fabrics online",
    "Nigerian spices delivery",
    "Nigerian market products delivery",
  ],
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Shop | ShopperSisi",
    description:
      "Browse African foodstuffs, fabrics, dry fish & meat, spices, and more — delivered to your doorstep locally or abroad.",
    url: "/shop",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function ShopPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Shop />
      <Footer />
    </main>
  );
}