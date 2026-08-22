"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const ITEM_TYPES = [
  "Foodstuff & Market Items",
  "Fabrics",
  "Fish & Meat",
  "Snails",
  "Something else",
];

export default function ErrandsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    itemType: "",
    details: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppLink = () => {
    const lines = [
      "Hi ShopperSisi, I'd like to place an errand request:",
      "",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `What I need: ${form.itemType || "-"}`,
      `Details: ${form.details || "-"}`,
      `Delivery location: ${form.location || "-"}`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/2348101605616?text=${message}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = buildWhatsAppLink();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const isValid = form.name.trim() && form.phone.trim() && form.itemType;

  return (
    <section className="relative overflow-hidden bg-[#1D1D1D] px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#8D0668]/20 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#6A0572]/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFC107]">
          Request an Errand
        </p>

        <h1 className="max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl">
          Tell us what you need.
          <span className="block text-[#FFC107]">We'll take it from there.</span>
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
          Fill in a few details below and we'll open a WhatsApp chat with your
          request already filled in — no retyping needed.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/60">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Ada Okafor"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#FFC107] focus:bg-white/10"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/60">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 0801 234 5678"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#FFC107] focus:bg-white/10"
              />
            </div>
          </div>

          <div>
            <label htmlFor="itemType" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/60">
              What do you need?
            </label>
            <select
              id="itemType"
              name="itemType"
              required
              value={form.itemType}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#FFC107] focus:bg-white/10"
            >
              <option value="" disabled className="bg-[#1D1D1D]">
                Select a category
              </option>
              {ITEM_TYPES.map((type) => (
                <option key={type} value={type} className="bg-[#1D1D1D]">
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="details" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/60">
              Tell us more
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={form.details}
              onChange={handleChange}
              placeholder="e.g. 2 bags of gari, 1 yard of ankara fabric (any color), 1kg dry fish"
              className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#FFC107] focus:bg-white/10"
            />
          </div>

          <div>
            <label htmlFor="location" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/60">
              Delivery Location (optional)
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={form.location}
              onChange={handleChange}
              placeholder="e.g. Toronto, Canada"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#FFC107] focus:bg-white/10"
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8D0668] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(141,6,104,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFC107] hover:text-[#1D1D1D] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-[#8D0668] disabled:hover:text-white"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            Continue on WhatsApp
            <ArrowRight
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <p className="text-center text-xs text-white/35">
            This opens WhatsApp with your request pre-filled — you can review
            and edit it before sending.
          </p>
        </form>
      </div>
    </section>
  );
}