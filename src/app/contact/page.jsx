import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact Us | ShopperSisi",
  description:
    "Get in touch with ShopperSisi to request an order, ask a question, or find out how we can shop and deliver for you locally or internationally.",
  keywords: [
    "contact ShopperSisi",
    "Nigerian market delivery contact",
    "WhatsApp shopping service Nigeria",
  ],
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}