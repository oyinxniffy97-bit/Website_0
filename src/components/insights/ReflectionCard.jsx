export default function ReflectionCard({ questions = [] }) {
  return (
    <section className="max-w-4xl mx-auto px-6 my-20">
      <div className="rounded-3xl bg-white/5 border border-white/10 p-10">

        <h2 className="text-3xl font-serif text-[#F5F1E8]">
          Reflect
        </h2>

        <ul className="mt-8 space-y-5">
          {questions.map((question, index) => (
            <li
              key={index}
              className="text-lg leading-8 text-[#F5F1E8]/80"
            >
              • {question}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}