
// cypress referance type
///<reference types="cypress"/>

//visit
cy.visit('open url')
cy.visit('url',{timeout:10000})

// should is a promise in here
cy.url().should('include', path)

//finding the element
cy.get(loc).click // loc is referencemlocator
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')

//negative
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

cy.get('h1').should('have.text','should')
cy.get('h2').should('have.text','Syntex')

// parent to child or child to parent
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(3).click

cy.get(loc).next().click
//if you dont use the multiple true it will throw an exeption
cy.go('back')//come to previous page come after test
cy.get("tbody tr").nextAll.click({multiple : true}) // web table like "t-body" click each of one by one

cy.get(loc).prev().click() //previous one
cy.get(loc).prevAll().click()

//position handling
cy.get(loc).click('top')
cy.get(loc).click('buttom')
cy.get(loc).click('topLeft')

//hover handling
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click()
cy.get(loc).trigger('mousedown').click()

//login
cy.get("#email").clear.type('email@kraftech.com')



