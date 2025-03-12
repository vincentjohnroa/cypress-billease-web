const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "watchForFileChanges": false,
    "baseUrl": "https://billease.ph/shops/",
    "defaultCommandTimeout": 10000,
    "supportFile": "./cypress/support/commands.js",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
