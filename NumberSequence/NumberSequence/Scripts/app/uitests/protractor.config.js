exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Numbers.uitests.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
}

