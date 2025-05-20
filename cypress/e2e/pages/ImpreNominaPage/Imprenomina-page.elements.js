export class ImpreNominaElements {
  static get Menu() {
    return {
      get  NifNominilla() {
        return cy.get("input#NifNominilla");
        
      },

      get BotonContinuar(){
        return cy.get('input[value="Continuar"]');
      },
      
      get BotonEnviaMasivo(){
        return cy.get('input[value="Generar masivos"]');
      }
           
    };
  }
  
static get signedUser() {
    return cy.contains('a', 'Inicio');
  }

  static get invalidUser(){
    return cy.contains('p', 'Credenciales inválidas. ');
  }
  
  static get invalidNIF(){
    return cy.contains('p', 'El NIF introducido no es correcto');
  }
}
