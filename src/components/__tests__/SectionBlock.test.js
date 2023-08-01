import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import SectionBlock from '../SectionBlock.vue'

it.skip('should ...', () => {
  // 透過 shallowMount 將底下的元件渲染成 <...-stub>
  const wrapper = shallowMount(SectionBlock)
  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<section>
      <section-block-title-stub title=\\"Title\\"></section-block-title-stub>
    </section>"
  `)
})
