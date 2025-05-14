exports.InventoryPage = class InventoryPage{

    static clickNthAddToCartButton(index) {
        return cy.get('[data-test="inventory-item"] button').eq(index).click();

    }
    static getItemCount(){
        return cy.get('[data-test="inventory-item"] button').its('length');
    }
}

exports.INVENTORY_PAGE_URL = "https://www.saucedemo.com/inventory.html"