exports.LoginPage = class LoginPage{
    
    static goto(){
        cy.visit('https://www.saucedemo.com/');
        return cy.get('.login_logo').should('contain', "Swag Labs");
    }

    static writeUserName(userName){
        return cy.get('[data-test="username"]').type(userName)
    }

    static writePassword(password){
        return cy.get('[data-test="password"]').type(password);
    }

    static clickLoginButton(){
        return cy.get('[data-test="login-button"]').click();
    }

}