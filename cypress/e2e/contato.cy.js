/// <reference types="cypress"/>

require('cypress-xpath')

describe("Funcionalidade: Cadastrar contato", () => {

    beforeEach(() => {
        cy.viewport(1480, 920)
        cy.visit('https://www.narwalsistemas.com.br/')
        cy.FecharPopup()
        cy.AcessarContato()
    });

    it('CT-001 - Obrigatóriedade de todos campos', () => {

        // Verifica se um dos campos de erro não está aparecendo/existindo
        cy.get('#wpforms-3901-field_1-error')
            .should('not.exist')

        cy.get('#wpforms-submit-3901')
            .click()

        // Valida se todas as mensagem de erros existem em tela
        cy.get('#wpforms-3901-field_1-error')
            .should('exist')

        cy.get('#wpforms-3901-field_2-error')
            .should('exist')

        cy.get('#wpforms-3901-field_8-error')
            .should('exist')
            
        cy.get('#wpforms-3901-field_3-error')
            .should('exist')
    })

    it('CT-002 - Alterando o valor padrão de segmento', () => {

        cy.get('[id=wpforms-3901-field_5]')
            .select("Trading")
            .should('have.value', 'Trading')

    })

    it('CT-003 - Validar captcha', () => {

        cy.PreencherCamposObrigatoriosContato('Nome', 
            'Email@teste.com', 
            123, 
            'Empres y',
            'Exportação'
        )

        cy.get('#wpforms-submit-3901')
            .click()

        cy.get('#wpforms-field_recaptcha-error')
            .should('exist')
    })
})

        