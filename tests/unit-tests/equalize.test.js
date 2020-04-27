const equalize = require('../../equalize');

test('5 + 3 equals 8', () => {
  expect(equalize(5, 3, '+')).toBe(8);
});

test('15 - 19 equals -4', () => {
    expect(equalize(15, 19, '-')).toBe(-4);
});

test('15 / 3 equals 5', () => {
    expect(equalize(15, 3, '/')).toBe(5);
});

test('25 * 5 equals 125', () => {
    expect(equalize(25, 5, '*')).toBe(125);
});

test('5 > 3 equals true', () => {
    expect(equalize(5, 3, '>')).toBe(true);
});

test('5 >= 6 equals false', () => {
    expect(equalize(5, 6, '>=')).toBe(false);
});

test('8 = 8 equals true', () => {
    expect(equalize(8, 8, '==')).toBe(true);
});

test('5 =< 15 equals true', () => {
    expect(equalize(5, 15, '<=')).toBe(true);
});

test('-15 < -25 equals false', () => {
     expect(equalize(-15, -25, '<')).toBe(false);
});