import { Routes } from "../index.js";
import { validationLocalStorage } from "./validations.js";
import { checkUSers, defaultPage } from "./helpObj.js";



const sendLoginPage = {
     key: 'User',
     text: 'Please create profile'
}

const sendRegPage ={
     
}

export const sendFormLoginPage = (USERS, state, message) => {
     if(validationLocalStorage(sendLoginPage.key)){
          checkUSers.getUserToServer(USERS, state, message, sendLoginPage.text);
          defaultPage.defaulLoginForm(state);
     }
  
}

export const sendFormRegistrationPage = (state, USERS) => {
     checkUSers.addUSersToServer(USERS, state);
     location.hash = `#/${Routes[3].hash}`;
     defaultPage.defaultRegistrationForm(state);
}


