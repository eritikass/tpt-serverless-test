function equalize(a, b, operation) {
  let answer = 0;

  switch (operation) {
    case '+':
      answer = parseFloat(a) + parseFloat(b);
      break;
    case '-':
      answer = parseFloat(a) - parseFloat(b);
      break;
    case '*':
      answer = parseFloat(a) * parseFloat(b);
      break;
    case '/':
      answer = parseFloat(a) / parseFloat(b);
      break;
    case '>':
      answer = parseFloat(a) > parseFloat(b);
      break;
    case '>=':
      answer = parseFloat(a) >= parseFloat(b);
      break;
    case '==':
      answer = parseFloat(a) === parseFloat(b);
      break;
    case '<=':
      answer = parseFloat(a) <= parseFloat(b);
      break;
    case '<':
      answer = parseFloat(a) < parseFloat(b);
      break;
    default:
      break;
  }

  return answer;
  // NO EVAL
  // return eval(`${a.toString()}` + `${operation.toString()}` + `${parseFloat(b).toString()}`);
}

module.exports = equalize;
