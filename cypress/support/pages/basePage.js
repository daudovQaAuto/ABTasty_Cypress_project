export class BasePage {

    open(url){
        cy.visit(url)
    }
    checkHomePageTitle(){
        cy.title(HOME_PAGE_TITLE)
          .should('eq', HOME_PAGE_TITLE) 
    }

    setWindowResolution(){
        cy.viewport(1920,1080)
    }

    //just to show that we can =))
    checkHTTPSProtocol(){
        cy.location('protocol').should('eq', 'https:')
    }
}

export const basePage = new BasePage()