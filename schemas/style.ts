import { defineType } from 'sanity'

export default defineType({
  name: 'style',
  title: 'Style',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Style Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
})
