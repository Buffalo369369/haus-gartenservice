"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  Menu,
  X,
  Trees,
  Scissors,
  Truck,
  ShieldCheck,
  Sparkles,
  Leaf,
  ImageIcon,
  Mail
} from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const { scrollY } = useScroll();

const bgY = useTransform(scrollY, [0, 500], [0, 120]);

const signY = useTransform(scrollY, [0, 500], [0, -40]);

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* BACKGROUND */}
        <motion.div

  className="absolute inset-0"

  style={{ y: bgY }}

>

          <Image
            src="/hero1.jpg"
            alt="Gartenpflege in Bad Hersfeld"
            fill
            priority
            sizes="100vw"
            className="

  object-cover

  object-[65%_center]

  md:object-center

  brightness-[0.7]

  saturate-[0.8]

"
          />
          <div className="absolute inset-0 bg-black/45" />
          

         {/* DARK OVERLAY */}

<div className="

  absolute

  bottom-[-30px]

  right-3

  w-[140px]

  sm:w-[180px]

  md:w-[260px]

  overflow-hidden

  rounded-[22px]

  md:rounded-[28px]

  border-4

  md:border-8

  border-white

  shadow-2xl

" />

</motion.div>
        


        {/* NAVBAR */}
        <header className="relative z-20 border-b border-white/10 backdrop-blur-sm">

          <div className="container-custom flex items-center justify-between py-5">

            {/* LEFT */}
            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                Haus & Gartenservice
              </p>

              <p className="mt-1 text-lg font-bold text-[#84c225]">
                Vitalij Lind
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              <a
                href="tel:01606094947"
                className="hidden items-center gap-2 text-sm font-medium text-white transition hover:text-green-400 md:flex"
              >
                <Phone size={18} />
                01606094947
              </a>

              {/* DESKTOP WHATSAPP */}
<a

  href="https://wa.me/491606094947"

  target="_blank"

rel="noopener noreferrer"

  className="

    hidden md:flex

    h-12 w-12

    items-center justify-center

    rounded-full

    bg-[#84c225]

    text-black

    shadow-[0_8px_25px_rgba(132,194,37,0.35)]

    transition

    hover:scale-110

    hover:bg-[#96d92b]

  "

>

  <FaWhatsapp size={24} />

</a>

{/* MOBILE BURGER */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="
    flex md:hidden
    h-11 w-11
    items-center justify-center
    rounded-full
    border border-white/15
    bg-white/10
    text-white
    backdrop-blur-md
  "
>

  <div className="relative h-5 w-5">

  <Menu
    size={20}
    className={`
      absolute inset-0 transition-all duration-200
      ${menuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}
    `}
  />

  <X
    size={20}
    className={`
      absolute inset-0 transition-all duration-200
      ${menuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}
    `}
  />

</div>

</button>

            </div>

          </div>
          
          

        </header>

        {/* MOBILE MENU */}
{menuOpen && (

  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="
      absolute
      left-1/2
      top-[90px]
      z-50
      w-[90%]
      max-w-sm
      -translate-x-1/2
      rounded-3xl
      border
      border-white/10
      bg-black/40
      p-4
      backdrop-blur-md
      md:hidden
    "
  >

    <div className="flex flex-col gap-3">

  <a
    href="/"
    onClick={() => setMenuOpen(false)}
    className="
      rounded-2xl
      bg-white/10
      px-5
      py-4
      text-white
      transition
      hover:bg-white/20
    "
  >
    Startseite
  </a>

  <a
    href="#leistungen"
    onClick={() => setMenuOpen(false)}
    className="
      rounded-2xl
      bg-white/10
      px-5
      py-4
      text-white
      transition
      hover:bg-white/20
    "
  >
    Leistungen
  </a>

  <a
    href="#vorher-nachher"
    onClick={() => setMenuOpen(false)}
    className="
      rounded-2xl
      bg-white/10
      px-5
      py-4
      text-white
      transition
      hover:bg-white/20
    "
  >
    Galerie
  </a>

  <a
    href="#uber-uns"
    onClick={() => setMenuOpen(false)}
    className="
      rounded-2xl
      bg-white/10
      px-5
      py-4
      text-white
      transition
      hover:bg-white/20
    "
  >
    Über Uns
  </a>

  <a
    href="#kontakt"
    onClick={() => setMenuOpen(false)}
    className="
      rounded-2xl
      bg-white/10
      px-5
      py-4
      text-white
      transition
      hover:bg-white/20
    "
  >
    Kontakte
  </a>

  <a
    href="tel:01606094947"
    className="
      rounded-2xl
      bg-[#84c225]
      px-5
      py-4
      text-center
      font-semibold
      text-black
    "
  >
    📞 Anrufen
  </a>

</div>

  </motion.div>

)}
        

        {/* HERO CONTENT */}
        <div className="relative z-10">

          <div className="container-custom flex min-h-[100svh] items-center py-16 md:min-h-[80vh] md:py-24">

            <div className="max-w-3xl">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >

                {/* HANGING LOGO */}
<div className="mb-10 flex justify-center md:justify-start overflow-visible">

  <motion.div

  style={{ y: signY }}

  animate={{

    rotate: [-6, 4, -5, 3, -6],

  }}

transition={{

  duration: 6,

  repeat: Infinity,

  ease: "easeInOut",

}}
    className="relative origin-top"
  >

    {/* ROPE TRIANGLE */}
<svg
  className="absolute left-1/2 top-[-60px] -translate-x-1/2 overflow-visible"
  width="280"
  height="120"
  viewBox="0 0 280 120"
  fill="none"
>

  {/* NAIL */}
  <circle
    cx="140"
    cy="10"
    r="6"
    fill="#d4d4d8"
  />

  {/* LEFT ROPE */}
  <line
    x1="140"
    y1="14"
    x2="55"
    y2="95"
    stroke="#c8a97e"

strokeWidth="3.5"

strokeDasharray="3 2"

opacity="0.9"
    strokeLinecap="round"
  />

  {/* RIGHT ROPE */}
  <line
    x1="140"
    y1="14"
    x2="225"
    y2="95"
    stroke="#c8a97e"

strokeWidth="3.5"

strokeDasharray="3 2"

opacity="0.9"
    strokeLinecap="round"
  />

</svg>

    {/* WOOD FRAME */}
    <div
  className="
    mt-6
    rounded-md
    border-[10px]
    border-[#4b2e1e]
    bg-[#d8c3a5]
    p-3
    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
  "
  style={{
    transform: "perspective(1200px)",
    boxShadow:
      "inset 0 0 0 2px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.45)",
  }}
>

      {/* INNER BACKGROUND */}
      <div className="bg-[#efe1c8] p-4">

        <Image
          src="/logo.png"
          alt="Haus & Gartenservice Vitalij Lind"
          width={320}
          height={220}
          priority
          className="h-auto w-[170px] sm:w-[220px] md:w-[270px]"
        />

      </div>

    </div>

  </motion.div>

</div>

                {/* BADGE */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">

                  <Star
                    size={16}
                    className="fill-green-400 text-green-400"
                  />

                  Zuverlässiger Service

                </div>

                

                {/* TITLE */}
                <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">

                  Haus & Gartenservice

                  <span className="block text-[#84c225]">
                    für Bad Hersfeld und Umgebung
                  </span>

                </h1>

                {/* DESCRIPTION */}
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl">

                  Professionelle Gartenpflege,
                  Hausmeisterservice,
                  Entrümpelung und Reinigung —
                  schnell, sauber und zuverlässig.

                </p>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-col gap-4 md:flex-row">

                  <a
                     href="https://wa.me/491606094947"
                     target="_blank"

rel="noopener noreferrer"
                    className="
  flex w-full sm:w-fit
  items-center
  justify-center
  gap-3
  rounded-2xl
  bg-[#84c225]
  px-8
  py-5
  text-lg
  font-semibold
  text-black
  shadow-[0_10px_30px_rgba(132,194,37,0.35)]
  transition
  hover:scale-[1.03]
  hover:bg-[#96d92b]
"
                  >

                    <MessageCircle size={22} />

                    WhatsApp Anfrage

                  </a>

                </div>

                {/* STATS */}
                <div className="mt-12 flex flex-wrap gap-8 text-white">

                  <div>

                    <p className="text-3xl font-bold text-[#84c225]">
                      5★
                    </p>

                    <p className="text-sm text-gray-300">
                      Kundenbewertung
                    </p>

                  </div>

                  <div>

                    <p className="text-3xl font-bold text-[#84c225]">
                      Schnell
                    </p>

                    <p className="text-sm text-gray-300">
                      erreichbar
                    </p>

                  </div>

                  <div>

                    <p className="text-3xl font-bold text-[#84c225]">
                      Fair
                    </p>

                    <p className="text-sm text-gray-300">
                      & transparent
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* LEISTUNGEN */}
      <section

  id="leistungen"

  className="bg-[#f5f7f2] py-28"

>

        <div className="container-custom">

          {/* HEADING */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#84c225]">
              Unsere Leistungen
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Professioneller Service
              für Haus & Garten
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">

              Zuverlässige Dienstleistungen rund um
              Gartenpflege, Reinigung und Hausmeisterservice
              in Bad Hersfeld und Umgebung.

            </p>

          </div>

          {/* CARDS */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
  {
    title: "Gartenpflege",
    text: "Rasenmähen, Unkrautentfernung und allgemeine Gartenarbeiten.",
    icon: Trees,
  },

  {
    title: "Heckenschnitt",
    text: "Sauberer und professioneller Rückschnitt Ihrer Hecken.",
    icon: Scissors,
  },

  {
    title: "Entrümpelung",
    text: "Schnelle und ordentliche Räumungen aller Art.",
    icon: Truck,
  },

  {
    title: "Hausmeisterservice",
    text: "Regelmäßige Betreuung und Pflege Ihrer Immobilie.",
    icon: ShieldCheck,
  },

  {
    title: "Reinigung",
    text: "Wege, Einfahrten und Außenbereiche professionell reinigen.",
    icon: Sparkles,
  },

  {
    title: "Laubentsorgung",
    text: "Entsorgung von Grünschnitt und Gartenabfällen.",
    icon: Leaf,
  },

].map((service, index) => {

  const Icon = service.icon;

  return (

              <motion.div
  key={index}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true, amount: 0.2 }}
                className="
  group
  rounded-3xl
  border
  border-gray-200
  bg-white
  p-8
  shadow-sm
  transition
  md:hover:-translate-y-2
  md:hover:shadow-2xl
"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#84c225]/10 text-[#84c225]">

  <Icon size={30} strokeWidth={2.2} />

</div>

                <h3 className="text-2xl font-bold text-black">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">

                  {service.text}

                </p>

              </motion.div>

            );

          })}

          </div>

          {/* CTA */}
<div className="mt-16 flex justify-center">

  <a
    href="https://wa.me/491606094947"
    target="_blank"

rel="noopener noreferrer"
    className="
      flex
      items-center
      justify-center
      gap-3
      rounded-2xl
      bg-[#84c225]
      px-10
      py-5
      text-lg
      font-semibold
      text-black
      shadow-[0_10px_35px_rgba(132,194,37,0.35)]
      transition
      hover:scale-[1.03]
      hover:bg-[#96d92b]
    "
  >

    <FaWhatsapp size={24} />

    Jetzt Angebot anfragen

  </a>

</div>

        </div>

      </section>

      {/* BEFORE / AFTER */}
<section
  id="vorher-nachher"
  className="bg-gradient-to-b from-[#eef5e7] to-[#f8faf5] py-28"
>

  <div className="container-custom">

    {/* HEADING */}
    <div className="mx-auto max-w-3xl text-center">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#84c225]">
        Vorher & Nachher
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-black">
        Sichtbare Ergebnisse
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-gray-600">
        Professionelle Ergebnisse in Gartenpflege,
        Reinigung und Außenbereichen.
      </p>

    </div>

    {/* GRID */}
    <div className="mx-auto mt-20 max-w-6xl space-y-12">

      {/* ITEM 1 */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

        {/* BEFORE */}
        <div className="group overflow-hidden rounded-3xl border border-red-500/20 bg-white/5 transition hover:shadow-2xl">

          <div className="relative">

            <span className="
              absolute left-5 top-5 z-10
              rounded-full
              bg-red-500
              px-4 py-2
              text-sm font-bold text-white
            ">
              VORHER
            </span>

            <Image
              src="/before10.jpg"
              alt="Vorher Garten"
              width={900}
              height={700}
              className="
  h-[260px]
  md:h-full
  w-full
  object-cover
  transition
  duration-700
  group-hover:scale-105
"
            />

          </div>

        </div>

        {/* AFTER */}
        <div className="group overflow-hidden rounded-3xl border border-[#84c225]/20 bg-white/5 transition hover:shadow-2xl">

          <div className="relative">

            <span className="
              absolute left-5 top-5 z-10
              rounded-full
              bg-[#84c225]
              px-4 py-2
              text-sm font-bold text-black
            ">
              NACHHER
            </span>

            <Image
              src="/after10.jpg"
              alt="Nachher Garten"
              width={900}
              height={700}
              className="
  h-[260px]
  md:h-full
  w-full
  object-cover
  transition
  duration-700
  group-hover:scale-105
"
            />

          </div>

        </div>

      </div>

      {/* ITEM 2 */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

        {/* BEFORE */}
        <div className="group overflow-hidden rounded-3xl border border-red-500/20 bg-white/5 transition hover:shadow-2xl">

          <div className="relative">

            <span className="
              absolute left-5 top-5 z-10
              rounded-full
              bg-red-500
              px-4 py-2
              text-sm font-bold text-white
            ">
              VORHER
            </span>

            <Image
  src="/before20.jpg"
  alt="Vorher Reinigung"
  width={900}
  height={700}
  className="
    h-[260px]
    md:h-full
    w-full
    object-cover
    transition
    duration-700
    group-hover:scale-105
  "
/>

          </div>

        </div>

        {/* AFTER */}
        <div className="group overflow-hidden rounded-3xl border border-[#84c225]/20 bg-white/5 transition hover:shadow-2xl">

          <div className="relative">

            <span className="
              absolute left-5 top-5 z-10
              rounded-full
              bg-[#84c225]
              px-4 py-2
              text-sm font-bold text-black
            ">
              NACHHER
            </span>

            <Image
              src="/after20.jpg"
              alt="Nachher Reinigung"
              width={900}
              height={700}
              className="
  h-[260px]
  md:h-full
  w-full
  object-cover
  transition
  duration-700
  group-hover:scale-105
"
            />

          </div>

        </div>

      </div>

      <div className="mt-16 flex justify-center">

  <a
    href="/galerie"
    className="
      group
      relative
      inline-flex
      items-center
      gap-3
      overflow-hidden
      rounded-2xl
      bg-[#84c225]
      px-8
      py-5
      text-lg
      font-semibold
      text-black
      shadow-[0_10px_35px_rgba(132,194,37,0.35)]
      transition-all
      duration-300
      hover:scale-[1.04]
      hover:shadow-[0_15px_45px_rgba(132,194,37,0.5)]
    "
  >

    {/* LIGHT EFFECT */}
    <span
      className="
        absolute
        inset-0
        -translate-x-full
        bg-gradient-to-r
        from-transparent
        via-white/30
        to-transparent
        transition-transform
        duration-700
        group-hover:translate-x-full
      "
    />

    {/* ICON */}
    <ImageIcon className="relative" size={22} />

    {/* TEXT */}
    <span className="relative">
      Galerie ansehen
    </span>

  </a>

</div>

    </div>

  </div>

</section>



{/* ÜBER UNS */}
<section
  id="uber-uns"
  className="bg-white py-28"
>

  <div className="container-custom">

    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      {/* LEFT IMAGES */}
      <div className="relative order-2 lg:order-1 mb-10 lg:mb-0">

        {/* MAIN IMAGE */}
        <div className="overflow-hidden rounded-[32px] shadow-2xl">

          <Image
            src="/vitalij1.jpg"
            alt="Vitalij Lind"
            width={900}
            height={1100}
            className="h-full w-full object-cover"
          />

        </div>

        {/* SMALL FLOATING IMAGE */}
       <div className="
  absolute
  -bottom-6
  right-3
  w-[140px]
  sm:w-[180px]
  md:w-[260px]
  overflow-hidden
  rounded-[22px]
  md:rounded-[28px]
  border-4
  md:border-8
  border-white
  shadow-2xl
">

          <Image
            src="/maschinen.jpg"
            alt="Gartenservice Technik"
            width={500}
            height={400}
            className="h-full w-full object-cover"
          />

        </div>

      </div>

      {/* MOBILE FEATURES */}
<div className="order-3 lg:hidden mt-14">

  <div className="space-y-5">

    <div className="flex items-start gap-4">

      <div className="mt-1 h-3 w-3 rounded-full bg-[#84c225]" />

      <p className="text-gray-700">
        Zuverlässig & pünktlich
      </p>

    </div>

    <div className="flex items-start gap-4">

      <div className="mt-1 h-3 w-3 rounded-full bg-[#84c225]" />

      <p className="text-gray-700">
        Moderne Geräte & professionelle Technik
      </p>

    </div>

    <div className="flex items-start gap-4">

      <div className="mt-1 h-3 w-3 rounded-full bg-[#84c225]" />

      <p className="text-gray-700">
        Faire Preise & schnelle Kommunikation
      </p>

    </div>

  </div>

  <a
    href="https://wa.me/491606094947"
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-12
      inline-flex
      items-center
      gap-3
      rounded-2xl
      bg-[#84c225]
      px-8
      py-5
      text-lg
      font-semibold
      text-black
      shadow-[0_10px_35px_rgba(132,194,37,0.35)]
      transition
      hover:scale-[1.03]
      hover:bg-[#96d92b]
    "
  >

    <FaWhatsapp size={24} />

    WhatsApp Anfrage

  </a>

</div>

    
      {/* RIGHT CONTENT */}
<div className="order-1 lg:order-2">

  {/* MOBILE TOP TEXT */}
  <div className="lg:hidden">

    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#84c225]">
      Über Uns
    </p>

    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
      Persönlicher Service
      mit Leidenschaft
    </h2>

    <p className="mt-8 text-lg leading-relaxed text-gray-600">
      Haus & Gartenservice Vitalij Lind steht für
      saubere Arbeit, Zuverlässigkeit und schnelle
      Terminvergabe in Bad Hersfeld und Umgebung.
    </p>

  </div>

  



  {/* DESKTOP TEXT */}
<div className="hidden lg:block">

  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#84c225]">
    Über Uns
  </p>

  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
    Persönlicher Service
    mit Leidenschaft
  </h2>

  <p className="mt-8 text-lg leading-relaxed text-gray-600">
    Haus & Gartenservice Vitalij Lind steht für
    saubere Arbeit, Zuverlässigkeit und schnelle
    Terminvergabe in Bad Hersfeld und Umgebung.
  </p>

</div>

{/* DESKTOP FEATURES */}
<div className="hidden lg:block mt-10 space-y-5">

  <div className="flex items-start gap-4">
    <div className="mt-1 h-3 w-3 rounded-full bg-[#84c225]" />
    <p className="text-gray-700">
      Zuverlässig & pünktlich
    </p>
  </div>

  <div className="flex items-start gap-4">
    <div className="mt-1 h-3 w-3 rounded-full bg-[#84c225]" />
    <p className="text-gray-700">
      Moderne Geräte & professionelle Technik
    </p>
  </div>

  <div className="flex items-start gap-4">
    <div className="mt-1 h-3 w-3 rounded-full bg-[#84c225]" />
    <p className="text-gray-700">
      Faire Preise & schnelle Kommunikation
    </p>
  </div>

</div>

{/* DESKTOP BUTTON */}
<div className="hidden lg:block mt-12">

  <a
    href="https://wa.me/491606094947"
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-12
      inline-flex
      items-center
      gap-3
      rounded-2xl
      bg-[#84c225]
      px-8
      py-5
      text-lg
      font-semibold
      text-black
      shadow-[0_10px_35px_rgba(132,194,37,0.35)]
      transition
      hover:scale-[1.03]
      hover:bg-[#96d92b]
    "
  >

    <FaWhatsapp size={24} />

    WhatsApp Anfrage

  </a>

</div>

      </div>

    </div>

  </div>

</section>

{/* FOOTER */}
<footer id="kontakt" className="bg-[#111111] text-white">

  <div className="container-custom py-20">

    <div className="flex flex-col items-center text-center">

      {/* LOGO */}
      <Image

  src="/logo.png"

  alt="Haus & Gartenservice Vitalij Lind"

  width={260}

  height={180}

  style={{ height: "auto" }}

  className="w-[180px] md:w-[240px]"

/>

      {/* TEXT */}
      <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
        Professioneller Haus- & Gartenservice
        in Bad Hersfeld und Umgebung.
        Schnell, zuverlässig und sauber.
      </p>

      {/* BUTTONS */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        {/* WHATSAPP */}
        <a
          href="https://wa.me/491606094947"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-[#84c225]
            px-8
            py-4
            font-semibold
            text-black
            shadow-[0_10px_35px_rgba(132,194,37,0.35)]
            transition
            hover:scale-[1.03]
            hover:bg-[#96d92b]
          "
        >

          <FaWhatsapp size={22} />

          WhatsApp

        </a>

        {/* EMAIL */}
<a
  href="mailto:vitalij.lind@outlook.com"
  className="
    inline-flex
    items-center
    justify-center
    gap-3
    rounded-2xl
    border
    border-white/10
    bg-white/5
    px-8
    py-4
    font-semibold
    text-white
    shadow-[0_10px_35px_rgba(255,255,255,0.05)]
    transition
    hover:scale-[1.03]
    hover:bg-white/10
  "
>

  <Mail size={22} />

  E-Mail schreiben

</a>
      </div>

      {/* PHONE */}
      <a
        href="tel:01606094947"
        className="
          mt-10
          text-2xl
          font-bold
          text-[#84c225]
          transition
          hover:text-[#96d92b]
        "
      >
        0160 6094947
      </a>

      {/* BOTTOM */}
      <div className="mt-14 w-full border-t border-white/10 pt-8">

        <div className="
          flex
          flex-col
          items-center
          justify-between
          gap-4
          text-sm
          text-gray-500
          md:flex-row
        ">

          <p>
            © 2025 Haus- & Gartenservice Vitalij Lind. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="/impressum"
              className="transition hover:text-white"
            >
              Impressum
            </a>

            <a
              href="/datenschutz"
              className="transition hover:text-white"
            >
              Datenschutz
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

</footer>

    </main>
  );
}