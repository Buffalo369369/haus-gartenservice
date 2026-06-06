import Navbar from "@/components/Navbar";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f2] px-6 pt-32 pb-24">
      <Navbar />

      <h1 className="text-3xl font-bold text-black md:text-5xl">
  Impressum
</h1>

<p className="mt-6 text-gray-600">
  Angaben gemäß § 5 DDG
</p>


{/* Angaben */}
<section className="mt-12 space-y-5">

  <div className="leading-relaxed text-gray-700">

    <p className="font-semibold text-black">
      Haus & Gartenservice Vitalij Lind
    </p>

    <p>Inhaber: Vitalij Lind</p>

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


{/* Verantwortlicher */}
<section className="mt-12 space-y-5">

  <h2 className="text-2xl font-bold text-black">
    Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
  </h2>

  <div className="leading-relaxed text-gray-700">

    <p>Vitalij Lind</p>

    <p>Stettiner Straße 20</p>

    <p>36251 Bad Hersfeld</p>

    <p>Deutschland</p>

  </div>

</section>


{/* Verbraucherstreitbeilegung */}
<section className="mt-12 space-y-5">

  <h2 className="text-2xl font-bold text-black">
    Verbraucherstreitbeilegung
  </h2>

  <p className="leading-relaxed text-gray-700">
    Wir sind nicht bereit oder verpflichtet,
    an Streitbeilegungsverfahren vor einer
    Verbraucherschlichtungsstelle teilzunehmen.
  </p>

</section>
    </main>
  );
}