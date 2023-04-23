export class LoginPage {
    inputEmail(VALID_EMAIL){
        cy.get('#email')
          .type(VALID_EMAIL)
    }
    
    inputPassword(PASSWORD){
        cy.get('#password')
          .type(PASSWORD)
    }

    buttonSignIn(){
        cy.get('[class*="_button_"]:first-child')
          .should("be.visible")
          .click()
    }
}

export const loginPage = new LoginPage();