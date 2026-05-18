// Task 1 — Login Tests
// Website: https://www.saucedemo.com

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("Login Test 1: logs in with valid username and password", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory");
    cy.get(".inventory_list").should("be.visible");
  });

  it("Login Test 2: shows error message on incorrect password", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("wrongpassword123");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("be.visible");
    cy.get('[data-test="error"]').should(
      "contain",
      "Username and password do not match",
    );
  });

  it("Login Test 3: shows validation message when both fields are empty", () => {
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should("be.visible");
    cy.get('[data-test="error"]').should("contain", "Username is required");
  });
});
