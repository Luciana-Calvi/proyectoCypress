import login from './selectores/login'

describe('Test Web Automation in testing',{testIsolation:false}, () =>{

    var misDatos;

    it('Ingresar a la página', () =>{

        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.fixture('./usser_ok')
            .then(mis_test => {
                misDatos = mis_test;
            })
    })

    it('Completar formulario login datos inválidos', () =>{

        cy.mi_click(login.form.buttonSignIn)

        cy.escribir(login.form.username,misDatos.username)
        cy.escribir(login.form.password,misDatos.password)
        
        cy.mi_click(login.form.buttonLogin)

        cy.asersionFail(login.form.msj)

    })

})