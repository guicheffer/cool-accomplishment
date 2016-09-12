require('selenium-download').ensure('./bin', function(error) {
   if (error) {
     return console.log(error);
   } else {
     console.log('✔ Selenium & Chromedriver downloaded to:', './bin');
   }
});

module.exports = {
  "src_folders": [
    "./tests/dashboard.js"
  ],
  "output_folder": "./reports",
  "selenium": {
    "start_process": true,
    "server_path": "./bin/selenium.jar",
    "cli_args": {
      "webdriver.chrome.driver" : "./node_modules/nightwatch/bin/chromedriver"
    }
  },
  "test_settings": {
    "test": {
      "launch_url" : "http://localhost",
      "selenium_port"  : 3000,
      "selenium_host"  : "localhost",
      "screenshots": {
        "enabled": true,
        "path": './screenshots'
      },
      "globals": {
        "waitForConditionTimeout": 5000
      },
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true
      }
    }
  }
}
