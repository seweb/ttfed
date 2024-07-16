import Employee from './Employee.vue'
import { shallowMount } from '@vue/test-utils'

describe('Employee.vue', () => {
  it('renders employee data correctly', () => {
    const item = {
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
    }

    const wrapper = shallowMount(Employee, {
      props: { item }
    })

    expect(wrapper.find('h3').text()).toBe('Alice Johnson')
    expect(wrapper.find('h4').text()).toBe('UX designer')
    expect(wrapper.find('.leave-date span').text()).toBe('Till 30.08.2024')
  })
})
