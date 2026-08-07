import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function InsightLayout({ children }) {
  return (
    <main className="min-h-screen bg-[#121212] text-[#F5F1E8]">

      <Navbar />

      {children}

      <Footer />

    </main>
  );
}