const sizes = {
  name: 'sizes',
  title: 'Available Sizes',
  type: 'array',
  of: [{type: 'string'}],
  options: {
    list: [
      {title: 'XS (38)', value: 'XS (38)'},
      {title: 'S (39)', value: 'S (39)'},
      {title: 'M (40)', value: 'M (40)'},
      {title: 'L (42)', value: 'L (42)'},
      {title: 'XL (44)', value: 'XL (44)'},
      {title: 'XXL (46)', value: 'XXL (46)'},
    ],
    layout: 'grid',
  },
  validation: (Rule: any) => Rule.required().min(1).error('Select at least one size'),
}

export default sizes
