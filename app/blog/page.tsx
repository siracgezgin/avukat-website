import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { POSTS_QUERY } from "@/lib/queries";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Avukat",
  description: "Hukuki konularda bilgilendirici yazılar ve güncel gelişmeler",
};

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage?: any;
  publishedAt: string;
}

async function getPosts(): Promise<Post[]> {
  return client.fetch(POSTS_QUERY);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-law-navy sm:text-5xl font-[family-name:var(--font-playfair)]">
            Blog
          </h1>
          <p className="mt-4 text-lg leading-8 text-law-gray">
            Hukuki konularda bilgilendirici yazılar ve güncel gelişmeler
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-law-gray text-lg">
              Henüz blog yazısı bulunmamaktadır.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-law-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {post.mainImage && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <time className="text-sm text-law-gray">
                      {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="text-xl font-semibold text-law-navy mt-2 mb-3 group-hover:text-law-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-law-gray line-clamp-3">{post.excerpt}</p>
                    <span className="text-law-gold font-semibold text-sm inline-flex items-center mt-4">
                      Devamını Oku
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
