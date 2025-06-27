const slug = {
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 96,
  },
  validation: (Rule: any) => Rule.required().error('Slug is required'),
}

export default slug
