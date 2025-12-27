export function LegalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Av. Ömer Geçgelen",
    "description": "Bursa'da profesyonel hukuki danışmanlık ve avukatlık hizmetleri. Bursa Barosu Sicil 6293",
    "url": "https://avukat.com",
    "telephone": "+90-532-442-29-16",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sakarya Mah. Ulubatlıhasan Bulvarı Göksoy İş Merkezi No:90 Kat:3",
      "addressLocality": "Osmangazi",
      "addressRegion": "Bursa",
      "addressCountry": "TR"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-14:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AttorneySchema({ name, title, email }: { name: string; title: string; email?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": name,
    "jobTitle": title,
    "email": email,
    "worksFor": {
      "@type": "LegalService",
      "name": "Av. Ömer Geçgelen"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostSchema({
  title,
  description,
  publishedAt,
  image,
  url
}: {
  title: string;
  description: string;
  publishedAt: string;
  image?: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": publishedAt,
    "image": image,
    "url": url,
    "author": {
      "@type": "Person",
      "name": "Av. Ömer Geçgelen"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
