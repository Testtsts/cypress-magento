// cypress/pages/Homepage.js

exports.HomePage = class Homepage {
  static visit() {

    cy.intercept('GET', 'https://*googlesyndication.com*', { statusCode: 200, body: {} }).as('mockedRequest');

    cy.visit('https://www.idntimes.com/',{
      waitForAnimations: false,

      // onBeforeLoad: (win) => {
      //   // cy.stub(win,)
      //   return new Cypress.Promise((resolve) => {
      //     const loadEvent = new Event('load');
      //     win.document.addEventListener('DOMContentLoaded', () => {
      //       console.log('DOMContentLoaded event has been fired');
      //       win.dispatchEvent(loadEvent);
      //     });
      //   });
      // },
    });
    cy.window().then((win) => {
      if (win.document.readyState === 'complete') {
      } else {
        const loadEvent = new Event('load');
        win.dispatchEvent(loadEvent);
      }
    });

    
    cy.get('[data-testid="header-logo-img"]'  ).should('be.visible');
  }

  static clickGenZMemilih() {
    return cy.contains('#GenZMemilih').click();
  }

  static clickJoinButton() {
    return cy.get('[data-testid="join-btn"]').click();
  }

  static clickProfilDokter() {
    return cy.contains('Profil Dokter')
    .invoke('removeAttr','target')
    .click({ 
      animationDistanceThreshold: 20,
      force:true
     });
  }

  static clickCommunityMenu() {
    return cy.get('[data-testid="menu-community-link"]').click();
  }

  static clickBusinessMenu() {
    return cy.get('[data-testid="menu-business-link"]').click();
  }

  static clickTechMenu() {
    return cy.get('[data-testid="menu-tech-link"]').click();
  }

  static clickHealthMenu() {
    return cy.get('[data-testid="menu-health"]').click();
  }

  static clickCareerSidebar() {
    return cy.get('[data-testid="sidebar-career"] > a')
    .invoke('removeAttr','target')
    .click();
  }

};

exports.PROFILE_SUBDOMAIN = 'https://profil.idntimes.com'
exports.CONNECT_SUBDOMAIN = 'https://connect.idn.media'
exports.MEDIA_SUBDOMAIN = 'https://www.idn.media'