import Navbar from "@/components/Navbar";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] px-6 pt-32 pb-24">
        <Navbar />
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-8 shadow-xl md:p-14">

       <h1 className="text-3xl leading-tight font-bold text-black md:text-5xl">
          Impressum
        </h1>

        <p className="mt-6 text-gray-600">
          Angaben gemäß § 5 TMG
        </p>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <div className="leading-relaxed text-gray-700">
            <p className="font-semibold text-black">
              Haus & Gartenservice Vitalij Lind
            </p>

            <p>Vitalij Lind</p>

            <p>[Straße und Hausnummer]</p>

            <p>[PLZ Ort]</p>

            <p>Deutschland</p>

            <p className="mt-4">
              Telefon: 01606094947
            </p>

            <p>
              E-Mail: deine-email@example.com
            </p>
          </div>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>

          <div className="leading-relaxed text-gray-700">
            <p>Vitalij Lind</p>

            <p>[Straße und Hausnummer]</p>

            <p>[PLZ Ort]</p>

            <p>Deutschland</p>
          </div>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            EU-Streitschlichtung
          </h2>

          <p className="leading-relaxed text-gray-700">
            Die Europäische Kommission stellt eine Plattform
            zur Online-Streitbeilegung (OS) bereit:
          </p>

          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#84c225] transition hover:text-black"
          >
            https://ec.europa.eu/consumers/odr/
          </a>

          <p className="leading-relaxed text-gray-700">
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>

          <p className="leading-relaxed text-gray-700">
            Wir sind nicht bereit oder verpflichtet,
            an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            Haftung für Inhalte
          </h2>

          <p className="leading-relaxed text-gray-700">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
            für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich.
          </p>

          <p className="leading-relaxed text-gray-700">
            Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte
            fremde Informationen zu überwachen.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            Haftung für Links
          </h2>

          <p className="leading-relaxed text-gray-700">
            Unsere Website enthält Links zu externen Websites Dritter,
            auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte
            auch keine Gewähr übernehmen.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            Urheberrecht
          </h2>

          <p className="leading-relaxed text-gray-700">
            Die durch den Seitenbetreiber erstellten Inhalte
            und Werke auf dieser Website unterliegen dem deutschen
            Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
          </p>

        </section>

      </div>
    </main>

    
  );
}