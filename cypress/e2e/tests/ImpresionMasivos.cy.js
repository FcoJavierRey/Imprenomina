
import { GenerarMasivoMethods } from "../pages/GeneraMasivos/GeneraMasivos.Methods";
import { ImpreNominillaElements } from "../pages/ImprenominaNominilla/ImpreNominilla.elements";
import { ImpreNominillaMethods } from "../pages/ImprenominaNominilla/ImpreNominilla.Methods";
import { ImpreNominaData } from "../pages/ImpreNominaPage/Imprenomina-page.data";
import { ImpreNominaMethods } from "../pages/ImpreNominaPage/Imprenomina-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(ImpreNominaData.testSuites.GeneracionNominillas, () => {
    it("ImpreNominas: Sistema de Generación de Nominillas Masivo", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de Selección de Personal");
    ImpreNominaMethods.verifySignedUser(LoginData.validCredentials.username);

    Logger.stepNumber(2);
    Logger.step("Introducir NIF");
    ImpreNominaMethods.rellenarNIF(ImpreNominaData.NIFData.nif1);
    
    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Generar Masivo" para Sistema de Generación de Nominillas');
    ImpreNominaMethods.clickOnEnviaMasivo();
    Logger.verification("Verificar que se muestra la página de 	Sistema de Generación de Nominillas");
    GenerarMasivoMethods.VerCajaNifNie();
    });
});
