export default {
  name: 'style',
  title: 'Handloom Style',
  type: 'reference',
  to: [{type: 'style'}],
  validation: (Rule: any) => Rule.required(),
}
