/// <reference types="Cypress" /> 

import Login from "../pageObject/LoginPage"

const EMAIL = 'test@gmail.com'
const PASSWORD = 'testPassword123.'
const URL = 'https://app2.abtasty.com/login'

describe("Login functionality", () => {

  const login = new Login()

  it("should log in with valid email and password", () => {
    cy.visit(URL)
    cy.viewport(1920,1080)
    cy.location('protocol').should('eq', 'https:')
    login.inputEmail()
         .type(EMAIL)
    login.inputPassword()
         .type(PASSWORD)
    login.buttonSignIn()
         .should("be.visible")
         .click()
    cy.get('[class*="LoginForm__c"]')
         .should("be.visible");
    //cy.title().should('eq', 'HERE SHOULD BE TITLE')    
  });
});
