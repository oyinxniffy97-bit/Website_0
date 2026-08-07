export default function InsightBody({ children }) {
  return (
    <section
      className="
        max-w-4xl
        mx-auto
        px-6
        text-lg
        leading-9
        text-[#F5F1E8]/85
      "
    >
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
}