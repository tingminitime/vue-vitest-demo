export const add = (x, y) => {
  let xDigits = parseFloat(x)
  let yDigits = parseFloat(y)

  return Number((xDigits + yDigits).toFixed(1))
}
