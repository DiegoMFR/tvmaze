import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowCard from '../ShowCard.vue'

describe('ShowCard', () => {
  it('Wraps an image in a router link, with the proper route', async () => {
    const wrapper = mount(ShowCard, {
        props: {
            show: {id: '1'},
        }
      });

      const routerLink = await wrapper.find('routerlink');
        
      expect(routerLink.exists()).toBe(true);
      expect(routerLink.attributes().to).toBe('/shows/1');
      expect(routerLink.find('img').exists()).toBe(true);
  })
})
