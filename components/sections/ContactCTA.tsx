import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-law-navy">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-[family-name:var(--font-playfair)]">
            Hukuki Danışmanlığa İhtiyacınız mı Var?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Size en uygun çözümü bulmak için ücretsiz ön görüşme yapıyoruz. 
            Hemen iletişime geçin, size yardımcı olalım.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/iletisim"
              className="rounded-md bg-law-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-law-gold transition-all"
            >
              Hemen İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
