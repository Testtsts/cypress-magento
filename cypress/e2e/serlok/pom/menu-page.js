exports.MenuPage = class MenuPage{
    static visit() {
        return cy.visit("https://esborder.qs.esb.co.id/SRLOK/SLK/home?mode=dinein");
    }

    static typeTableNumField(tableNumber) {
        return cy.get('#table-name-input').type(tableNumber);
    }

    static clickInputTableNum(){
        return cy.get('#submit-table-button > .mat-mdc-button-touch-target').click();
    }

    static continueAsGuest() {
        return cy.get('.mat-ripple:contains(Guest)').click();
    }

    static selectMenuCategory(index) {
        return cy.get(`.menu-category-container > :nth-child(${index})`).click();
    }

    static searchMenuItem(searchKeyword) {
        cy.get('[aria-label="search-button"]').click();
        return cy.get('.search-input').type(searchKeyword);
    }

    static addNthItemToCart(itemIndex) {
        return cy.get('.mdc-button__label:contains("Add")').eq(itemIndex).click({force:true})
    }

    static goToCart() {
        return cy.get('#itemsCart').click();
    }

    static continuePayment() {
        return cy.get('.mt-2 > .mat-mdc-button-touch-target').click();
    }

    static getTableNum(){
        return cy.get('#table-name-input')
    }

    static getPayButton(){
        return  cy.get('#p-payment');
    }

}

exports.ONLINE_ORDER_URL = "https://esborder.qs.esb.co.id/SRLOK/SLK/home?mode=dinein"