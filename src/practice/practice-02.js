export class FoodBank {
  constructor() {
    this.safe = {}
  }

  // 開戶
  openAccount(name) {
    if (this.safe[name]) return '此帳戶已存在'
    this.safe[name] = { food: 0 }
    return '開戶完成'
  }
  // 存款
  deposit(name, food) {
    if (!this.safe[name]) return '查詢不到此帳戶，請重新確認'
    this.safe[name].food += Number(food)
    return `存款完成，帳戶目前餘額為 ${this.safe[name].food}`
  }
  // 提款
  withdraw(name, food) {
    if (!this.safe[name]) return '查詢不到此帳戶，請重新確認'
    if (this.safe[name].food < Number(food))
      return `餘額不足，您的帳戶目前餘額為 ${this.safe[name].food}`
    this.safe[name].food -= Number(food)
    return `提款完成，您的帳戶目前餘額為 ${this.safe[name].food}`
  }
}
