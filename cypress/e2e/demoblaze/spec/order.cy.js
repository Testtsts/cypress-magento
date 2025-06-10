const {fakerID_ID: faker} = require('@faker-js/faker');
const {HOMEPAGE_URL,DemoBlazePom} = require("../pom/pom");


describe("Demo Blaze Order", function(){

    beforeEach(()=>{
        DemoBlazePom.visit();
    })
    
    it("should success order item from cart", ()=>{
        DemoBlazePom.selectItemByName("Samsung galaxy s6");
        DemoBlazePom.addToCart();
        cy.go(-2);
        DemoBlazePom.selectItemByName("Nokia lumia 1520");
        DemoBlazePom.addToCart();
        DemoBlazePom.goToCart();
        DemoBlazePom.getTotalPrice().should('have.text', "1180")
    })

    it("should success delete item from cart", ()=>{
        DemoBlazePom.selectItemByName("Samsung galaxy s6");
        DemoBlazePom.addToCart();
        cy.go(-2);
        DemoBlazePom.selectItemByName("Sony xperia z5");
        DemoBlazePom.addToCart();
        cy.go(-2);
        DemoBlazePom.selectItemByName("HTC One M9");
        DemoBlazePom.addToCart();
        cy.go(-2);
        DemoBlazePom.selectItemByName("Nexus 6");
        DemoBlazePom.addToCart();
        DemoBlazePom.goToCart();
        DemoBlazePom.getTotalPrice().should('have.text', "2030")
        // DemoBlazePom.deleteTopItem();
        DemoBlazePom.removeItemFromCartByName("HTC One M9")
        DemoBlazePom.getTotalPrice().should('have.text', "1330")
    })
})