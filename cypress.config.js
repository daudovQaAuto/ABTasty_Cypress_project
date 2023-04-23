const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app2.abtasty.com/login',
    excludeSpecPattern: "**/examples/*"
  },
})
