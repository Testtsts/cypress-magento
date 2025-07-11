exports.CatalogSearch = class CatalogSearch {
  static getProducts(){
    return cy.get('.product-item-link');
  }
  static getSorter(){
    return cy.get('#sorter').first();
  }
  static getSortSwitcher(){
    return cy.get("[data-role='direction-switcher']").first();
  }
  static getItemsPrice(){
    return cy.get('.price')
  }
  static getNthItemPrice(index){
    return cy.get('.price').eq(index);
  }

  static sortByPrice(){
    return this.getSorter().select("Price");
    // return this.getSorter().find("[selected='selected']").contains('Price').should('exist');
  }

}