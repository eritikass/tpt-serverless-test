const equalize = require('./equalize');

module.exports.calculator = async (event) => {
  const value_1 = (event.queryStringParameters || {}).num_1 || 0;
  const value_2 = (event.queryStringParameters || {}).num_2 || 0;

  const operation = (event.queryStringParameters || {}).operation || '+';

  const answer = equalize(value_1, value_2, operation);


  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: `<h3>Awesome Calculator!<h3>
    <form action="/dev/calc" method="GET" style="margin: 0 auto;">
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

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
