import Tabs from './Employee.vue'
import './employee.scss'

export default {
  title: 'Employee',
  component: Employee,
  argTypes: {}
}

const Template = (args) => ({
  components: { Tabs },
  setup() {
    return { args }
  },
  template: '<Employee v-bind="args" />'
})
