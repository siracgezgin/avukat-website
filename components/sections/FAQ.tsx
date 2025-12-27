import { client } from "@/lib/sanity";
import { FAQ_QUERY } from "@/lib/queries";
import { ChevronDown } from "lucide-react";
import FAQSchema from "@/components/SEO/FAQSchema";

interface FAQItem {
  _id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

async function getFAQs(): Promise<FAQItem[]> {
  return client.fetch(FAQ_QUERY);
}

export default async function FAQ() {
  const faqs = await getFAQs();

  if (!faqs || faqs.length === 0) {
    return null; // FAQ yoksa bölümü gösterme
  }

  return (
    <section className="bg-law-light py-24 sm:py-32">
      <FAQSchema faqs={faqs} />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-law-navy sm:text-4xl font-[family-name:var(--font-playfair)]">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-lg leading-8 text-law-gray">
            Merak ettiğiniz soruların cevapları
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq._id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-law-navy">
                <span className="text-lg">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-law-gold transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-law-gray">
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
