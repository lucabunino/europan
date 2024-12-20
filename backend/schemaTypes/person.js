import {UserIcon} from '@sanity/icons'

export default {
  name: 'person',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'surname',
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
        source: (doc) => `${doc.name}-${doc.surname}`,
        maxLength: 96,
      },
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
        subtitle: `[${language? language.toUpperCase() : 'Undefined'}] ${role}`,
        media: media
      };
    }
  }
};