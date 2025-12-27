export function LegalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Avukat",
    "description": "Profesyonel hukuki danışmanlık ve avukatlık hizmetleri",
    "url": "https://avukat.com",
    "telephone": "+90-XXX-XXX-XX-XX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
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
      "name": "Avukat"
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
      "@type": "Organization",
      "name": "Avukat"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
