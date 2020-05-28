
const { getAnswer } = require('./answer');

module.exports.calculator = async (event) => {
  const operator = (event.queryStringParameters || {}).operator || '+';
  const a = (event.queryStringParameters || {}).a || 0;
  const b = (event.queryStringParameters || {}).b || 0;

  const answer = getAnswer(parseInt(a, 10), parseInt(b, 10), operator);

  const html = `
  <html>
  <head>
      <title>Calculator</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
  </head>
  <form action="/dev/calculator" method="GET">
      <div class="columns is-centered">
          <div class="column is-half field is-grouped">
              <input class="input" type="number" name="a" value=${a} style="margin: 5px;">
              <div class="select" style="margin: 5px;">
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
              </div>
              <input class="input" type="number" name="b" value=${b} style="margin: 5px;">
              <input class="button" type="submit" value="=" style="margin-top: 5px;">
          </div>
      </div>
      <div class="columns is-centered">
          <h2 class="subtitle">Answer is: </h2>
          <h2 id="answer" class="subtitle" > ${answer}</h2>
      </div> 
  </form>
  </body>
  </html>
  `;


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
