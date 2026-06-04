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

          <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">

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
                Wintersaison 2026/2027
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
                Winterdienst Bad Hersfeld und Umgebung
              </p>

              <h1
                className="
text-4xl

font-bold

leading-tight

text-black

sm:text-5xl

md:text-6xl
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
                src="/winterdienst1.jpg"
                alt="Winterdienst Bad Hersfeld"
                width={1200}
                height={900}
                priority
                className="
  h-full
  w-full
  object-cover
  transition
  duration-700
  hover:scale-105
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

 text-3xl

 sm:text-4xl

 md:text-5xl

 font-bold

 text-black

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
  md:hover:-translate-y-2
  md:hover:shadow-2xl
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

 text-3xl

 sm:text-4xl

 md:text-5xl

 font-bold

 text-black

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
              "Zuverlässige Ausführung",
              "Persönlicher Ansprechpartner",
              "Privat & Gewerbe",
              
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

 text-3xl

 sm:text-4xl

 md:text-5xl

 font-bold

 text-black

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
                p-8 md:p-10
                shadow-lg
              "
            >

              <h3
                className="
                  text-2xl md:text-3xl
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
                ab ca. 650 € / Saison
              </p>

            </div>

            {/* GEWERBE */}
            <div
              className="
                rounded-[36px]
                border
                border-sky-100
                bg-sky-50
                p-8 md:p-10
                shadow-lg
              "
            >

              <h3
                className="
                  text-2xl md:text-3xl
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
                ab ca. 900 € / Saison
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

 text-3xl

 sm:text-4xl

 md:text-5xl

 font-bold

 text-black

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
                  p-8 md:p-10
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
      <section className="bg-white pt-28 pb-12">

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
              p-8 md:p-14
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

 text-3xl

 sm:text-4xl

 md:text-5xl

 font-bold

 text-black

 "

>
              Wintersaison
            </h2>

            <div
              className="

mt-6

text-4xl

font-black

text-[#84c225]

sm:text-5xl

md:text-6xl

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

    {/* FAQ */}
<section className="bg-sky-50 py-24">

  <div className="container-custom">

    <div className="mx-auto max-w-3xl text-center">

      <p className="
        mb-4
        text-sm
        font-semibold
        uppercase
        tracking-[0.2em]
        text-[#84c225]
      ">
        FAQ
      </p>

      <h2 className="
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-bold
        text-black
      ">
        Häufige Fragen
      </h2>

    </div>

    <div className="mx-auto mt-16 max-w-4xl space-y-6">

      <div className="rounded-3xl border border-sky-100 p-8 shadow-sm">
        <h3 className="text-xl font-bold text-black">
          Wann beginnt die Wintersaison?
        </h3>
        <p className="mt-3 text-gray-600">
          Unsere Wintersaison läuft in der Regel vom 01.10. bis 31.03.
        </p>
      </div>

      <div className="rounded-3xl border border-sky-100 p-8 shadow-sm">
        <h3 className="text-xl font-bold text-black">
          Räumen Sie auch bei starkem Schneefall?
        </h3>
        <p className="mt-3 text-gray-600">
          Ja, wir sind auch bei starkem Schneefall und Glätte einsatzbereit.
        </p>
      </div>

      <div className="rounded-3xl border border-sky-100 p-8 shadow-sm">
        <h3 className="text-xl font-bold text-black">
          Betreuen Sie Privat- und Gewerbekunden?
        </h3>
        <p className="mt-3 text-gray-600">
          Ja, wir übernehmen Winterdienste für Privatpersonen,
          Unternehmen und Hausverwaltungen.
        </p>
      </div>

      <div className="rounded-3xl border border-sky-100 p-8 shadow-sm">
        <h3 className="text-xl font-bold text-black">
          Wie schnell kann ein Einsatz erfolgen?
        </h3>
        <p className="mt-3 text-gray-600">
          Dank unserer Bereitschaft können Einsätze kurzfristig
          und flexibel durchgeführt werden.
        </p>
      </div>

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
             from-sky-200

             to-sky-50
              p-12
              text-center
              shadow-xl
              md:p-16
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                text-black
                sm:text-4xl

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