/// <reference types="Cypress"/>

//Suite de casos de prueba avanzados
describe('Segundo conjunto de casos de pruebas avanzadas',function(){
    beforeEach(()=>{
        //ingresamos a la pagina de formulario
        cy.visit('https://www.telcel.com/')
    })
    it('test',()=>{
        cy.get('#narbar-menu > ul > li:nth-child(6) > a').click()
    })

})
Cypress.on('uncaught:exception',(err,runnable)=>{
    console.log("err :"+ err)
    console.log("runnable :"+ runnable)
    return false
})