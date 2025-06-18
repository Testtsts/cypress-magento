const { HomePage } = require('../pom/home-page');
const {CatalogSearch} = require('../pom/catalog-search')

describe('Magento Software Testing Boardas - Search box', () => {
  it('Search Using Some Keyword Should Return Relevant Products', () => {
    HomePage.visitPage();
    HomePage.searchProducts("jacket");
    CatalogSearch.getProducts().should('be.visible');
    CatalogSearch.getProducts().first().should('contain',"Jacket")
  })
})