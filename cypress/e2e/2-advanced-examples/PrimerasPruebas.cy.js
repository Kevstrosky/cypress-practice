//Suite de casos que contiene cada caso
describe('Primer conjunto de casos de prueba', function(){

    beforeEach(()=>{
        //Ingresamos a la página
        cy.visit("http://automationpractice.com/index.php");

    })

    //Caso de prueba 1
    /*
    it('Ingresar a la página principal de Atenea', function(){
  
        //verificar la cantidad de elementos visibles
        //agregamos should para el manejo de las assertionError, en este caso la prueba es erronea
        cy.get('#homefeatured .product-container').should('have.length', 7);

        //obtenemos el elemento homefeatured .product-container como parametro
        cy.get('#homefeatured .product-container').as('ProductosPopulares');

        //verificamos nuevamente la cantidad de elemntos utilizados en el parametro
        cy.get('@ProductosPopulares').should('have.length',7);
        
    });
    */

    //Caso de prueba 2
    it('Agregar el elemento de tipo "blouse" al carrito de compra desde la página principal', function(){
        
        //Obtenemos el elemento homefeatured .product-container como un parametro
        cy.get('#homefeatured .product-container').as('ProductosPopulares');

        //Iteramos para encontrar un producto con nombre X
        cy.get('@ProductosPopulares')
        .find('.product-name')
        .each(($el,index,$list) =>{

            cy.get('@ProductosPopulares').eq(index).find('.price').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)

            if($el.attr('title') === 'Printed Dress' && precio.includes('50.99')){
                cy.log('Se ha encontrado el elemento buscado')
                cy.log('Se ha encontrado el precio buscado')
                cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click();
            }
        })
        })
        cy.get('h2 > .ajax_cart_product_txt')
        .should('contain.text','There is 1 item in your cart.')
        .should('be.visible')


    })

});