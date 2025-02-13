import {ProjectsIcon} from '@sanity/icons'
import {isUniqueOtherThanLanguage} from "./_isUniqueOtherThanLanguage.js";

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
      name: 'competition',
      type: 'reference',
      to: [{type: 'competition'}],
      options: {
        filter: ({ document }) => ({
          filter: 'language == $language',
          params: { language: document?.language },
        }),
      },
    },
    {
      name: 'site',
      type: 'reference',
      to: [{type: 'site'}],
      options: {
        filter: ({ document }) => ({
          filter: 'language == $language',
          params: { language: document?.language },
        }),
      },
    },
    {
      name: 'result',
      type: 'string',
      options: {
        list: [
          { title: 'Winner', value: '1' },
          { title: 'Runner Up', value: '2' },
          { title: 'Special Mention', value: '3' },
        ],
      },
      initialValue: 'winner',
    },
    {
      name: 'europanEuropeUrl',
      type: 'url'
    },
    {
      name: 'team',
      type: 'array',
      of: [
        {
          name: 'person',
          type: 'reference',
          to: [{type: 'person'}],
          options: {
            filter: ({ document }) => ({
              filter: 'language == $language',
              params: { language: document?.language },
            }),
          },
        }
      ],
    },
    {
      name: 'thumbnail',
      type: 'image',
      options: {
        accept: 'image/jpg,image/jpeg,image/png,image/webp',
      },
    },
    {
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
          lists: [
            {title: 'Bullet', value: 'bullet'},
          ],
          styles: [
            {value: 'normal', title: 'Normal'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    description: 'Meant to be used when the link is from another domain',
                    type: 'boolean'
                  }
                ]
              },
            ]
          },
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