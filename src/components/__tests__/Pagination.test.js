import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pagination from '../Pagination.vue'

it.skip('test emit', async () => {
  const wrapper = mount(Pagination)
  await wrapper.get('[data-test="first"]').trigger('click')

  console.log(wrapper.emitted())
  console.log(wrapper.emitted()['change-page'])

  expect(wrapper.emitted()).toHaveProperty('change-page')
  expect(wrapper.emitted()['change-page']).toHaveLength(1)
  expect(wrapper.emitted()['change-page'][0]).toEqual(['first'])
})
