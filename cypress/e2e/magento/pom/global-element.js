exports.GlobalElements = class GlobalElements {
    static getShowCart(){
        return cy.get('.action.showcart');
    }
    static getCartCounter(){
        return cy.get('.counter-number')
    }
}