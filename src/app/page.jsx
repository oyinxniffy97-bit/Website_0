import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import Services from "@/components/sections/Services";
import OurWork from "@/components/sections/OurWork";
import Insights from "@/components/sections/Insights";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] text-[#F5F1E8] overflow-x-hidden">
      <Navbar />

      <Hero />

      <OurStory />

      <Services />

      <OurWork />

      <Insights />

      <Testimonials />
      
      <CTA />

      <Footer />
    </main>
  );
}