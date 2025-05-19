
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
    Logger.step("Iniciar sesión en ImpreNomina"); 
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
    
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
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
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
    cy.location('pathname').should('contains', 'Imprimir2.asp');
    });

     it("Impresión de Nominillas Ver Nominilla", () => {

    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio de sesión");
    ImpreNominaMethods.navigateToImpreNomina();
    Logger.subStep("Ingresar un nombre de usuario y contraseña válidos");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
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
    ImpreNominillaMethods.clickOnVerNominilla();
    Logger.verification("Verificar que se muestra la página de Nominilla");
    cy.location('pathname').should('contains', 'imprimir2.asp');
    });

      it("Impresión de Nóminas Anteriores", () => {

    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio de sesión");
    ImpreNominaMethods.navigateToImpreNomina();
    Logger.subStep("Ingresar un nombre de usuario y contraseña válidos");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
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
    Logger.step('Tras seleccionar mes hacer clic en "Nominas Anteriores"');
    ImpreNominillaMethods.clickOnVerSeleccionarMes();
    Logger.verification("Verificar que se muestra la página de Nominilla");
    cy.location('pathname').should('contains', 'opciones.asp');

    Logger.stepNumber(5);
    Logger.step('Seleccionar Nómina Mes Anterior');
    cy.get('input[name="cmdMes"]').first().click();
    Logger.verification("Verificar que se muestra la Nominilla anterior");
    cy.location('pathname').should('contains', 'imprimir2.asp');
    });


});