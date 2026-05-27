import Navbar from "@/components/Navbar";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] px-6 pt-32 pb-24">
      <Navbar />
      <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-8 shadow-xl md:p-14">

        <h1 className="text-3xl leading-tight font-bold text-black md:text-5xl">
          Datenschutzerklärung
        </h1>

        <p className="mt-6 text-gray-600">
          Datenschutzerklärung für Haus & Gartenservice Vitalij Lind
        </p>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            1. Allgemeine Hinweise
          </h2>

          <p className="leading-relaxed text-gray-700">
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
            der gesetzlichen Datenschutzvorschriften der Datenschutz-Grundverordnung
            (DSGVO) sowie dieser Datenschutzerklärung.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            2. Verantwortlicher
          </h2>

          <div className="leading-relaxed text-gray-700">
            <p>Haus & Gartenservice Vitalij Lind</p>
            <p>Deutschland</p>
            <p>E-Mail: deine-email@example.com</p>
            <p>Telefon: 01606094947</p>
          </div>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            3. Erhebung und Speicherung personenbezogener Daten
          </h2>

          <p className="leading-relaxed text-gray-700">
            Beim Besuch dieser Website werden automatisch Informationen
            durch den Hostinganbieter erfasst. Dies sind insbesondere:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>verwendeter Browser</li>
            <li>Betriebssystem</li>
            <li>aufgerufene Seiten</li>
          </ul>

          <p className="leading-relaxed text-gray-700">
            Diese Daten dienen ausschließlich der technischen Bereitstellung
            und Sicherheit der Website.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            4. Kontaktaufnahme über WhatsApp oder E-Mail
          </h2>

          <p className="leading-relaxed text-gray-700">
            Wenn Sie uns per WhatsApp, Telefon oder E-Mail kontaktieren,
            werden Ihre Angaben inklusive der von Ihnen angegebenen
            Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert.
          </p>

          <p className="leading-relaxed text-gray-700">
            Verarbeitete Daten können sein:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>Name</li>
            <li>Telefonnummer</li>
            <li>E-Mail-Adresse</li>
            <li>Nachrichtentext</li>
          </ul>

          <p className="leading-relaxed text-gray-700">
            Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO
            zur Durchführung vorvertraglicher Maßnahmen bzw.
            zur Bearbeitung Ihrer Anfrage.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            5. Hosting
          </h2>

          <p className="leading-relaxed text-gray-700">
            Diese Website wird bei einem externen Hostinganbieter gehostet.
            Personenbezogene Daten, die auf dieser Website erfasst werden,
            werden auf den Servern des Hosters gespeichert.
          </p>

          <p className="leading-relaxed text-gray-700">
            Mit dem Hostinganbieter besteht ein Vertrag zur
            Auftragsverarbeitung gemäß Art. 28 DSGVO.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            6. Speicherdauer
          </h2>

          <p className="leading-relaxed text-gray-700">
            Personenbezogene Daten werden nur so lange gespeichert,
            wie dies zur Bearbeitung der Anfrage oder zur Erfüllung
            gesetzlicher Aufbewahrungspflichten erforderlich ist.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            7. Ihre Rechte
          </h2>

          <p className="leading-relaxed text-gray-700">
            Sie haben jederzeit das Recht auf:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>Auskunft über Ihre gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerruf einer Einwilligung</li>
            <li>Beschwerde bei einer Datenschutzaufsichtsbehörde</li>
          </ul>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            8. SSL- bzw. TLS-Verschlüsselung
          </h2>

          <p className="leading-relaxed text-gray-700">
            Diese Website nutzt aus Sicherheitsgründen eine SSL-
            bzw. TLS-Verschlüsselung. Dadurch werden übermittelte
            Daten geschützt übertragen.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            9. Änderungen dieser Datenschutzerklärung
          </h2>

          <p className="leading-relaxed text-gray-700">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
            damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
          </p>

        </section>

      </div>
    </main>
  );
}