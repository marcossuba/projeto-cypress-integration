const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: 'q1d1a2',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      // outras configurações do plugin podem ser incluídas aqui
    },
    specPattern: 'cypress/integration/**/*.feature'
  }
});
