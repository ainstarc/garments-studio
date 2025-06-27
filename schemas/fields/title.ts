const title = {
  name: 'title',
  title: 'Title',
  type: 'string',
  validation: (Rule: any) => Rule.required().min(3).error('Title must be at least 3 characters'),
}

export default title
