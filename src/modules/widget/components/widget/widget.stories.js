import Widget from './Button.vue'
import './widget.scss'

export default {
  title: 'Widget',
  component: Widget,
  argTypes: {}
}

const Template = (args) => ({
  components: { Widget },
  setup() {
    return { args }
  },
  template: '<Widget v-bind="args" />'
})
