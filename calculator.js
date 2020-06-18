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
}

module.exports = { calculator };