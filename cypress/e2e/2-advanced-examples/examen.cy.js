/// <reference types="Cypress"/>

//Suite de casos de prueba avanzados
describe('Segundo conjunto de casos de pruebas avanzadas',function(){
    beforeEach(()=>{
        //ingresamos a la pagina de formulario
        cy.visit('https://www.telcel.com/')
    })
    it('test',()=>{
        cy.get('#menu-principal')
        .invoke('attr', 'style', 'display: block')
        .should('have.attr', 'style', 'display: block')

        cy.get(':nth-child(3) > .black-mobile').click()

        cy.get('tbody > :nth-child(1) > :nth-child(1) > a > img').click()
        
        cy.get('#marca_nocliente_chosen')
        .invoke('attr', 'class', 'chosen-container chosen-container-single chosen-container-active chosen-with-drop')
        .should('attr', 'class', 'chosen-container chosen-container-single chosen-container-active chosen-with-drop')

        cy.get('#marca_nocliente_chosen > div > div > input').click()

        cy.get('#marca_nocliente_chosen > div > ul > li:nth-child(27)').click()

        cy.get('#entrarPerfilador').click()

        cy.get('#seleccion-de-equipos-sidebar-mosaicfilters > div:nth-child(23) > a')

        cy.get('#filtro-acordeon-Marca > fieldset > ul > li:nth-child(2) > div')
        .invoke('attr', 'class', 'checkbox focus')
        .should('have.attr', 'class', 'checkbox focus')
        
    })

})
Cypress.on('uncaught:exception',(err,runnable)=>{
    console.log("err :"+ err)
    console.log("runnable :"+ runnable)
    return false
})