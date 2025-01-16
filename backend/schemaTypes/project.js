import {ProjectsIcon} from '@sanity/icons'
import {isUniqueOtherThanLanguage} from "./isUniqueOtherThanLanguage.js";

export default {
  name: 'project',
  icon: ProjectsIcon,
  type: 'document',
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
      name: 'site',
      type: 'reference',
      to: [{type: 'site'}]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueOtherThanLanguage,
      },
    },
    {
      name: 'team',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'person',
              type: 'reference',
              to: [{type: 'site'}],
              options: {
                filter: ({ document }) => ({
                  filter: 'language == $language',
                  params: { language: document?.language },
                }),
              },
            }
          ]
        }
      ],
    },
  ],
  orderings: [
    {
      title: 'Title (AZ)',
      name: 'titleAsc',
      by: [
        { field: 'title', direction: 'asc' },
      ],
    },
    {
      title: 'Title (ZA)',
      name: 'titleDesc',
      by: [
        { field: 'title', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      site: 'site.title',
      language: 'language',
    },
    prepare({ title, language, site }) {
      return {
        title: title,
        subtitle: `[${language ? language.toUpperCase() : 'Undefined'}] ${site}`,
      };
    },
  },
}