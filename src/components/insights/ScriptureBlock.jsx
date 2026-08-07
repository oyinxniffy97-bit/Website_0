export default function ScriptureBlock({
  reference,
  children,
}) {
  return (
    <section className="max-w-4xl mx-auto px-6 my-16">
      <div
        className="
          rounded-3xl
          border
          border-[#D4AF37]/30
          bg-[#D4AF37]/10
          p-8
        "
      >
        <p
          className="
            uppercase
            tracking-[0.3em]
            text-xs
            text-[#D4AF37]
            mb-4
          "
        >
          Scripture
        </p>

        <h3
          className="
            text-xl
            font-semibold
            text-[#D4AF37]
          "
        >
          {reference}
        </h3>

        <p
          className="
            mt-4
            text-lg
            italic
            leading-8
            text-[#F5F1E8]
          "
        >
          {children}
        </p>
      </div>
    </section>
  );
}