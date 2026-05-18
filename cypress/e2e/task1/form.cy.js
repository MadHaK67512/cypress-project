describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".btn_inventory").first().click();
    cy.get(".shopping_cart_link").click();
  });

  it("Form Test 1: fills checkout form and reaches order summary page", () => {
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Ali");
    cy.get('[data-test="lastName"]').type("Ahmed");
    cy.get('[data-test="postalCode"]').type("54000");
    cy.get('[data-test="continue"]').click();
    cy.url().should("include", "/checkout-step-two");
    cy.get(".summary_info").should("be.visible");
  });
});
