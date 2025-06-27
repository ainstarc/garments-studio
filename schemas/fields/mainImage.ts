const mainImage = {
  name: 'mainImage',
  title: 'Main Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  validation: (Rule: any) => Rule.required().error('Main image is required'),
}

export default mainImage
