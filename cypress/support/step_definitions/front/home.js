// home.js

const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('que o usuário está na tela inicial do site do Fleury', () => {
  cy.visit('https://www.fleury.com.br');
});

When('o usuário clica no botão "Agendar"', () => {
  // Substitua 'seletorDoBotão' pelo seletor real do botão Agendar.
  cy.get('seletorDoBotão').click();
});

Then('o usuário é redirecionado para a página de agendamento de exames', () => {
  // Substitua '/paginaDeAgendamento' pelo caminho real da página de agendamento.
  cy.url().should('include', '/paginaDeAgendamento');
});
