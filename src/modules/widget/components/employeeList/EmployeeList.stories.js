import EmployeeList from './EmployeeList.vue'
import './employeeList.scss'

export default {
  title: 'EmployeeList',
  component: EmployeeList,
  argTypes: {}
}

const Template = (args) => ({
  components: { Tabs },
  setup() {
    return { args }
  },
  template: '<EmployeeList v-bind="args" />'
})
