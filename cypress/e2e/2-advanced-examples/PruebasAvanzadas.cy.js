describe('Tercer feature de casos avanzados', function(){
    this.beforeEach(()=>{
        //Ingresar a la página de compra de artículos tecnológicos
        cy.visit('https://demo.opencart.com/index.php')
    })

        //Caso 7
    it('Analizar compra de celulares basados en su título', function(){

        cy.get('#narbar-menu > ul > li:nth-child(6) > a').click()

        //cy.get('#content > div.row > div:nth-child(3) > form > div > div.content > div.button-group > button:nth-child(1)').click()
    })
})