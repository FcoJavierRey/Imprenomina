import { ImpreNominaData } from "../ImpreNominaPage/Imprenomina-page.data";
import { GenerarMasivosElements } from "./GeneraMasivos.Elements"

export class GenerarMasivoMethods {

  static DocumentoGenerarUnico() {
    GenerarMasivosElements.Menu.OpcionDocumentoGenerarUnico();
 }

   static DocumentoGenerarMultiple() {
    GenerarMasivosElements.Menu.OpcionDocumentoGenerarMultiple();
 }
  static VerCajaNifNie() {
    GenerarMasivosElements.Menu.IntroducirConjuntoNifNie.should('exist');
 }

  static TypeOnCajaNifNie() {
    GenerarMasivosElements.Menu.IntroducirConjuntoNifNie.type('val', ImpreNominaData.NIFData.nif1);
 }

 static clickOnVolver() {
    GenerarMasivosElements.Buttoms.BotonVolver.click()
 }

  static clickOnGenerar() {
    GenerarMasivosElements.Buttoms.BotonGenerar.click()
}
}