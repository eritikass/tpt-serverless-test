function calculator(a, b, operator) {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  if (operator === '/') {
    return a / b;
  }
  if (operator === '*') {
    return a * b;
  }
  if (operator === '>') {
    return a > b;
  }
  if (operator === '<') {
    return a < b;
  }
  if (operator === '>=') {
    return a >= b;
  }
  if (operator === '<=') {
    return a <= b;
  }
  if (operator === '=') {
    return a === b;
  }
  return 0;
}

module.exports = { calculator };
