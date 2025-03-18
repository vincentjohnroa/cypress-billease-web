const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "watchForFileChanges": false,
    "defaultCommandTimeout": 10000,
    "supportFile": "./cypress/support/commands.js",

    setupNodeEvents(on, config) {
    },
  },
});
