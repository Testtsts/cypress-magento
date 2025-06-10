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

    static deleteTopItem(){
        return cy.get(".success").contains("Delete").first().click()
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
    
}

exports.HOMEPAGE_URL = "https://www.demoblaze.com/"