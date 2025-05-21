// const baseUrl= "https://esborder.qs.esb.co.id/SRLOK/SLK/home?mode=dinein"
const {MenuPage,ONLINE_ORDER_URL} = require('../pom/menu-page');


describe("serlok online menu order", ()=> {
    it('Should able to see order summary', function(){
        cy.visit(ONLINE_ORDER_URL);
        MenuPage.typeTableNumField("180");
        MenuPage.clickInputTableNum();
        MenuPage.selectMenuCategory(3);
        MenuPage.searchMenuItem("ayam");
        MenuPage.addNthItemToCart(0);
        MenuPage.addNthItemToCart(1);
        MenuPage.goToCart();
        cy.url().should('contain',"view-order");
        MenuPage.continuePayment();
        cy.url().should('contain',"payment");
        MenuPage.continueAsGuest();
        MenuPage.getTableNum().should('have.value','180')
        MenuPage.getPayButton().should('be.visible');
    })
})