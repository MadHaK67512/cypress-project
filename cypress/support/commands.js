// cypress/support/commands.js
// Custom reusable commands for the test suite

// cy.login(username, password)
// Usage: cy.login('standard_user', 'secret_sauce')
// Fills username & password fields and clicks login button
Cypress.Commands.add("login", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});
