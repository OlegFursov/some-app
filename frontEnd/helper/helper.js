export const parseRequestURL = () =>{ 
     const request = {
          resorse : location.hash.replace(/[^a-zA-Z]/g, ''),
     };
     return request;

}

export const showVisualNotifycationField ={
     addClassToField: (element, selector) =>{
           element.classList.add(`${selector}`);
     },
     removeClassToField: (element,selector) =>{
          element.classList.remove(`${selector}`);
     },
     addErrorTextToErrorPlace: (errorPlace, textError) => {
          errorPlace.innerText = `${textError}`;
     },
     removeErrorTextToErrorPlace: (errorPlace) =>{
          errorPlace.innerText = '';
     }
}

export const installState = (state, props) => {
    return props.forEach(element => state[`${element.field.id}`] = element.field.value)
}

export const findSameFields = (props) => {
const obj = props.reduce((obj, e) =>{
     obj[e.field.name] = (obj[e.field.name] || 0) +1;
     return obj
},{})
return Object.keys(obj).find(e => obj[e] >= 2);  
}

export const filterSameInputFromControl = (props, inputName) => {
     return props.filter(e => e.field.name == inputName)
}

export const equalSameInputs = (props, inputName) =>{
     return filterSameInputFromControl(props, inputName).every((e, i, arr) => e.isValid = arr[0].field.value === e.field.value);    
}


export const  showNotifications = (props) => {
     props.forEach(e => e.isValid ?
          showVisualNotifycationField.removeClassToField(e.field, e.selector) : 
           showVisualNotifycationField.addClassToField(e.field, e.selector))
}

export const addPatterPhoneNumber = (phoneNumber) =>{
               let number = phoneNumber.value.trim().replace(/[^0-9\w]/g, '');
               phoneNumber.value = number.length <= 11 ? 
               `+${number.slice(0,2)} ${number.slice(2,5)} ${number.slice(5,8)} ${number.slice(8,)}`:
               `+${number.slice(0,3)} ${number.slice(3,5)} ${number.slice(5,8)} ${number.slice(8,10)} ${number.slice(10,12)}`;  
}

export const showErrorText = (props) => {
     props.forEach(e => e.isValid? 
          showVisualNotifycationField.removeErrorTextToErrorPlace(e.errorPlace) : 
          showVisualNotifycationField.addErrorTextToErrorPlace(e.errorPlace, e.errorText))
}
