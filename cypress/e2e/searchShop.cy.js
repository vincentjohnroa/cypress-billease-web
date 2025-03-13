describe('Billease search functionality on /shops', () => {
  beforeEach(function(){
    cy.viewport(1500,1000);
  })

  it('should display relevant search results', () => {

    // navigate to https://billease.ph/shops/
    cy.visit('/')

    cy.searchShop(["Anker", "Kimstore", "Lazada", "Agoda", "Samsung", "Cabalen"]);
    cy.searchAndOpenAShop("Vivo", "/vivo");

    //go back to /shops and clear search field
    cy.get('a.nav-header').contains("Shops").click();

    // verify no search results for invalid input
    cy.searchInvalidShop("@#$%^$#%^&^");
    
  })
})
