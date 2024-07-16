import Header from './Header.vue'
import { mount } from '@vue/test-utils'

describe('Header', () => {
  it('component renders', () => {
    const wrapper = mount(Header)

    expect(wrapper.text()).toContain('Who’s out today')
  })
})
