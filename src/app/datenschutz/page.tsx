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
            1. Verantwortlicher
          </h2>

          <div className="leading-relaxed text-gray-700">
            <p>Haus & Gartenservice Vitalij Lind</p>
            <p>Vitalij Lind</p>
            <p>Stettiner Straße 20</p>
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
            2. Allgemeine Hinweise
          </h2>

          <p className="leading-relaxed text-gray-700">
            Der Schutz Ihrer personenbezogenen Daten ist uns sehr wichtig.
            Wir behandeln Ihre Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften, insbesondere der
            Datenschutz-Grundverordnung (DSGVO).
          </p>

          <p className="leading-relaxed text-gray-700">
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können.
          </p>
        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-bold text-black">
            3. Hosting
          </h2>

          <p className="leading-relaxed text-gray-700">
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA, gehostet.
          </p>

          <p className="leading-relaxed text-gray-700">
            Beim Besuch der Website werden durch Vercel technische Daten
            verarbeitet, insbesondere:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>IP-Adresse</li>
            <li>Browsertyp und -version</li>
            <li>Betriebssystem</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>aufgerufene Seiten</li>
          </ul>

          <p className="leading-relaxed text-gray-700">
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an einer sicheren und stabilen Bereitstellung
            der Website).
          </p>
        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-bold text-black">
            4. WhatsApp-Kontakt
          </h2>

          <p className="leading-relaxed text-gray-700">
            Auf unserer Website besteht die Möglichkeit, uns über WhatsApp
            zu kontaktieren.
          </p>

          <p className="leading-relaxed text-gray-700">
            Bei Nutzung von WhatsApp werden personenbezogene Daten an
            WhatsApp Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland,
            übermittelt.
          </p>

          <p className="leading-relaxed text-gray-700">
            WhatsApp kann Daten auch in Drittländer außerhalb der EU übertragen.
          </p>

          <p className="leading-relaxed text-gray-700">
            Die Nutzung erfolgt freiwillig. Rechtsgrundlage ist Art. 6 Abs. 1
            lit. a DSGVO sowie Art. 6 Abs. 1 lit. b DSGVO.
          </p>
        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-bold text-black">
            5. Cookies
          </h2>

          <p className="leading-relaxed text-gray-700">
            Unsere Website kann Cookies verwenden. Cookies sind kleine
            Textdateien, die auf Ihrem Endgerät gespeichert werden.
          </p>

          <p className="leading-relaxed text-gray-700">
            Technisch notwendige Cookies werden auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO gespeichert.
          </p>

          <p className="leading-relaxed text-gray-700">
            Nicht notwendige Cookies (z. B. für Analyse) werden nur nach
            Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO gesetzt.
          </p>
        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-bold text-black">
            6. Google Analytics (falls aktiv)
          </h2>

          <p className="leading-relaxed text-gray-700">
            Diese Website nutzt Google Analytics, einen Webanalysedienst
            der Google Ireland Limited, Gordon House, Dublin 4, Irland.
          </p>

          <p className="leading-relaxed text-gray-700">
            Google Analytics verarbeitet unter anderem:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-gray-700">
            <li>Nutzungsdaten</li>
            <li>Seitenaufrufe</li>
            <li>gekürzte IP-Adresse</li>
            <li>Geräteinformationen</li>
          </ul>

          <p className="leading-relaxed text-gray-700">
            Die Verarbeitung erfolgt ausschließlich nach Einwilligung
            über ein Cookie-Banner gemäß Art. 6 Abs. 1 lit. a DSGVO.
          </p>

          <p className="leading-relaxed text-gray-700">
            Die Einwilligung kann jederzeit widerrufen werden.
          </p>
        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-bold text-black">
            7. Speicherdauer
          </h2>

          <p className="leading-relaxed text-gray-700">
            Personenbezogene Daten werden nur so lange gespeichert,
            wie dies für den jeweiligen Zweck erforderlich ist oder
            gesetzliche Aufbewahrungsfristen bestehen.
          </p>
        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-bold text-black">
            8. Rechte der betroffenen Personen
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
            9. Beschwerderecht
          </h2>

          <p className="leading-relaxed text-gray-700">
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde
            zu beschweren.
          </p>
        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-bold text-black">
            10. SSL-/TLS-Verschlüsselung
          </h2>

          <p className="leading-relaxed text-gray-700">
            Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung.
          </p>

          <p className="leading-relaxed text-gray-700">
            Eine verschlüsselte Verbindung erkennen Sie an „https://“
            in der Browserzeile.
          </p>
        </section>

        {/* SECTION */}
        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-bold text-black">
            11. Änderungen
          </h2>

          <p className="leading-relaxed text-gray-700">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
            damit sie stets den aktuellen gesetzlichen Anforderungen entspricht.
          </p>
        </section>

      </div>
    </main>
  );
}