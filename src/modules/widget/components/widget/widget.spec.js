import Widget from './Widget.vue'
import { shallowMount } from '@vue/test-utils'

describe('Widget.vue', () => {
  it('component renders', () => {
    const wrapper = shallowMount(Widget)
    expect(wrapper.find('.widget').exists()).toBe(true)
  })
})
