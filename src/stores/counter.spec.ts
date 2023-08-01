import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useCounterStore } from './counter'
import SomeComponent from '@/components/SomeComponent.vue'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should increment', () => {
    const counterStore = useCounterStore()
    counterStore.increment()
    expect(counterStore.count).toBe(1)
  })

  it('should decrement', () => {
    const counterStore = useCounterStore()
    counterStore.decrement()
    expect(counterStore.count).toBe(-1)
  })

  it('should return double count', () => {
    const counterStore = useCounterStore()
    expect(counterStore.doubleCount).toBe(0)
    counterStore.increment() // counter = 1
    expect(counterStore.doubleCount).toBe(2)
    counterStore.increment() // counter = 2
    counterStore.increment() // counter = 3
    expect(counterStore.doubleCount).toBe(6)
  })
})

describe('Counter Store with Component', () => {
  it('should increment', async () => {
    const wrapper = mount(SomeComponent, {
      global: {
        plugins: [
          createTestingPinia({
            // initialState: {
            //   counter: {
            //     count: 10
            //   }
            // },
            stubActions: false,
            createSpy: () => vi.fn()
          })
        ]
      }
    })

    const counterStore = useCounterStore()

    await wrapper
      .find('[data-test="button_increment"]')
      .trigger('click')

    expect(counterStore.increment).toHaveBeenCalledTimes(1)
    // const countText = await wrapper
    //   .find('[data-test="content_count"]')
    //   .text()
    // expect(countText).toBe('1')
  })
})
