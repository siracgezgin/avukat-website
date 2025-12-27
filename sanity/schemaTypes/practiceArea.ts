import {defineField, defineType} from 'sanity'

export const practiceAreaType = defineType({
  name: 'practiceArea',
  title: 'Çalışma Alanı',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'İkon (Emoji)',
      type: 'string',
      description: 'Örn: ⚖️, 🏢, 👨‍👩‍👧‍👦',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kısa Açıklama',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'content',
      title: 'Detaylı İçerik',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'order',
      title: 'Sıralama',
      type: 'number',
      description: 'Sayfada gösterim sırası (küçükten büyüğe)',
      validation: (rule) => rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon',
      order: 'order',
    },
    prepare({title, icon, order}) {
      return {
        title: `${icon} ${title}`,
        subtitle: `Sıra: ${order}`,
      }
    },
  },
})
