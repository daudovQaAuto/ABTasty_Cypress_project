/// <reference types="Cypress" /> 

import { loginSSOPage } from "../support/pages/loginSsoPage" 
import { basePage } from "../support/pages/basePage";

const VALID_SSO_EMAIL = 'test@gmail.com'
const URL = 'https://app2.abtasty.com/login'
const HOME_PAGE_TITLE = "HEREs HOMEPAGE TITLE"

describe("SSO Login functionality", () => {
     it("ID5: Verify that a user can sign in with a valid email as the SSO user", () => {
      basePage.open(URL)
      basePage.checkHTTPSProtocol()
      basePage.setWindowResolution()
      loginSSOPage.clickButtonSSO()
      loginSSOPage.inputEmailSSO(VALID_SSO_EMAIL)
      loginSSOPage.clickButtonSignIn()
      cy.wait(3000)
     //remove this comment after entering the title text  basePage.checkHomePageTitle(HOME_PAGE_TITLE)
     });
   });