import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Müvekkil Görüşü',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Görüş/Yorum',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().max(300),
      description: 'Müvekkilin kısa yorumu (max 300 karakter)',
    }),
    defineField({
      name: 'clientInitials',
      title: 'Müvekkil Baş Harfleri',
      type: 'string',
      validation: (rule) => rule.required().max(10),
      description: 'Örnek: A.K., M.Y., vb. (Gizlilik için sadece baş harfler)',
    }),
    defineField({
      name: 'caseType',
      title: 'Dava Türü',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Örnek: Ceza Hukuku Müvekkili, Ticaret Hukuku Müvekkili',
      options: {
        list: [
          { title: 'Ceza Hukuku Müvekkili', value: 'Ceza Hukuku Müvekkili' },
          { title: 'Ticaret Hukuku Müvekkili', value: 'Ticaret Hukuku Müvekkili' },
          { title: 'Aile Hukuku Müvekkili', value: 'Aile Hukuku Müvekkili' },
          { title: 'İş Hukuku Müvekkili', value: 'İş Hukuku Müvekkili' },
          { title: 'Gayrimenkul Hukuku Müvekkili', value: 'Gayrimenkul Hukuku Müvekkili' },
        ]
      }
    }),
    defineField({
      name: 'rating',
      title: 'Değerlendirme (Yıldız)',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5).integer(),
      description: '1-5 arası yıldız',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Öne Çıkan',
      type: 'boolean',
      description: 'Ana sayfada gösterilsin mi?',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      quote: 'quote',
      clientInitials: 'clientInitials',
      rating: 'rating',
    },
    prepare({quote, clientInitials, rating}) {
      const stars = '⭐'.repeat(rating || 0);
      return {
        title: `${clientInitials} - ${stars}`,
        subtitle: quote?.substring(0, 60) + '...',
      }
    },
  },
})
