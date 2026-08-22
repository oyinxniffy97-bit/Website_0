import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RequestForm from "@/components/sections/RequestForm";

export const metadata = {
  title: "Request an Errand | ShopperSisi",
  description:
    "Tell ShopperSisi what you need — foodstuff, fabrics, fish & meat, or anything else — and we'll open WhatsApp with your request ready to send. Fast, trusted errand running from Nigerian markets to your doorstep, locally and abroad.",
  keywords: [
    "order Nigerian foodstuffs online",
    "request errand Nigeria",
    "buy African fabrics online",
    "Nigerian market delivery request",
  ],
  alternates: {
    canonical: "/request",
  },
  openGraph: {
    title: "Request an Errand | ShopperSisi",
    description:
      "You relax, we shop, you smile. Fill in a few details and we'll take it from there.",
    url: "/request",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RequestPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <RequestForm />
      <Footer />
    </main>
  );
}