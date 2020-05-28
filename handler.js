
const { getAnswer } = require('./answer');

module.exports.calculator = async (event) => {
  const operator = (event.queryStringParameters || {}).operator || '+';
  const a = (event.queryStringParameters || {}).a || 0;
  const b = (event.queryStringParameters || {}).b || 0;

  const answer = getAnswer(parseInt(a, 10), parseInt(b, 10), operator);

  const html = `
  <html>
      <form action="/dev/calculator" method="GET">
      <input type="number" name="a" value=${a}>
      <select name="operator">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="/">/</option>
      <option value="*">*</option>
      <option value=">">></option>
      <option value="<"><</option>
      <option value="=">=</option> 
      <option value=">=">>=</option>
      <option value="<="><=</option>
    </select>
    <input type="number" name="b" value=${b}>
    <input type="submit" value="=">
    <strong id="answer">${answer}</strong>
    
    </form>
    </body>
  </html>`;


  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
