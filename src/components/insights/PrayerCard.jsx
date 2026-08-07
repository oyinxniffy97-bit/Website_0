export default function PrayerCard({ children }) {
  return (
    <section className="max-w-4xl mx-auto px-6 my-20">

      <div
        className="
          rounded-3xl
          border
          border-[#D4AF37]/30
          bg-[#D4AF37]/10
          p-10
        "
      >

        <p
          className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-[#D4AF37]
            mb-6
          "
        >
          Prayer
        </p>

        <p
          className="
            text-lg
            leading-9
            text-[#F5F1E8]
          "
        >
          {children}
        </p>

      </div>

    </section>
  );
}