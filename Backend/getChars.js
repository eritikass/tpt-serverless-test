const { createWorker } = require('tesseract.js');

const getChars = async (base64String, callBack) => {
  console.log('本物だ！');
  console.log('Im the real getChars!');

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

module.exports = getChars;
