import { ImpreNomina, ImpreNominaData} from "./Imprenomina-page.data";
import { ImpreNominaElements } from "./Imprenomina-page.elements";

export class ImpreNominaMethods {
  static navigateToImpreNomina() {
    cy.clearAllCookies();
    cy.clearLocalStorage()
    cy.visit(ImpreNominaData.url);
 }

static navigateToAutenticarOk() {
    cy.visit(ImpreNominaData.url);
 } 

  static clickOnContinuar() {
    ImpreNominaElements.Menu.BotonContinuar.click();
  }

  static clickOnEnviaMasivo() {
    ImpreNominaElements.Menu.BotonEnviaMasivo.click();
  }

   static rellenarNIF(NifNominilla) {
    ImpreNominaElements.Menu.NifNominilla.invoke("val", NifNominilla);
  }
 static signup(NifNominilla) {
    this.rellenarNIF(NifNominilla);
  }
  
  static verifySignedUser(username) {
    ImpreNominaElements.signedUser.should('exist');
  }  

  static verifyAlert() {
    ImpreNominaElements.invalidUser.should('exist');
    
  }

  static verifyNIF() {
    ImpreNominaElements.invalidNIF.should('exist');
    
  }

  static generateRandomString(length = 10) {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

}
