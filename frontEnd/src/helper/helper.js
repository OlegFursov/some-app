import { Routes } from "../routers/Routers";

export const parseRequestURL = () =>{ 
     const request = {resorse : location.hash.replace(/[^a-zA-Z]/g, '')};
     return request;
}


export const addClassToField = (element, errorStyle) =>{
     element.classList.add(`${errorStyle}`);
}

export const removeClassToField = (element, errorStyle) =>{
     element.classList.remove(`${errorStyle}`);
}

export const addErrorTextToErrorPlace = (errorPlace, textError) => {
     errorPlace.innerText = `${textError}`;
}

export const removeErrorTextToErrorPlace = (errorPlace) =>{
     errorPlace.innerText = '';
}

export const findSameTypeFields = (props) =>{
     return props.filter(input => input.field.type == 'password');
} 

export const addPhoneNumberPatter = (phoneNumber) =>{
     let number = phoneNumber.value.trim().replace(/[^0-9\w]/g, '');
     phoneNumber.value = number.length <= 11 ? 
     `+${number.slice(0,2)} ${number.slice(2,5)} ${number.slice(5,8)} ${number.slice(8,)}`:
     `+${number.slice(0,3)} ${number.slice(3,5)} ${number.slice(5,8)} ${number.slice(8,10)} ${number.slice(10,12)}`;  
}

export const setHash = (hash) =>{
     location.hash = `#/${hash}`
} 

export const getAttributId = (id) =>{
     return +id.replace(/[a-zA-Z\-]/g, '');
} 

export const findItemToList =(id, list) => {
     return list.find(item => item.id === id);
}

export const filterList = (id, list) => {
     return list.filter(item => item.id !== id);
}

export const installText = (text) => {
     return text;
}