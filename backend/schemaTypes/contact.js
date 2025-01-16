import {MarkerIcon, EnvelopeIcon} from '@sanity/icons'

export default {
  name: 'contact',
  type: 'document',
  icon: EnvelopeIcon,
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
      name: 'description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'adresses',
      type: 'array',
      of: [
        {
          name: 'adress',
          type: 'object',
          icon: MarkerIcon,
          fields: [
            {
              name: 'adressName',
              type: 'string',
            },
            {
              name: 'adressLine1',
              type: 'string',
            },
            {
              name: 'adressLine2',
              type: 'string',
            },
            {
              name: 'adressCountry',
              type: 'string',
            },
            {
              name: 'adressPhone',
              type: 'string',
            },
            {
              name: 'adressEmail',
              type: 'string'
            },
            {
              name: 'adressWebsite',
              type: 'string'
            },
            {
              name: 'adressWebsiteUrl',
              type: 'url'
            },
          ],
        }
      ]
    },
    {
      name: 'newsletterMessage',
      type: 'text',
      rows: 2,
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