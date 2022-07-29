const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cypress.io',
    defaultCommandTimeout: 15000,
    video: true,
    videoCompression: 0,
    videoUploadOnPasses: false,
    environment: 'dev',
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**.spec.js',
    setupNodeEvents(on, config) {
      require('cypress-failed-log/on')(on)
    },
  },
})
