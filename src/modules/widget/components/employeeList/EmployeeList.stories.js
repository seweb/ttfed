import Tabs from './Tabs.vue'
import './tabs.scss'

export default {
  title: 'Tabs',
  component: Button,
  argTypes: {}
}

const Template = (args) => ({
  components: { Tabs },
  setup() {
    return { args }
  },
  template: '<Tabs v-bind="args" />'
})
