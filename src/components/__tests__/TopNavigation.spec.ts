import { describe, it, expect, beforeEach, vi } from 'vitest'
import { DOMWrapper, mount, VueWrapper } from '@vue/test-utils'
import TopNavigation from '../TopNavigation.vue'

const mockRoutePush = vi.fn()
vi.mock('vue-router', async () => {
  return {
    RouterView: {},
    useRouter: () => {
      return {
        push: mockRoutePush
      }
    }
  }
})

describe('TopNavigation', () => {
  it('Renders a router link to the home, with the H1 inside', async () => {
    const wrapper = mount(TopNavigation);

      const routerLink = await wrapper.find('routerlink');
        
      expect(routerLink.exists()).toBe(true);
      expect(routerLink.attributes().to).toBe('/');
      expect(routerLink.find('h1').html()).toContain(`TVMAZE`)
  })
})

describe('Search', () => {
let wrapper: VueWrapper, navButton: DOMWrapper<Element>;

  beforeEach(() => {
    wrapper = mount(TopNavigation);
    navButton = wrapper.find('.nav-button');

  })

  it('Renders a navButton with the Search text', async () => {
      expect(navButton.exists()).toBe(true);
      expect(navButton.html()).toContain('Search');
  })
  
  it('When the search is clicked it shows the input field', async () => {
      expect(wrapper.find('input').exists()).toBe(false);
      await navButton.trigger('click');
      expect(wrapper.find('input').exists()).toBe(true);
  })
  
  it('When the enter key is pressed the search is submitted', async () => {
      await navButton.trigger('click');
      const input = await wrapper.find('input');
      input.element.value = 'matrix';
      input.trigger('keypress.enter');
      expect(mockRoutePush).toHaveBeenCalledWith('/search/q=matrix')
  })
})
