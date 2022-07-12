import { validPass, validPage} from "./helpObj.js";
import { getValuePassword } from "./getValueInput.js";

export const checkFormLoginPage = (...argument) => { //* has refactored 
  const [login, password, message, stateLogin, validPage] = argument ;
      if(stateLogin.login =='' ||  stateLogin.password ==''){
        message.innerText = 'Please fill bouth field'
        validPage.validation(login, password);
      } else{
        message.innerText ='';
        validPage.validation(login, password);
      }    
}
  
export const allowSubmitPage = (state) => {//* has refactored 
      state.submit = state.login.length > 0 && state.password.length > 0 
}

export const checkEmailRegistrationPage = (state, email) => { //* has refactored 
    const reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!reg.test(email.value)){
      validPage.validation( email);
      alert('Please fill correct email');
    }
    state.email = email.value
    validPage.validation(email);

}

export const checkPassRegistration = (state ,password_1, password_2) => { 
   return password_1.value !== password_2.value ? 
      validPass.notValidPass(state ,password_1, password_2, message) 
        : validPass.validPass(state ,password_1, password_2,message);
}

export const checkFormRegistration = (state, fullName, login) => {
  validPage.validation(fullName, login);
  state.submit = !! state.login.length && !!state.email.length && 
  !! state.passValid;
}

export const checkPassword = (state, password_1, password_2, message) =>{ 
  const reg = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3}/g;
  if(reg.test(password_1.value) && state.passValid){  
      getValuePassword(state, pass1);
      validPage.validation(password_1, password_2);
      message.innerText = '';
  }else{
      validPage.validation(password_1, password_2);
      message.innerText = `Password must include at at least 8 symbols, big and small characters, symbols`;
            
  }
}

export const checkUserLogin = (checkUSers, USERS, stateLogin) => { //* has refactored 
  if(localStorage.key('User') == null) alert('Please create acaount');
  checkUSers.getUserToServer(USERS, stateLogin);
}

export const checkAdditionalFild = (state, phoneNumber, city) => {
    state.submit = validPage.validNumumberInput(phoneNumber) && validPage.validStringInput(city); 
} 




  