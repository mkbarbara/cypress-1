describe('template spec', () => {
  it.skip("Should open the main page", () => {
    cy.visit("/");
    cy.contains('Books list');
  })
  it.skip("Should successfully login", () => {
    cy.visit('/');
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  })
  it.skip("Should not login with empty login", () => {
    cy.visit("/");
    cy.login("", "123");
    cy.get('#mail').then($el => $el[0].checkValidity()).should('be.false')
  })
  it.skip("Should not login with empty password", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "");
    cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false')
  })
  it.skip("Should successfully add book", () => {
    cy.visit('/');
    cy.login("bropet@mail.ru", "123");
    cy.addbook();
    cy.contains("Title").should("be.visible");
  })
  it.skip("Should successfully add favorites", () => {
    cy.visit('/');
    cy.login("bropet@mail.ru", "123");
    cy.addbook();
    cy.contains("Add to favorite").click();
    cy.contains("Delete from favorite").should("be.visible");
    cy.contains("Delete from favorite").click();
    cy.contains("Add to favorite").should("be.visible");
  })
  it("Should successfully look book", () => {
    cy.visit('/');
    cy.login("bropet@mail.ru", "123");
    cy.addbook();
    cy.contains("Add to favorite").click();
    cy.contains("Delete from favorite").click();
    cy.contains("Add to favorite").should("be.visible");
  })
})