const getChars = require('../getChars');
const request = require('supertest')
const { app } = require('../handler');

const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';

test('Ai returns characters', async () => {
  const expected = [
    expect.stringMatching(/[\d \+=\n]/),
  ];
  getChars(img, (data) => {
    // eslint-disable-next-line no-useless-escape
    expect(data.text).toEqual("");
  }).finally(() => { });
});

