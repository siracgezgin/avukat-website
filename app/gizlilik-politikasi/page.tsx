import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Gizlilik Politikası ve KVKK | Av. Ömer Geçgelen',
  description: 'KVKK aydınlatma metni ve gizlilik politikası',
  robots: 'noindex, nofollow',
};

export default function GizlilikPolitikasi() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-law-gold hover:text-law-navy transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Ana Sayfaya Dön
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-law-navy sm:text-5xl font-[family-name:var(--font-playfair)] mb-4">
          Gizlilik Politikası ve KVKK Aydınlatma Metni
        </h1>
        
        <p className="text-sm text-law-gray mb-12">
          Son Güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none">
          {/* 1. Veri Sorumlusu */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-law-navy mb-4 font-[family-name:var(--font-playfair)]">
              1. Veri Sorumlusu
            </h2>
            <div className="bg-law-light p-6 rounded-lg">
              <p className="mb-2"><strong>Veri Sorumlusu:</strong> Av. Ömer Geçgelen</p>
              <p className="mb-2"><strong>Adres:</strong> Sakarya Mah. Ulubatlıhasan Bulvarı, Göksoy İş Merkezi No:90 Kat:3, Osmangazi / Bursa</p>
              <p className="mb-2"><strong>Telefon:</strong> 0 (532) 442 29 16</p>
              <p className="mb-2"><strong>Baro Sicil No:</strong> Bursa Barosu Sicil 6293</p>
            </div>
          </section>

          {/* 2. Toplanan Kişisel Veriler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-law-navy mb-4 font-[family-name:var(--font-playfair)]">
              2. Toplanan Kişisel Veriler
            </h2>
            <p className="text-law-gray mb-4">
              Web sitemiz üzerindeki iletişim formumuz aracılığıyla aşağıdaki kişisel verileriniz toplanmaktadır:
            </p>
            <ul className="list-disc list-inside text-law-gray space-y-2 ml-4">
              <li>Ad Soyad</li>
              <li>E-posta adresi</li>
              <li>Telefon numarası</li>
              <li>Mesaj içeriği (hukuki danışma talebiniz)</li>
            </ul>
          </section>

          {/* 3. Kişisel Verilerin İşlenme Amacı */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-law-navy mb-4 font-[family-name:var(--font-playfair)]">
              3. Kişisel Verilerin İşlenme Amacı
            </h2>
            <p className="text-law-gray mb-4">
              Kişisel verileriniz yalnızca aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc list-inside text-law-gray space-y-2 ml-4">
              <li>Hukuki danışma talebinize cevap vermek</li>
              <li>Size ulaşarak iletişim kurmak</li>
              <li>Hizmet kalitesini artırmak ve geliştirmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>
            <p className="text-law-gray mt-4">
              Kişisel verileriniz, <strong>6698 sayılı Kişisel Verilerin Korunması Kanunu</strong> ve 
              <strong> Avukatlık Meslek Kuralları</strong> çerçevesinde işlenmektedir.
            </p>
          </section>

          {/* 4. Kişisel Verilerin Aktarımı */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-law-navy mb-4 font-[family-name:var(--font-playfair)]">
              4. Kişisel Verilerin Aktarımı
            </h2>
            <p className="text-law-gray mb-4">
              Kişisel verileriniz <strong>üçüncü kişilerle paylaşılmamaktadır</strong>.
            </p>
            <p className="text-law-gray mb-4">
              Ancak aşağıdaki durumlarda verileriniz aktarılabilir:
            </p>
            <ul className="list-disc list-inside text-law-gray space-y-2 ml-4">
              <li>Yasal zorunluluk halinde yetkili makamlara (mahkeme, savcılık, kolluk kuvvetleri)</li>
              <li>Açık rızanızın bulunması halinde</li>
              <li>Avukatlık mesleğinin icabı gereği (bilirkişi, mahkeme, baro vb.)</li>
            </ul>
          </section>

          {/* 5. Kişisel Verilerin Saklanma Süresi */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-law-navy mb-4 font-[family-name:var(--font-playfair)]">
              5. Kişisel Verilerin Saklanma Süresi
            </h2>
            <p className="text-law-gray mb-4">
              Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca saklanmaktadır:
            </p>
            <ul className="list-disc list-inside text-law-gray space-y-2 ml-4">
              <li>Danışma talebi tamamlandıktan sonra <strong>6 ay</strong> süreyle saklanır</li>
              <li>Vekalet ilişkisi kurulması halinde, <strong>Avukatlık Kanunu</strong> ve <strong>Türk Borçlar Kanunu</strong> uyarınca zamanaşımı süreleri boyunca saklanır</li>
              <li>Yasal zorunluluk gerektiren durumlarda ilgili mevzuatta belirtilen süreler boyunca saklanır</li>
            </ul>
            <p className="text-law-gray mt-4">
              Saklama süresinin dolmasını müteakip verileriniz güvenli bir şekilde silinir, yok edilir veya anonim hale getirilir.
            </p>
          </section>

          {/* 6. Kişisel Veri Sahibinin Hakları */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-law-navy mb-4 font-[family-name:var(--font-playfair)]">
              6. Kişisel Veri Sahibinin Hakları (KVKK Madde 11)
            </h2>
            <p className="text-law-gray mb-4">
              6698 sayılı KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside text-law-gray space-y-2 ml-4">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
              <li>KVKK'da öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme, silme ve yok edilme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme</li>
            </ul>
          </section>

          {/* 7. İletişim */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-law-navy mb-4 font-[family-name:var(--font-playfair)]">
              7. Başvuru ve İletişim
            </h2>
            <p className="text-law-gray mb-4">
              Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:
            </p>
            <div className="bg-law-light p-6 rounded-lg">
              <p className="mb-2"><strong>Yazılı Başvuru:</strong> Sakarya Mah. Ulubatlıhasan Bulvarı, Göksoy İş Merkezi No:90 Kat:3, Osmangazi / Bursa</p>
              <p className="mb-2"><strong>Telefon:</strong> 0 (532) 442 29 16</p>
            </div>
            <p className="text-law-gray mt-4 text-sm">
              Başvurularınız, talebinizin niteliğine göre en geç <strong>30 gün</strong> içinde ücretsiz olarak sonuçlandırılacaktır. 
              Ancak işlemin ayrıca bir maliyeti gerektirmesi halinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
            </p>
          </section>

          {/* Çerezler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-law-navy mb-4 font-[family-name:var(--font-playfair)]">
              8. Çerez (Cookie) Politikası
            </h2>
            <p className="text-law-gray mb-4">
              Web sitemiz, kullanıcı deneyimini geliştirmek amacıyla çerezler kullanmaktadır. 
              Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır.
            </p>
            <p className="text-law-gray mb-4">
              <strong>Kullanılan Çerez Türleri:</strong>
            </p>
            <ul className="list-disc list-inside text-law-gray space-y-2 ml-4">
              <li><strong>Zorunlu Çerezler:</strong> Web sitesinin çalışması için gerekli temel çerezler</li>
              <li><strong>Performans Çerezleri:</strong> Site performansını ölçmek için kullanılan anonim çerezler</li>
            </ul>
            <p className="text-law-gray mt-4">
              Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz, ancak bu durumda bazı site özellikleri düzgün çalışmayabilir.
            </p>
          </section>

          {/* Güvenlik */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-law-navy mb-4 font-[family-name:var(--font-playfair)]">
              9. Veri Güvenliği
            </h2>
            <p className="text-law-gray mb-4">
              Kişisel verilerinizin güvenliğini sağlamak için gerekli teknik ve idari tedbirler alınmaktadır:
            </p>
            <ul className="list-disc list-inside text-law-gray space-y-2 ml-4">
              <li>SSL sertifikası ile şifreli veri iletimi</li>
              <li>Güvenli sunucu altyapısı</li>
              <li>Düzenli güvenlik güncellemeleri</li>
              <li>Yetkisiz erişime karşı koruma</li>
            </ul>
          </section>

          {/* Son Hükümler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-law-navy mb-4 font-[family-name:var(--font-playfair)]">
              10. Değişiklikler
            </h2>
            <p className="text-law-gray">
              Bu gizlilik politikası, yasal düzenlemelerdeki değişiklikler veya hizmetlerimizdeki güncellemeler nedeniyle 
              zaman zaman güncellenebilir. Önemli değişiklikler olması halinde, web sitemiz üzerinden bilgilendirme yapılacaktır.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-law-gray/20">
          <Link
            href="/"
            className="inline-flex items-center text-law-gold hover:text-law-navy transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
