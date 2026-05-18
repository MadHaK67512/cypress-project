describe("Aliases and Custom Commands", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("Alias Practice: saves username field as alias and uses it twice", () => {
    cy.get("#user-name").as("usernameField");
    cy.get("@usernameField").type("standard_user");
    cy.get("@usernameField").should("have.value", "standard_user");
  });

  it("Custom Command: logs in using the custom cy.login() command", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory");
    cy.get(".inventory_list").should("be.visible");
  });
});
