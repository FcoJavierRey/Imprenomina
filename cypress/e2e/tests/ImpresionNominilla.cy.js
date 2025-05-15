
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
    Logger.step("Imprenominas: Navegar a la página de Selección de Personal");
    ImpreNominaMethods.verifySignedUser(LoginData.validCredentials.username);

    Logger.stepNumber(2);
    Logger.step("Introducir NIF");
    ImpreNominaMethods.rellenarNIF(ImpreNominaData.NIFData.nif1);
    
    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Continuar" para Impresión de Nominillas');
    ImpreNominaMethods.clickOnContinuar();
    Logger.verification("Verificar que se muestra la página de Impresión de Nominillas");
    ImpreNominillaMethods.VerRetencionesBoton();
    });

});