describe('Agregando un producto al carrito', function(){
    beforeEach(()=>{
        //Ingresamos a la página que donde se hará el testing
        cy.visit('https://store.dayglowband.com/');

    })

    it('Entrando a la página del artículo y agregandolo al carrito', function(){
        //Ingresamos al página del producto
        cy.get(':nth-child(1) > .grid-view-item > .grid-view-item__link').click()
        //Damos click al botón del producto para agregarlo al carrito
        cy.get('.product-form__item > .btn').click()

        //Con estas tres líneas de código verificamos si existosamente se agregó el producto al carrito
        cy.get('#CartPopupHeading')
        .should('contain.text','Just added to your cart')
        .should('be.visible')
    })

})
describe('Dropdown', function(){
    beforeEach(()=>{
        //Ingresamos a la página
        cy.visit('https://www.w3schools.com/howto/howto_css_dropdown.asp');

    })

    it('Verificamos que el drop down y sus elementos', function(){
        cy.get('#main > div.dropdown.dropdown2 > div')        
        .invoke('attr', 'style', 'display: block')
        .should('have.attr', 'style', 'display: block')
        cy.get('.dropdown-content > :nth-child(1)').should('be.visible')
        cy.get('.dropdown-content > :nth-child(2)').should('be.visible')
        cy.get('.dropdown-content > :nth-child(3)').should('be.visible')

    })
})