import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChildComponent from '../ChildComponent.vue'

it.skip('test inject', async () => {
  const wrapper = mount(ChildComponent, {
    global: {
      provide: {
        count: 1
      }
    }
  })

  expect(wrapper.get('[data-test="target"]').text()).toBe('1')
})
