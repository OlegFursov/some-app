import { Routes } from "../index.js";

export const sendFormLoginPage = (input) => {
     if(input.stateLogin.submit){
          input.checkUserLogin(input.checkUSers, input.USERS, input.stateLogin);
          input.default.defaulLoginForm(input.stateLogin);
     }
}

export const sendFormRegistrationPage = (stateRegistaration, defaultPage, USERS, checkUSers) => {
     if(stateRegistaration.submit){
          checkUSers.addUSersToServer(USERS, stateRegistaration);
          location.hash = `#/${Routes[3].hash}`
     defaultPage.defaultRegistrationForm(stateRegistaration)
     }  
}


