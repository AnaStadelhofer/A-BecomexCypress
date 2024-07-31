/// <reference types="cypress"/>

require('cypress-xpath')

describe("Funcionalidade: Cadastrar contato", () => {

    beforeEach(() => {
        cy.viewport(1480, 920)
        cy.visit('https://www.narwalsistemas.com.br/blog/')
        cy.FecharPopup()
    });

    it('CT-004 - Acessar blog pelo menu', () => {

        cy.AcessarContato()

        cy.xpath("(//a[contains(text(), 'Blog')])[1]")
            .click()

        cy.get('.elementor-element-065f26a > .elementor-widget-container > .elementor-heading-title')
            .should('exist')
    })

    it('CT-005 - Pesquisar por uma máteria do blog', () => {

        cy.get('#elementor-search-form-01549fa')
            .type('agencia {enter}')

        cy.get('.page-header > .entry-title')
            .should('exist')

        cy.get('#content')
            .should('contain.text', 'Resultado')
    })

    it('CT-006 - Navegar pela páginação do blog', () => {

        cy.get('.prev')
            .should('not.exist')

        cy.get('.next')
            .click()

        cy.get('.prev')
            .should('exist')
    })
})

        