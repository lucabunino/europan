import {UserIcon} from '@sanity/icons'
import countries from './isoCountries.json'; 

export default {
  name: 'person',
  type: 'document',
  icon: UserIcon,
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
      name: 'name',
      type: 'string',
    },
    {
      name: 'surname',
      type: 'string',
    },
    {
      name: 'role',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'jobs',
      type: 'array',
      of: [
        {
          type: 'string',
        }
      ]
    },
    {
      name: 'city',
      type: 'string',
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
      options: {
        list: countries.map(({ name, code }) => ({
          title: name,
          value: code,
        })),
      },
      initialValue: 'CH',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      type: 'image',
      options: {
        accept: 'image/jpg,image/jpeg,image/png,image/webp',
      },
    },
  ],
  orderings: [
    {
      title: 'Surname',
      name: 'surnameAsc',
      by: [
        { field: 'surname', direction: 'asc' },
      ],
    },
    {
      title: 'Name',
      name: 'nameAsc',
      by: [
        { field: 'name', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      name: 'name',
      surname: 'surname',
      role: 'role',
      media: 'thumbnail',
      language: 'language',
    },
    prepare(selection) {
      const {name, surname, role, language, media} = selection;
      return {
        title: `${name} ${surname}`,
        subtitle: `[${language? language.toUpperCase() : 'Undefined'}]${role? ` ${role}` : ''}`,
        media: media
      };
    }
  }
};