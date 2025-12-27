import { client } from "@/lib/sanity";
import { ATTORNEYS_QUERY } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | Avukat",
  description: "Ekibimiz ve hukuki hizmet anlayışımız hakkında bilgi edinin",
};

interface Attorney {
  _id: string;
  name: string;
  title: string;
  photo: any;
  bio: any[];
  education: Array<{
    degree: string;
    school: string;
    year: string;
  }>;
  barNumber?: string;
  email?: string;
  phone?: string;
}

async function getAttorneys(): Promise<Attorney[]> {
  return client.fetch(ATTORNEYS_QUERY);
}

export default async function HakkimizdaPage() {
  const attorneys = await getAttorneys();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-law-navy sm:text-5xl font-[family-name:var(--font-playfair)]">
            Hakkımızda
          </h1>
          <p className="mt-4 text-lg leading-8 text-law-gray">
            Müvekkillerimize en iyi hukuki hizmeti sunmak için çalışıyoruz
          </p>
        </div>

        <div className="space-y-16">
          {attorneys.map((attorney) => (
            <div
              key={attorney._id}
              className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                {attorney.photo && (
                  <Image
                    src={urlFor(attorney.photo).width(600).height(750).url()}
                    alt={attorney.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div>
                <h2 className="text-3xl font-bold text-law-navy mb-2">
                  {attorney.name}
                </h2>
                <p className="text-xl text-law-gold mb-6">{attorney.title}</p>

                {attorney.bio && (
                  <div className="prose prose-lg max-w-none prose-headings:text-law-navy prose-a:text-law-gold mb-8">
                    <PortableText value={attorney.bio} />
                  </div>
                )}

                {attorney.education && attorney.education.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-law-navy mb-3">
                      Eğitim
                    </h3>
                    <ul className="space-y-2">
                      {attorney.education.map((edu, index) => (
                        <li key={index} className="text-law-gray">
                          <span className="font-semibold">{edu.degree}</span> -{" "}
                          {edu.school} ({edu.year})
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2 text-law-gray">
                  {attorney.barNumber && (
                    <p>
                      <span className="font-semibold">Baro Sicil:</span>{" "}
                      {attorney.barNumber}
                    </p>
                  )}
                  {attorney.email && (
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      <a
                        href={`mailto:${attorney.email}`}
                        className="text-law-gold hover:underline"
                      >
                        {attorney.email}
                      </a>
                    </p>
                  )}
                  {attorney.phone && (
                    <p>
                      <span className="font-semibold">Telefon:</span>{" "}
                      <a
                        href={`tel:${attorney.phone}`}
                        className="text-law-gold hover:underline"
                      >
                        {attorney.phone}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
