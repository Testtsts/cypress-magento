const {fakerID_ID: faker} = require('@faker-js/faker');
const {HOMEPAGE_URL,DemoBlazePom} = require("../pom/pom");


describe("Demo Blaze Order", function(){

    beforeEach(()=>{
        DemoBlazePom.visit();
        cy.url().should("eq",HOMEPAGE_URL)
    })
    
    it("should success order item from cart", ()=>{
        DemoBlazePom.selectItemByName("Samsung galaxy s6");
        DemoBlazePom.addToCart();
        // DemoBlazePom.clickHomeButton();
        // DemoBlazePom.selectItemByName("Nokia lumia 1520");
        // DemoBlazePom.addToCart();
        DemoBlazePom.goToCart();
        DemoBlazePom.getTotalPrice().should('have.text', "360");
        DemoBlazePom.placeOrder();
        DemoBlazePom.fillName(faker.person.fullName())
        DemoBlazePom.fillCountry("Indonesia");
        DemoBlazePom.fillCity(faker.location.city());
        DemoBlazePom.fillCard(faker.finance.accountNumber());
        DemoBlazePom.fillMonth(faker.date.month());
        DemoBlazePom.fillYear("2030");
        DemoBlazePom.clickPurchase();
        DemoBlazePom.closeOrderSummary();
        DemoBlazePom.visit();
        DemoBlazePom.goToCart();
        DemoBlazePom.getTotalPrice().should('have.text','');
    })

    it("should success delete item from cart", ()=>{
        DemoBlazePom.selectItemByName("Samsung galaxy s6");
        DemoBlazePom.addToCart();
        DemoBlazePom.clickHomeButton();
        DemoBlazePom.selectItemByName("Sony xperia z5");
        DemoBlazePom.addToCart();
        // DemoBlazePom.clickHomeButton();
        // DemoBlazePom.selectItemByName("HTC One M9");
        // DemoBlazePom.addToCart();
        // DemoBlazePom.clickHomeButton();
        // DemoBlazePom.selectItemByName("Nexus 6");
        // DemoBlazePom.addToCart();
        DemoBlazePom.goToCart();
        DemoBlazePom.getTotalPrice().should('have.text', "680")
        DemoBlazePom.removeItemFromCartByName("Samsung galaxy s6")
        DemoBlazePom.getTotalPrice().should('have.text', "320")
    })
})