
import { ImpreNominillaElements } from "../pages/ImprenominaNominilla/ImpreNominilla.elements";
import { ImpreNominillaMethods } from "../pages/ImprenominaNominilla/ImpreNominilla.Methods";
import { ImpreNominaData } from "../pages/ImpreNominaPage/Imprenomina-page.data";
import { ImpreNominaMethods } from "../pages/ImpreNominaPage/Imprenomina-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(ImpreNominaData.testSuites.autenticacion, () => {
  it("ImpreNominas: Inicio de sesión válido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página Sistema Centralizado de Autenticación");
    ImpreNominaMethods.navigateToImpreNomina();

    Logger.stepNumber(2);
    Logger.step("Ingresar un nombre de usuario y contraseña válidos");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Conectar" para iniciar sesión');
    LoginMethods.clickOnLoginButton();
      
    Logger.stepNumber(4);
    Logger.step("Navegar a la página de inicio");
    ImpreNominaMethods.navigateToAutenticarOk();

   });

  it("ImpreNominas:Inicio de sesión inválido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    ImpreNominaMethods.navigateToImpreNomina();

    Logger.stepNumber(2);
    Logger.step("Ingresar un nombre de usuario y/o contraseña inválidos");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword('contrasenainvalida');

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Conectar" para iniciar sesión');
    LoginMethods.clickOnLoginButton();
    Logger.verification("Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado");
    LoginMethods.verifyWrongPasswordMessage();
  });
 it("ImpreNominas: NIF introducido no es correcto", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio de sesión");
    ImpreNominaMethods.navigateToImpreNomina();
    Logger.step("Iniciar sesión en ImpreNomina"); 
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password);
       Logger.subStep("Navegar a la página de intranet");
    ImpreNominaMethods.navigateToAutenticarOk();
   
    Logger.stepNumber(2);
    Logger.step("Introducir NIF Erróneo");
    ImpreNominaMethods.signup(ImpreNominaData.NIFData.nif4);
    Logger.step('Hacer clic en "Continuar" para Impresión de Nominillas');
    ImpreNominaMethods.clickOnContinuar();
    Logger.verification("Verificar que se muestra un mensaje de error indicando que el NIF no es correcto");
     ImpreNominaMethods.verifyNIF();
  });

});
