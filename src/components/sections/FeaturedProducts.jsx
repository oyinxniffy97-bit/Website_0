import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhatWeShop from "@/components/sections/WhatWeShop";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyShopperSisi from "@/components/sections/WhyShopperSisi";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#1D1D1D]">
      <Navbar />

      {/* Primary brand introduction */}
      <Hero />

      {/* Product discovery */}
      <WhatWeShop />

      {/* Featured products from our real inventory */}
      <FeaturedProducts />

      {/* Why customers choose Shopper Sisi (deliver to + how it works) */}
      <WhyShopperSisi />

      {/* Final conversion point */}
      <CTA />

      <Footer />
    </main>
  );
}