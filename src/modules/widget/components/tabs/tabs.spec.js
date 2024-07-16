import Tabs from './Tabs.vue'
import { shallowMount } from '@vue/test-utils'

describe('Tabs.vue', () => {
  const leaveAmount = {
    allCount: 10,
    onLeaveCount: 5,
    onHolidayCount: 3
  }

  it('component renders correctly', () => {
    const wrapper = shallowMount(Tabs, {
      props: { leaveAmount }
    })
    expect(wrapper.find('.tabs').exists()).toBe(true)
  })
})
