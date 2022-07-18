import { Routes } from "../index.js";
import { defaultState } from "../helper/default.js"
import { USERS } from "../helper/constants.js";



export const sendForm ={
     sendFormLoginPage : (USERS, state, message) => {
          if(validationLocalStorage(sendLoginPage.key)){
               checkUSers.getUserToServer(USERS, state, message, sendLoginPage.text);
              
          }
     },
     sendFormRegistrationPage : (state, USERS, props) => {
          if(localStorage.key('User') == null){
               USERS.push(state);
               localStorage.setItem('User', JSON.stringify(USERS));
          }
          USERS = JSON.parse(localStorage.getItem('User'));
          USERS.push(state);
          localStorage.setItem('User', JSON.stringify(USERS));
          location.hash = `#/${Routes[3].hash}`;
          // defaultState.defaultState(props);
     }

}



