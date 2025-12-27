import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-law-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-playfair)]">
              İletişim Bilgileri
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 Sakarya Mah. Ulubatlıhasan Bulvarı</p>
              <p className="ml-5">Göksoy İş Merkezi No:90 Kat:3</p>
              <p className="ml-5">Osmangazi / Bursa</p>
              <p>📞 Telefon: 0 (532) 442 29 16</p>
              <p>⚖️ Bursa Barosu Sicil: 6293</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-playfair)]">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-law-gold transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-300 hover:text-law-gold transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-law-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-law-gold transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-playfair)]">
              Çalışma Saatleri
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 10:00 - 14:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Av. Ömer Geçgelen. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
