export class LoginSSOPage {
    clickButtonSSO(){
        cy.get('button[class*="_button_wtpfo_184"]:nth-child(2)')
          .should("be.visible")
          .click()
    }
    
    inputEmailSSO(EMAIL_SSO){
        cy.get('[type="email"]')
          .type(EMAIL_SSO)
    }
    
    clickButtonSignIn() {
        cy.get('button[class*="_button_wtpfo_184"]:first-child')
        .should("be.visible")
        .click()
    }
    
}

export const loginSSOPage = new LoginSSOPage();