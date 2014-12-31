exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],

// Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
      isVerbose: true, // List all tests in the console
      includeStackTrace: true
  }
}

