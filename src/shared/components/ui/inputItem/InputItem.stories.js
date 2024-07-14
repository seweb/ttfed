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

// class: String,
//   placeholder: String,
//   type: {
//     validator: (value) => ['text', 'number'].includes(value),
//     default: 'text'
//   },
//   modelValue: {
//     type: [String, Number]
//   }

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

// export const Disabled = Template.bind({});
// Disabled.args = {
//   class: 'btn',
//   type: 'button',
//   disabled: true,
//   text: 'Disabled Button'
// };
