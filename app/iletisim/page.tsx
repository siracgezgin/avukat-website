"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-law-navy sm:text-5xl font-[family-name:var(--font-playfair)]">
            İletişim
          </h1>
          <p className="mt-4 text-lg leading-8 text-law-gray">
            Hukuki danışmanlık için bizimle iletişime geçin
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-law-navy mb-6">İletişim Bilgileri</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <h3 className="font-semibold text-law-navy">Adres</h3>
                  <p className="text-law-gray">İstanbul, Türkiye</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold text-law-navy">Telefon</h3>
                  <a href="tel:+905XXXXXXXXX" className="text-law-gold hover:underline">
                    +90 (XXX) XXX XX XX
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">✉️</span>
                <div>
                  <h3 className="font-semibold text-law-navy">Email</h3>
                  <a href="mailto:info@avukat.com" className="text-law-gold hover:underline">
                    info@avukat.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">🕐</span>
                <div>
                  <h3 className="font-semibold text-law-navy">Çalışma Saatleri</h3>
                  <p className="text-law-gray">Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p className="text-law-gray">Cumartesi: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-law-navy mb-6">Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-law-navy mb-2">
                  İsim Soyisim *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-law-gold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-law-navy mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-law-gold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-law-navy mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-law-gold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-law-navy mb-2">
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-law-gold focus:border-transparent"
                />
              </div>

              {status === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Bir hata oluştu. Lütfen telefon ile arayın: +90 (XXX) XXX XX XX
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-md bg-law-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === "loading" ? "Gönderiliyor..." : "Gönder"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
