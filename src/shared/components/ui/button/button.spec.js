import Button from './Button.vue'
import { shallowMount } from '@vue/test-utils'

describe('Button.vue', () => {
  const props = {
    class: 'btn',
    type: 'button',
    disabled: false,
    text: 'button',
    value: 31
  }

  it('component renders correctly', () => {
    const wrapper = shallowMount(Button, {
      props
    })

    expect(wrapper.attributes('class')).toBe('btn')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.find('.btn-text').text()).toBe('button')
    expect(wrapper.find('.btn-value').text()).toBe('31')
  })
})
