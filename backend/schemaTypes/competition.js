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

function formatDate(date1, date2) {
  if (!date1) return '';

  const parseDate = (date) => new Date(date);
  const formatDatePart = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return { day, month, year };
  };

  const d1 = parseDate(date1);
  const d2 = date2 ? parseDate(date2) : null;

  const { day: day1, month: month1, year: year1 } = formatDatePart(d1);
  if (!d2) {
    return `${day1}.${month1}.${year1}`;
  }

  const { day: day2, month: month2, year: year2 } = formatDatePart(d2);
  if (year1 === year2 && month1 === month2) {
    return `${day1}-${day2}.${month1}.${year1}`;
  }
  return `${day1}.${month1}.${year1}-${day2}.${month2}.${year2}`;
}