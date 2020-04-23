const config = require('../../nightwatch.conf.js');

module.exports = {
  Test(browser) {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('body')
      .pause(1500)
      .maximizeWindow()
      .setValue('.gLFyf.gsfi', 'cats funny')
      .pause(1500)
      .click('.gNO89b')
      .pause(2000)
      .click('.q.qs')
      .end();
  },
};
