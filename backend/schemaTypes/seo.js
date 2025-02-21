import {EarthGlobeIcon} from '@sanity/icons'

export default {
  name: 'seo',
  title: 'SEO',
  icon: EarthGlobeIcon,
  type: 'document',
  fieldsets: [

  ],
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      options: {
        list: [
          { title: 'German', value: 'de' },
          { title: 'French', value: 'fr' },
        ],
      },
    },
    {
      name: 'SEOTitle',
      type: 'string',
    },
    {
      name: 'SEODescription',
      type: 'text',
      rows: 5,
    },
    {
      name: 'SEOImage',
      type: 'image',
      options: {
        accept: 'image/jpg,image/jpeg,image/png,image/webp',
      },
    },
  ],
  preview: {
    select: {
      title: 'SEOTitle',
      language: 'language',
    },
    prepare({ title, language }) {
      return {
        title: title,
        subtitle: `[${language ? language.toUpperCase() : 'Undefined'}]`,
      };
    },
  },
}