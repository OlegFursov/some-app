import { Routes } from "../index.js";

export const defaultPage ={
     defaulLoginForm: (stateLogin)=>{
          stateLogin.login = '';
          stateLogin.password = '';
          stateLogin.submit = false;
          
     },
     defaultRegistrationForm: (stateRegistaration) => {
          stateRegistaration.fullName = 'Full name';
          stateRegistaration.login = 'Login';
          stateRegistaration.gender = 'With out.png';
          stateRegistaration.email = '';
          stateRegistaration.password ='';
          stateRegistaration.phoneNumber = '';
          stateRegistaration.city = '';
          stateRegistaration.submit = false;
          stateRegistaration.passValid = false;

     }
}

export const checkUSers ={
     addUSersToServer : (USERS, state) => {
          if(localStorage.key('User') == null) {
               USERS.push(state);
               localStorage.setItem('User', JSON.stringify(USERS)); 
          }else{
               USERS = JSON.parse(localStorage.getItem('User'));
               USERS.push(state);
               localStorage.setItem('User', JSON.stringify(USERS));
          }
     },
     getUserToServer: (USERS, state, message, text) => {
          USERS = JSON.parse(localStorage.getItem('User'));
          USERS.find(e =>  e.login == state.login && e.password == state.password) 
               ? location.hash =`#${Routes[3].hash}` : message.innerText = text;
     }
}


export const showNotifications ={
     isError: (field, message, text, selector) => {
          field.classList.add(selector);
          return message.innerText = `${text}`;
          
     },
     notError: (field, message, selector)  =>{
          field.required = false;
          message.innerText ='';
          field.classList.remove(selector);
     }
}