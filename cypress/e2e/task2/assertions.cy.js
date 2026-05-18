describe("Assertion Practice", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("Assertion 1: login page logo is visible", () => {
    cy.get(".login_logo").should("be.visible");
  });

  it("Assertion 2: login page heading has correct text", () => {
    cy.get(".login_logo").should("have.text", "Swag Labs");
  });

  it("Assertion 3: login button has type submit attribute", () => {
    cy.get("#login-button").should("have.attr", "type", "submit");
  });

  it("Negative Assertion: error message does not exist on page load", () => {
    cy.get('[data-test="error"]').should("not.exist");
  });
});
