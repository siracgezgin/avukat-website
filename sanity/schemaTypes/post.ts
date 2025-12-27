import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Yazısı',
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
      name: 'excerpt',
      title: 'Özet',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Ana Görsel',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'İçerik',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Yayın Tarihi',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare({title, media, date}) {
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString('tr-TR') : 'Tarih yok',
      }
    },
  },
})
