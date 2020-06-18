const { calculator } = require("./calculator");

module.exports.hello = async event => {
  const operator = (event.queryStringParameters || {}).operator || '+';
  const a = (event.queryStringParameters || {}).a || 0;
  const b = (event.queryStringParameters || {}).b || 0;

  var answer = calculator(parseInt(a, 10), parseInt(b, 10), operator);

  var html = `
  <body><form action="/dev/hello" method="GET">
      <input type="number" name="a" value="${a}">
      <select name="operator">
        <option selected="selected" value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
        <option value=">">&gt;</option>
        <option value=">=">&gt;=</option>
        <option value="=">=</option>
        <option value="<=">&lt;=</option>
        <option value="<">&lt;</option>
        
      </select>
      <input type="number" name="b" value="${b}">
      <input type="submit" style="color:red;" value="=">
      <strong class="result">${answer}a</strong>
    </form>
    </body>
  `

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
};
