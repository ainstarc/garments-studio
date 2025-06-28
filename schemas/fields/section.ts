export default {
  name: 'section',
  title: 'Section',
  type: 'string',
  options: {
    list: ['Men', 'Women', 'Kids'],
  },
  validation: (Rule : any) => Rule.required(),
}
