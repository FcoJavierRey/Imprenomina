import { ImpreNominaMethods } from "./pages/ImpreNominaPage/Imprenomina-page.methods";
import { LoginData } from "./pages/login/login.data";
import { LoginMethods } from "./pages/login/login.methods";

describe('Imprenomina: Login de usuario', ()=>{
    it('Login de usuario'), ()=>{
            ImpreNominaMethods.navigateToImpreNomina();
                  
            LoginMethods.insertUsername(LoginData.validCredentials.username);
            LoginMethods.insertPassword(LoginData.validCredentials.password);
        
            LoginMethods.clickOnLoginButton();
           
            ImpreNominaMethods.navigateToAutenticarOk();
    }
})