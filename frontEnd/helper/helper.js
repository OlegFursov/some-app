export const parseRequestURL = () =>{ 
     const request = {resorse : location.hash.replace(/[^a-zA-Z]/g, '')};
     return request;
}

export const addClassToField = (element, selector) =>{
     element.classList.add(`${selector}`);
}

export const removeClassToField = (element, selector) =>{
     element.classList.remove(`${selector}`);
}

export const addErrorTextToErrorPlace = (errorPlace, textError) => {
     errorPlace.innerText = `${textError}`;
}

export const removeErrorTextToErrorPlace = (errorPlace) =>{
     errorPlace.innerText = '';
}

export const installState = (state, props) => {
    return props.forEach(element => state[`${element.field.id}`] = element.field.value)
}

export const findSameTypeFields = (props) =>{
     return props.filter(element => element.field.type == 'password');
} 

export const addPhoneNumberPatter = (phoneNumber) =>{
     let number = phoneNumber.value.trim().replace(/[^0-9\w]/g, '');
     phoneNumber.value = number.length <= 11 ? 
     `+${number.slice(0,2)} ${number.slice(2,5)} ${number.slice(5,8)} ${number.slice(8,)}`:
     `+${number.slice(0,3)} ${number.slice(3,5)} ${number.slice(5,8)} ${number.slice(8,10)} ${number.slice(10,12)}`;  
}


