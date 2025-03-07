const { HomePage } = require('../pom/home-page');
const {CatalogSearch} = require('../pom/catalog-search')

describe('Search function', () => {
  it('search using keyword jacket should return relevant products', () => {
    HomePage.visitPage();
    HomePage.searchProducts("jacket");
    CatalogSearch.getProducts().should('be.visible');
    CatalogSearch.getProducts().each((element)=>{
      expect(element).to.contain("Jacket")
    })
  })
})