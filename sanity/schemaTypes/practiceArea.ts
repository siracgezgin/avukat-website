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
      name: 'iconName',
      title: 'İkon Adı',
      type: 'string',
      description: 'Lucide icon adı seçin',
      options: {
        list: [
          { title: 'Terazi (Scale)', value: 'Scale' },
          { title: 'Çekiç (Gavel)', value: 'Gavel' },
          { title: 'Dosya (FileText)', value: 'FileText' },
          { title: 'İnsanlar (Users)', value: 'Users' },
          { title: 'Bina (Building2)', value: 'Building2' },
          { title: 'Ev (Home)', value: 'Home' },
          { title: 'Çanta (Briefcase)', value: 'Briefcase' },
          { title: 'Kalkan (Shield)', value: 'Shield' },
          { title: 'Kitap (BookOpen)', value: 'BookOpen' },
        ]
      },
      validation: (Rule: any) => Rule.required(),
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
      iconName: 'iconName',
      order: 'order',
    },
    prepare({title, iconName, order}) {
      return {
        title: `${iconName} - ${title}`,
        subtitle: `Sıra: ${order}`,
      }
    },
  },
})
