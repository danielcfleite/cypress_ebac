/// <reference types="cypress" />

describe('tests for contacts functionalities', () => {

  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })


  it('should be able to create and delete a contact', () => {
    cy.get('.delete').click({ multiple: true })
    cy.get('input[type="text"]').type('Daniel Carvalho')
    cy.get('input[type="email"]').type('danielcarvalho@teste.com.br')
    cy.get('input[type="tel"').type('(12) 123456789')
    cy.get('button[type="submit"]').click()
    cy.get('li').contains('Daniel Carvalho')
    cy.get('li').contains('(12) 123456789')
    cy.get('li').contains('danielcarvalho@teste.com.br')
    cy.get('.delete').click({ multiple: true })
    cy.get('li').should('not.exist')
  }),
  it('should be able to edit a contact', ()=>{
    cy.get('input[type="text"]').type('Maria Luiza')
    cy.get('input[type="email"]').type('marialuiza@teste.com.br')
    cy.get('input[type="tel"').type('(12) 123456789')
    cy.get('button[type="submit"]').click()
    cy.get('.edit').click({ multiple: true })
    cy.get('input[type="text"]').clear()
    cy.get('input[type="text"]').type('Maria Clara')
    cy.get('.alterar').click()
    cy.get('li').contains('Maria Clara')
  })
})