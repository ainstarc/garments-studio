export default {
  name: 'colors',
  title: 'Available Colors',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Beige', 'Pink', 'Orange', 'Grey'],
    layout: 'tags',
  },
}
