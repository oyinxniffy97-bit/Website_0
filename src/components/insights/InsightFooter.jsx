import Link from "next/link";

export default function InsightFooter({
  nextTitle,
  nextHref,
}) {
  return (
    <section className="max-w-4xl mx-auto px-6 my-24">

      <div className="border-t border-white/10 pt-10">

        <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
          Continue Reading
        </p>

        <Link
          href={nextHref}
          className="
            mt-4
            inline-block
            text-3xl
            font-serif
            text-[#F5F1E8]
            hover:text-[#D4AF37]
            transition
          "
        >
          {nextTitle} →
        </Link>

      </div>

    </section>
  );
}