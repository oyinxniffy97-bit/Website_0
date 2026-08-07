import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BeforeTheRainComesTheHeatPage() {
  return (
    <main className="bg-[#121212] text-[#F5F1E8] min-h-screen">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 pt-40 pb-24">
        <Link
          href="/insights/when-god-comes-looking-for-fruit"
          className="text-[#D4AF37] hover:underline transition"
        >
          ← Read Previous
        </Link>

        <p className="mt-10 uppercase tracking-[0.3em] text-sm text-[#D4AF37]">
          Spiritual Growth
        </p>

        <h1 className="mt-6 text-5xl md:text-6xl font-serif leading-tight">
          Before the Rain
          <br />
          Comes the Heat
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#F5F1E8]/60">
          <span>September 2026</span>
          <span>•</span>
          <span>6 min read</span>
        </div>

        <div className="mt-10 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8">
          <p className="uppercase tracking-[0.3em] text-xs text-[#D4AF37]">
            Key Scripture
          </p>

          <p className="mt-5 text-2xl italic font-serif leading-relaxed">
            "See, I am doing a new thing! Now it springs up; do you not perceive it?"
          </p>

          <p className="mt-4 text-[#F5F1E8]/60">
            Isaiah 43:19
          </p>
        </div>

        <div className="mt-12 space-y-8 text-lg leading-9 text-[#F5F1E8]/80">
          <p>
            Are you currently experiencing a setback? That may be your sunny
            season.
          </p>

          <p>
            Sometimes the intensity of the sun increases just before the rain
            arrives. In the same way, what feels like pressure today may be
            preparing the ground for the outpouring of God's blessings over
            your life.
          </p>

          <p>
            This month, we have been learning to understand the signs of the
            times and seasons. Today, I believe God is inviting us to pay
            closer attention to what appears ordinary because He often speaks
            through patterns we overlook.
          </p>

          <p>
            Have you noticed a particular pattern that repeats itself at a
            certain time of the year? Perhaps you fall sick around the same
            season. Perhaps every time you begin praying intentionally,
            unexpected distractions arise. What have you noticed about your
            own life?
          </p>

          <blockquote className="border-l-4 border-[#D4AF37] pl-6 italic text-[#D4AF37]">
            Yesterday often carries clues about today's prophecy.
          </blockquote>

          <p>
            When a vehicle approaches a hill, an experienced driver does not
            wait until the engine struggles before changing gears. Long before
            the tyres meet the steep incline, the engine sends signals. It may
            be a slight resistance or a change in rhythm. To ignore those
            signals is to be caught unprepared, but to recognize them is to
            prepare for the climb.
          </p>

          <blockquote className="border-l-4 border-[#D4AF37] pl-6 italic text-[#D4AF37]">
            The tension you're feeling may not be punishment—it may be
            preparation.
          </blockquote>

          <p>
            The disruption of your routine, the pressure you cannot explain,
            or the stretching of your faith may all be spiritual signals that
            God is preparing you for a higher level.
          </p>

          <p>
            A vehicle cannot climb a hill using the same gear it used on level
            ground. Likewise, we cannot enter a new season while holding on to
            the same habits, priorities, and dependence that belonged to the
            previous one.
          </p>

          <p>
            Even science reminds us that greater acceleration requires greater
            force. Sometimes God allows greater pressure because He is
            preparing us for greater purpose.
          </p>

          <p>
            You are not breaking down. You are gearing up.
          </p>
                    <h2 className="pt-8 text-3xl font-serif text-[#D4AF37]">
            Reflection
          </h2>

          <p className="italic">
            Lord, give me discernment to recognize the seasons You are
            leading me through. Help me not to misinterpret preparation as
            punishment, but to trust that every moment of stretching is
            shaping me for the purpose You have prepared. Strengthen my
            faith to embrace the climb, knowing that You are with me every
            step of the way. Amen.
          </p>
        </div>

        <div className="mt-20 border-t border-[#F5F1E8]/10 pt-10">
          <h3 className="text-2xl font-serif">
            About LisbethWrites
          </h3>

          <p className="mt-6 text-[#F5F1E8]/70 leading-relaxed">
            LisbethWrites exists to teach the Word of God through thoughtful
            writing, biblical reflections, and everyday experiences that
            point readers back to Christ. Every article is prayerfully
            written to strengthen faith and inspire purposeful living.
          </p>

          <p className="mt-8 text-[#D4AF37] font-medium">
            Teaching the World the Word, Through Writing.
          </p>
        </div>

        <div className="mt-20 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8">
          <p className="uppercase tracking-[0.3em] text-xs text-[#D4AF37]">
            Continue Exploring
          </p>

          <h3 className="mt-4 text-3xl font-serif">
            Explore All Reflections
          </h3>

          <p className="mt-4 text-[#F5F1E8]/70 leading-relaxed">
            Continue exploring biblical reflections inspired by everyday
            life and discover more lessons that point you back to Christ.
          </p>

          <Link
            href="/insights"
            className="inline-flex items-center mt-8 text-[#D4AF37] font-medium hover:underline transition"
          >
            Back to Insights →
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}