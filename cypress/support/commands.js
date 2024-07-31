require('cypress-xpath')

Cypress.Commands.add('FecharPopup',() => {
    cy.xpath("(//img[@class='nld-close-white'])[2]").click()
})

Cypress.Commands.add('PreencherCamposObrigatoriosContato', (nome, email, telefone, empresa, segmento) => {

        cy.get('#wpforms-3901-field_1').type(nome)
        cy.get('#wpforms-3901-field_2').type(email)
        cy.get('#wpforms-3901-field_8').type(telefone)
        cy.get('#wpforms-3901-field_3').type(empresa)
        cy.get('#wpforms-3901-field_5').select(segmento)

})

Cypress.Commands.add('AcessarContato', () => {
    cy.xpath("(//*[@class='elementor-button-content-wrapper'])[1]").click()
})