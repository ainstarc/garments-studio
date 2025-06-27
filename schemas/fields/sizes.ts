import SizesInput from '../components/SizesInput'

const sizes = {
  name: 'sizes',
  title: 'Available Sizes',
  type: 'array',
  of: [{ type: 'string' }],
  components: {
    input: SizesInput,
  },
}

export default sizes
