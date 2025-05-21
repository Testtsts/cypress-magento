const { HomePage } = require('../pom/home-page');
const {CatalogSearch} = require('../pom/catalog-search')

describe.skip('sort by price', () => {
	beforeEach(()=>{
		HomePage.visitPage();
    HomePage.searchProducts("jacket");
    CatalogSearch.getProducts().should('be.visible')
	})

	it('sort by price ascending should have item sorted by cheapest first', () => {
		CatalogSearch.sortByPrice();
		cy.url().should('contain',"product_list_order=price")
		CatalogSearch.getSortSwitcher().click({force:true});
		cy.url().should('contain',"product_list_dir=asc")
		CatalogSearch.getItemsPrice().then((el)=>{
			const innerText = ($el) => $el.innerText
			const digits = (str) => str.replace(/[^0-9.]/g, '')
			const prices = Cypress._.map(el, (price)=>parseFloat(digits(innerText(price))));
			const sorted = Cypress._.orderBy(prices,[],"asc")
			expect(prices).to.deep.equal(sorted)
		})
	})

	it('sort by price descending should have item sorted by most expensive first', () => {
		CatalogSearch.sortByPrice();
		cy.url().should('contain',"product_list_order=price")
		CatalogSearch.getItemsPrice().then((el)=>{
			const innerText = ($el) => $el.innerText
			const digits = (str) => str.replace(/[^0-9.]/g, '')
			const prices = Cypress._.map(el, (price)=>parseFloat(digits(innerText(price))));
			const sorted = Cypress._.orderBy(prices,[],"desc")
			expect(prices).to.deep.equal(sorted)
		})
	})
})