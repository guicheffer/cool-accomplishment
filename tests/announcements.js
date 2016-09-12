module.exports = {
  'Title: Spotippos - Anúncios': function(browser) {
    browser
      .url('http://localhost:3001/#/announcements')
      .waitForElementVisible('#app-spotippos')
      .assert.title('Spotippos - Anúncios')
      .saveScreenshot('announcements.png')
      .end();
  },
  'See Filter and Results on Announcements page': function(browser) {
    browser
      .url('http://localhost:3001/#/announcements')
      .waitForElementVisible('.container-filter,
                              .container-results', 2000)
      .end();
  },
  'Load some results': function(browser) {
    browser
      .url('http://localhost:3001/#/announcements')
      .waitForElementVisible('.container-results .ann-item', 2000)
      .expect.element.('.ann-item').to.be.present.before(1000)
      .end();
  },
  'Fill area field with "69" and "109"': function(browser) {
    browser
      .url('http://localhost:3001/#/announcements')
      .waitForElementVisible('.container-filter')
      .setValue('input[id=area]', ['62', client.Keys.ENTER])
        .pause(1000)
        .assert.containsText('.ann-item[0] > .card-area', '62 M²')
      .setValue('input[id=area]', ['109', client.Keys.ENTER])
        .pause(1000)
        .assert.containsText('.ann-item[0] > .card-area', '109 M²')
      .end();
  }
  'Fill ID area and test /properties/[ID] endpoint': function(browser) {
    browser
      .url('http://localhost:3001/#/announcements')
      .waitForElementVisible('.container-results .ann-item', 2000)
      .setValue('input[id=id]', ['7999', client.Keys.ENTER])
        .pause(1000)
        .assert.containsText('.ann-item[0] > h3', '7999')
      .expect.element.('.ann-item').to.be.present.before(5000)
      .end();
  },
  'Load Announcement Item from Query String param': function(browser) {
    browser
      .url('http://localhost:3001/#/announcements?id=23')
      .waitForElementVisible('.container-results .ann-item', 2000)
      .expect.element.('.ann-item').to.be.present.before(5000)
      .end();
  }
};
