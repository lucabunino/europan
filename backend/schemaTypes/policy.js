import {DocumentTextIcon} from '@sanity/icons';

export default {
  name: 'policy',
  type: 'document',
  icon: DocumentTextIcon,
  fieldsets: [

  ],
  fields: [
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
}