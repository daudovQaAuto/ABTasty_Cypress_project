

it ('By id', ()=> {
    cy.visit ('https://app2.abtasty.com/login')
    cy.get('#email')
})

it ('By Class', ()=> {
    cy.visit ('https://app2.abtasty.com/login')
    cy.get('._commonInput_v5fef_184')
})

it ('By Tag', ()=> {
    cy.visit ('https://app2.abtasty.com/login')
    cy.get('._commonInput_v5fef_184')
})

it.only ('By Value', ()=> {
    cy.visit ('https://app2.abtasty.com/login')
    cy.get('._commonInput_v5fef_184')
})

//still creating