export default function InsightHero({
  category,
  title,
  description,
  author,
  date,
  readTime,
}) {
  return (
    <section className="max-w-4xl mx-auto pt-40 pb-16 px-6">

      <p className="uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
        {category}
      </p>

      <h1 className="mt-6 text-5xl md:text-7xl font-serif leading-tight text-[#F5F1E8]">
        {title}
      </h1>

      <p className="mt-8 text-xl leading-relaxed text-[#F5F1E8]/70">
        {description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4 text-sm text-[#F5F1E8]/50">
        <span>By {author}</span>
        <span>•</span>
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>

    </section>
  );
}
