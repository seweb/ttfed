import { mount } from '@vue/test-utils'
import EmployeeList from '@/modules/widget/components/employeeList/EmployeeList.vue' // путь к вашему компоненту

describe('EmployeeList.vue', () => {
  const employees = Array.from({ length: 50 }, (_, i) => ({
    employee: {
      firstName: 'Alice',
      lastName: 'Johnson',
      avatar: 'https://via.placeholder.com/600/d32776',
      position: 'UX designer',
      team: 'Design',
      department: 'Product',
      division: 'Technology',
      location: 'UK'
    },
    leaveRequestEndDate: '30.08.2024',
    leaveRequestType: 'holiday'
  }))

  it('renders component correctly', async () => {
    const wrapper = mount(EmployeeList, {
      props: { employees }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.exists()).toBe(true)
  })
})
