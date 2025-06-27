import {defineType} from 'sanity'
import price from './fields/price'
import sizes from './fields/sizes'
import colors from './fields/colors'
import slug from './fields/slug'
import mainImage from './fields/mainImage'
import galleryImages from './fields/galleryImages'
import title from './fields/title'
import description from './fields/description'

const garment = defineType({
  name: 'garment',
  title: 'Garment',
  type: 'document',
  fields: [title, price, sizes, colors, mainImage, galleryImages, description, slug],
})

export default garment
