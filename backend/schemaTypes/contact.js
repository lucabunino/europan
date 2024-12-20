import {MarkerIcon} from '@sanity/icons'

export default {
  name: 'contact',
  type: 'document',
  fieldsets: [

  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'adresses',
      type: 'array',
      of: [
        {
          name: 'adress',
          type: 'object',
          icon: MarkerIcon,
          fields: [
            {
              name: 'adressName',
              type: 'string',
            },
            {
              name: 'adressLine1',
              type: 'string',
            },
            {
              name: 'adressLine2',
              type: 'string',
            },
            {
              name: 'adressCountry',
              type: 'string',
            },
            {
              name: 'adressPhone',
              type: 'string',
            },
            {
              name: 'adressEmail',
              type: 'string'
            },
            {
              name: 'adressWebsite',
              type: 'string'
            },
            {
              name: 'adressWebsiteUrl',
              type: 'url'
            },
          ],
        }
      ]
    },
    {
      name: 'newsletterMessage',
      type: 'text',
      rows: 2,
    },
    // {
    //   name: 'socials',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'socialUrl',
    //       type: 'url'
    //     },
    //   ]
    // },
  ]
}