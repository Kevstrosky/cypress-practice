/// <reference types="Cypress"/>

//Suite de casos de prueba avanzados
describe('Segundo conjunto de casos de pruebas avanzadas',function(){
    before(function(){
        //Cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('saluddigna').then(function(datos){
            this.datos=datos
        })
    })
    beforeEach(()=>{
        //ingresamos a la pagina de formulario
        cy.visit('https://www.salud-digna.org/nutricion/')
    })

    it('Llenamos nuestro primer formulario utiizando data',function(){
        cy.get('#contenedorClinicaCercana').click()
        cy.wait(5000)
        cy.get('#cont-selecc-horario > form > div.contendor-inputs > div.contenedor-input-izq.inputFecha').click()
        cy.get(':nth-child(1) > :nth-child(6) > .ui-state-default').click()
        cy.get('.horarios-disponibles').click()
       /* cy.get('#cont-selecc-horario > form > div.contendor-inputs > div.contenedor-input-der > div:nth-child(1) > div > ul')
        .invoke('attr', 'style', 'display: block')
        .should('have.attr', 'style', 'display: block')*/

        cy.get('#nombre').type(this.datos.nombre)
        cy.get('#apellidoP').type(this.datos.apellidoPaterno)
        cy.get('#apellidoM').type(this.datos.apellidoMaterno)
        cy.get('#fecha').type(this.datos.fechaDeNacimiento)
        cy.get('#correo').type(this.datos.correo)
        cy.get('#telefono').type(this.datos.telefono)
        cy.get('#telefono2').type(this.datos.telefono)
        cy.get('#codigo-verificacion').type("523423")
        cy.get('#cita > div.container-cita1 > div.aviso_privacidad > div:nth-child(1) > div > label').click()
        cy.get('#cita > div.container-cita1 > div.aviso_privacidad > div:nth-child(2) > div > label').click()
    
    })
})
Cypress.on('uncaught:exception',(err,runnable)=>{
    console.log("err :"+ err)
    console.log("runnable :"+ runnable)
    return false
})