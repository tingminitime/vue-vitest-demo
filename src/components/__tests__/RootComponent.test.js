import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import SomeComponent from '../SomeComponent.vue'
import ParentComponent from '../ParentComponent.vue'

it.skip('trigger', async () => {
  // Arrange
  const wrapper = shallowMount(SomeComponent)
  // Act
  await wrapper.trigger('keydown', { key: 'a' })
  // Assertion
  expect(wrapper.get('span').text()).toBe('Key: a')
})
