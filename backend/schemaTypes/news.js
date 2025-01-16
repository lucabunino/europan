import {BellIcon} from '@sanity/icons'
import {isUniqueOtherThanLanguage} from "./isUniqueOtherThanLanguage.js";

export default {
  name: 'news',
  icon: BellIcon,
  type: 'document',
  fieldsets: [
    {
      name: 'dates',
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
      name: 'from',
      fieldset: 'dates',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YY',
      },
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'to',
      fieldset: 'dates',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YY',
      },
      initialValue: () => new Date().toISOString().split('T')[0],
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
      from: 'from',
      to: 'to',
      language: 'language',
    },
    prepare({ title, language, from, to }) {
      return {
        title: title,
        subtitle: `[${language ? language.toUpperCase() : 'Undefined'}] ${formatDate(from, to)}`,
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