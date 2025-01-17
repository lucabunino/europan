import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {myStructure} from './structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['homepage', 'network'])

export default defineConfig({
  name: 'default',
  title: 'Europan',

  projectId: '7825lrn6',
  dataset: 'production',

  plugins: [
    documentInternationalization({
      supportedLanguages: [
        {id: 'fr', title: 'French'},
        {id: 'de', title: 'German'},
      ],
      schemaTypes: ['news', 'person', 'whatIsEuropan', 'partner', 'contact', 'featuredNews', 'competition', 'site', 'project', 'team'],
    }),
    structureTool({
      structure: myStructure,
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})