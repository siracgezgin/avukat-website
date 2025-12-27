"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-law-navy to-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl font-[family-name:var(--font-playfair)]"
          >
            Hukuki Haklarınızı Koruyoruz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Ceza davası mı? Ticari anlaşmazlık mı? Aile hukuku sorunu mu? 
            15 yıllık tecrübemizle yanınızdayız.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/iletisim"
              className="rounded-md bg-law-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-law-gold transition-all"
            >
              Ücretsiz Danışma
            </Link>
            <Link
              href="/hizmetler"
              className="rounded-md border-2 border-white px-8 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-law-navy transition-all"
            >
              Hizmetlerimiz
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
