exports.ProductDetail = class ProductDetail {
  static getSizeOption(){
    return cy.get('.swatch-option.text');
  }

  static getColorOption(){
    return cy.get('.swatch-option.color');
  }

  static fillQtyField(number){
    return cy.get('#qty').type(number);
  }

  static addToCartButton(){
    return cy.get('#product-addtocart-button');
  }

}

