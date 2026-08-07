export default function QuoteBlock({ children }) {
  return (
    <section className="max-w-4xl mx-auto px-6 my-16">
      <blockquote
        className="
          border-l-4
          border-[#D4AF37]
          bg-[#1A1A1A]
          rounded-r-2xl
          px-8
          py-8
          italic
          text-2xl
          md:text-3xl
          font-serif
          leading-relaxed
          text-[#F5F1E8]
          shadow-lg
        "
      >
        {children}
      </blockquote>
    </section>
  );
}