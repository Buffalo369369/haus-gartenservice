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
            der gesetzlichen Datenschutzvorschriften, insbesondere der
            Datenschutz-Grundverordnung (DSGVO).
          </p>

          <p className="leading-relaxed text-gray-700">
            Die Nutzung dieser Website ist grundsätzlich ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten erhoben werden, erfolgt dies stets
            auf freiwilliger Basis.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            2. Verantwortlicher
          </h2>

          <div className="leading-relaxed text-gray-700">
            <p>Haus & Gartenservice Vitalij Lind</p>
            <p>Vitalij Lind</p>
            <p>36251 Bad Hersfeld</p>
            <p>Deutschland</p>

            <p className="mt-4">
              Telefon: 0160 6094947
            </p>

            <p>
              E-Mail: vitalij.lind@outlook.com
            </p>
          </div>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            3. Hosting der Website
          </h2>

          <p className="leading-relaxed text-gray-700">
            Diese Website wird bei einem externen Hostinganbieter betrieben.
            Personenbezogene Daten, die auf dieser Website erfasst werden,
            werden auf den Servern des Hostinganbieters gespeichert.
          </p>

          <p className="leading-relaxed text-gray-700">
            Dabei können insbesondere folgende Daten verarbeitet werden:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>IP-Adressen</li>
            <li>Browserinformationen</li>
            <li>Betriebssystem</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Referrer-URL</li>
            <li>Webseitenaufrufe</li>
          </ul>

          <p className="leading-relaxed text-gray-700">
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            aufgrund unseres berechtigten Interesses an einer sicheren und stabilen
            Bereitstellung der Website.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            4. Kontaktformular
          </h2>

          <p className="leading-relaxed text-gray-700">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
            werden Ihre Angaben aus dem Formular zwecks Bearbeitung Ihrer Anfrage
            und für mögliche Anschlussfragen gespeichert.
          </p>

          <p className="leading-relaxed text-gray-700">
            Verarbeitet werden insbesondere:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>Name</li>
            <li>Telefonnummer</li>
            <li>E-Mail-Adresse</li>
            <li>Nachricht</li>
          </ul>

          <p className="leading-relaxed text-gray-700">
            Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO
            zur Bearbeitung Ihrer Anfrage.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            5. Terminbuchung
          </h2>

          <p className="leading-relaxed text-gray-700">
            Über unsere Website können Termine angefragt oder gebucht werden.
            Dabei werden personenbezogene Daten verarbeitet, die zur
            Terminvereinbarung erforderlich sind.
          </p>

          <p className="leading-relaxed text-gray-700">
            Hierzu gehören insbesondere:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>Vor- und Nachname</li>
            <li>Telefonnummer</li>
            <li>E-Mail-Adresse</li>
            <li>gewünschter Termin</li>
            <li>Angaben zur gewünschten Dienstleistung</li>
          </ul>

          <p className="leading-relaxed text-gray-700">
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            6. Speicherdauer
          </h2>

          <p className="leading-relaxed text-gray-700">
            Ihre personenbezogenen Daten werden nur so lange gespeichert,
            wie dies zur Bearbeitung Ihrer Anfrage oder zur Erfüllung
            gesetzlicher Aufbewahrungspflichten erforderlich ist.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            7. Ihre Rechte nach DSGVO
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
            <li>Widerruf einer erteilten Einwilligung</li>
            <li>Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde</li>
          </ul>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            8. SSL- bzw. TLS-Verschlüsselung
          </h2>

          <p className="leading-relaxed text-gray-700">
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz
            vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            9. Widerspruch gegen Werbe-E-Mails
          </h2>

          <p className="leading-relaxed text-gray-700">
            Der Nutzung der im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten zur Übersendung nicht ausdrücklich angeforderter Werbung
            wird hiermit widersprochen.
          </p>

        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">

          <h2 className="text-2xl font-bold text-black">
            10. Änderungen dieser Datenschutzerklärung
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