const { calculator } = require('./calculator');
const { getSelected } = require('./getSelected');

module.exports.hello = async (event) => {
  const operator = (event.queryStringParameters || {}).operator || '+';
  const a = (event.queryStringParameters || {}).a || 0;
  const b = (event.queryStringParameters || {}).b || 0;

  const answer = calculator(parseInt(a, 10), parseInt(b, 10), operator);

  const selected = getSelected(operator);

  const html = `
  <body><form action="/dev/hello" method="GET">
      <input type="number" name="a" value="${a}">
      <select name="operator">
        <option value="+" ${selected[0]}>+</option>
        <option value="-" ${selected[1]}>-</option>
        <option value="/" ${selected[2]}>/</option>
        <option value="*" ${selected[3]}>*</option>
        <option value=">" ${selected[4]}>&gt;</option>
        <option value=">=" ${selected[5]}>&gt;=</option>
        <option value="=" ${selected[6]}>=</option>
        <option value="<=" ${selected[7]}>&lt;=</option>
        <option value="<" ${selected[8]}>&lt;</option>
        
      </select>
      <input type="number" name="b" value="${b}">
      <input type="submit" style="color:red;" value="=">
      <strong id="answer">${answer}</strong>
    </form>
    </body>
  `;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
};
