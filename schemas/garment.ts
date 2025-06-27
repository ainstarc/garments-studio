import {defineType} from 'sanity'
import price from './fields/price'
import sizes from './fields/sizes'
import colors from './fields/colors'
import slug from './fields/slug'

const garment = defineType({
  name: 'garment',
  title: 'Garment',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    price,
    sizes,
    colors,
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    slug,
  ],
})

export default garment
