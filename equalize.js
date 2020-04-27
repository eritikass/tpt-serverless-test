function equalize(a, b, operation) {
  return eval(`${a.toString()}` + `${operation.toString()}` + `${b.toString()}`);
}

module.exports = equalize;