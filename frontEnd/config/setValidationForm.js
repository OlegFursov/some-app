export const allowSubmitForm = (props) =>{
  return !props.fullName.required && !props.login.required && !props.phoneNumber.required && !props.email.required && !props.password1.required && !props.city.required;
}



//!--------------Some sketches----------------------------------

// const fieldPassword = { 
//           text: 'Please fill bouth field',
//           selector: 'error',
       
//           // action: { valid: validPage.isValid, notValid: validPage.notValid, },
//           // message: 'Please fill bouth fields',
//           // submit: true, 
//      }

 //      validationPassword.every(validator)
     // validationLogin.forEach(validator => {
     //      if (!validator.function(login.value)){
     //           validator.action.notValid(login);
     //           message.innerText = validator.message;
     //           return;
     //      }
     //      validator.action.valid(login);
     //      state.login = login.value;
     //      message.innerText = '';
     // });
     // validationPassword.forEach(validator => {
     //      if (!validator.function(password.value)){
     //           validator.action.notValid(password);
     //           message.innerText = validator.message;
     //           return;
     //      }
     //      validator.action.valid(password);
     //      state.password = password.value;
     //      message.innerText = '';
     // });