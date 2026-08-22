"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import {
  EMAIL,
  EMAIL_LINK,
  PHONE_LINK,
  PHONE_NUMBER,
  SOCIAL_LINKS,
  STORE_ADDRESS,
  STORE_HOURS,
  WHATSAPP_LINK,
} from "@/lib/site-config";

const QUICK_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Shop", href: "/shop" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const SERVICES = [
  { name: "African Food Stuff", href: "/shop" },
  { name: "Fabrics", href: "/shop?category=african-fabrics" },
  { name: "Errand Services", href: "/services#errands" },
  { name: "Delivery Services", href: "/services#delivery" },
];

export default function Footer() {
  const hasStoreDetails = STORE_ADDRESS && STORE_HOURS;

  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[var(--charcoal)] text-white"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="ShopperSisi home"
            >
              <Image
                src="/logo.png"
                alt="ShopperSisi"
                width={52}
                height={52}
                className="h-[52px] w-[52px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md font-[var(--font-display)] text-2xl leading-tight text-white sm:text-3xl">
              What you need,
              <br />
              <span className="text-[var(--gold)]">we&apos;ll shop.</span>
            </p>

            <p className="mt-5 max-w-md font-[var(--font-body)] text-sm leading-7 text-white/50">
              We run errands for a living, bringing the Nigerian market to you
              with convenience, care, and trust.
            </p>

            {/* Social Links — only render once a real URL is set in site-config.js */}
            <div className="mt-7 flex items-center gap-3">
              {SOCIAL_LINKS.instagram && (
                <SocialLink
                  href={SOCIAL_LINKS.instagram}
                  label="Instagram"
                  icon={<FaInstagram size={17} />}
                />
              )}

              {SOCIAL_LINKS.facebook && (
                <SocialLink
                  href={SOCIAL_LINKS.facebook}
                  label="Facebook"
                  icon={<FaFacebook size={17} />}
                />
              )}

              {SOCIAL_LINKS.tiktok && (
                <SocialLink
                  href={SOCIAL_LINKS.tiktok}
                  label="TikTok"
                  icon={<FaTiktok size={17} />}
                />
              )}

              <SocialLink
                href={WHATSAPP_LINK}
                label="WhatsApp"
                icon={<MessageCircle size={17} />}
              />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 font-[var(--font-body)] text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.7}
                      aria-hidden="true"
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">
              {SERVICES.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-1 font-[var(--font-body)] text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {service.name}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.7}
                      aria-hidden="true"
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
              Find &amp; Reach Us
            </h3>

            <div className="mt-6 space-y-5">
              {/* Store */}
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[var(--magenta)]"
                />

                <div>
                  <p className="font-[var(--font-body)] text-sm font-medium text-white">
                    Visit our store
                  </p>

                  <p className="mt-1 font-[var(--font-body)] text-sm leading-6 text-white/50">
                    {hasStoreDetails
                      ? `${STORE_ADDRESS} · ${STORE_HOURS}`
                      : "Walk-in store available."}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with ShopperSisi on WhatsApp"
                className="flex items-center gap-3 font-[var(--font-body)] text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                <MessageCircle
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--magenta)]"
                />

                <span>Chat with us on WhatsApp</span>
              </a>

              {/* Phone */}
              <a
                href={PHONE_LINK}
                aria-label={`Call ShopperSisi at ${PHONE_NUMBER}`}
                className="flex items-center gap-3 font-[var(--font-body)] text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                <Phone
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--magenta)]"
                />

                <span>{PHONE_NUMBER}</span>
              </a>

              {/* Email */}
              <a
                href={EMAIL_LINK}
                aria-label={`Email ShopperSisi at ${EMAIL}`}
                className="flex items-center gap-3 font-[var(--font-body)] text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                <Mail
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--magenta)]"
                />

                <span>{EMAIL}</span>
              </a>
            </div>

            {/* Payment */}
            <div className="mt-7">
              <p className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                We Accept
              </p>

              <div className="mt-3 inline-flex rounded-lg border border-white/15 px-4 py-2 font-[var(--font-body)] text-xs font-semibold text-white/80">
                Bank Transfer
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 font-[var(--font-body)] text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ShopperSisi. All rights reserved.
          </p>

          <p>Shop online. Visit us in-store. Or let us shop for you.</p>
        </div>

        {/* Tagline */}
        <div className="mt-6 text-center">
          <p className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
            You relax. We shop. You smile. ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-[var(--magenta)]/50 hover:bg-[var(--magenta)] hover:text-white"
    >
      {icon}
    </a>
  );
}
