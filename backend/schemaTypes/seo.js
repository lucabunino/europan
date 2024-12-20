export default {
  name: 'seo',
  title: 'SEO',
  type: 'document',
  fieldsets: [

  ],
  fields: [
    {
      name: 'SEOTitle',
      title: 'Titolo SEO',
      type: 'string',
    },
    {
      name: 'SEODescription',
      title: 'Descrizione SEO',
      type: 'text',
      rows: 5,
    },
    {
      name: 'SEOImage',
      title: 'Immagine SEO',
      type: 'image',
      options: {
        accept: 'image/jpg,image/jpeg,image/png,image/webp',
      },
    },
  ],
}