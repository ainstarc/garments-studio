import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {schemaTypes} from './schemas/index'
import { visionTool } from '@sanity/vision'


export default defineConfig({
  name: 'default',
  title: 'Garments Studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!, 
  dataset: 'production',

  plugins: [structureTool(),
    visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
})
