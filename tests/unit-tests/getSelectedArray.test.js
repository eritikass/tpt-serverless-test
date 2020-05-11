const getSelectedArray = require('../../getSelectedArray');

const expected1 = ['selected="selected"', '', '', '', '', '', '', '', ''];
const expected2 = ['', 'selected="selected"', '', '', '', '', '', '', ''];
const expected3 = ['', '', 'selected="selected"', '', '', '', '', '', ''];
const expected4 = ['', '', '', 'selected="selected"', '', '', '', '', ''];
const expected5 = ['', '', '', '', 'selected="selected"', '', '', '', ''];
const expected6 = ['', '', '', '', '', 'selected="selected"', '', '', ''];
const expected7 = ['', '', '', '', '', '', 'selected="selected"', '', ''];
const expected8 = ['', '', '', '', '', '', '', 'selected="selected"', ''];
const expected9 = ['', '', '', '', '', '', '', '', 'selected="selected"'];

describe('GetSelectedArray Tests:', () => {
  test('Function returns correct array when given corresponding parameters.', () => {
    const emptyArray = ['', '', '', '', '', '', '', '', ''];
    expect(getSelectedArray('+', emptyArray)).toEqual(expected1);
  });

  test('Function returns correct array when given corresponding parameters.', () => {
    const emptyArray = ['', '', '', '', '', '', '', '', ''];
    expect(getSelectedArray('-', emptyArray)).toEqual(expected2);
  });

  test('Function returns correct array when given corresponding parameters.', () => {
    const emptyArray = ['', '', '', '', '', '', '', '', ''];
    expect(getSelectedArray('*', emptyArray)).toEqual(expected3);
  });

  test('Function returns correct array when given corresponding parameters.', () => {
    const emptyArray = ['', '', '', '', '', '', '', '', ''];
    expect(getSelectedArray('/', emptyArray)).toEqual(expected4);
  });

  test('Function returns correct array when given corresponding parameters.', () => {
    const emptyArray = ['', '', '', '', '', '', '', '', ''];
    expect(getSelectedArray('>', emptyArray)).toEqual(expected5);
  });

  test('Function returns correct array when given corresponding parameters.', () => {
    const emptyArray = ['', '', '', '', '', '', '', '', ''];
    expect(getSelectedArray('>=', emptyArray)).toEqual(expected6);
  });

  test('Function returns correct array when given corresponding parameters.', () => {
    const emptyArray = ['', '', '', '', '', '', '', '', ''];
    expect(getSelectedArray('==', emptyArray)).toEqual(expected7);
  });

  test('Function returns correct array when given corresponding parameters.', () => {
    const emptyArray = ['', '', '', '', '', '', '', '', ''];
    expect(getSelectedArray('<=', emptyArray)).toEqual(expected8);
  });

  test('Function returns correct array when given corresponding parameters.', () => {
    const emptyArray = ['', '', '', '', '', '', '', '', ''];
    expect(getSelectedArray('<', emptyArray)).toEqual(expected9);
  });
});
