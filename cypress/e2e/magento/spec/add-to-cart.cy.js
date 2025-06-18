const { HomePage } = require('../pom/home-page');
const {CatalogSearch} = require('../pom/catalog-search');
const {ProductDetail} = require('../pom/product-detail');
const {GlobalElements} = require('../pom/global-element');


describe("Magento Software Testing Boardas - Add to cart", ()=>{
	it("Adding Item to Cart with Selected Size and Color Should Show in Cart Badge", ()=>{
		HomePage.visitPage();
		HomePage.searchProducts("Pierce");
		CatalogSearch.getProducts().should('be.visible');
		CatalogSearch.getProducts().first().click();
		ProductDetail.getSizeOption().first().click();
		ProductDetail.getColorOption().first().click();
		ProductDetail.fillQtyField(5);
		ProductDetail.addToCartButton().click();
		GlobalElements.getCartCounter().should('contain.text',15);
	})
})