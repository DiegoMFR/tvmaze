import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowsList from '../showsList.vue'


describe('ShowsList', () => {
  it('renders the amount of shows', () => {
    const wrapper = mount(ShowsList, { props: { showsList: [{id:'1'}, {id:'2'}] } })
    expect(wrapper.findAll('li').length).toBe(2);
  })
  it('wraps the content when the prop is passed', () => {
    const wrapper = mount(ShowsList, { props: { wrap: true } })
    expect(wrapper.find('ul').classes()).toContain('wrap');
  })
  it('doesnt wrap the content when the prop is not passed', () => {
    const wrapper = mount(ShowsList)
    expect(wrapper.find('ul').classes()).not.toContain('wrap');
  })
})
