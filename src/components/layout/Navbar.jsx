"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Personal Shopping",
        href: "/services#personal-shopping",
      },
      {
        name: "Errand Running",
        href: "/services#errands",
      },
      {
        name: "Walk-in Store",
        href: "/services#store",
      },
      {
        name: "Local & International Delivery",
        href: "/services#delivery",
      },
    ],
  },
  {
    name: "How It Works",
    href: "/how-it-works",
  },
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const WHATSAPP_LINK = "https://wa.me/2348101605616";
const PHONE_NUMBER = "08101605616";
const PHONE_LINK = "tel:+2348101605616";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  /* =========================================================
     SCROLL STATE
     ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
     ========================================================= */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
     ========================================================= */
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`
          transition-all duration-500
          ${
            scrolled
              ? "border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-xl"
              : "bg-white/95 backdrop-blur-md"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[76px]
            max-w-7xl
            items-center
            justify-between

            px-5
            sm:px-6
            lg:px-8
          "
        >
          {/* =====================================================
              LOGO
              ===================================================== */}
          <Link
            href="/"
            className="
              flex
              shrink-0
              items-center
              transition-transform
              duration-300
              hover:scale-[1.02]
            "
            aria-label="ShopperSisi home"
          >
            <Image
              src="/logo-transparent.png"
              alt="ShopperSisi"
              width={190}
              height={70}
              priority
              className="
                h-auto
                w-[135px]
                object-contain

                sm:w-[155px]
                lg:w-[165px]
              "
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
              ===================================================== */}
          <div
            className="
              hidden
              items-center
              gap-6
              lg:flex
              xl:gap-7
            "
          >
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              /* ===============================================
                 SERVICES DROPDOWN
                 =============================================== */
              if (link.children) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setServicesOpen((open) => !open)
                      }
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-current={
                        isActive ? "page" : undefined
                      }
                      className={`
                        group
                        flex
                        items-center
                        gap-1
                        py-2

                        text-[13px]
                        font-medium
                        tracking-wide

                        transition-colors
                        duration-300

                        hover:text-[var(--magenta)]

                        ${
                          isActive
                            ? "text-[var(--magenta)]"
                            : "text-[var(--charcoal)]/75"
                        }
                      `}
                    >
                      {link.name}

                      <ChevronDown
                        size={14}
                        strokeWidth={2.2}
                        aria-hidden="true"
                        className={`
                          transition-transform
                          duration-300

                          ${
                            servicesOpen
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 6,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 6,
                          }}
                          transition={{
                            duration: 0.18,
                            ease: "easeOut",
                          }}
                          className="
                            absolute
                            left-0
                            top-full
                            w-64
                            overflow-hidden
                            rounded-2xl

                            border
                            border-black/5

                            bg-white
                            py-2

                            shadow-[0_18px_40px_rgba(29,29,29,0.12)]
                          "
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="
                                block
                                px-5
                                py-2.5

                                text-[13px]
                                font-medium
                                text-[var(--charcoal)]/80

                                transition-colors

                                hover:bg-[var(--soft-pink)]
                                hover:text-[var(--magenta)]
                              "
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              /* ===============================================
                 NORMAL NAV LINK
                 =============================================== */
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`
                    group
                    relative
                    py-2

                    text-[13px]
                    font-medium
                    tracking-wide

                    transition-colors
                    duration-300

                    hover:text-[var(--magenta)]

                    ${
                      isActive
                        ? "text-[var(--magenta)]"
                        : "text-[var(--charcoal)]/75"
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      rounded-full
                      bg-[var(--magenta)]

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* =====================================================
              DESKTOP PHONE + WHATSAPP
              ===================================================== */}
          <div
            className="
              hidden
              items-center
              gap-5
              lg:flex
            "
          >
            {/* Phone */}
            <a
              href={PHONE_LINK}
              aria-label={`Call ShopperSisi at ${PHONE_NUMBER}`}
              className="
                flex
                items-center
                gap-2

                text-[13px]
                font-medium
                text-[var(--charcoal)]/75

                transition-colors

                hover:text-[var(--magenta)]
              "
            >
              <Phone
                size={15}
                strokeWidth={2}
                aria-hidden="true"
              />

              {PHONE_NUMBER}
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with ShopperSisi on WhatsApp"
              className="
                flex
                items-center
                gap-2

                rounded-full
                bg-[var(--magenta)]

                px-5
                py-3

                text-sm
                font-semibold
                text-white

                shadow-[0_8px_24px_rgba(141,6,104,0.18)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[var(--purple)]
                hover:shadow-[0_12px_30px_rgba(106,5,114,0.2)]
              "
            >
              <MessageCircle
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />

              Chat on WhatsApp
            </a>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
              ===================================================== */}
          <button
            type="button"
            onClick={() =>
              setMobileOpen((open) => !open)
            }
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full
              border
              border-black/10

              text-[var(--charcoal)]

              transition-colors

              hover:border-[var(--magenta)]/30
              hover:text-[var(--magenta)]

              lg:hidden
            "
          >
            {mobileOpen ? (
              <X
                size={22}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            ) : (
              <Menu
                size={22}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </nav>

      {/* =========================================================
          MOBILE NAVIGATION
          ========================================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* ===================================================
                BACKDROP
                =================================================== */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="
                fixed
                inset-0
                top-[76px]

                bg-[var(--charcoal)]/20
                backdrop-blur-[2px]

                lg:hidden
              "
              aria-hidden="true"
            />

            {/* ===================================================
                MOBILE MENU PANEL
                =================================================== */}
            <motion.div
              id="mobile-nav-panel"
              initial={{
                opacity: 0,
                y: -12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                absolute
                inset-x-0
                top-[76px]

                max-h-[calc(100vh-76px)]
                overflow-y-auto

                border-t
                border-black/5

                bg-white

                px-5
                pb-6
                pt-5

                shadow-xl

                lg:hidden
              "
            >
              <div className="mx-auto max-w-7xl">
                {/* =============================================
                    MOBILE LINKS
                    ============================================= */}
                <div className="flex flex-col">
                  {links.map((link, index) => {
                    const isLast =
                      index === links.length - 1;

                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname?.startsWith(
                            link.href
                          );

                    /* =========================================
                       MOBILE SERVICES
                       ========================================= */
                    if (link.children) {
                      return (
                        <div
                          key={link.name}
                          className={
                            !isLast
                              ? "border-b border-black/[0.06]"
                              : ""
                          }
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setMobileServicesOpen(
                                (open) => !open
                              )
                            }
                            aria-expanded={
                              mobileServicesOpen
                            }
                            className={`
                              flex
                              w-full
                              items-center
                              justify-between

                              py-4

                              text-base
                              font-medium

                              transition-colors

                              hover:text-[var(--magenta)]

                              ${
                                isActive
                                  ? "text-[var(--magenta)]"
                                  : "text-[var(--charcoal)]"
                              }
                            `}
                          >
                            {link.name}

                            <ChevronDown
                              size={18}
                              strokeWidth={2}
                              aria-hidden="true"
                              className={`
                                transition-transform
                                duration-300

                                ${
                                  mobileServicesOpen
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                            />
                          </button>

                          {/* Mobile Services Children */}
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.2,
                                }}
                                className="
                                  overflow-hidden
                                  pl-4
                                "
                              >
                                {link.children.map(
                                  (child) => (
                                    <Link
                                      key={child.name}
                                      href={child.href}
                                      onClick={() =>
                                        setMobileOpen(
                                          false
                                        )
                                      }
                                      className="
                                        block
                                        py-3

                                        text-sm
                                        font-medium
                                        text-[var(--charcoal)]/70

                                        transition-colors

                                        hover:text-[var(--magenta)]
                                      "
                                    >
                                      {child.name}
                                    </Link>
                                  )
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    /* =========================================
                       NORMAL MOBILE LINK
                       ========================================= */
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                        aria-current={
                          isActive
                            ? "page"
                            : undefined
                        }
                        className={`
                          flex
                          items-center
                          justify-between

                          py-4

                          text-base
                          font-medium

                          transition-colors

                          hover:text-[var(--magenta)]

                          ${
                            !isLast
                              ? "border-b border-black/[0.06]"
                              : ""
                          }

                          ${
                            isActive
                              ? "text-[var(--magenta)]"
                              : "text-[var(--charcoal)]"
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* =================================================
                    MOBILE PHONE
                    ================================================= */}
                <a
                  href={PHONE_LINK}
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-full
                    border
                    border-black/10

                    px-5
                    py-3

                    text-sm
                    font-semibold
                    text-[var(--charcoal)]

                    transition-colors

                    hover:border-[var(--magenta)]/30
                    hover:text-[var(--magenta)]
                  "
                >
                  <Phone
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  {PHONE_NUMBER}
                </a>

                {/* =================================================
                    MOBILE WHATSAPP CTA
                    ================================================= */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  aria-label="Chat with ShopperSisi on WhatsApp"
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-full
                    bg-[var(--magenta)]

                    px-5
                    py-3.5

                    text-sm
                    font-semibold
                    text-white

                    transition-colors

                    hover:bg-[var(--purple)]
                  "
                >
                  <MessageCircle
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}