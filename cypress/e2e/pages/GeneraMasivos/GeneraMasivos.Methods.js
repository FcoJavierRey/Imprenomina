import { ImpreNominaData } from "../ImpreNominaPage/Imprenomina-page.data";
import { GenerarMasivosElements } from "./GeneraMasivos.Elements"

export class GenerarMasivoMethods {

  static DocumentoGenerarUnico() {
    GenerarMasivosElements.Menu.OpcionDocumentoGenerarUnico.click();
 }

   static DocumentoGenerarMultiple() {
    GenerarMasivosElements.Menu.OpcionDocumentoGenerarMultiple.click();
 }
  static VerCajaNifNie() {
    GenerarMasivosElements.Menu.IntroducirConjuntoNifNie.should('exist');
 }

  static TypeOnCajaNifNie() {
    GenerarMasivosElements.Menu.IntroducirConjuntoNifNie.invoke("val", ImpreNominaData.NIFData.nif3);
 }

 static TypeOnCajaNifNieWrong() {
    GenerarMasivosElements.Menu.IntroducirConjuntoNifNie.invoke("val", ImpreNominaData.NIFData.nif4);
 }

 static clickOnVolver() {
    GenerarMasivosElements.Buttoms.BotonVolver.click()
 }

  static clickOnGenerar() {
    GenerarMasivosElements.Buttoms.BotonGenerar.click()
}
}