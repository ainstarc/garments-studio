import ColorSelector from '../components/ColorSelector'

const colors = {
  name: 'colors',
  title: 'Available Colors',
  type: 'array',
  of: [{type: 'string'}],
  components: {
    input: ColorSelector,
  },
  validation: (Rule: any) => Rule.required().min(1).error('Select at least one color'),
}

export default colors
