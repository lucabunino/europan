import {ProjectsIcon} from '@sanity/icons'

export default {
  name: 'project',
  icon: ProjectsIcon,
  type: 'document',
  fields: [
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
      subtitle: 'city',
    },
  },
}