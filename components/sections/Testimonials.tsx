"use client";

import { client } from "@/lib/sanity";
import { TESTIMONIALS_QUERY } from "@/lib/queries";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";

interface Testimonial {
  _id: string;
  quote: string;
  clientInitials: string;
  caseType: string;
  rating: number;
  publishedAt: string;
}

async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(TESTIMONIALS_QUERY);
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  const testimonials = use(getTestimonials());

  if (!testimonials || testimonials.length === 0) {
    return null; // Testimonial yoksa bölümü gösterme
  }

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-law-navy sm:text-4xl font-[family-name:var(--font-playfair)]">
            Müvekkil Görüşleri
          </h2>
          <p className="mt-4 text-lg leading-8 text-law-gray">
            Hizmet verdiğimiz müvekkillerimizin görüşleri
          </p>
        </div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial._id}
              variants={itemVariants}
              className="bg-law-light rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Yıldızlar */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-law-gold text-law-gold"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Yorum */}
              <blockquote className="text-law-gray mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Müvekkil Bilgisi */}
              <div className="border-t border-law-gray/20 pt-4">
                <p className="font-semibold text-law-navy">
                  {testimonial.clientInitials}
                </p>
                <p className="text-sm text-law-gray mt-1">
                  {testimonial.caseType}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
