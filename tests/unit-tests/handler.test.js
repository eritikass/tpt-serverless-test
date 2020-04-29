const handler = require('../../handler');

// jest.setTimeout(10000);

test('handler returns correct http response', async (done) => {
  const someEvent = new Event('fake');
  const expectedResponse = {
    body: `<h3>Awesome Calculator!<h3>
    <form action="/dev/calc" method="GET" style="margin: 0 auto;">
    <input id="ValueInput1" type="number" name="num_1" placeholder="Value 1" value="0"/>
    
    <select id="SelectOperation" value="+" name="operation">
      <option value="+"> + </option>
      <option value="-"> - </option>
      <option value="*"> * </option>
      <option value="/"> / </option>
      <option value=">"> > </option>
      <option value=">="> >= </option>
      <option value="=="> = </option>
      <option value="<="> =< </option>
      <option value="<"> < </option>
    </select>

    <input id="ValueInput2" type="number" name="num_2" placeholder="Value 2" value="0"/>
    <input id="OperationSubmit" type="submit" value="="/>
    <input id="AnswerOutput" type="text" name="answer" placeholder="Answer" value="0" disabled/>
    </form>
    `,
    headers: { 'Content-Type': 'text/html' },
    statusCode: 200,
  };

  await handler.calculator(someEvent).then((response) => {
    expect(response).toEqual(expectedResponse);
    done();
  });
});
