export class GenerarMasivosElements {
  static get Menu() {
    return {
      get  YearPeriodoInicio() {
        return cy.get('select#anyoFinal');
      },

      get MonthPeriodoInicio(){
        return cy.get('select#mesFinal');
      },

       get  YearPeriodoFinal() {
        return cy.get('select#anyoInic');
      },

      get MonthPeriodoFinal(){
        return cy.get('select#anyoInic');
      },
      
      get OpcionDocumentoGenerarUnico(){
        return cy.get('input[name="tipoListado"]').eq(0);
      },
     
       get OpcionDocumentoGenerarMultiple(){
        return cy.get('[type="radio"].tipoListado').check("3");
      },

      get IntroducirConjuntoNifNie(){
       return cy.get('textarea#listaNIF');
      },
         
    };
  }

  static get Buttoms(){
    return{
       get  BotonVolver() {
        return  cy.get('input[value="Volver"]');
      },

      get  BotonGenerar() {
        return  cy.get('input[value="Generar"]');
      },
    }
  }
}
