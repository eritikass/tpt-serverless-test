const { getAnswer } = require('../answer');

test('expect answer to be 5', async () => {
  expect(getAnswer(2, 3, '+')).toBe(5);
});

test('expect answer to be -1', async () => {
  expect(getAnswer(2, 3, '-')).toBe(-1);
});

test('expect answer to be 2', async () => {
  expect(getAnswer(4, 2, '/')).toBe(2);
});

test('expect answer to be 8', async () => {
  expect(getAnswer(4, 2, '*')).toBe(8);
});

test('expect answer to be true', async () => {
  expect(getAnswer(10, 5, '>')).toBe(true);
});

test('expect answer to be true', async () => {
  expect(getAnswer(5, 10, '<')).toBe(true);
});

test('expect answer to be true', async () => {
  expect(getAnswer(3, 3, '>=')).toBe(true);
});

test('expect answer to be true', async () => {
  expect(getAnswer(3, 3, '<=')).toBe(true);
});

test('expect answer to be true', async () => {
  expect(getAnswer(5, 5, '=')).toBe(true);
});
