describe('Billease search functionality by shop categories', () => {
    it('should display relevant search results based on category', () => {
  
      // navigate to https://billease.ph/shops/
      cy.navigateToBillease("/shops");
      cy.xpath('//input[@placeholder="Search shop"]').should('be.visible');
  
      cy.searchByCategory("Electronics");
      cy.searchShop(["Kimstore"]);
      cy.searchAndOpenAShop("Kimstore", "/kimstore");

      cy.xpath('//button[@aria-label="Expand sidebar"]').click();
      cy.xpath('//aside//a[text() = "Shops"]').click();

      cy.searchByCategory("Fashion");
      cy.searchShop(["Havaianas"]);
      cy.searchAndOpenAShop("Havaianas", "/havaianas");
      
    })
  })
