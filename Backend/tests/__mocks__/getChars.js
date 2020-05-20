const getChars = (base64String, callBack) => {
  console.log('Im the mocked getChars()');
  callBack("43+5");
};

module.exports = getChars;