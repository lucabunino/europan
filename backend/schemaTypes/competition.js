import {DiamondIcon} from '@sanity/icons'

export default {
  name: 'competition',
  icon: DiamondIcon,
  type: 'document',
  groups: [
    { name: 'basics'},
    { name: 'topics'},
    { name: 'sites'},
    { name: 'jury'},
    { name: 'results'},
  ],
  fields: [
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
      },
      group: 'basics',
    },
    {
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YY',
      },
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
      group: 'basics',
    },
    {
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Testo corrente', value: 'normal'},
            {title: 'Titolo', value: 'h3'},
            {title: 'Titoletto', value: 'h4'},
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
      group: 'topics',
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
        { field: 'date', direction: 'desc' },
      ],
    },
    {
      title: 'Date (Oldest first)',
      name: 'dateAsc',
      by: [
        { field: 'date', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare({ title, date }) {
      const formattedDate = date
        ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })
            .format(new Date(date))
            .replace(/\//g, '.') // Replace slashes with dots
        : 'No date';
      return {
        title: title,
        subtitle: formattedDate,
      };
    },
  },
}