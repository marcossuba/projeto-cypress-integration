@home
Feature: Acesso à página de agendamento
  @home
  Scenario: Acessar a página de agendamento a partir da tela inicial
    Given que o usuário está na tela inicial do site do Fleury
    When o usuário clica no botão "Agendar"
    Then o usuário é redirecionado para a página de agendamento de exames