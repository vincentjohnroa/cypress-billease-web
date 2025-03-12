require('cypress-xpath');
import "cypress-real-events";


Cypress.Commands.add('searchShop', (shop) => {
    cy.xpath('//input[@placeholder="Search shop"]').type(shop).realPress('Enter');
    cy.xpath(`//h1[contains(string(), ${shop})]`).should('be.visible');
})

Cypress.Commands.add('clearSearchInput', () => {
    cy.xpath('//input[@placeholder="Search shop"]').click().clear();
})

Cypress.Commands.add('searchByCategory', (category) => {
    cy.xpath('//button[@class="lg:hidden pr-2 flex justify-start"]').click();
    cy.contains(category).click();
    cy.xpath(`//div[contains(@class, "text-subHeader")][contains(string(), "${category}")]`).should("be.visible");  
})

Cypress.Commands.add('selectAShop', (shop, shopURL) => {
    cy.xpath(`//div//span[contains(@class, "text-shop-title")][contains(string(), "${shop}")]`).should("be.visible")
    .click();
    cy.url().should('include', shopURL);
    cy.xpath('//button[@data-cy="btn-apply-now"]').should('be.visible');
})

Cypress.Commands.add('searchInvalidShop', (shop) => {
    cy.xpath('//input[@placeholder="Search shop"]').type(shop).realPress('Enter');
    cy.xpath('//span[text() = "No result found."]').should('be.visible');
})
