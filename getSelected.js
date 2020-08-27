const getSelected = (operator) => {
  const selected = 'selected="selected"';
  const array = ['', '', '', '', '', '', '', '', ''];

  switch (operator) {
    case '+':
      array[0] = selected;
      break;
    case '-':
      array[1] = selected;
      break;
    case '/':
      array[2] = selected;
      break;
    case '*':
      array[3] = selected;
      break;
    case '>':
      array[4] = selected;
      break;
    case '>=':
      array[5] = selected;
      break;
    case '=':
      array[6] = selected;
      break;
    case '<=':
      array[7] = selected;
      break;
    case '<':
      array[8] = selected;
      break;
    default:
      break;
  }
  return array;
};

module.exports = { getSelected };
