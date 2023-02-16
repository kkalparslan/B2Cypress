///<reference types="cypress"/>

describe("Login Test Custom Commands", () => {
    it("TC02 Positive Scenario", () => {

        cy.visit(Cypress.env('baseUrl'))
        cy.loginCommand(Cypress.env('username', Cypress.env('password')))
        cy.get('#nameofuser').should("be.visible")
    })
})