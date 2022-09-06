/// <reference types="Cypress" />

describe('Segundo conjunto de casos de pruebas avanzadas', function(){

    before(function(){
        // cargamos los valores el archivo example.json en un objeto de datos
        cy.fixture('example').then(function(datos){
            this.datos = datos
            //cy.fixture(this.datos.imagen).as('imagen')
        })


    })

    beforeEach(()=> {
        //ingresamos a la pagina del formulario
        cy.visit('https://demoqa.com/automation-practice-form')
    })

    it('Llenamos nuestro primer formulario utilizando data', function(){
        
        cy.get('#firstName').type(this.datos.nombre)
        cy.get('#lastName').type(this.datos.apellido)
        cy.get('#userEmail').type(this.datos.email)
        cy.get('input[name="gender"][value='+this.datos.sexo+']').check({force: true}).should('be.checked')
        cy.get('#userNumber').type(this.datos.telefono)


        cy.get('#dateOfBirthInput').click()
        //Elegir Fecha de Nacimiento
        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.fechaDeNacimiento[0])
        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.fechaDeNacimiento[1])
        cy.get('.react-datepicker__day--0'+this.datos.fechaDeNacimiento[2]).should('be.visible').click()
        //Validar Fecha de nacimiento 
        /*cy.get('#dateOfBirthInput')
            .should('contain.value',this.datos.fechaDeNacimiento[0].substring(0,3))
            .should('contain.value',this.datos.fechaDeNacimiento[1])
            .should('contain.value',this.datos.fechaDeNacimiento[2])
*/
        //Checkbox Sports
        cy.get('div[class="custom-control custom-checkbox custom-control-inline"]')
        .contains('label',this.datos.hobbies[0])
        .parent().find('input')
        .check({force: true})

        //Checkbox Music
        cy.get('div[class="custom-control custom-checkbox custom-control-inline"]')
        .contains('label',this.datos.hobbies[1])
        .parent().find('input')
        .check({force: true}) 

        //Autocomplete
        cy.get('.subjects-auto-complete__value-container').type(this.datos.materia)
        /*cy.get('div[id^="react-select-"]').click()

        cy.get('.subjects-auto-complete__value-container').type("Maths")
        cy.get('div[id^="react-select-"]').click()

        cy.get('.subjects-auto-complete__value-container').should('contain.text', this.datos.materia)
        */

/*
        //Subir imagen
        cy.get('#uploadPicture').then(function($el){
            //convertir la imagen en un string de base64
            const blob = Cypress.Blob.base64StringToBlob(this.imagen, 'image/png')

            const file = new File([blob], this.datos.imagen, { type: 'image/png' })
            const list = new DataTransfer()
            
            list.items.add(file)
            const myFileList = list.files

            $el[0].files = myFileList
            $el[0].dispatchEvent(new Event('change', { bubbles: true }))

        })
    */
        
        //Direccion
        cy.get('#currentAddress').type(this.datos.direccion)

        //Estado y ciudad
        cy.get('#state').click()
        cy.get('div[class*=" css-26l3qy-menu"]').contains(this.datos.estado).click()

        cy.get('#city').click()
        cy.get('div[class*="menu"]').contains(this.datos.ciudad).click()

    })

     

})

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log("err :" + err)
    console.log("runnable :" + runnable)
    return false        
})