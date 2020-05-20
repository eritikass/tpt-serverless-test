const fs = require('fs');
const getChars = require('../ai');
// const handler = require('../handler');

const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';

test('Ai returns characters', () => {
  getChars(img, (data) => {
    // eslint-disable-next-line no-useless-escape
    expect(data).stringMatching(/[\d \+=\n]/);
  }).finally(() => {});
})
