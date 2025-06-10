exports.DemoBlazePom = class DemoBlazePom{
    static visit(){
        return cy.visit('https://www.demoblaze.com/')
    }

    static selectItemByName(itemName){
        return cy.get(".card-title").contains(itemName).click();
    }

    static addToCart(){
        return cy.get(".btn.btn-success.btn-lg").click();
    }

    static goToCart(){
        return cy.get("#cartur").click()
    }

    static removeItemFromCartByName(itemName){
        return cy.get(".success").contains(itemName).siblings().contains("Delete").click()
    }

    static getTotalPrice(){
        return cy.get("#totalp")
    }

    static placeOrder(){
        return cy.get(".btn.btn-success").click();
    }

    static fillName(name){
        return cy.get("#name").type(name);
    }
    
    static fillCountry(country){
        return cy.get("#country").type(country);
    }

    static fillCity(city){
        return cy.get('#city').type(city);
    }

    static fillCard(card){
        return cy.get('#card').type(card)
    }

    static fillMonth(month){
        return cy.get('#month').type(month)
    }

    static fillYear(year){
        return cy.get('#year').type(year)
    }

    static clickPurchase(){
        return cy.get(".btn.btn-primary").contains("Purchase").click();
    }

    static closeOrderSummary(){
        return cy.get(".confirm.btn.btn-lg.btn-primary").click();
    }
    
}

exports.HOMEPAGE_URL = "https://www.demoblaze.com/"