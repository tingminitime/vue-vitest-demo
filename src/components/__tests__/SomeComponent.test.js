import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { VueWrapper, mount, shallowMount } from '@vue/test-utils'
import SomeComponent from '../SomeComponent.vue'
// import utils from '@/utils'
import { debounce, throttle } from '@/utils'

it.skip('should mocking a function', () => {
  const mockFn = vi.fn() // 返回一個可呼叫的模擬函式
  mockFn(1, 2, 3) // 呼叫模擬函式
  console.log('mockFn: ', mockFn)

  // 取得模擬函式的呼叫紀錄
  expect(mockFn).toHaveBeenCalled()
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3)
  expect(mockFn).toHaveBeenCalledTimes(1)
})

it.skip('should spying a function', () => {
  const cache = { count: 0 }
  const utils = { add: () => cache.count++ }
  const spy = vi.spyOn(utils, 'add') // 測試替身綁定在 utils.add 上
  console.log('spy: ', spy)

  utils.add() // 呼叫 utils.add

  // 透過 spyOn 取得該函式的呼叫紀錄
  expect(spy).toHaveBeenCalled()
  expect(spy).toHaveBeenCalledTimes(1)
  expect(cache.count).toBe(1)
})

// ===== MockInstance Properties =====
it.skip('should get mock.calls', () => {
  const mockFn = vi.fn()

  mockFn(1, 2, 3) // first call
  mockFn(4, 5, 6) // second call

  console.log(mockFn.mock.calls) // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

  expect(mockFn.mock.calls).toEqual([
    [1, 2, 3], // first call
    [4, 5, 6] // second call
  ]) // passed
})

it.skip('should get mock.lastCall', () => {
  const mockFn = vi.fn()

  mockFn(1, 2, 3) // first call
  mockFn(4, 5, 6) // second call & last call

  expect(mockFn.mock.lastCall).toEqual([4, 5, 6]) // passed
})

it.skip('should get mock.results', () => {
  const mockFn = vi.fn((a, b) => {
    if (!a || !b) throw new Error('a and b are required')
    return a + b
  })

  try {
    mockFn(1, 2)
    mockFn(1)
  } catch {}

  expect(mockFn.mock.results).toEqual([
    { type: 'return', value: 3 }, // first call
    { type: 'throw', value: new Error('a and b are required') } // second call
  ]) // passed
})

it.skip('should get mock.instances', () => {
  const mockFn = vi.fn()

  const obj1 = { name: 'obj1' }
  const obj2 = { name: 'obj2' }

  mockFn(obj1, 1, 2, 3) // first call
  mockFn(obj2, 4, 5, 6) // second call

  console.log(mockFn.mock.instances) // [ { name: 'obj1' }, { name: 'obj2' } ]

  expect(mockFn.mock.instances).toEqual([obj1, obj2]) // passed
})

// ===== MockInstance Methods =====
it.skip('should clear mock.calls & mock.results', () => {
  const mockFn = vi.fn()

  mockFn(1, 2, 3) // first call
  mockFn(4, 5, 6) // second call

  mockFn.mockClear()

  expect(mockFn.mock.calls).toEqual([]) // passed
  expect(mockFn.mock.results).toEqual([]) // passed
})

it.skip('should reset mock.calls & mock.results', () => {
  const mockFn = vi.fn(() => 'mock')

  mockFn(1, 2, 3) // first call
  mockFn(4, 5, 6) // second call

  mockFn.mockReset()

  expect(mockFn.mock.calls).toEqual([]) // passed
  expect(mockFn.mock.results).toEqual([]) // passed
  expect(mockFn()).toBeUndefined() // passed
})

it.skip('should restore mock.calls & mock.results', () => {
  const mockFn = vi.fn(() => 'mock')

  mockFn(1, 2, 3) // first call
  mockFn(4, 5, 6) // second call

  mockFn.mockRestore()

  expect(mockFn.mock.calls).toEqual([]) // passed
  expect(mockFn.mock.results).toEqual([]) // passed
  expect(mockFn()).not.toBeUndefined() // passed
  expect(mockFn()).toBe('mock') // passed
})

it.skip('should mockImplementation', () => {
  const mockFn = vi.fn(() => 'original')
  mockFn.mockImplementation(() => 'mock')
  expect(mockFn()).toBe('mock') // passed
  expect(mockFn()).toBe('mock') // passed
})

it.skip('should mockImplementationOnce', () => {
  const mockFn = vi.fn(() => 'original')
  mockFn.mockImplementationOnce(() => 'mock')
  expect(mockFn()).toBe('mock') // passed
  expect(mockFn()).toBe('original') // passed
})

it.skip('should mockReturnValue', () => {
  const mockFn = vi.fn()
  mockFn.mockReturnValue('mock 1')
  expect(mockFn()).toBe('mock 1') // passed
  mockFn.mockReturnValue('mock 2')
  expect(mockFn()).toBe('mock 2') // passed
})

it.skip('should mockResolvedValue', async () => {
  const mockFn = vi.fn(() => 'original')
  mockFn.mockResolvedValue('mock 1')
  expect(await mockFn()).toBe('mock 1') // passed
  mockFn.mockResolvedValue('mock 2')
  expect(await mockFn()).toBe('mock 2') // passed
})

// ===== Globals =====
it.skip('should stubGlobal', () => {
  const mockWindow = {
    location: {
      href: 'https://www.google.com'
    }
  }
  vi.stubGlobal('window', mockWindow)

  expect(window.location.href).toBe('https://www.google.com')
})

it.skip('should stubGlobal localStorage', () => {
  const mockLocalStorage = {
    getItem: vi.fn(),
    setItem: vi.fn()
  }
  vi.stubGlobal('localStorage', mockLocalStorage)
  localStorage.setItem('key', 'value')
  expect(localStorage.getItem).toHaveBeenCalledWith('key')
})

// ===== Modules =====
// default export
// vi.mock('@/utils', () => {
//   return {
//     default: {
//       debounce: vi.fn(),
//       throttle: vi.fn()
//     }
//   }
// })

// named export
vi.mock('@/utils', () => {
  return {
    debounce: vi.fn(),
    throttle: vi.fn()
  }
})

it.skip('should mock utils by default export', () => {
  utils.debounce()
  expect(utils.debounce).toHaveBeenCalled()
})

it.skip('should mock utils by named export', () => {
  debounce()
  expect(debounce).toHaveBeenCalled()
})
