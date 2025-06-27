import {defineType} from 'sanity'
import title from './fields/title'
import description from './fields/description'
import price from './fields/price'
import sizes from './fields/sizes'
import colors from './fields/colors'
import mainImage from './fields/mainImage'
import galleryImages from './fields/galleryImages'
import slug from './fields/slug'

export default defineType({
  name: 'garment',
  title: 'Garment',
  type: 'document',
  fields: [
    title,
    description,
    price,
    sizes,
    colors,
    mainImage,
    galleryImages,
    slug,
    {
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: ['Men', 'Women', 'Kids'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Garment Type',
      type: 'string',
      options: {
        list: ['Kurta', 'Shirt', 'Saree', 'Dress', 'Top', 'Pant', 'Skirt', 'T-Shirt'],
      },
    },
    {
      name: 'style',
      title: 'Handloom Style',
      type: 'reference',
      to: [{type: 'style'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
  ],
})
