
import { validPass } from "./helpObj.js";

export const getValueLoginPage = (...argument) =>{
     const [stateLogin, inputLogin, inputPass] = argument;
     stateLogin.valueLogin = inputLogin.value.toLowerCase();
     stateLogin.valuePass = inputPass.value; 
    
}

export const getValueRegistrationPage = (...argument) => {
    const  [stateRegistration, fullName, loginName, gender] = argument;
     stateRegistration.fullName = fullName.value.toLowerCase();
     stateRegistration.login = loginName.value.toLowerCase();
     stateRegistration.gender = gender.value;
}

export const getPasswordRegistrationPage = (stateRegistaration, pass1Registration, pass2Registration,message) =>{
     const reg = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3,}/g;
     if(reg.test(pass1Registration.value) && stateRegistaration.passValid){  
          stateRegistaration.password = pass1Registration.value;
            validPass.validPass(stateRegistaration ,pass1Registration, pass2Registration, message);
               
     }else{
          validPass.notValidPass(stateRegistaration ,pass1Registration, pass2Registration, message);
               message.innerText = `Password must include at at least 8 symbols, big and small characters`;       
     }
}

