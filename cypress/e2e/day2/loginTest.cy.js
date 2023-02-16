///<reference types="cypress"/>

describe("Login Test", () => {
    it("TC01 Positive Scenario", () => {

        cy.visit("https://www.demoblaze.com/")
        //cy.viewport(800,1080)
        cy.viewport("macbook-11")
        cy.get('#login2').click().wait(500)
        cy.get('#loginusername').type("JhonyQ").wait(500)
        cy.get('#loginpassword').type("Test1234").wait(500)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            .click()
            cy.get('#nameofuser').should("be.visible")
    })
})