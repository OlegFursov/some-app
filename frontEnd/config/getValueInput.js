import { stateLogin, stateRegistration } from "../helper/constants.js";
import { validationIsEmpty, validationCapitalLater, validationOnNecessaryElements } from "./validations.js";

// import { validPage } from "./helpObj.js";

 
const paramLogForm = {
          text: 'Please fill bouth fields',
          selector: 'error',
        
          // function : validationIsEmpty, 
          // action: { valid: validPage.isValid, notValid: validPage.notValid,},
          // message: 'Please fill bouth fields',
          // submit: true, 
     }

const papamRegForm ={
     selector: 'error',
     textIsEmpty: 'Please fill all field',
     textErrorCapitalLetters: 'City must start from Capital letter',
     textErrorNumberInput: 'This is field must contant only number, more then 9 symbol',
     textErrorInvalidPass: 'Pasword must be more then 8 symbol, includes Capital lettes, and symbol',
     textErrorInvalidEmail: 'Please fill correct Email',
     regexPhoneNumber: /^[\d\+][\d\(\)\ -]{9,14}\d$/,
     reqexEmail:  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
     regexPassword: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3}/g,
}



//*----------------------------------------------------------------LoginPage-------------------------------------------------------------------------------------------
export const getValueLoginPage = (login, password, message) =>{
     validationIsEmpty(login, message, paramLogForm.text, paramLogForm.selector);
     validationIsEmpty(password, message, paramLogForm.text, paramLogForm.selector);
     stateLogin.login = login.value.toLowerCase();
     stateLogin.password = password.value; 
}

//*--------------------------------------------------------------Registration form--------------------------------------------------------------------------------------


export const getValueRegistrationPage = (props) => {
     validationIsEmpty(props.login, props.message, papamRegForm.textIsEmpty);
     validationIsEmpty(props.fullName, props.message, papamRegForm.textIsEmpty);
     validationIsEmpty(props.phoneNumber, props.message, papamRegForm.textIsEmpty);
     validationCapitalLater(props.city, props.city.value.slice(0,1), props.message, papamRegForm.textErrorCapitalLetters);
     validationIsEmpty(props.city, props.message, papamRegForm.textIsEmpty);
     validationOnNecessaryElements(props.phoneNumber, props.message, papamRegForm.regexPhoneNumber, papamRegForm.textErrorNumberInput);
     validationOnNecessaryElements(props.email, props.message, papamRegForm.reqexEmail, papamRegForm.textErrorInvalidEmail);
     validationOnNecessaryElements(props.password1, props.message, papamRegForm.regexPassword, papamRegForm.textErrorInvalidPass);
     stateRegistration.fullName = props.fullName.value;
     stateRegistration.login = props.login.value;
     stateRegistration.gender = props.gender.value;
     stateRegistration.email = props.email.value;
     stateRegistration.password = props.password1.value;
     stateRegistration.phoneNumber = props.phoneNumber.value;
     stateRegistration.city = props.city.value;
}



















