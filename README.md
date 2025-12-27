# Avukat Sitesi

Modern, profesyonel bir avukat web sitesi. Next.js 14, Sanity CMS, ve Tailwind CSS ile geliştirilmiştir.

## Özellikler

✅ **Modern Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Sanity CMS (Headless CMS)

✅ **Sayfalar:**
- Ana Sayfa (Hero, Hizmetler, Neden Biz, CTA)
- Hakkımızda (Avukat profilleri)
- Hizmetler (Dinamik çalışma alanları)
- Blog (Dinamik blog yazıları)
- İletişim (Form + Email entegrasyonu)

✅ **SEO Optimizasyonu:**
- JSON-LD Schema Markup
- Sitemap (Otomatik)
- Robots.txt
- Open Graph & Twitter Cards
- Metadata optimizasyonu

✅ **CMS Özellikleri:**
- Sanity Studio (`/studio`)
- Attorney (Avukat) yönetimi
- Practice Area (Çalışma Alanı) yönetimi
- Blog yazısı yönetimi

## Kurulum

```bash
# Bağımlılıkları yükle
npm install --legacy-peer-deps

# Development server'ı başlat
npm run dev

# Sanity Studio'ya eriş
http://localhost:3000/studio
```

## Environment Variables

`.env.local` dosyası oluşturun:

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Gmail SMTP (İletişim Formu)
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_app_password
CONTACT_EMAIL_TO=recipient@email.com
```

## Deployment

### Cloudflare Pages

1. GitHub'a push yapın
2. Cloudflare Pages'e gidin
3. Repository'yi bağlayın
4. Build ayarları:
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
5. Environment variables ekleyin

### Domain Bağlama

Cloudflare DNS ayarlarından:
- A Record: `@` → Cloudflare IP
- CNAME Record: `www` → `project-name.pages.dev`

## Proje Yapısı

```
avukat-site/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── blog/              # Blog sayfaları
│   ├── hakkimizda/        # Hakkımızda sayfası
│   ├── hizmetler/         # Hizmetler sayfaları
│   ├── iletisim/          # İletişim sayfası
│   └── studio/            # Sanity Studio
├── components/            # React componentleri
│   ├── layout/           # Header, Footer
│   └── sections/         # Hero, ServicesGrid, vb.
├── lib/                   # Utility fonksiyonlar
│   ├── sanity.ts         # Sanity client
│   └── queries.ts        # GROQ queries
├── sanity/               # Sanity konfigürasyonu
│   └── schemaTypes/      # Content schemas
└── public/               # Statik dosyalar
```

## Sanity Studio Kullanımı

1. `/studio` adresine gidin
2. Google ile giriş yapın
3. İçerik ekleyin/düzenleyin
4. **Publish** butonuna basın (önemli!)

## Geliştirme Notları

- React 18 kullanılıyor (Sanity 5 uyumluluğu için)
- `--legacy-peer-deps` ile paket yükleme gerekli
- Tailwind CSS 3.4.0 kullanılıyor
- Next.js 14.2.18 (güvenlik güncellemesi bekliyor)

## Lisans

Özel proje - Tüm hakları saklıdır.
