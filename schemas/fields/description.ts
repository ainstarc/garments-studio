const description = {
  name: 'description',
  title: 'Description',
  type: 'text',
  validation: (Rule: any) =>
    Rule.required().min(10).error('Description must be at least 10 characters'),
}
export default description
