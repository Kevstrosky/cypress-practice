describe('Agregando un producto al carrito', function(){
    beforeEach(()=>{
        //Ingresamos a la página
        cy.visit('https://store.dayglowband.com/');

    })

    it('Pulsando botón', function(){
        cy.get(':nth-child(1) > .grid-view-item > .grid-view-item__link').click()
        cy.get('.product-form__item > .btn').click()

        cy.get('#CartPopupHeading')
        .should('contain.text','Just added to your cart')
        .should('be.visible')
    })
})
describe('Dropdown', function(){
    beforeEach(()=>{
        //Ingresamos a la página
        cy.visit('https://erumerch.com/');

    })

    it('Verificamos que el drop down de Departamentos, tenga los elementos necesarios', function(){
        cy.get('.main-navigation > ul > li:nthchild(1) > ul ').invoke('attr', 'style', 'display: block')
    })
})