describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });

  it("Navigation Test 1: opens correct page when menu link is clicked", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#inventory_sidebar_link").should("be.visible").click();
    cy.get(".title").should("have.text", "Products");
    cy.url().should("include", "/inventory");
  });

  it("Navigation Test 2: visits cart page then goes back to inventory", () => {
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart");
    cy.get(".title").should("have.text", "Your Cart");
    cy.get("#continue-shopping").click();
    cy.url().should("include", "/inventory");
    cy.get(".title").should("have.text", "Products");
  });
});
