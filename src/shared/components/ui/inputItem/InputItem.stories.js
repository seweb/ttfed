import InputItem from './InputItem.vue'
import './inputItem.scss'

export default {
  title: 'InputItem',
  component: InputItem,
  argTypes: {
    type: {
      control: { type: 'select', options: ['number', 'text'] }
    },
    placeholder: {
      control: { type: 'text' }
    },
    class: {
      control: { type: 'text' }
    }
  }
}

const Template = (args) => ({
  components: { InputItem },
  setup() {
    return { args }
  },
  template: '<InputItem v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  class: 'input-item',
  type: 'text',
  text: 'Search...'
}
