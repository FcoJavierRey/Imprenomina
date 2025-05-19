export class ImpreNominillaElements {
  static get Menu() {
    return {
      get  YearCertificadoRetenciones() {
        return cy.get('select#anio').eq(0);
      },

      get BotonVerRetenciones(){
        return cy.get('input[value="Ver Retenciones"]')
      },

       get  YearsAnteriores() {
        return cy.get('select#anio').eq(1);
      },
      
      get BotonVerNominilla(){
        return cy.get('input[name="ultima"]')
      },
     
      get SeleccionarMes(){
       return cy.get('input[value="Seleccionar mes"]')
      },
           
  }

  }
}
