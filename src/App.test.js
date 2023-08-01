import { vi, describe, it, beforeEach, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

describe.skip('App.vue router test', () => {
  beforeEach(async () => {
    router.push('/')
    await router.isReady()
  })

  it('should go to edit page when click button if user is login', async () => {
    // Arrange
    const wrapper = mount(App, {
      props: {
        isUserLogin: true
      },
      global: {
        plugins: [router]
      }
    })

    // Act
    const spyPush = vi.spyOn(router, 'push') // router.push
    await wrapper
      .get('[data-test="to-edit-page-button"]')
      .trigger('click')

    // Assert
    expect(spyPush).toHaveBeenCalledWith('/article/edit')
  })

  it('should go to login page when click button if user is not login', async () => {
    // Arrange
    const wrapper = mount(App, {
      props: {
        isUserLogin: false
      },
      global: {
        plugins: [router]
      }
    })

    // Act
    const spyPush = vi.spyOn(router, 'push') // router.push
    await wrapper
      .get('[data-test="to-edit-page-button"]')
      .trigger('click')

    // Assert
    expect(spyPush).toHaveBeenCalledWith('/login')
  })
})
