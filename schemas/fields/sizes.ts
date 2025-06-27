export default {
  name: 'sizes',
  title: 'Available Sizes',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'],
    layout: 'tags',
  },
}
