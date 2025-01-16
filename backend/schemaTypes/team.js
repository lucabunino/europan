import {UsersIcon} from '@sanity/icons'

export default {
  name: 'team',
  type: 'document',
  icon: UsersIcon,
  fieldsets: [

  ],
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'team',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'person'}],
          options: {
            filter: ({ document }) => ({
              filter: 'language == $language',
              params: { language: 'fr' },
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