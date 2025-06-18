const {InventoryPage, INVENTORY_PAGE_URL} = require('../pom/inventory-page');
const {CheckoutComplete, CHECKOUT_COMPLETE_URL, CHECKOUT_ONE_URL, CHECKOUT_TWO_URL, ORDER_COMPLETED_STRING} = require('../pom/checkout-process');
const {CartPage, CART_PAGE_URL} = require("../pom/cart-page");
const {fakerID_ID: faker} = require('@faker-js/faker');
const {LoginPage} = require('../pom/login-page')

const STANDARD_USERNAME = "standard_user";
const GENERIC_PASSWORD = "secret_sauce";

describe('Swag Labs SauceDemo - Order',  function (){

    it('Should Receive Order Complete Message After Finishing Order', ()=>{
        LoginPage.goto();
        LoginPage.writeUserName(STANDARD_USERNAME);
        LoginPage.writePassword(GENERIC_PASSWORD);
        LoginPage.clickLoginButton();
        cy.url().as('urii').should('eq',INVENTORY_PAGE_URL);
        InventoryPage.getItemCount('availableItemCount').then( ($availableItemCount)=>{
            
            let randomIndex1 = Math.floor(Math.random() * $availableItemCount);
            let randomIndex2 = Math.floor(Math.random() * $availableItemCount);
            while (randomIndex1 == randomIndex2){
                randomIndex2 = Math.floor(Math.random() * $availableItemCount);
            }
            InventoryPage.clickNthAddToCartButton(randomIndex1);
            InventoryPage.clickNthAddToCartButton(randomIndex2);
                
        });
        InventoryPage.getShoppingCartBadge().should('contain.text','2');
        InventoryPage.getShoppingCartBadge().click();
        cy.url().should('eq',CART_PAGE_URL);
        CartPage.clickNthRemoveItemButton(0);
        CartPage.getItemCount().should('eq',1);
        CartPage.clickCheckoutButton();
        cy.url().should('eq',CHECKOUT_ONE_URL);
        CheckoutComplete.fillFirstName(faker.person.firstName());
        CheckoutComplete.fillLastName(faker.person.lastName());
        CheckoutComplete.fillPostalCode(faker.location.zipCode());
        CheckoutComplete.clickContinueButton();
        cy.url().should('eq',CHECKOUT_TWO_URL);
        InventoryPage.getShoppingCartBadge().should('contain.text','1');
        CheckoutComplete.clickFinishButton();
        cy.url().should('eq',CHECKOUT_COMPLETE_URL);
        CheckoutComplete.getCompleteHeader().should('contain.text',ORDER_COMPLETED_STRING)
    })

})