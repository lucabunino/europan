import {InfoOutlineIcon} from '@sanity/icons'

export default {
  name: 'about',
  type: 'document',
  icon: InfoOutlineIcon,
  fieldsets: [

  ],
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'toDo',
      type: 'text',
      rows: 2,
    },
  ]
}