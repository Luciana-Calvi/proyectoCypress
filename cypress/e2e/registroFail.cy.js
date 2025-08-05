import registro from './selectores/registro'

describe('Test Web Automation in testing',{testIsolation:false}, () =>{

    var misDatos;

    it('Registrarse en la página', () =>{

        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.fixture('./userRegistroFail')
            .then(mis_test => {
                misDatos = mis_test;
            })
    })

    it('Completar formulario login', () =>{

        cy.mi_click(registro.form.buttonSignIn)
        cy.mi_click(registro.form.buttonRegisterNow)

        cy.escribir(registro.form.userId,misDatos.userId)
        cy.escribir(registro.form.newPassword,misDatos.newPassword)
        cy.escribir(registro.form.repeatPassword,misDatos.repeatPassword)
        cy.escribir(registro.form.firstName,misDatos.firstName)
        cy.escribir(registro.form.lastName,misDatos.lastName)
        cy.escribir(registro.form.email,misDatos.email)
        cy.escribir(registro.form.phone,misDatos.phone)
        cy.escribir(registro.form.addressUno,misDatos.addressUno)
        cy.escribir(registro.form.addressDos,misDatos.addressDos)
        cy.escribir(registro.form.city,misDatos.city)
        cy.escribir(registro.form.state,misDatos.state)
        cy.escribir(registro.form.zip,misDatos.zip)
        cy.escribir(registro.form.country,misDatos.country)

       // cy.mi_click(registro.form.buttonFavouriteCategory)
       // cy.mi_click(registro.form.selectorDogs)
        cy.mi_click(registro.form.buttonSaveAccountInformation)

        

    })

})