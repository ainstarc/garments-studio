import ColorSelector from '../components/ColorSelector'

const colors = {
  name: 'colors',
  title: 'Available Colors',
  type: 'array',
  of: [{ type: 'string' }],
  components: {
    input: ColorSelector,
  },
}

export default colors;
