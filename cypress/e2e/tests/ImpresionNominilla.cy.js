
import { ImpreNominillaElements } from "../pages/ImprenominaNominilla/ImpreNominilla.elements";
import { ImpreNominillaMethods } from "../pages/ImprenominaNominilla/ImpreNominilla.Methods";
import { ImpreNominaData } from "../pages/ImpreNominaPage/Imprenomina-page.data";
import { ImpreNominaMethods } from "../pages/ImpreNominaPage/Imprenomina-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(ImpreNominaData.testSuites.ImpresionNominillas, () => {
     it("Sistema de Generación de Nominillas", () => {

    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio de sesión");
    ImpreNominaMethods.navigateToImpreNomina();
    Logger.subStep("Ingresar un nombre de usuario y contraseña válidos");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);
    Logger.subStep('Hacer clic en "Conectar" para iniciar sesión');    
    LoginMethods.clickOnLoginButton();    

    Logger.subStep("Navegar a la página de intranet");
    ImpreNominaMethods.navigateToAutenticarOk();
    
    Logger.stepNumber(2);
    Logger.step("Introducir NIF");
    ImpreNominaMethods.signup(ImpreNominaData.NIFData.nif1);
    
    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Continuar" para Impresión de Nominillas');
    ImpreNominaMethods.clickOnContinuar();
    Logger.verification("Verificar que se muestra la página de Impresión de Nominillas");
    ImpreNominillaMethods.VerRetencionesBoton();
    });

    it("Impresión de Nominillas Ver Retenciones", () => {

    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio de sesión");
    ImpreNominaMethods.navigateToImpreNomina();
    Logger.subStep("Ingresar un nombre de usuario y contraseña válidos");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);
    Logger.subStep('Hacer clic en "Conectar" para iniciar sesión');    
    LoginMethods.clickOnLoginButton();    

    Logger.subStep("Navegar a la página de intranet");
    ImpreNominaMethods.navigateToAutenticarOk();
    
    Logger.stepNumber(2);
    Logger.step("Introducir NIF");
    ImpreNominaMethods.signup(ImpreNominaData.NIFData.nif1);
    
    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Continuar" para Impresión de Nominillas');
    ImpreNominaMethods.clickOnContinuar();
    Logger.verification("Verificar que se muestra la página de Impresión de Nominillas");
    ImpreNominillaMethods.VerRetencionesBoton();

    Logger.stepNumber(4);
    Logger.step('Hacer clic en "Ver Retenciones"');
    ImpreNominillaMethods.clickOnVerRetenciones();
    Logger.verification("Verificar que se muestra la página de Retenciones");
    cy.url().should('include', 'Imprimir2.asp');
    });

});