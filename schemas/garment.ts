import {defineType} from 'sanity'
import title from './fields/title'
import description from './fields/description'
import price from './fields/price'
import sizes from './fields/sizes'
import colors from './fields/colors'
import mainImage from './fields/mainImage'
import galleryImages from './fields/galleryImages'
import slug from './fields/slug'
import section from './fields/section'
import type from './fields/type'
import style from './fields/style'
import category from './fields/category'

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
    section,
    type,
    style,
    category,
  ],
})
