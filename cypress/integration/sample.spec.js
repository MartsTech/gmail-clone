///  <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000/login");
  });
});
