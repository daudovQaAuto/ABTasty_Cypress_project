/// <reference types="Cypress" /> 

import { loginPage } from "../support/pages/LoginPage";
import { basePage } from "../support/pages/basePage";

const VALID_EMAIL = 'test@gmail.com'
const PASSWORD = 'testPassword123.'
const URL = 'https://app2.abtasty.com/login'
const HOME_PAGE_TITLE = "HEREs HOMEPAGE TITLE"

describe("Login functionality", () => {
    it("ID 1: Verify that a user can successfully log in with valid email and password", () => {
    basePage.open(URL)
    basePage.checkHTTPSProtocol()
    basePage.setWindowResolution()
    loginPage.inputEmail(VALID_EMAIL) 
    loginPage.inputPassword(PASSWORD)
    loginPage.buttonSignIn()
    cy.wait(3000)
    //remove this comment after entering the title text  basePage.checkHomePageTitle(HOME_PAGE_TITLE)
  });
});