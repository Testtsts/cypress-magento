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
        DemoBlazePom.clickHomeButton();
        DemoBlazePom.selectItemByName("Nokia lumia 1520");
        DemoBlazePom.addToCart();
        DemoBlazePom.goToCart();
        DemoBlazePom.getTotalPrice().should('have.text', "1180");
        DemoBlazePom.placeOrder();
        DemoBlazePom.fillName(faker.person.fullName())
        DemoBlazePom.fillCountry("Indonesia");
        DemoBlazePom.fillCity(faker.location.city());
        DemoBlazePom.fillCard(faker.finance.accountNumber());
        DemoBlazePom.fillMonth(faker.date.month());
        DemoBlazePom.fillYear("2030");
        DemoBlazePom.clickPurchase();
        DemoBlazePom.closeOrderSummary();
        cy.reload()
        DemoBlazePom.getTotalPrice().should('not.be.visible');
    })

    it("should success delete item from cart", ()=>{
        DemoBlazePom.selectItemByName("Samsung galaxy s6");
        DemoBlazePom.addToCart();
        DemoBlazePom.clickHomeButton();
        DemoBlazePom.selectItemByName("Sony xperia z5");
        DemoBlazePom.addToCart();
        DemoBlazePom.clickHomeButton();
        DemoBlazePom.selectItemByName("HTC One M9");
        DemoBlazePom.addToCart();
        DemoBlazePom.clickHomeButton();
        DemoBlazePom.selectItemByName("Nexus 6");
        DemoBlazePom.addToCart();
        DemoBlazePom.goToCart();
        DemoBlazePom.getTotalPrice().should('have.text', "2030")
        DemoBlazePom.removeItemFromCartByName("HTC One M9")
        DemoBlazePom.getTotalPrice().should('have.text', "1330")
    })
})