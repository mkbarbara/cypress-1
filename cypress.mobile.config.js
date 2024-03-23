const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 1,
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  viewportWidth: 414,
  viewportHeight: 896,
});