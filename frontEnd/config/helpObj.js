import { Routes } from "../index.js";

export const validPage = {
     validation : (...argument) => {  //* has refactored 
          return argument.forEach(e => e.value == ''? e.classList.add('error') : e.classList.remove('error'))
     },
     validNumumberInput: (...argument) => { //* has refactored 
          for(let element of argument){
               if(!/^[\d\+][\d\(\)\ -]{9,14}\d$/.test(element.value.trim().replace(/[^0-9\w]/g, ''))) {
                    element.classList.add('error');
                    alert('your phone number is wrong, put correct phone number only number' );
                    return false;
               }else{
                    element.classList.remove('error');
                    return true;
               }
          }
     },
     validStringInput: (...argument) => { //* has refactored 
         for(let string of argument){
               if(/^[A-Z]{0,1}(?:^|\s|-)([a-z]){3,10}/g.test(string.value)){
                   string.classList.add('error');
                   alert('Please fill Your city correcrt, start wlth Upper case letter');
                   return false;
               }else{
                    string.classList.remove('error');
                    return true;   
               }
         }
     }
}



export const validPass = {
     validPass: (state, pass1, pass2) => {
          state.passValid = true;
          pass1.classList.remove('error');
          pass2.classList.remove('error');
          message.innerText ='';

     },
     notValidPass: (state, pass1, pass2, message) => {
          state.passValid = false;
          pass1.classList.add('error');
          pass2.classList.add('error');
          message.innerText = `Password doesn't match`;
         
     }

}

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
     addUSersToServer : (USERS, stateRegistaration) => {
          if(localStorage.key('User') == null) {
               USERS.push(stateRegistaration);
               localStorage.setItem('User', JSON.stringify(USERS));  
          }else{
               USERS = JSON.parse(localStorage.getItem('User'));
               USERS.push(stateRegistaration);
               localStorage.setItem('User', JSON.stringify(USERS));
          }
     },
     getUserToServer: (USERS, state) => {
          USERS = JSON.parse(localStorage.getItem('User'));
          USERS.find(e =>  e.login == state.login && e.password == state.password) 
               ? location.hash =`#${Routes[3].hash}` : alert('Please create acaount');
     }
}