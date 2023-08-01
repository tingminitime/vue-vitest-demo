import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { defineComponent, inject } from 'vue'
import ParentComponent from '../ParentComponent.vue'

const TestChildComponent = defineComponent({
  template: '<p data-test="target">{{ value }}</p>',
  setup() {
    const value = inject('count')
    return { value }
  }
})

it.skip('test provide', () => {
  const wrapper = mount(ParentComponent, {
    global: {
      stubs: {
        ChildComponent: TestChildComponent
      }
    }
  })

  console.log(wrapper.html())

  expect(wrapper.get('[data-test="target"]').text()).toBe('1')
})

it.skip('test renderStubDefaultSlot', () => {
  const wrapper = shallowMount(ParentComponent, {
    slots: {
      default: `<p>force render this !</p>`
    }
    // global: {
    //   renderStubDefaultSlot: true
    // }
  })

  expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div>
      <p>force render this !</p>
      <child-component-stub></child-component-stub>
    </div>"
  `)
})

it.skip('should be render...', () => {
  const wrapper = mount(ParentComponent, {
    global: {
      stubs: { ChildComponent: true }
    }
  })

  expect(wrapper.html()).toEqual(
    '<div><child-component-stub></child-component-stub></div>'
  )
})

it.skip('should be render...', () => {
  const wrapper = mount(ParentComponent, {
    global: {
      stubs: {
        ChildComponent: {
          name: 'StubComponent',
          template: '<p>custom content</p>'
        }
      }
    }
  })

  expect(wrapper.html()).toEqual('<div><p>custom content</p></div>')
})
