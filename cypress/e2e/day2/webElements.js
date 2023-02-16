///<reference types="cypress"/>

describe('Web Elements',()=>{

    it('First Test', ()=>{
        
        //tag name
        cy.get('input')
        
        //by ID
        cy.get('#email')
        cy.get('#yourPassword')

        //by className
        cy.get('.credits')
        cy.get('.row.justify-content-center')

        //attribute name
        cy.get('[enctype]')

        //by attribute name and value
        cy.get('[for="email"]')

        //by class value
        cy.get('[class="row g-3 needs-validation"]')

        //by tag name and attribute with value
        cy.get('form[class="row g-3 needs-validation"]')

        //by two different attributes or more
        cy.get('[for="email"][class="form-label"]')

        cy.contains('submit').click()

    })




})