'use strict';

module.exports.hello = async event => {

  const value_1 = (event.queryStringParameters || {}).num_1 || 0;
  const value_2 = (event.queryStringParameters || {}).num_2 || 0;

  const operation = (event.queryStringParameters || {}).operation || '+';
  const answer = eval(`${value_1.toString()}` + `${operation.toString()}` + `${value_2.toString()}`);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html'},
    body: `<form action="/dev/hello" method="GET" style="margin: 0 auto;">
    <input type="number" name="num_1" placeholder="Value 1" value="${value_1}"/>

    <select name="operation">
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

    <input type="number" name="num_2" placeholder="Value 2" value="${value_2}"/>
    <input type="submit" value="="/>
    <input type="text" name="answer" placeholder="Answer" value="${answer}" disabled/>
    </form>
    `
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
