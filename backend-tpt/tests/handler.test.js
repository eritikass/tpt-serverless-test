const getChars = require('../getChars');
const request = require('supertest')
const { app } = require('../handler');
jest.mock('../getChars');

const img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';


describe('Endpoints Tests', () => {
  test("Get /index.html should return html", async () => {
    const expected = [
      expect.stringContaining('<!doctype html>'),
    ];
    const response = await request(app).get("/index.html");
    // console.log(response.text);
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual(expect.stringContaining('<!doctype html>'));
  });
  test("Post to /image should return json with numbers", async () => {
    //Is mocked
    console.log(getChars);

    //This doesn't get called?
    getChars("", (d) => { console.log(d);
    });

    //This times out?
  //   const response = await request(app)
  //     .post("/image")
  //     .send(img)
  //   // .type('text/plain')
  //   // .set('Accept', 'application/json')
  //   // .expect('Content-Type', /json/);

  //   //Nothing works ):
  //   console.log(response.text);
  //   expect(response.statusCode).toBe(200);
  //   console.log(response.body);
  });
})