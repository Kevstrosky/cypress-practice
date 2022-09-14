/// <reference types="Cypress"/>

//Suite de casos de prueba avanzados
describe('Segundo conjunto de casos de pruebas avanzadas',function(){
    beforeEach(()=>{
        //ingresamos a la pagina de formulario
        cy.visit('https://tienda.caffenio.com/')
    })
    it('test',()=>{
        cy.get('#SiteNavCompressed').click()
        cy.get(':nth-child(4) > .drawer__nav-link').click()
        
        cy.get(':nth-child(4) > .product-card > .product-card__info > .product-card__name').click()

        cy.get('#AddToCart-product-template_original').click()
        cy.get('#CartProducts > tr:nth-child(1) > td:nth-child(2) > a.h5.gsvalidated')
        .should('contain.text','Termo Cobalto de acero inoxidable capacidad 450 ml')
        cy.get('#CartSubtotal')
        .should('contain.text','$ 309.00')




        
    })

})
Cypress.on('uncaught:exception',(err,runnable)=>{
    console.log("err :"+ err)
    console.log("runnable :"+ runnable)
    return false
})