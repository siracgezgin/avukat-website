import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage?: any;
  body: any[];
  publishedAt: string;
}

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(POST_BY_SLUG_QUERY, { slug });
}

async function getAllPosts() {
  return client.fetch(POSTS_QUERY);
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Sayfa Bulunamadı",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-24 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-law-gold hover:text-amber-600 mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Tüm Yazılar
        </Link>

        <header className="mb-12">
          <time className="text-sm text-law-gray">
            {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-4xl font-bold tracking-tight text-law-navy sm:text-5xl mt-2 mb-4 font-[family-name:var(--font-playfair)]">
            {post.title}
          </h1>
          <p className="text-xl text-law-gray">{post.excerpt}</p>
        </header>

        {post.mainImage && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-12">
            <Image
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-headings:text-law-navy prose-a:text-law-gold prose-strong:text-law-navy">
          <PortableText value={post.body} />
        </div>

        <div className="mt-16 bg-law-light rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-law-navy mb-4">
            Hukuki danışmanlığa mı ihtiyacınız var?
          </h2>
          <p className="text-law-gray mb-6">
            Uzman ekibimiz size yardımcı olmak için hazır. Ücretsiz ön görüşme için hemen iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block rounded-md bg-law-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-amber-600 transition-all"
          >
            İletişime Geçin
          </Link>
        </div>
      </article>
    </div>
  );
}
