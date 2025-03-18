require('cypress-xpath');
import "cypress-real-events";


Cypress.Commands.add('navigateToBillease', (url) => {
    cy.visit(`https://billease.ph${url}`);
    cy.url().should('include', (url));
})

Cypress.Commands.add('searchShop', (shops) => {
    shops.forEach((shop) => {
        cy.xpath('//input[@placeholder="Search shop"]').clear().type(shop).realPress('Enter');
        cy.xpath(`//div//span[contains(@class, "text-shop-title")][contains(string(), "${shop}")]`).should("be.visible");
    });
});

Cypress.Commands.add('searchByCategory', (category) => {
    cy.xpath('//button[@class="lg:hidden pr-2 flex justify-start"]').click();
    cy.contains(category).click();
    cy.xpath(`//div[contains(@class, "text-subHeader")][contains(string(), "${category}")]`).should("be.visible");  
})

Cypress.Commands.add('searchAndOpenAShop', (shop, shopURL) => {
    cy.xpath('//input[@placeholder="Search shop"]').clear().type(shop).realPress('Enter');
    cy.xpath(`//div//span[contains(@class, "text-shop-title")][contains(string(), "${shop}")]`).should("be.visible")
    .click();
    cy.url().should('include', shopURL);
    cy.xpath('//button[@data-cy="btn-apply-now"]').should('be.visible');
})

Cypress.Commands.add('searchInvalidShop', (shop, errorMessage) => {
    cy.xpath('//input[@placeholder="Search shop"]').clear().type(shop).realPress('Enter');
    cy.xpath(`//span[text() = "${errorMessage}"]`).should('be.visible');
})
