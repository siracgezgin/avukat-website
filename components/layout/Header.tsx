"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-law-navy shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <Image
              src="/logo.png"
              alt="Av. Ömer Geçgelen"
              width={240}
              height={80}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menüyü aç</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-law-gold transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/iletisim"
            className="rounded-md bg-law-gold px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
          >
            Ücretsiz Danışma
          </Link>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-law-navy border-t border-white/10">
          <div className="space-y-1 px-6 pb-6 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="block rounded-md bg-law-gold px-3 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-amber-600 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ücretsiz Danışma
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
