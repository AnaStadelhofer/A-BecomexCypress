/// <reference types="cypress"/>

describe("Testando API do GitHub", () => {
    const token = ' INSERA O TOKEN AQUI' // INFORME AQUI O TOKEN DO GITHUB
    const repositorio = 'teste-repositorio-api' //INFORME AQUI O NOME DO REPOSITÓRIO QUE SERÁ CRIADO PELA API
    const nome_usuario = 'SEU NOME DE USUÁRIO' //INFORME AQUI O NOME DO SEU USUÁRIO NO GITHUB

    it("Criando um repositório por API", () => {
        cy.request({
            method: 'POST',
            url: 'https://api.github.com/user/repos',
            headers: {
              Authorization: `token ${token}`
            },
            body: {
              name: repositorio,
              description: 'Criando um repositório por API',
              private: false
            }
          }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq(repositorio);
            console.log(response)
          });
    })

    it("Consultando o repositório criado", () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${nome_usuario}/${repositorio}`, 
            headers: {
                Authorization: `token ${token}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200) 
            expect(response.body.name).to.eq(repositorio)
            console.log(response)
        });
    })

    it('Criando uma issue do repositório', () => {
        cy.request({
            method: 'POST',
            url: `https://api.github.com/repos/${nome_usuario}/${repositorio}/issues`,
            headers: {
              Authorization: `token ${token}`
            },
            body: {
              title: `Issue do repositório ${repositorio}`,
              body: 'Issue criado por API'
            }
          }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.title).to.eq(`Issue do repositório ${repositorio}`)
            console.log(response)
          });
        
    })

    it("Verificando a issue criada", () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${nome_usuario}/${repositorio}/issues`,
            headers: {
                Authorization: `token ${token}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log(response)
        });
   
    })

    it("Excluindo o repositório", () => {
        cy.request({
            method: 'DELETE',
            url: `https://api.github.com/repos/${nome_usuario}/${repositorio}`,
            headers: {
              Authorization: `token ${token}`
            }
          }).then((response) => {
            
              expect(response.status).to.eq(204)
          });
    })

    it("Consultado o repositório excluido", () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/repos/${nome_usuario}/${repositorio}`, 
            headers: {
                Authorization: `token ${token}`
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404) 
            console.log(response) 
        });
   
    })
})