import {defineField, defineType} from 'sanity'

export const attorneyType = defineType({
  name: 'attorney',
  title: 'Avukat',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'İsim',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Unvan',
      type: 'string',
      description: 'Örn: Kurucu Avukat, Kıdemli Ortak',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Fotoğraf',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biyografi',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'education',
      title: 'Eğitim',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'degree', type: 'string', title: 'Derece'},
            {name: 'school', type: 'string', title: 'Okul'},
            {name: 'year', type: 'string', title: 'Yıl'},
          ],
        },
      ],
    }),
    defineField({
      name: 'barNumber',
      title: 'Baro Sicil No',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    }),
  ],
})
