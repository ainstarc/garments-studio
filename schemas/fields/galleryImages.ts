const galleryImages = {
  name: 'gallery',
  title: 'Gallery Images',
  type: 'array',
  of: [{type: 'image', options: {hotspot: true}}],
  validation: (Rule: any) => Rule.max(6).error('You can upload up to 6 images'),
}

export default galleryImages
