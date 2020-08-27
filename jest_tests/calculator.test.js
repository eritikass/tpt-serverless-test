const { calculator } = require('../calculator');

test('expect answer to be 6', async () => {
  expect(calculator(3, 3, '+')).toBe(6);
});

test('expect answer to be 0', async () => {
  expect(calculator(3, 3, '-')).toBe(0);
});

test('expect answer to be 1', async () => {
  expect(calculator(4, 4, '/')).toBe(1);
});

test('expect answer to be 16', async () => {
  expect(calculator(4, 4, '*')).toBe(16);
});

test('expect answer to be true', async () => {
  expect(calculator(2, 1, '>')).toBe(true);
});

test('expect answer to be true', async () => {
  expect(calculator(1, 2, '<')).toBe(true);
});

test('expect answer to be true', async () => {
  expect(calculator(5, 5, '>=')).toBe(true);
});

test('expect answer to be true', async () => {
  expect(calculator(5, 5, '<=')).toBe(true);
});

test('expect answer to be true', async () => {
  expect(calculator(5, 5, '=')).toBe(true);
});
