import {TokenIcon} from '@sanity/icons'

export default {
  name: 'partner',
  type: 'document',
  icon: TokenIcon,
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
      name: 'title',
      type: 'string',
    },
    {
      name: 'logo',
      type: 'file',
      options: {
        accept: '.svg, .png',
      },
    },
    {
      name: 'url',
      type: 'url'
    },
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare({ title, language, from, to }) {
      return {
        title: title,
        subtitle: `[${language ? language.toUpperCase() : 'Undefined'}]`,
      };
    },
  },
}