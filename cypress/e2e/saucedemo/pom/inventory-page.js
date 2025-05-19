exports.InventoryPage = class InventoryPage{

    static clickNthAddToCartButton(index) {
        return cy.get('[data-test="inventory-item"] button').eq(index).click();

    }
    static getItemCount(indexVariable){
        // return cy.get('[data-test="inventory-item"] button').its('length').as(indexVariable);
        return cy.get('[data-test="inventory-item"] button').its('length');
    }

    static getShoppingCartBadge(){
        return cy.get('[data-test="shopping-cart-badge"]');
    }
}

exports.INVENTORY_PAGE_URL = "https://www.saucedemo.com/inventory.html"