import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://hausgartenservice-vitalijlind.de/"),
  title: "Haus & Gartenservice Vitalij Lind",
  description:
    "Gartenpflege, Winterdienst, Reinigung und Hausmeisterservice in Bad Hersfeld und Umgebung.",

  openGraph: {
    title: "Haus & Gartenservice Vitalij Lind",
    description:
      "Professioneller Gartenservice, Winterdienst und Hausmeisterservice in Bad Hersfeld.",
    images: ["/hero1.jpg"],
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html

  lang="de"

  data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}