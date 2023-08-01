import { describe, it, expect, beforeEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import Practice03 from '../Practice03.vue'

describe.skip('執行開戶', () => {
  // Happy Path
  it(`輸入帳戶名稱，開戶完成，狀態欄應顯示 「開戶完成」`, async () => {
    const wrapper = mount(Practice03)

    // 開戶
    await wrapper.get('[data-test="input_account"]').setValue('胖橘貓')
    await wrapper
      .get('[data-test="button_open-account"]')
      .trigger('click')

    expect(wrapper.get('[data-test="status"]').text()).toBe('開戶完成')
  })

  // Sad Path
  it(`輸入帳戶名稱，若有開過帳戶，狀態欄應顯示 「此帳戶已存在」`, async () => {
    const wrapper = mount(Practice03)

    // 開戶
    await wrapper.get('[data-test="input_account"]').setValue('胖橘貓')
    await wrapper
      .get('[data-test="button_open-account"]')
      .trigger('click')

    // 開同樣名字的帳戶
    await wrapper.get('[data-test="input_account"]').setValue('胖橘貓')
    await wrapper
      .get('[data-test="button_open-account"]')
      .trigger('click')

    expect(wrapper.get('[data-test="status"]').text()).toBe(
      '此帳戶已存在'
    )
  })
})

describe.skip('執行存款', () => {
  // Happy Path
  it(`輸入帳戶名稱與金額，交易完成後，狀態欄應顯示 「存款完成，帳戶目前餘額為 {帳戶乾乾數量}」`, async () => {
    const wrapper = mount(Practice03)

    // 開戶
    await wrapper.get('[data-test="input_account"]').setValue('胖橘貓')
    await wrapper
      .get('[data-test="button_open-account"]')
      .trigger('click')

    // 存款
    await wrapper.get('[data-test="input_deposit"]').setValue(100)
    await wrapper.get('[data-test="button_deposit"]').trigger('click')

    expect(wrapper.get('[data-test="status"]').text()).toBe(
      '存款完成，帳戶目前餘額為 100'
    )

    // 再存款
    await wrapper.get('[data-test="input_deposit"]').setValue(100)
    await wrapper.get('[data-test="button_deposit"]').trigger('click')

    expect(wrapper.get('[data-test="status"]').text()).toBe(
      '存款完成，帳戶目前餘額為 200'
    )
  })

  // Sad Path
  it(`輸入帳戶名稱與金額，若查詢不到帳戶，狀態欄應顯示 「查詢不到此帳戶，請重新確認」`, async () => {
    const wrapper = mount(Practice03)

    // 不開戶直接存款
    await wrapper.get('[data-test="input_account"]').setValue('胖橘貓')
    await wrapper.get('[data-test="input_deposit"]').setValue(100)
    await wrapper.get('[data-test="button_deposit"]').trigger('click')

    expect(wrapper.get('[data-test="status"]').text()).toBe(
      '查詢不到此帳戶，請重新確認'
    )
  })
})

describe.skip('執行提款', () => {
  // Happy Path
  it(`輸入帳戶名稱、金額，交易完成，狀態欄應顯示 「提款完成，您的帳戶目前餘額為 {帳戶乾乾數量}」`, async () => {
    const wrapper = mount(Practice03)

    // 開戶
    await wrapper.get('[data-test="input_account"]').setValue('胖橘貓')
    await wrapper
      .get('[data-test="button_open-account"]')
      .trigger('click')

    // 存款
    await wrapper.get('[data-test="input_deposit"]').setValue(200)
    await wrapper.get('[data-test="button_deposit"]').trigger('click')

    // 提款
    await wrapper.get('[data-test="input_withdraw"]').setValue(100)
    await wrapper.get('[data-test="button_withdraw"]').trigger('click')

    expect(wrapper.get('[data-test="status"]').text()).toBe(
      '提款完成，您的帳戶目前餘額為 100'
    )
  })

  // Sad Path
  it(`輸入帳戶名稱、金額，若查詢不到帳戶，狀態欄應顯示 「查詢不到此帳戶，請重新確認」`, async () => {
    const wrapper = mount(Practice03)

    // 不開戶直接提款
    await wrapper.get('[data-test="input_account"]').setValue('胖橘貓')
    await wrapper.get('[data-test="input_withdraw"]').setValue(100)
    await wrapper.get('[data-test="button_withdraw"]').trigger('click')

    expect(wrapper.get('[data-test="status"]').text()).toBe(
      '查詢不到此帳戶，請重新確認'
    )
  })

  // Sad Path
  it(`輸入帳戶名稱、金額，餘額不足，狀態欄應顯示 「餘額不足，您的帳戶目前餘額為 {帳戶乾乾數量}」`, async () => {
    const wrapper = mount(Practice03)

    // 開戶
    await wrapper.get('[data-test="input_account"]').setValue('胖橘貓')
    await wrapper
      .get('[data-test="button_open-account"]')
      .trigger('click')

    // 存款
    await wrapper.get('[data-test="input_deposit"]').setValue(100)
    await wrapper.get('[data-test="button_deposit"]').trigger('click')

    // 提款
    await wrapper.get('[data-test="input_withdraw"]').setValue(200)
    await wrapper.get('[data-test="button_withdraw"]').trigger('click')

    expect(wrapper.get('[data-test="status"]').text()).toBe(
      '餘額不足，您的帳戶目前餘額為 100'
    )
  })
})
