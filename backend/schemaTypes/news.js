import {BellIcon} from '@sanity/icons'

export default {
  name: 'news',
  icon: BellIcon,
  type: 'document',
  fieldsets: [
    {
      name: 'test',
      title: 'Test',
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      type: 'string',
    },
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
      name: 'homepageHighlight',
      type: 'boolean',
    },
    // {
    //   name: 'site',
    //   type: 'reference',
    //   to: [{type: 'site'}],
    // },
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
            {value: 'normal'},
            {value: 'h3'},
            {value: 'h4'},
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
      language: 'language',
    },
    prepare({ title, language, date }) {
      const formattedDate = date
        ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })
            .format(new Date(date))
            .replace(/\//g, '.')
        : 'No date';
      return {
        title: title,
        subtitle: `[${language? language.toUpperCase() : 'Undefined'}] ${formattedDate}`,
      };
    },
  },
}

export async function isUniqueOtherThanLanguage(slug, context) {
  const {document, getClient} = context
  if (!document?.language) {
    return true
  }
  const client = getClient({apiVersion: '2023-04-24'})
  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    language: document.language,
    slug,
  }
  const query = `!defined(*[
    !(_id in [$draft, $published]) &&
    slug.current == $slug &&
    language == $language
  ][0]._id)`
  const result = await client.fetch(query, params)
  return result
}