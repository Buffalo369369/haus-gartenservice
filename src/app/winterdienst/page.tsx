            import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import {
  Snowflake,
  Shield,
  Clock3,
  CheckCircle,
  Home,
  Building2,
  Truck,
} from "lucide-react";

export default function WinterdienstPage() {
  return (
    <main className="min-h-screen bg-white">

      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 pt-32 pb-24">

        <div className="container-custom">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  shadow-md
                  text-sky-700
                "
              >
                <Snowflake size={16} />
                Wintersaison 2025 / 2026
              </div>

              <p
                className="
                  mb-5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#84c225]
                "
              >
                Winterdienst Bad Hersfeld und Umgebung.
              </p>

              <h1
                className="
                  text-5xl
                  font-bold
                  leading-tight
                  text-black
                  md:text-7xl
                "
              >
                Zuverlässiger
                <span className="block text-sky-600">
                  Winterdienst
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-xl
                  text-lg
                  leading-relaxed
                  text-gray-700
                  md:text-xl
                "
              >
                Professionelle Schneeräumung,
                Streudienste und Winterbetreuung
                für Privatkunden, Unternehmen
                und Hausverwaltungen in
                Bad Hersfeld und Umgebung.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="https://wa.me/491606094947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-[#84c225]
                    px-8
                    py-5
                    font-semibold
                    text-black
                    shadow-[0_15px_40px_rgba(132,194,37,0.35)]
                    transition
                    hover:scale-[1.03]
                  "
                >
                  <FaWhatsapp size={22} />
                  Jetzt Winterdienst anfragen
                </a>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
                overflow-hidden
                rounded-[40px]
                bg-white
                shadow-2xl
              "
            >

              <Image
                src="/winterdienst.jpg"
                alt="Winterdienst Bad Hersfeld"
                width={1200}
                height={900}
                priority
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* LEISTUNGEN */}
      <section className="bg-white py-28">

        <div className="container-custom">

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#84c225]
              "
            >
              Unsere Leistungen
            </p>

            <h2
              className="
                text-4xl
                font-bold
                text-black
                md:text-5xl
              "
            >
              Rundum Winterservice
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-gray-600
              "
            >
              Zuverlässiger Winterdienst
              für Privatpersonen,
              Unternehmen und
              Hausverwaltungen.
            </p>

          </div>

          <div
            className="
              mt-20
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >

            {[
              {
                title: "Schneeräumung",
                text: "Gehwege, Einfahrten, Parkplätze und Zufahrten schneefrei halten.",
                icon: Snowflake,
              },
              {
                title: "Streudienst",
                text: "Sicherheit bei Eis, Glätte und winterlichen Bedingungen.",
                icon: Shield,
              },
              {
                title: "24/7 Bereitschaft",
                text: "Schnelle Einsätze auch bei starkem Schneefall.",
                icon: Clock3,
              },
              {
                title: "Privatkunden",
                text: "Häuser, Gehwege und Einfahrten zuverlässig betreut.",
                icon: Home,
              },
              {
                title: "Gewerbekunden",
                text: "Parkplätze, Firmengelände und Zufahrten.",
                icon: Building2,
              },
              {
                title: "Schneetransport",
                text: "Abtransport großer Schneemengen bei Bedarf.",
                icon: Truck,
              },
            ].map((service, index) => {

              const Icon = service.icon;

              return (

                <div
                  key={index}
                  className="
                    rounded-3xl
                    border
                    border-sky-100
                    bg-white
                    p-8
                    shadow-lg
                    transition
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >

                  <div
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-sky-100
                      text-sky-600
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-black
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-relaxed
                      text-gray-600
                    "
                  >
                    {service.text}
                  </p>

                </div>

              );
            })}

          </div>

        </div>

      </section>

      {/* WARUM WIR */}
      <section className="bg-sky-50 py-28">

        <div className="container-custom">

          <div className="mx-auto max-w-3xl text-center">

            <p
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#84c225]
              "
            >
              Warum wir?
            </p>

            <h2
              className="
                text-4xl
                font-bold
                text-black
                md:text-5xl
              "
            >
              Darum entscheiden sich
              Kunden für uns
            </h2>

          </div>

          <div
            className="
              mt-20
              grid
              gap-6
              md:grid-cols-2
            "
          >
            {[
              "24/7 Einsatzbereitschaft",
              "Faire und transparente Preise",
              "Schnelle Reaktionszeiten",
              "Moderne Technik",
              "Zuverlässige Ausführung",
              "Persönlicher Ansprechpartner",
              "Privat & Gewerbe",
              "Bad Hersfeld und Umgebung",
            ].map((item) => (

              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-3xl
                  border
                  border-sky-100
                  bg-white
                  p-6
                  shadow-md
                "
              >

                <CheckCircle
                  size={24}
                  className="text-[#84c225]"
                />

                <span
                  className="
                    text-lg
                    font-medium
                    text-black
                  "
                >
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRIVAT / GEWERBE */}
      <section className="bg-white py-28">

        <div className="container-custom">

          <div className="text-center">

            <p
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#84c225]
              "
            >
              Unsere Kunden
            </p>

            <h2
              className="
                text-4xl
                font-bold
                text-black
                md:text-5xl
              "
            >
              Für Privat & Gewerbe
            </h2>

          </div>

          <div
            className="
              mt-20
              grid
              gap-8
              lg:grid-cols-2
            "
          >

            {/* PRIVAT */}
            <div
              className="
                rounded-[36px]
                border
                border-sky-100
                bg-sky-50
                p-10
                shadow-lg
              "
            >

              <h3
                className="
                  text-3xl
                  font-bold
                  text-black
                "
              >
                🏠 Privatkunden
              </h3>

              <div
                className="
                  mt-8
                  space-y-4
                  text-lg
                  text-gray-700
                "
              >
                <p>✓ Gehwege</p>
                <p>✓ Hauseingänge</p>
                <p>✓ Einfahrten</p>
                <p>✓ Winterkontrolle</p>
              </div>

              <p
                className="
                  mt-10
                  text-3xl
                  font-bold
                  text-[#84c225]
                "
              >
                ab ca. 700 € / Saison
              </p>

            </div>

            {/* GEWERBE */}
            <div
              className="
                rounded-[36px]
                border
                border-sky-100
                bg-sky-50
                p-10
                shadow-lg
              "
            >

              <h3
                className="
                  text-3xl
                  font-bold
                  text-black
                "
              >
                🏢 Gewerbekunden
              </h3>

              <div
                className="
                  mt-8
                  space-y-4
                  text-lg
                  text-gray-700
                "
              >
                <p>✓ Parkplätze</p>
                <p>✓ Firmengelände</p>
                <p>✓ Zufahrten</p>
                <p>✓ Große Flächen</p>
              </div>

              <p
                className="
                  mt-10
                  text-3xl
                  font-bold
                  text-[#84c225]
                "
              >
                ab ca. 850 € / Saison
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ABLAUF */}
      <section className="bg-sky-50 py-28">

        <div className="container-custom">

          <div className="text-center">

            <p
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#84c225]
              "
            >
              Ablauf
            </p>

            <h2
              className="
                text-4xl
                font-bold
                text-black
                md:text-5xl
              "
            >
              So funktioniert's
            </h2>

          </div>

          <div
            className="
              mt-20
              grid
              gap-8
              md:grid-cols-3
            "
          >

            {[
              {
                number: "1",
                title: "Anfrage senden",
              },
              {
                number: "2",
                title: "Besichtigung",
              },
              {
                number: "3",
                title: "Winterdienst startet",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="
                  rounded-3xl
                  bg-white
                  p-10
                  text-center
                  shadow-lg
                "
              >

                <div
                  className="
                    mx-auto
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#84c225]
                    text-2xl
                    font-bold
                    text-black
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-black
                  "
                >
                  {step.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SAISON */}
      <section className="bg-white py-28">

        <div className="container-custom">

          <div
            className="
              mx-auto
              max-w-4xl
              rounded-[40px]
              border
              border-sky-100
              bg-gradient-to-r
              from-sky-50
              to-white
              p-14
              text-center
              shadow-xl
            "
          >

            <Snowflake
              size={48}
              className="
                mx-auto
                mb-6
                text-sky-500
              "
            />

            <h2
              className="
                text-5xl
                font-bold
                text-black
              "
            >
              Wintersaison
            </h2>

            <div
              className="
                mt-6
                text-6xl
                font-black
                text-[#84c225]
              "
            >
              01.10 – 31.03
            </div>

            <p
              className="
                mt-8
                text-xl
                text-gray-600
              "
            >
              Wir behalten Wetter, Schnee und
              Glätte ständig im Blick.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-sky-50 py-28">

        <div className="container-custom">

          <div
            className="
              rounded-[40px]
              border
              border-sky-100
              bg-gradient-to-r
              from-sky-100
              to-white
              p-12
              text-center
              shadow-xl
              md:p-16
            "
          >

            <h2
              className="
                text-4xl
                font-bold
                text-black
                md:text-6xl
              "
            >
              Bereit für den Winter?
            </h2>

            <p
              className="
                mt-6
                text-xl
                text-gray-600
              "
            >
              Kostenlose Besichtigung und
              unverbindliches Angebot erhalten.
            </p>

            <a
              href="https://wa.me/491606094947"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-[#84c225]
                px-10
                py-5
                text-lg
                font-semibold
                text-black
                shadow-lg
                transition
                hover:scale-105
              "
            >
              <FaWhatsapp size={22} />
              WhatsApp Anfrage
            </a>

          </div>

          <div className="mt-10 text-center">

            <Link
              href="/"
              className="
                text-sky-600
                transition
                hover:text-sky-700
              "
            >
              ← Zurück zur Hauptseite
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}