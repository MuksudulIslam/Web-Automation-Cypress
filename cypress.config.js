const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      config.specPattern = [
        'cypress/e2e/loginRunner.cy.js',
        'cypress/e2e/appointmentRunner.cy.js'
      ]

      return config;
    },
  },
});
