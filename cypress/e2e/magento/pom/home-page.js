exports.HomePage = class HomePage {
    static searchProducts(keyword){
        return cy.get('#search').type(keyword + `{enter}`);
    }
    static visitPage(){
        cy.visit("https://magento.softwaretestingboard.com/");
    }
}