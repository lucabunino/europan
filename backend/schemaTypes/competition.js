import {EmptyIcon} from '@sanity/icons'
import {MarkerIcon} from '@sanity/icons'
import {isUniqueOtherThanLanguage} from "./_isUniqueOtherThanLanguage.js";

export default {
  name: 'competition',
  icon: EmptyIcon,
  type: 'document',
  groups: [
    { name: 'basics'},
    { name: 'topic'},
    { name: 'process'},
    { name: 'jury'},
    { name: 'sites'},
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
      group: 'basics',
    },
    {
      name: 'edition',
      type: 'number',
      validation: (Rule) => Rule.required(),
      group: 'basics',
    },
    {
      name: 'title',
      type: 'string',
      group: 'basics',
    },
    {
      name: 'subtitle',
      type: 'string',
      group: 'basics',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (doc) => `E${doc.edition}-${doc.title}`,
        maxLength: 96,
        isUnique: isUniqueOtherThanLanguage,
      },
      group: 'basics',
    },
    // {
    //   name: 'date',
    //   type: 'date',
    //   options: {
    //     dateFormat: 'DD.MM.YY',
    //   },
    //   initialValue: () => new Date().toISOString().split('T')[0],
    //   validation: (Rule) => Rule.required(),
    //   group: 'basics',
    // },
    {
      name: 'topicBody',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {value: 'normal', title: 'Normal'},
            {value: 'h3', title: 'H3'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
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
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
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
      group: 'topic',
    },
    {
      name: 'processBody',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {value: 'normal', title: 'Normal'},
            {value: 'h3', title: 'H3'},
          ],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
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
      group: 'process',
    },
    {
      name: 'featuredSites',
      type: 'array',
      of: [
        {
          name: 'featuredSite',
          type: 'object',
          icon: MarkerIcon,
          fields: [
            {
              name: 'site',
              type: 'reference',
              to: [{ type: 'site' }],
              options: {
                filter: ({ document }) => ({
                  filter: 'language == $language',
                  params: { language: document?.language },
                }),
              },
            },
            {
              name: 'siteUrl',
              type: 'url',
            },
          ],
          preview: {
            select: {
              title: 'site.title',
            },
          },
        },
      ],
      group: 'sites',
    },
    {
      name: 'showResults',
      type: 'boolean',
      group: 'sites',
    },
    {
      name: 'juryPresident',
      type: 'reference',
      to: [{type: 'person'}],
      options: {
        filter: ({ document }) => ({
          filter: 'language == $language',
          params: { language: document?.language },
        }),
      },
      group: 'jury',
    },
    {
      name: 'jury',
      type: 'array',
      of: [
        {
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
      group: 'jury',
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
    {
      title: 'Edition (Newest first)',
      name: 'editionDesc',
      by: [
        { field: 'edition', direction: 'desc' },
      ],
    },
    {
      title: 'Edition (Oldest first)',
      name: 'editionAsc',
      by: [
        { field: 'edition', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      edition: 'edition',
      language: 'language',
    },
    prepare({ title, subtitle, edition, language }) {
      return {
        title: `E${edition} ${title}`,
        subtitle: `[${language ? language.toUpperCase() : 'Undefined'}] ${subtitle? subtitle : ''}`,
      };
    },
  },
}