import {DocumentTextIcon} from '@sanity/icons';

export default {
  name: 'policy',
  type: 'document',
  icon: DocumentTextIcon,
  fieldsets: [

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
      name: 'kind',
      type: 'string',
      options: {
        list: [
          {title: 'Cookie policy', value: 'cookies'},
          {title: 'Privacy policy', value: 'privacy'},
        ],
        layout: 'radio'
      },
      initialValue: 'cookies',
      validation: (Rule) => Rule.required(),
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
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    validation: Rule => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel']
                    })
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
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare({ title, language }) {
      return {
        title: title,
        subtitle: `[${language ? language.toUpperCase() : 'Undefined'}]`,
      };
    },
  },
}