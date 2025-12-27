import Link from "next/link";
import { client } from "@/lib/sanity";
import { PRACTICE_AREAS_QUERY } from "@/lib/queries";
import { Scale, Gavel, FileText, Users, Building2, Home, Briefcase, Shield, BookOpen, LucideIcon } from 'lucide-react';

interface PracticeArea {
  _id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDescription: string;
  order: number;
}

const iconMap: Record<string, LucideIcon> = {
  Scale,
  Gavel,
  FileText,
  Users,
  Building2,
  Home,
  Briefcase,
  Shield,
  BookOpen,
};

async function getPracticeAreas(): Promise<PracticeArea[]> {
  return client.fetch(PRACTICE_AREAS_QUERY);
}

export default async function ServicesGrid() {
  const areas = await getPracticeAreas();

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-law-navy sm:text-4xl font-[family-name:var(--font-playfair)]">
            Çalışma Alanlarımız
          </h2>
          <p className="mt-4 text-lg leading-8 text-law-gray">
            Uzman olduğumuz hukuk dallarında profesyonel hizmet sunuyoruz
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area._id}
                href={`/hizmetler/${area.slug}`}
                className="group relative bg-law-light rounded-2xl p-8 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 block"
              >
                <div className="mb-4">
                  {(() => {
                    const IconComponent = iconMap[area.iconName] || Scale;
                    return <IconComponent className="w-12 h-12 text-law-gold" />;
                  })()}
                </div>
                <h3 className="text-xl font-semibold text-law-navy mb-3 group-hover:text-law-gold transition-colors">
                  {area.title}
                </h3>
                <p className="text-law-gray mb-4">
                  {area.shortDescription}
                </p>
                <span className="text-law-gold font-semibold text-sm inline-flex items-center">
                  Detaylı Bilgi
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
