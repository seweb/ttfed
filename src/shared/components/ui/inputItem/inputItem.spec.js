import InputItem from './InputItem.vue'
import { shallowMount } from '@vue/test-utils'

describe('InputItem.vue', () => {
  const props = {
    class: 'input',
    type: 'text',
    placeholder: 'Search'
  }

  it('component renders correctly', () => {
    const wrapper = shallowMount(InputItem, {
      props
    })

    const input = wrapper.find('input')

    expect(input.attributes('class')).toBe('input')
    expect(input.attributes('type')).toBe('text')
    expect(input.attributes('placeholder')).toBe('Search')
  })
})
