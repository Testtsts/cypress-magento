exports.CheckoutComplete = class CheckoutComplete{

    static getCompleteHeader(){
        return cy.get('[data-test="complete-header"]');
        
    }

    static fillFirstName(firstName){
        return cy.get('[data-test="firstName"]').type(firstName);
    }

    static fillLastName(lastName){
        return cy.get('[data-test="lastName"]').type(lastName);
    }

    static fillPostalCode(postalCode){
        return cy.get('[data-test="postalCode"]').type(postalCode);
    }
    
    static clickContinueButton(){
        return cy.get('[data-test="continue"]').click();
    }

    static clickFinishButton(){
        return cy.get('[data-test="finish"]').click();
    }

}

exports.CHECKOUT_COMPLETE_URL = "https://www.saucedemo.com/checkout-complete.html"

exports.ORDER_COMPLETED_STRING = "Thank you for your order!";

exports.CHECKOUT_ONE_URL = "https://www.saucedemo.com/checkout-step-one.html"

exports.CHECKOUT_TWO_URL = "https://www.saucedemo.com/checkout-step-two.html"