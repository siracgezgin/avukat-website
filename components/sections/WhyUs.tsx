import { Gavel, ShieldCheck, Target } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: <Gavel className="w-12 h-12 text-law-gold" />,
      title: "15 Yıl Tecrübe",
      description: "Binlerce davada kazanılmış tecrübe ve uzmanlık"
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-law-gold" />,
      title: "Müvekkil Odaklı",
      description: "Her dosya bizim için özeldir, kişiselleştirilmiş hizmet"
    },
    {
      icon: <Target className="w-12 h-12 text-law-gold" />,
      title: "Hızlı Çözüm",
      description: "Etkili strateji ve hızlı sonuç odaklı yaklaşım"
    }
  ];

  return (
    <section className="bg-law-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-law-navy sm:text-4xl font-[family-name:var(--font-playfair)]">
            Neden Bizi Seçmelisiniz?
          </h2>
          <p className="mt-4 text-lg leading-8 text-law-gray">
            Hukuki süreçlerinizde güvenilir bir partner
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-law-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-law-gray">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
