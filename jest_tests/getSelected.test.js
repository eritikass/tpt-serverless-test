const { getSelected } = require('../getSelected');

test('expect selected array to be 0', async () => {
  expect(getSelected('+')).toStrictEqual(['selected="selected"', '', '', '', '', '', '', '', '']);
});

test('expect selected array to be 1', async () => {
  expect(getSelected('-')).toStrictEqual(['', 'selected="selected"', '', '', '', '', '', '', '']);
});

test('expect selected array to be 2', async () => {
  expect(getSelected('/')).toStrictEqual(['', '', 'selected="selected"', '', '', '', '', '', '']);
});

test('expect selected array to be 3', async () => {
  expect(getSelected('*')).toStrictEqual(['', '', '', 'selected="selected"', '', '', '', '', '']);
});

test('expect selected array to be 4', async () => {
  expect(getSelected('>')).toStrictEqual(['', '', '', '', 'selected="selected"', '', '', '', '']);
});

test('expect selected array to be 5', async () => {
  expect(getSelected('>=')).toStrictEqual(['', '', '', '', '', 'selected="selected"', '', '', '']);
});

test('expect selected array to be 6', async () => {
  expect(getSelected('=')).toStrictEqual(['', '', '', '', '', '', 'selected="selected"', '', '']);
});

test('expect selected array to be 7', async () => {
  expect(getSelected('<=')).toStrictEqual(['', '', '', '', '', '', '', 'selected="selected"', '']);
});

test('expect selected array to be 8', async () => {
  expect(getSelected('<')).toStrictEqual(['', '', '', '', '', '', '', '', 'selected="selected"']);
});
