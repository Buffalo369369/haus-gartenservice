import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function GaleriePage() {
  return (
    <main className="min-h-screen bg-[#f8faf5] pt-32 pb-24">

      <Navbar />

      <div className="container-custom">

        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#84c225]">
            Galerie
          </p>

          <h1 className="text-5xl font-bold text-black">
            Unsere Arbeiten
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Beispiele unserer Gartenpflege,
            Reinigung und Außenarbeiten.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {[
            "/gal10.jpg",
            "/gal20.jpg",
            "/gal31.jpg",
            "/gal40.jpg",
            "/gal50.jpg",
            "/gal60.jpg",
            "/gal70.jpg",
            "/gal80.jpg",
            "/gal91.jpg",
          ].map((img, index) => (

            <div
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-lg
              "
            >

              <Image

  src={img}

  alt={`Haus & Gartenservice Bild ${index + 1}`}

  width={900}

  height={700}

  priority={img === "/gal31.jpg"}

  className="

    h-[320px]

    w-full

    object-cover

    transition

    duration-500

    hover:scale-105

  "

/>
            </div>

          ))}

        </div>

      </div>

    </main>
  );
}