import { stateRegistration, USERS } from "./constants.js";
import { sendForm } from "../config/sendForm.js";


export const parseRequestURL = () =>{ 
     const request = {
          resorse : location.hash.replace(/[^a-zA-Z]/g, ''),
     };
     return request;

}



export const installState = (props) => {
    return props.forEach(element => stateRegistration[`${element.field.id}`] = element.field.value)
}


export const sendRequestToServer = (props) => {
     const isValid = props.every(element => element.isValid)
     if(isValid){
          installState(props);
          sendForm.sendFormRegistrationPage(stateRegistration, USERS, props);
          
     }
}
