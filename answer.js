function getAnswer(a, b, operator) {
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '/') return a / b;
  if (operator === '*') return a * b;
  if (operator === '>') return a > b;
  if (operator === '<') return a < b;
  if (operator === '>=') return a >= b;
  if (operator === '<=') return a <= b;
  if (operator === '=') return a === b;
  return 'wat';
}

exports.getAnswer = getAnswer;
