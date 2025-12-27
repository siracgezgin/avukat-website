import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('İçerik Yönetimi')
    .items([
      S.documentTypeListItem('attorney').title('Avukatlar'),
      S.documentTypeListItem('practiceArea').title('Çalışma Alanları'),
      S.documentTypeListItem('testimonial').title('Müvekkil Görüşleri'),
      S.divider(),
      S.documentTypeListItem('post').title('Blog Yazıları'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'attorney', 'practiceArea', 'testimonial'].includes(item.getId()!),
      ),
    ])
