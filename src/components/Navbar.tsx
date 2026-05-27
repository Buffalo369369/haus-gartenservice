"use client";

import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          border-black/5
          bg-white/95
          backdrop-blur-xl
        "
      >

        <div className="container-custom flex items-center justify-between py-5">

          {/* LOGO */}
          <a
            href="/"
            className="flex flex-col"
          >

            <p className="text-[11px] uppercase tracking-[0.28em] text-gray-500">
              Haus & Gartenservice
            </p>

            <p className="mt-1 text-lg font-bold text-[#84c225]">
              Vitalij Lind
            </p>

          </a>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-8 md:flex">

            <a
              href="/"
              className="
                text-sm
                font-medium
                text-gray-700
                transition
                hover:text-[#84c225]
              "
            >
              Startseite
            </a>

            <a
              href="/galerie"
              className="
                text-sm
                font-medium
                text-gray-700
                transition
                hover:text-[#84c225]
              "
            >
              Galerie
            </a>

            <a
              href="/datenschutz"
              className="
                text-sm
                font-medium
                text-gray-700
                transition
                hover:text-[#84c225]
              "
            >
              Datenschutz
            </a>

            <a
              href="/impressum"
              className="
                text-sm
                font-medium
                text-gray-700
                transition
                hover:text-[#84c225]
              "
            >
              Impressum
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/491606094947"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#84c225]
                text-black
                shadow-[0_8px_25px_rgba(132,194,37,0.35)]
                transition
                hover:scale-110
              "
            >

              <FaWhatsapp size={22} />

            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="
    flex
    md:hidden
    h-11
    w-11
    items-center
    justify-center
    rounded-full
    border
    border-black/10
    bg-white
    text-black
    shadow-sm
  "
>

  {menuOpen ? (
    <X size={22} strokeWidth={2.5} />
  ) : (
    <Menu size={22} strokeWidth={2.5} />
  )}

</button>

        </div>

      </header>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div
          className="
            fixed
            left-4
            right-4
            top-24
            z-[60]
            rounded-[28px]
            border
            border-black/10
            bg-white
            p-5
            shadow-[0_25px_80px_rgba(0,0,0,0.18)]
            md:hidden
          "
        >

          <div className="flex flex-col gap-3">

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="
                rounded-2xl
                bg-[#f5f7f2]
                px-5
                py-4
                text-center
                font-medium
                text-black
                transition
                hover:bg-[#ebf1e4]
              "
            >
              Startseite
            </a>

            <a
              href="/galerie"
              onClick={() => setMenuOpen(false)}
              className="
                rounded-2xl
                bg-[#f5f7f2]
                px-5
                py-4
                text-center
                font-medium
                text-black
                transition
                hover:bg-[#ebf1e4]
              "
            >
              Galerie
            </a>

            <a
              href="/datenschutz"
              onClick={() => setMenuOpen(false)}
              className="
                rounded-2xl
                bg-[#f5f7f2]
                px-5
                py-4
                text-center
                font-medium
                text-black
                transition
                hover:bg-[#ebf1e4]
              "
            >
              Datenschutz
            </a>

            <a
              href="/impressum"
              onClick={() => setMenuOpen(false)}
              className="
                rounded-2xl
                bg-[#f5f7f2]
                px-5
                py-4
                text-center
                font-medium
                text-black
                transition
                hover:bg-[#ebf1e4]
              "
            >
              Impressum
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/491606094947"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-2
                rounded-2xl
                bg-[#84c225]
                px-5
                py-4
                text-center
                font-semibold
                text-black
                shadow-[0_10px_30px_rgba(132,194,37,0.35)]
              "
            >
              WhatsApp
            </a>

          </div>

        </div>

      )}
    </>
  );
}