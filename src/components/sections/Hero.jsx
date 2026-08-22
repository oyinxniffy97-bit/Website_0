"use client";

import {
  ArrowRight,
  Heart,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#FFF5F8]"
    >
      {/* =========================================================
          HERO VISUAL
          Desktop/tablet: full-bleed background
          Mobile: contained image
          ========================================================= */}
      <div
        className="
          relative h-[560px] w-full overflow-hidden
          sm:absolute sm:inset-0 sm:h-full sm:min-h-[620px]
          sm:-z-20
        "
      >
        <picture>
          {/* Mobile */}
          <source
            media="(max-width: 640px)"
            srcSet="/Website_0/hero-mobile.webp"
            type="image/webp"
          />

          {/* Tablet */}
          <source
            media="(max-width: 1024px)"
            srcSet="/Website_0/hero-tablet.webp"
            type="image/webp"
          />

          {/* Desktop */}
          <source
            media="(min-width: 1025px)"
            srcSet="/Website_0/hero-desktop.webp"
            type="image/webp"
          />

          {/* Fallback */}
          <img
            src="/Website_0/hero-desktop.jpg"
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="
              h-full
              w-full
              object-cover
              object-top
              sm:object-contain
              lg:object-contain
            "
          />
        </picture>

        {/* =======================================================
            DESKTOP / TABLET TEXT-SAFE GRADIENT
            ======================================================= */}
        <div
          className="
            absolute inset-0
            hidden
            bg-gradient-to-r
            from-[#6A0572]/80
            via-[#8D0668]/45
            via-[35%]
            to-transparent
            sm:block
          "
        />

        {/* =======================================================
            SOFT BOTTOM FADE
            ======================================================= */}
        <div
          className="
            absolute inset-x-0 bottom-0
            hidden h-28
            bg-gradient-to-t
            from-[#6A0572]/45
            to-transparent
            sm:block
          "
        />

        {/* =======================================================
            MOBILE READABILITY GRADIENT
            ======================================================= */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#6A0572]/80
            via-[#8D0668]/40
            to-transparent
            sm:hidden
          "
        />
      </div>

      {/* =========================================================
          HERO CONTENT
          ========================================================= */}
      <div
        className="
          relative mx-auto
          flex w-full max-w-[1440px]
          min-h-[560px]
          flex-col
          justify-center
          px-5
          pb-12
          pt-10

          sm:min-h-[620px]
          sm:justify-center
          sm:px-8
          sm:py-16

          lg:px-10
          xl:px-12
        "
      >
        {/* =======================================================
            TEXT SAFE ZONE
            ======================================================= */}
        <div
          className="
            relative z-10
            w-full
            max-w-[420px]
            origin-left
            animate-[hero-in_0.7s_ease-out_both]

            sm:max-w-[440px]
            lg:max-w-[460px]
          "
        >
          {/* =====================================================
              SMALL BRAND STATEMENT
              ===================================================== */}
          <div
            className="
              mb-5
              flex items-center gap-2
              font-[var(--font-body)]
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#FFC107]

              sm:text-xs
            "
          >
            <Heart
              size={14}
              strokeWidth={2.5}
              fill="currentColor"
              aria-hidden="true"
            />

            <span>You relax, we shop, you smile!</span>
          </div>

          {/* =====================================================
              MAIN HEADING
              ===================================================== */}
          <h1
            id="hero-heading"
            className="
              max-w-[420px]
              font-[var(--font-display)]
              text-[clamp(3rem,6.4vw,5.2rem)]
              font-semibold
              leading-[0.9]
              tracking-[-0.045em]
              text-white
              drop-shadow-[0_4px_18px_rgba(0,0,0,0.25)]
            "
          >
            SHOPPERSISI
          </h1>

          {/* =====================================================
              SUPPORTING HEADLINE
              ===================================================== */}
          <p
            className="
              mt-5
              max-w-[420px]
              font-[var(--font-body)]
              text-[clamp(1.2rem,2.2vw,1.85rem)]
              font-bold
              uppercase
              leading-[1.08]
              tracking-[-0.02em]
              text-[#FFC107]
            "
          >
            We run errands for a living.
          </p>

          {/* =====================================================
              DESCRIPTION
              ===================================================== */}
          <p
            className="
              mt-5
              max-w-[380px]
              font-[var(--font-body)]
              text-[14px]
              leading-6
              text-white/90

              sm:text-[15px]
              sm:leading-7
            "
          >
            From markets to your doorstep!
            <br />
            With us you can shop right from the comfort
            <br className="hidden sm:block" />
            of home and country.
          </p>

          {/* =====================================================
              CTA
              ===================================================== */}
          <div className="mt-7">
            <a
              href="https://wa.me/2348101605616"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Request an order through WhatsApp"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-[#B80668]
                px-7
                py-3.5

                font-[var(--font-body)]
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-white

                shadow-[0_14px_32px_rgba(184,6,104,0.28)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#8D0668]
                hover:shadow-[0_18px_38px_rgba(106,5,114,0.32)]

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#FFC107]
                focus-visible:ring-offset-2
              "
            >
              <span>Request an Order</span>

              <ArrowRight
                size={18}
                strokeWidth={2.4}
                aria-hidden="true"
                className="
                  text-[#FFC107]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* =====================================================
              TRUST INDICATORS
              ===================================================== */}
          <div
            className="
              mt-7
              flex flex-wrap
              items-center
              gap-x-4
              gap-y-2

              font-[var(--font-body)]
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-white/90

              sm:text-[11px]
            "
          >
            <span>Fast</span>

            <span
              className="
                h-1.5 w-1.5
                rounded-full
                bg-[#FFC107]
              "
              aria-hidden="true"
            />

            <span>Trusted</span>

            <span
              className="
                h-1.5 w-1.5
                rounded-full
                bg-[#FFC107]
              "
              aria-hidden="true"
            />

            <span>Reliable</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          FLOATING SERVICE TRUST BAR
          ========================================================= */}
      <div
        className="
          relative
          mx-auto
          -mt-5
          w-[calc(100%-2rem)]
          max-w-[1380px]
          overflow-hidden
          rounded-[20px]

          bg-gradient-to-r
          from-[#6A0572]
          via-[#8B075F]
          to-[#B80668]

          shadow-[0_18px_45px_rgba(106,5,114,0.24)]

          sm:-mt-8
          sm:w-[calc(100%-4rem)]

          lg:-mt-12
          lg:rounded-[24px]

          xl:w-[calc(100%-7rem)]
        "
      >
        <div className="grid grid-cols-2 divide-x divide-white/15 lg:grid-cols-4">
          {/* =====================================================
              SHOP FROM NIGERIAN MARKETS
              ===================================================== */}
          <div className="flex min-h-[104px] items-center gap-3 px-4 py-5 sm:px-6 lg:min-h-[112px] lg:px-7">
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                border border-[#FFC107]/50
                text-[#FFC107]
              "
            >
              <Sparkles size={20} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div>
              <p
                className="
                  font-[var(--font-body)]
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  sm:text-xs
                "
              >
                Shop from
                <br />
                Nigerian markets
              </p>

              <p
                className="
                  mt-1
                  hidden
                  font-[var(--font-body)]
                  text-[10px]
                  leading-4
                  text-white/70
                  sm:block
                "
              >
                We shop for foodstuffs,
                <br />
                fabrics and more.
              </p>
            </div>
          </div>

          {/* =====================================================
              ERRAND SERVICES
              ===================================================== */}
          <div className="flex min-h-[104px] items-center gap-3 px-4 py-5 sm:px-6 lg:min-h-[112px] lg:px-7">
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                border border-[#FFC107]/50
                text-[#FFC107]
              "
            >
              <ArrowRight size={20} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div>
              <p
                className="
                  font-[var(--font-body)]
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  sm:text-xs
                "
              >
                Errand services
              </p>

              <p
                className="
                  mt-1
                  hidden
                  font-[var(--font-body)]
                  text-[10px]
                  leading-4
                  text-white/70
                  sm:block
                "
              >
                We run errands so
                <br />
                you don&apos;t have to.
              </p>
            </div>
          </div>

          {/* =====================================================
              DELIVERY
              ===================================================== */}
          <div className="flex min-h-[104px] items-center gap-3 px-4 py-5 sm:px-6 lg:min-h-[112px] lg:px-7">
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                border border-[#FFC107]/50
                text-[#FFC107]
              "
            >
              <Plane size={20} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <div>
              <p
                className="
                  font-[var(--font-body)]
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  sm:text-xs
                "
              >
                Delivery within
                <br />
                &amp; outside Nigeria
              </p>

              <p
                className="
                  mt-1
                  hidden
                  font-[var(--font-body)]
                  text-[10px]
                  leading-4
                  text-white/70
                  sm:block
                "
              >
                We deliver to your doorstep
                <br />
                locally &amp; internationally.
              </p>
            </div>
          </div>

          {/* =====================================================
              TRUSTED & RELIABLE
              ===================================================== */}
          <div
            className="
              col-span-2
              flex min-h-[92px]
              items-center
              justify-center
              gap-3
              border-t border-white/15
              px-4 py-5

              sm:min-h-[104px]
              sm:border-t-0

              lg:col-span-1
              lg:min-h-[112px]
              lg:justify-start
              lg:px-7
            "
          >
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                border border-[#FFC107]/50
                text-[#FFC107]
              "
            >
              <ShieldCheck
                size={21}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <div>
              <p
                className="
                  font-[var(--font-body)]
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  sm:text-xs
                "
              >
                Trusted &amp; reliable
              </p>

              <p
                className="
                  mt-1
                  hidden
                  font-[var(--font-body)]
                  text-[10px]
                  leading-4
                  text-white/70
                  sm:block
                "
              >
                Your satisfaction is
                <br />
                our priority.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM SPACING
          ========================================================= */}
      <div className="h-8 bg-[#FFF5F8] sm:h-10 lg:h-12" />
    </section>
  );
}