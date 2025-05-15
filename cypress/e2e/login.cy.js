describe('Imprenomina: Login de usuario', ()=>{
    it('Login de usuario'), ()=>{
        cy.visit('https://intranetpre.educacion.org/educacion/certificados/imprenominas/Scripts/login.asp'),
        cy.get('#username').type('ext.freygom'),
        cy.get('#password').type('Fer1123@'),
        cy.get('#boton-login').click(),
        cy.wait(3000), 
        cy.get('.Titular-doc').should('exist')
    }
})