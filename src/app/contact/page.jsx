import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact | LisbethWrites",
  description:
    "Start a conversation with LisbethWrites for Christian writing, devotionals, articles, newsletters, and faith-centered storytelling.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#121212] text-[#F5F1E8] min-h-screen">
      <Navbar />

      <Contact />

      <Footer />
    </main>
  );
}
