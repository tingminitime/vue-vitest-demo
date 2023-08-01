import { describe, expect, it } from 'vitest'
import { add } from './practice-01'

describe.skip('add()', () => {
  // happy path
  it(`add(1, 1)，應為 2`, () => {
    expect(add(1, 1)).toBe(2)
  })
  it(`add('1', '1') 應為 2`, () => {
    expect(add('1', '1')).toBe(2)
  })
  it(`add(0.1, 0.2) 應為 0.3`, () => {
    expect(add(0.1, 0.2)).toBe(0.3)
  })
  it(`add(null, undefined) 應為 NaN`, () => {
    expect(add(null, undefined)).toBeNaN()
  })
  it(`add(null, 1) 應為 NaN`, () => {
    expect(add(null, 1)).toBeNaN()
  })
  // sad path
  it(`add('1', '1') 不應為 '11'`, () => {
    expect(add('1', '1')).not.toBe('11')
  })
})
