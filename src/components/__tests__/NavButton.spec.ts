import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavButton from '../NavButton.vue'

describe('NavButton', () => {
    it('Wraps the slotted content in a button tag', () => {
        const wrapper = mount(NavButton, {
            slots: {
              default: 'Test Content'
            }});
            expect(wrapper.html()).toMatchInlineSnapshot(`"<button data-v-7e01b22f="" class="nav-button">Test Content</button>"`);           
      })
})
