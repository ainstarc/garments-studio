const price = {
  name: 'price',
  title: 'Price (INR)',
  type: 'number',
  validation: (Rule: any) => Rule.required().min(1).error('Price must be greater than ₹0'),
}

export default price
