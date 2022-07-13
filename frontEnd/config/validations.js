
import { showNotifications } from "./helpObj.js";

export const validationIsEmpty = (field, message, text, selector = 'error') => {
     
     // return ! value.length ? true : message.innerText = text;
     return !field.value.length ? 
          showNotifications.isError(field, message, text, selector):
          showNotifications.notError(field, message, selector)
}

export const validationCapitalLater = (field, value, message, text, selector = 'error') => {
     return value.includes(value.toUpperCase()) ? showNotifications.notError(field, message, selector):
          showNotifications.isError(field, message, text, selector);
           
}

export const validationOnNecessaryElements = (field , message, regex, text, selector = 'error') => {  
     return !regex.test(field.value) ? 
          showNotifications.isError(field, message, text, selector):
          showNotifications.notError(field, message, selector);
          
}


export const validationLength = (value, length) => {
     return value.length === length;
}

export const validationEqualityValue = (fieldFirst, fieldSecond, message, text =` Passwords doesn't match`, selector = 'error') => {
     if(fieldFirst.value !== fieldSecond.value ) {
          showNotifications.isError(fieldFirst, message, text, selector);
          showNotifications.isError(fieldSecond, message, text, selector);
     }else{
          showNotifications.notError(fieldFirst, message, selector);
          showNotifications.notError(fieldSecond, message, selector);
     }
     
}

export const validationLocalStorage = (key) => {
     return localStorage.key(key) === key;
}