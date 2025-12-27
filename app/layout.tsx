import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LegalServiceSchema } from "@/components/SchemaMarkup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Av. Ömer Geçgelen | Bursa Avukat",
  description: "Bursa'da profesyonel hukuki danışmanlık ve avukatlık hizmetleri. Bursa Barosu Sicil 6293",
  keywords: ["avukat", "bursa avukat", "ömer geçgelen", "hukuk", "hukuki danışmanlık", "bursa barosu", "osmangazi avukat"],
  authors: [{ name: "Av. Ömer Geçgelen" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://avukat.com",
    siteName: "Av. Ömer Geçgelen",
    title: "Av. Ömer Geçgelen | Bursa Avukat",
    description: "Bursa'da profesyonel hukuki danışmanlık ve avukatlık hizmetleri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Av. Ömer Geçgelen | Bursa Avukat",
    description: "Bursa'da profesyonel hukuki danışmanlık ve avukatlık hizmetleri",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <LegalServiceSchema />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
