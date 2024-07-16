import Header from './Header.vue'
import './header.scss'

export default {
  title: 'Header',
  component: Header,
  argTypes: {}
}

const Template = (args) => ({
  components: { Header },
  setup() {
    return { args }
  },
  template: '<Header v-bind="args" />'
})
