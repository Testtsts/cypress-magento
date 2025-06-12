const { HomePage } = require('../pom/home-page');
const {CatalogSearch} = require('../pom/catalog-search');
const {ProductDetail} = require('../pom/product-detail');
const {GlobalElements} = require('../pom/global-element');


describe("add to cart function", ()=>{
	it("should succeed adding item to cart with selected size and color", ()=>{
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