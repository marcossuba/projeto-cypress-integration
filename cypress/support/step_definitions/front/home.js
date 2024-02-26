// home.js

const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

// Adicione isso no início do seu arquivo de definição de passos
Cypress.on('uncaught:exception', (err, runnable) => {
  // retornar false aqui previne o Cypress de falhar o teste
  return false;
});

Given('que o usuário está na tela inicial do site do Fleury', () => {
  cy.visit('https://www.fleury.com.br');
  debugger; 
});

When('o usuário clica no botão "Agendar"', () => {
  cy.clickAgendar();
});

Then('o usuário é redirecionado para a página de agendamento de exames', () => {
  // Substitua '/paginaDeAgendamento' pelo caminho real da página de agendamento.
  cy.url().should('include', '/paginaDeAgendamento');
});
