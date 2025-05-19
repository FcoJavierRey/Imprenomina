import { ImpreNominillaData } from "./ImpreNominilla.data";
import { ImpreNominillaElements } from "./ImpreNominilla.elements";

export class ImpreNominillaMethods {

  static clickOnVerRetenciones() {
    ImpreNominillaElements.Menu.BotonVerRetenciones.click()
 }

  static VerRetencionesBoton() {
    ImpreNominillaElements.Menu.BotonVerRetenciones.should('exist')
 }

 static clickOnVerNominilla() {
    ImpreNominillaElements.Menu.BotonVerNominilla.click()
 }

  static clickOnVerSeleccionarMes() {
    ImpreNominillaElements.Menu.SeleccionarMes.click()
}

 static get VerPaginaNominillaok(){
      cy.url().should('include', '/imprimir2.asp')
      }
}