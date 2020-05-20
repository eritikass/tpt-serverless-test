const { createWorker } = require('tesseract.js');

const getCharacters = async (base64String, callBack) => {
  const worker = createWorker();
  (async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    await worker.setParameters({
      tessedit_char_whitelist: '0123456789+-/*=',
    });
    const { data: { text } } = await worker.recognize(base64String);
    // console.log(text);
    const data = { text };
    await worker.terminate();
    callBack(data);
  })();
};

module.exports = getCharacters;
