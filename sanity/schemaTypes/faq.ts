import {defineField, defineType} from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'Sıkça Sorulan Soru',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Soru',
      type: 'string',
      validation: (rule) => rule.required().max(200),
      description: 'Sıkça sorulan soru (max 200 karakter)',
    }),
    defineField({
      name: 'answer',
      title: 'Cevap',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required().max(500),
      description: 'Sorunun cevabı (max 500 karakter)',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      description: 'Hangi hizmet alanıyla ilgili? (Opsiyonel)',
      options: {
        list: [
          { title: 'Genel', value: 'genel' },
          { title: 'Ceza Hukuku', value: 'ceza' },
          { title: 'Ticaret Hukuku', value: 'ticaret' },
          { title: 'Aile Hukuku', value: 'aile' },
          { title: 'İş Hukuku', value: 'is' },
          { title: 'Gayrimenkul Hukuku', value: 'gayrimenkul' },
        ]
      }
    }),
    defineField({
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      description: 'Sayfada gösterim sırası (küçükten büyüğe)',
      validation: (rule) => rule.required().min(0).integer(),
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Ana Sayfada Göster',
      type: 'boolean',
      description: 'Ana sayfada gösterilsin mi?',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      question: 'question',
      category: 'category',
      order: 'order',
    },
    prepare({question, category, order}) {
      return {
        title: question,
        subtitle: `${category || 'Genel'} - Sıra: ${order}`,
      }
    },
  },
})
