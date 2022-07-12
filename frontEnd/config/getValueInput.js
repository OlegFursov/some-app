     export const getValueLoginPage = (stateLogin, inputLogin, inputPass) =>{
     stateLogin.login = inputLogin.value.toLowerCase();
     stateLogin.password = inputPass.value; 
}

export const getValueRegistrationPage = (...argument) => {
     const  [stateRegistration, props] = argument;

     stateRegistration.fullName = props.fullName.value.toLowerCase();
     stateRegistration.login = props.login.value.toLowerCase();
     stateRegistration.gender = props.gender.value;
     stateRegistration.phoneNumber = props.phoneNumber.value;
     stateRegistration.city = props.city;
}

export const getValuePassword = (state, password) => ( state.password = password.value) //* has refactored 


export const getAdiitionalField = (state, phoneNumber, city) => { //* has refactored 
     if(state.submit) {
          state.phoneNumber = phoneNumber.value.replace(/[^0-9]/g,'');
          state.city = city.value;
     }
}

