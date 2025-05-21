
import { GenerarMasivoMethods } from "../pages/GeneraMasivos/GeneraMasivos.Methods";
import { ImpreNominillaElements } from "../pages/ImprenominaNominilla/ImpreNominilla.elements";
import { ImpreNominillaMethods } from "../pages/ImprenominaNominilla/ImpreNominilla.Methods";
import { ImpreNominaData } from "../pages/ImpreNominaPage/Imprenomina-page.data";
import { ImpreNominaMethods } from "../pages/ImpreNominaPage/Imprenomina-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(ImpreNominaData.testSuites.GeneracionNominillas, () => {
    it("ImpreNominas: Sistema de Generación de Nominillas Masivo Documento Unico", () => {
      
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio de sesión");
    ImpreNominaMethods.navigateToImpreNomina();
    Logger.subStep("Ingresar un nombre de usuario y contraseña válidos");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
    ImpreNominaMethods.navigateToAutenticarOk();
      
    Logger.stepNumber(2);
    Logger.step("Introducir NIF");
    ImpreNominaMethods.signup(ImpreNominaData.NIFData.nif1);

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Generar Masivo" para Sistema de Generación de Nominillas');
    ImpreNominaMethods.clickOnEnviaMasivo();
    Logger.verification("Verificar que se muestra la página de Sistema de Generación de Nominillas");
    GenerarMasivoMethods.VerCajaNifNie();

    Logger.stepNumber(4);
    Logger.step('Seleccionar Documento a generar Único');
    GenerarMasivoMethods.DocumentoGenerarUnico();
    cy.get('[type="radio"]').check('U');
    Logger.step('Introducir NIFs de prueba');
    GenerarMasivoMethods.TypeOnCajaNifNie();
    Logger.step('Pulsar Botón Generar');
    GenerarMasivoMethods.clickOnGenerar();
    Logger.verification("Verificar que se muestra Nómina Anterior");
    cy.location('pathname').should('contains', 'Imprimir2.asp');

    });

    it("ImpreNominas: Sistema de Generación de Nominillas Masivo Documento Múltiple", () => {
      
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio de sesión");
    ImpreNominaMethods.navigateToImpreNomina();
    Logger.subStep("Ingresar un nombre de usuario y contraseña válidos");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
    ImpreNominaMethods.navigateToAutenticarOk();
      
    Logger.stepNumber(2);
    Logger.step("Introducir NIF");
    ImpreNominaMethods.signup(ImpreNominaData.NIFData.nif1);

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Generar Masivo" para Sistema de Generación de Nominillas');
    ImpreNominaMethods.clickOnEnviaMasivo();
    Logger.verification("Verificar que se muestra la página de Sistema de Generación de Nominillas");
    GenerarMasivoMethods.VerCajaNifNie();

    Logger.stepNumber(4);
    Logger.step('Seleccionar Documento a generar Múltiple');
    GenerarMasivoMethods.DocumentoGenerarMultiple();
    cy.get('[type="radio"]').check('M');
    Logger.step('Introducir NIFs de prueba');
    GenerarMasivoMethods.TypeOnCajaNifNie();
    Logger.step('Pulsar Botón Generar');
    GenerarMasivoMethods.clickOnGenerar();
    Logger.verification("Verificar que los documentos se han generado correctamente");
    cy.location('pathname').should('contains', 'Imprimir3.asp');

    });

    it("ImpreNominas: Sistema de Generación de Nominillas Masivo Datos erróneos", () => {
      
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio de sesión");
    ImpreNominaMethods.navigateToImpreNomina();
    Logger.subStep("Ingresar un nombre de usuario y contraseña válidos");
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
    ImpreNominaMethods.navigateToAutenticarOk();
      
    Logger.stepNumber(2);
    Logger.step("Introducir NIF");
    ImpreNominaMethods.signup(ImpreNominaData.NIFData.nif1);

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Generar Masivo" para Sistema de Generación de Nominillas');
    ImpreNominaMethods.clickOnEnviaMasivo();
    Logger.verification("Verificar que se muestra la página de 	Sistema de Generación de Nominillas");
    GenerarMasivoMethods.VerCajaNifNie();

    Logger.stepNumber(4);
    Logger.step('Seleccionar Documento a generar Múltiple');
    GenerarMasivoMethods.DocumentoGenerarMultiple();
    cy.get('[type="radio"]').check('M');
    Logger.step('Introducir NIFs inexistentes');
    GenerarMasivoMethods.TypeOnCajaNifNieWrong();
    Logger.step('Pulsar Botón Generar');
    GenerarMasivoMethods.clickOnGenerar();
    Logger.verification("Verificar que No existen datos para el periodo especificado.");
    ImpreNominaMethods.verifyDatos();
    

    });
});
