import {MarkerIcon} from '@sanity/icons'
import {isUniqueOtherThanLanguage} from "./_isUniqueOtherThanLanguage.js";

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
      name: 'thumbnail',
      type: 'image',
      options: {
        accept: 'image/jpg,image/jpeg,image/png,image/webp',
      },
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