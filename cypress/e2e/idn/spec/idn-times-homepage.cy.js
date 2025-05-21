// import { HomePage } from '../pages/HomePage';
const {HomePage,CONNECT_SUBDOMAIN, PROFILE_SUBDOMAIN, MEDIA_SUBDOMAIN} = require('../pom/homepage')


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });

describe('HomePage Navigation', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it.skip('should redirect user to new page when clicking #GenZMemilih', () => {
    HomePage.clickGenZMemilih();
    cy.url().should('include', 'genzmemilih.idntimes.com');
  });

  it.skip('should redirect to login page when clicking Daftar/Masuk', () => {
    HomePage.clickJoinButton();
    cy.url().should('include', 'connect.idn.media');
  });

  it('should redirect to doctor profile when clicking Profil Dokter', () => {
    HomePage.clickProfilDokter();
    cy.origin(PROFILE_SUBDOMAIN,()=>{
        cy.url().should('include', 'profil.idntimes.com');
    });
  });

  it('should redirect to login page when clicking Community Menu', () => {
    HomePage.clickCommunityMenu();
    cy.origin(CONNECT_SUBDOMAIN,()=>{
        cy.url().should('include', 'connect.idn.media');
    })
  });

  it('should redirect to selected news page when clicking headline news', () => {
    HomePage.clickTechMenu();
    cy.url().should('include', '/tech');
    HomePage.clickBusinessMenu();
    cy.url().should('include', '/business');
    HomePage.clickHealthMenu();
    cy.url().should('include', '/health');
  });

  it('should redirect to career page when clicking career sidebar', () => {
    HomePage.clickCareerSidebar();
    cy.origin(MEDIA_SUBDOMAIN, ()=>{
        cy.url().should('include', 'idn.media/career');
    });
  });
});
