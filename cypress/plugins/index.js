// cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  
  // outras configurações de plugins podem ser feitas aqui

  return config;
};
