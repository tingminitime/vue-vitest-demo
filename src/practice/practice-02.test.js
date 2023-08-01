import { describe, it, expect } from 'vitest'
import { FoodBank } from './practice-02'

describe.skip('開戶', () => {
  // Happy Path
  it(`開戶完成，Safe 物件中應有帳戶資訊`, () => {
    // Arrange
    const foodBank = new FoodBank()
    // Act
    foodBank.openAccount('Orange')
    // Assertion
    expect(foodBank.safe).toEqual({ Orange: { food: 0 } })
  })

  it(`開戶完成，回應"開戶完成"`, () => {
    // Arrange
    const foodBank = new FoodBank()
    // Act
    const result = foodBank.openAccount('Orange')
    // Assertion
    expect(result).toBe('開戶完成')
  })

  // Sad Path
  it(`若開過帳戶，回應"此帳戶已存在"`, () => {
    // Arrange
    const foodBank = new FoodBank()
    foodBank.openAccount('Orange')
    // Act
    const result = foodBank.openAccount('Orange')
    // Assertion
    expect(result).toBe('此帳戶已存在')
  })
})

describe.skip('存款', () => {
  // Happy Path
  it(`存入100單位，交易成功，safe 物件中該帳戶的乾乾數量應為100`, () => {
    // Arrange
    const foodBank = new FoodBank()
    const user = 'Orange'
    // Act
    foodBank.openAccount(user)
    foodBank.deposit(user, 100)
    // Assertion
    expect(foodBank.safe[user]).toEqual({ food: 100 })
  })

  it(`交易完成，回應"存款完成，帳戶目前餘額為 {該帳戶乾乾數量}"`, () => {
    // Arrange
    const foodBank = new FoodBank()
    const user = 'Orange'
    // Act
    foodBank.openAccount(user)
    const result = foodBank.deposit(user, 100)
    // Assertion
    expect(result).toBe(`存款完成，帳戶目前餘額為 100`)
  })

  // Sad Path
  it(`若查不到帳戶，交易失敗，回應"查詢不到該帳戶，請重新確認"`, () => {
    // Arrange
    const foodBank = new FoodBank()
    // Act
    const result = foodBank.deposit('Apple', 100)
    // Assertion
    expect(result).toBe('查詢不到該帳戶，請重新確認')
  })
})

describe.skip('提款', () => {
  // Happy Path
  it(`提款50單位，交易成功，從 safe 物件中扣除該帳戶的 food`, () => {
    // Arrange
    const foodBank = new FoodBank()
    const user = 'Orange'
    foodBank.openAccount(user)
    foodBank.deposit(user, 100)
    // Act
    foodBank.withdraw(user, 50)
    // Assertion
    expect(foodBank.safe[user]).toEqual({ food: 50 })
  })
  it(`交易完成，回應"提款完成，帳戶目前餘額 {該帳戶乾乾數量}"`, () => {
    // Arrange
    const foodBank = new FoodBank()
    const user = 'Orange'
    foodBank.openAccount(user)
    foodBank.deposit(user, 100)
    // Act
    const result = foodBank.withdraw(user, 50)
    // Assertion
    expect(result).toBe(`提款完成，帳戶目前餘額為 50`)
  })

  // Sad Path
  it(`若查不到帳戶，交易失敗，回應"查詢不到此帳戶，請重新確認"`, () => {
    // Arrange
    const foodBank = new FoodBank()
    // Act
    const result = foodBank.withdraw('Apple', 100)
    // Assertion
    expect(result).toBe('查詢不到此帳戶，請重新確認')
  })
  it(`餘額不足，回應"餘額不足，您的帳戶目前餘額為 {該帳戶乾乾數量}"`, () => {
    // Arrange
    const foodBank = new FoodBank()
    const user = 'Orange'
    foodBank.openAccount(user)
    foodBank.deposit(user, 100)
    // Act
    const result = foodBank.withdraw(user, 150)
    // Assertion
    expect(result).toBe(`餘額不足，您的帳戶目前餘額為 100`)
  })
})
