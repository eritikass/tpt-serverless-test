const equalize = require('../../equalize');
const handler = require('../../handler');

test('handler with given values returns correct html', () => {
  expect(handler.hello(async (event) => {
    const value_1 = 123;
    const value_2 = 456;
    const operation = '+';

    const answer = equalize(value_1, value_2, operation);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `<h3>Awesome Calculator!<h3>
          <form action="/dev/hello" method="GET" style="margin: 0 auto;">
          <input id="ValueInput1" type="number" name="num_1" placeholder="Value 1" value="${value_1}"/>
      
          <select id="SelectOperation" value="${operation}" name="operation">
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
      
          <input id="ValueInput2" type="number" name="num_2" placeholder="Value 2" value="${value_2}"/>
          <input id="OperationSubmit" type="submit" value="="/>
          <input id="AnswerOutput" type="text" name="answer" placeholder="Answer" value="${answer}" disabled/>
          </form>
          `,
    };
  }));
});
