exports.CartPage = class CartPage{

    static clickNthRemoveItemButton(index){
        return cy.get('[data-test="inventory-item"] button').eq(index).click();
    }

    static getItemCount(){
        return cy.get('[data-test="inventory-item"] button').its('length');
    }

    static clickCheckoutButton(){
        return cy.get('[data-test="checkout"]').click();
    }

}

exports.CART_PAGE_URL = "https://www.saucedemo.com/cart.html"