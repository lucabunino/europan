import {HomeIcon} from '@sanity/icons'

export default {
  name: 'featuredNews',
  type: 'document',
  icon: HomeIcon,
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
      name: 'featuredNews',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'news'}],
          options: {
            filter: ({ document }) => ({
              filter: 'language == $language',
              params: { language: document?.language },
            }),
          },
        }
      ],
      validation: (Rule) => Rule.required(),
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