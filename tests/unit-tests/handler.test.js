const handler = require('../../handler');

describe('Handler Tests:', () => {
  test('handler returns correct http response', async (done) => {
    const someEvent = new Event('fake');
    const expectedResponse = {
      body: `<div id="calculator"><h2>Homework Calculator! - Serverless App<h2>
      <form action="/dev/calc" method="GET" style="margin: 0 auto;">
      <input id="ValueInput1" type="number" name="num_1" placeholder="Value 1" value="0"/>
      
      <select id="SelectOperation" name="operation">
        <option value="+" selected="selected"> + </option>
        <option value="-" > - </option>
        <option value="*" > * </option>
        <option value="/" > / </option>
        <option value=">" > > </option>
        <option value=">=" > >= </option>
        <option value="==" > = </option>
        <option value="<=" > =< </option>
        <option value="<" > < </option>
      </select>

      <input id="ValueInput2" type="number" name="num_2" placeholder="Value 2" value="0"/>
      <input id="OperationSubmit" type="submit" value="="/>
      <input id="AnswerOutput" type="text" name="answer" placeholder="Answer" value="0" disabled/>
      </form></div>

      <style>
        body {
          text-align: center;
        }

        form {
          display: inline-block;
          vertical-align: middle;
        }

        h2 {
          font-family: "Comic Sans MS", cursive, sans-serif;
        }

        div#calculator {
          border: solid black 5px;
          width: auto;
          background-color: cyan;
          border-radius: 50%;
          padding: 1em;
        }
      <style>
      `,
      headers: { 'Content-Type': 'text/html' },
      statusCode: 200,
    };

    await handler.calculator(someEvent).then((response) => {
      expect(response).toEqual(expectedResponse);
      done();
    });
  });
});
