import {MarkerIcon} from '@sanity/icons'
import {isUniqueOtherThanLanguage} from "./isUniqueOtherThanLanguage.js";

export default {
  name: 'site',
  icon: MarkerIcon,
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
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare({ title, language, site }) {
      return {
        title: title,
        subtitle: `[${language ? language.toUpperCase() : 'Undefined'}]`,
      };
    },
  },
}