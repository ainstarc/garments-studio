export default {
  name: 'price',
  title: 'Price (₹)',
  type: 'number',
  validation: (Rule : any) => Rule.required().min(0),
}
