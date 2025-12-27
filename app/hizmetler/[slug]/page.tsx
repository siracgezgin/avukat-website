import { notFound } from "next/navigation";
import { client } from "@/lib/sanity";
import { PRACTICE_AREA_BY_SLUG_QUERY, PRACTICE_AREAS_QUERY } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import type { Metadata } from "next";

interface PracticeArea {
  _id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  content: any[];
  order: number;
}

async function getPracticeArea(slug: string): Promise<PracticeArea | null> {
  return client.fetch(PRACTICE_AREA_BY_SLUG_QUERY, { slug });
}

async function getAllPracticeAreas() {
  return client.fetch(PRACTICE_AREAS_QUERY);
}

export async function generateStaticParams() {
  const areas = await getAllPracticeAreas();
  return areas.map((area: any) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const area = await getPracticeArea(params.slug);

  if (!area) {
    return {
      title: "Sayfa Bulunamadı",
    };
  }

  return {
    title: `${area.title} | Avukat`,
    description: area.shortDescription,
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: { slug: string };
}) {
  const area = await getPracticeArea(params.slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        <Link
          href="/hizmetler"
          className="inline-flex items-center text-law-gold hover:text-amber-600 mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Tüm Hizmetler
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{area.icon}</div>
          <h1 className="text-4xl font-bold tracking-tight text-law-navy sm:text-5xl font-[family-name:var(--font-playfair)]">
            {area.title}
          </h1>
          <p className="mt-4 text-xl text-law-gray">{area.shortDescription}</p>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:text-law-navy prose-a:text-law-gold prose-strong:text-law-navy">
          <PortableText value={area.content} />
        </div>

        <div className="mt-16 bg-law-light rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-law-navy mb-4">
            Bu konuda yardıma mı ihtiyacınız var?
          </h2>
          <p className="text-law-gray mb-6">
            Uzman ekibimiz size yardımcı olmak için hazır. Ücretsiz ön görüşme için hemen iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block rounded-md bg-law-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-amber-600 transition-all"
          >
            İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  );
}
