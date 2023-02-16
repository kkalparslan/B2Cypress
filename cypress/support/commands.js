// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginCommand', (username, password) => { 
    //log in
    cy.get('#login2').click().wait(500)
    //username
    cy.get('#loginusername').type(username).wait(500)
    //password
    cy.get('#loginpassword').type(password).wait(500)
    //Login btn
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click().wait(2000)

 })