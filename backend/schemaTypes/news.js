import {BellIcon} from '@sanity/icons'
import {isUniqueOtherThanLanguage} from "./isUniqueOtherThanLanguage.js";
import {formatDate} from "./formatDate.js";

export default {
  name: 'news',
  icon: BellIcon,
  type: 'document',
  fieldsets: [
    {
      name: 'duration',
      options: { columns: 2 },
    },
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
      name: 'subtitle',
      type: 'string',
    },
    {
      name: 'place',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueOtherThanLanguage,
      },
    },
    {
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YY',
      },
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'from',
      fieldset: 'duration',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YY',
      },
    },
    {
      name: 'to',
      fieldset: 'duration',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YY',
      },
    },
    {
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            accept: 'image/jpg,image/jpeg,image/png,image/webp',
          },
        }
      ],
    },
    {
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {value: 'normal', title: 'Normal'},
            {value: 'h3', title: 'H3'},
            {value: 'h4', title: 'H4'},
          ],
          marks: {
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
    {
      name: 'attachments',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'attachmentTitle',
              type: 'string',
            },
            {
              name: 'attachmentFile',
              type: 'file',
            },
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
    {
      title: 'Date (Newest first)',
      name: 'dateDesc',
      by: [
        { field: 'from', direction: 'desc' },
      ],
    },
    {
      title: 'Date (Oldest first)',
      name: 'dateAsc',
      by: [
        { field: 'from', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      language: 'language',
    },
    prepare({ title, language, date }) {
      return {
        title: title,
        subtitle: `[${language ? language.toUpperCase() : 'Undefined'}] ${formatDate(date)}`,
      };
    },
  },
}