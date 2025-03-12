describe('Billease search functionality by shop categories', () => {
    it('should display relevant search results based on category', () => {
  
      // navigate to https://billease.ph/shops/
      cy.visit('/')
  
      cy.searchByCategory("Electronics");
      cy.searchShop("Kimstore");
      cy.selectAShop("Kimstore", "/kimstore");
      
    })
  })
