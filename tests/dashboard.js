module.exports = {
  'Title: Spotippos': function(browser) {
    browser
      .url('http://localhost:3001/')
      .waitForElementVisible('#app-spotippos')
      .assert.title('Spotippos')
      .saveScreenshot('homepage.png')
      .end();
  }
};
