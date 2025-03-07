const { HomePage } = require('../pom/home-page');
const {CatalogSearch} = require('../pom/catalog-search')

describe('sort by price', () => {
	beforeEach(()=>{
		HomePage.visitPage();
    HomePage.searchProducts("jacket");
    CatalogSearch.getProducts().should('be.visible')
	})

	it('sort by price ascending should have item sorted by cheapest first', () => {
		CatalogSearch.sortByPrice();
		CatalogSearch.getSortSwitcher().click();
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
		CatalogSearch.getItemsPrice().then((el)=>{
			const innerText = ($el) => $el.innerText
			const digits = (str) => str.replace(/[^0-9.]/g, '')
			const prices = Cypress._.map(el, (price)=>parseFloat(digits(innerText(price))));
			const sorted = Cypress._.orderBy(prices,[],"desc")
			expect(prices).to.deep.equal(sorted)
		})
	})
})