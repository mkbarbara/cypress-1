describe('template spec', () => {
  it("Should open the main page", () => {
    cy.visit("/");
    cy.contains('Books list');
  })
  it("Should successfully login", () => {
    cy.visit('/');
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  })
  it("Should not login with empty login", () => {
    cy.visit("/");
    cy.login("", "123");
    cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false')
  })
  it("Should not login with empty password", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "");
    cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false')
  })
})