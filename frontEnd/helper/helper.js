import { stateRegistration, USERS } from "./constants.js";
import { sendForm } from "../config/sendForm.js";


export const parseRequestURL = () =>{ 
     const request = {
          resorse : location.hash.replace(/[^a-zA-Z]/g, ''),
     };
     return request;

}



export const installState = (state, props) => {
    return props.forEach(element => state[`${element.field.id}`] = element.field.value)
}


export const sendRequestToServer = (state, props) => {
     const isValid = props.every(element => element.isValid)
     if(isValid){
          installState(state,props);
          // sendForm.sendFormRegistrationPage(stateRegistration, USERS, props);
          
     }
}
